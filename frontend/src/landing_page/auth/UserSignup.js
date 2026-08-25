import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3002/signup", { email, password });
      alert("Signup Successful! Please Login.");
      navigate("/login"); 
    } catch (error) {
      alert("Signup Failed! User might already exist.");
    }
  };

  return (
    <div style={{ padding: "100px", textAlign: "center", maxWidth: "400px", margin: "0 auto" }}>
      <h2 style={{ marginBottom: "20px" }}>Create an Account</h2>
      <form onSubmit={handleSignup} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input 
          type="email" 
          placeholder="Email Address" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <button type="submit" style={{ padding: "12px", backgroundColor: "#387ed1", color: "white", border: "none", fontSize: "16px", cursor: "pointer" }}>
          Sign Up
        </button>
      </form>
      <p style={{ marginTop: "20px" }}>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  );
};

export default UserSignup;