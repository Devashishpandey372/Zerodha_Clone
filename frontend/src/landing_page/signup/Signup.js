import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

// Automatically detect karega ki local chal raha hai ya Vercel live
const BACKEND_URL = window.location.hostname === "localhost" 
    ? "http://localhost:3002" 
    : "https://zerodha-clone-ab3x.onrender.com";

function Signup() {
    // State variables
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [step, setStep] = useState(1);
    const navigate = useNavigate();

    // Jab user "Get OTP" par click karega
    const handleSendOTP = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${BACKEND_URL}/send-otp`, { email });
            alert("OTP sent to your email!");
            setStep(2); 
        } catch (error) {
            alert("Failed to send OTP. Please try again.");
        }
    };

    // Jab user OTP daal kar "Verify" par click karega
    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BACKEND_URL}/verify-otp`, { email, otp });
            
            localStorage.setItem("token", response.data.token);
            alert("Login Successful!");
            
            window.location.href = "https://zerodha-clone-vipv.vercel.app"; 
        } catch (error) {
            alert("Invalid OTP! Please try again.");
        }
    };

    // Google Login Handler
    const handleGoogleSuccess = async (credentialResponse) => {
        try {
            // Google ID token decode karke user details nikalo
            const decoded = jwtDecode(credentialResponse.credential);
            
            // Backend ko Google user credentials bhejo
            const res = await axios.post(`${BACKEND_URL}/google-auth`, {
                email: decoded.email,
                name: decoded.name,
                googleId: decoded.sub,
                picture: decoded.picture
            });

            if (res.data.token) {
                localStorage.setItem("token", res.data.token);
                alert("Google Sign-In Successful!");
                window.location.href = "https://zerodha-clone-vipv.vercel.app";
            }
        } catch (error) {
            console.error("Google Auth Error:", error);
            alert("Google Sign-In failed. Please try again.");
        }
    };

    const handleGoogleError = () => {
        alert("Google Sign-In was unsuccessful. Try again.");
    };

    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row align-items-center justify-content-center'>
                
                <div className='col-6 text-center'>
                    <img src='/media/images/account_open.svg' alt="Signup" style={{ width: "90%" }} />
                </div>
                
                <div className='col-5 ps-5'>
                    <h1 className='fs-3 my-3'>Login or Signup</h1>
                    <p className='text-muted mb-4'>Or track your existing application</p>
                    
                    {step === 1 ? (
                        <>
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
                                <button type="submit" className='btn btn-primary px-5 py-2 fw-bold fs-5 w-75 mb-3'>
                                    Get OTP
                                </button>
                            </form>

                            {/* Divider */}
                            <div className='d-flex align-items-center w-75 my-3'>
                                <hr className='flex-grow-1' />
                                <span className='mx-2 text-muted fw-bold' style={{ fontSize: "12px" }}>OR</span>
                                <hr className='flex-grow-1' />
                            </div>

                            {/* Google Sign-In Button */}
                            <div className='w-75 mb-4 d-flex justify-content-center'>
                                <GoogleLogin
                                    onSuccess={handleGoogleSuccess}
                                    onError={handleGoogleError}
                                    width="300"
                                    shape="rectangular"
                                />
                            </div>
                        </>
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
                            <button type="submit" className='btn btn-success px-5 py-2 fw-bold fs-5 w-75'>
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