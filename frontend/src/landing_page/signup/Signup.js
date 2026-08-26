import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
    // State variables
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [step, setStep] = useState(1); // Step 1: Email dalna, Step 2: OTP verify karna
    const navigate = useNavigate();

    // Jab user "Get OTP" par click karega
    const handleSendOTP = async (e) => {
        e.preventDefault();
        try {
            // Backend ko OTP bhejne ka request (Aapko backend par /send-otp route banana hoga)
            await axios.post("https://zerodha-clone-ab3x.onrender.com/verify-otp", { email });
            alert("OTP sent to your email!");
            setStep(2); // UI ko badal kar OTP wale input par le jao
        } catch (error) {
            alert("Failed to send OTP. Please try again.");
        }
    };

    // Jab user OTP daal kar "Verify" par click karega
    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        try {
            // Backend se response receive karna
            const response = await axios.post(" https://zerodha-clone-ab3x.onrender.com/verify-otp", { email, otp });
            
            // 1. Token ko browser ke Local Storage mein save karna
            localStorage.setItem("token", response.data.token);
            
            alert("Login Successful!");
            
            // 2. User ko seedha Dashboard par bhej dena
            // (Agar aapka dashboard alag React app / port 3001 par chal raha hai toh ye line use karein)
            window.location.href = "https://zerodha-clone-vipv.vercel.app"; 
            
            // YA agar dashboard same app mein hai toh: navigate("/dashboard");
            
        } catch (error) {
            alert("Invalid OTP! Please try again.");
        }
    };

    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row align-items-center justify-content-center'>
                
                {/* Left Side: Aapki Console aur Kite wali Image */}
                <div className='col-6 text-center'>
                    <img src='/media/images/account_open.svg' alt="Signup" style={{ width: "90%" }} />
                </div>
                
                {/* Right Side: Form */}
                <div className='col-5 ps-5'>
                    <h1 className='fs-3 my-3'>Login or Signup</h1>
                    <p className='text-muted mb-4'>Or track your existing application</p>
                    
                    {/* Yahan Condition Lagayi Hai: Agar Step 1 hai toh Email form, nahi toh OTP form */}
                    {step === 1 ? (
                        <form onSubmit={handleSendOTP}>
                            <h2 className='fs-5 mb-3'>Email Address</h2>
                            <input 
                                type='email' 
                                className='form-control form-control-lg w-75 mb-4' 
                                placeholder='Enter your email address'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit" className='btn btn-primary px-5 py-2 fw-bold fs-5'>
                                Get OTP
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={handleVerifyOTP}>
                            <h2 className='fs-5 mb-3 text-success'>OTP Sent to {email}</h2>
                            <input 
                                type='text' 
                                className='form-control form-control-lg w-75 mb-4' 
                                placeholder='Enter 6-digit OTP'
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                required
                                maxLength="6"
                            />
                            <button type="submit" className='btn btn-success px-5 py-2 fw-bold fs-5'>
                                Verify & Continue
                            </button>
                        </form>
                    )}
                    
                    <p className='text-muted my-4' style={{ fontSize: "12px", width:"75%" }}>
                        By proceeding, you agree to the Zerodha <a href='#' className='text-decoration-none'>terms</a> & <a href='#' className='text-decoration-none'>privacy policy</a>
                    </p>
                    
                    <hr className='w-75'></hr>
                    <p className='text-muted my-4' style={{ fontSize: "12px" }}>
                        Looking to open NRI account? <a href='#' className='text-decoration-none'>Click here</a>
                    </p>
                </div>
            </div>
        </div>
     );
}

export default Signup;