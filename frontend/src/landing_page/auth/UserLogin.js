import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/login", { email, password });
      localStorage.setItem("zerodha_token", res.data.token);
      alert("Login Successful!");
      navigate("/"); // Dashboard par le jayega
    } catch (error) {
      alert("Invalid Email or Password!");
    }
  };

  return (
    <div style={{ padding: "100px", textAlign: "center", maxWidth: "400px", margin: "0 auto" }}>
      <h2 style={{ marginBottom: "20px" }}>Login to Zerodha Clone</h2>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
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
          Login
        </button>
      </form>
      <p style={{ marginTop: "20px" }}>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
};

export default UserLogin;