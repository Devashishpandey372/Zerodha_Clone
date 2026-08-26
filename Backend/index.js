// Es line se env ki value system process me chali jayegi
require('dotenv').config();

// Express aur baaki packages ko require kar rhe hai 
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer"); // NAYA: Nodemailer import kiya

const { HoldingsModel } = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");

const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt"); // AB ISKI ZAROORAT NAHI HAI (OTP use kar rahe hain)

const authMiddleware = require("./authMiddleware");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

// App ko create kar rhe hai 
const app = express();

app.use(cors());
app.use(bodyParser.json());

// ==========================================
// 📧 EMAIL OTP AUTHENTICATION SETUP
// ==========================================

// Testing ke liye OTP memory mein save kar rahe hain
const otpStorage = {}; 

// Aakhri aur sabse pakka fix: Port 587 + Forcing IPv4
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // Port 587 ke liye false
  requireTLS: true,
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS  
  },
  family: 4 // YE LINE SABSE ZAROORI HAI (IPv6 block karne ke liye)
});

// 1. SEND OTP API
app.post('/send-otp', async (req, res) => {
    try {
        const { email } = req.body;
        
        // 6-digit random OTP generate kar rahe hain
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        
        // OTP ko email ke sath save kar liya
        otpStorage[email] = otp; 

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Zerodha Clone - Login/Signup OTP',
            text: `Welcome to Zerodha Clone! Your verification OTP is: ${otp}. Please do not share this with anyone.`
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "OTP sent successfully!" });
    } catch (error) {
        console.error("Error sending email: ", error);
        res.status(500).json({ message: "Failed to send OTP. Check email credentials." });
    }
});

// 2. VERIFY OTP & LOGIN/SIGNUP API
app.post('/verify-otp', async (req, res) => {
    try {
        const { email, otp } = req.body;
        
        // OTP match check karna
        if (otpStorage[email] && otpStorage[email] === otp) {
            // Verify hone ke baad memory se OTP delete kar do (Security)
            delete otpStorage[email]; 
            
            // Check karein ki user DB mein pehle se hai ya naya hai
            let user = await UserModel.findOne({ email });
            
            // Agar naya user hai toh Database mein Save (Signup) kar do
            if (!user) {
                user = new UserModel({ email });
                await user.save();
            }

            // JWT Token Generate karein
            const token = jwt.sign(
                { id: user._id, email: user.email }, 
                process.env.JWT_SECRET, 
                { expiresIn: "1d" } // Token 1 din ke baad expire hoga
            );

            // Frontend ko token bhej diya
            res.status(200).json({ token: token, message: "Authentication successful!" });
        } else {
            res.status(400).json({ message: "Invalid or expired OTP!" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong during verification." });
    }
});

// ==========================================
// 📈 TRADING & DASHBOARD APIs
// ==========================================

// API endpoints for fetching data
app.get('/allHoldings', async(req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get('/allPositions', async(req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.get('/allOrders', async(req, res) => {
    let allOrders = await OrdersModel.find({});
    res.json(allOrders);
});

// Naya Order Place karne ki API
app.post('/newOrder', authMiddleware, async(req, res) => {
    try {
        let { name, qty, price, mode } = req.body;
        let orderQty = Number(qty);
        let orderPrice = Number(price);

        // 1. Order ko database mein save karein
        let newOrder = new OrdersModel({
            name: name,
            qty: orderQty,
            price: orderPrice,
            mode: mode,
        });
        await newOrder.save();

        // 2. Holdings update karne ka logic
        let holding = await HoldingsModel.findOne({ name: name });

        if (mode === "BUY") {
            if (holding) {
                let oldTotalCost = holding.qty * holding.avg;
                let newTotalCost = orderQty * orderPrice;
                let newTotalQty = holding.qty + orderQty;
                
                let newAvgCost = (oldTotalCost + newTotalCost) / newTotalQty;

                holding.qty = newTotalQty;
                holding.avg = newAvgCost;
                holding.price = orderPrice; 
                
                await holding.save();
            } else {
                let newHolding = new HoldingsModel({
                    name: name,
                    qty: orderQty,
                    avg: orderPrice,
                    price: orderPrice,
                    net: "+0.00%",
                    day: "+0.00%"
                });
                await newHolding.save();
            }
        } 
        else if (mode === "SELL") {
            if (holding) {
                holding.qty -= orderQty; 

                if (holding.qty <= 0) {
                    await HoldingsModel.deleteOne({ name: name });
                } else {
                    await holding.save();
                }
            }
        }

        res.send("Order placed and Holdings updated successfully!");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error placing order");
    }
});

// App ko trigger / run kar rhe hain
app.listen(PORT, () => {
    console.log("App started on port " + PORT);
    
    // DB connect kar rahe hain
    mongoose.connect(url)
        .then(() => console.log("DB started and connected!"))
        .catch((err) => console.log("DB Connection Error: ", err));
});