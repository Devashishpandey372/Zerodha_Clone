const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    try {
        // Frontend se token aayega header mein
        const token = req.headers.authorization.split(" ")[1];
        
        if (!token) return res.status(401).json({ message: "No token provided!" });

        // Token verify karein
        const decodedData = jwt.verify(token, process.env.JWT_SECRET);
        
        // User ki ID request mein daal dein taaki aage use ho sake
        req.userId = decodedData.id;
        
        next(); // Sab theek hai, aage jaane do (e.g., /newOrder wale code par)
    } catch (error) {
        res.status(401).json({ message: "Unauthorized! Invalid Token." });
    }
};

module.exports = authMiddleware;