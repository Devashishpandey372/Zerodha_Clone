import React, { useState } from "react";

function AccountOp() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Ye function click karne par dropdown ko open/close karega
  const toggleDropdown = (boxName) => {
    if (activeDropdown === boxName) {
      setActiveDropdown(null); // Agar wahi box dubara click kiya, toh band kar do
    } else {
      setActiveDropdown(boxName); // Naya box click kiya, toh use open kar do
    }
  };

  return (
    <div className="container mt-5 mb-5" style={{ maxWidth: "1250px" }}>
      <div className="row">
        
        {/* --- LEFT COLUMN (Categories) --- */}
        <div className="col-lg-8 pe-lg-5">
          
          {/* 1. Account Opening Box */}
          <div className="border rounded mb-3">
            <div 
              className="d-flex justify-content-between align-items-center p-3" 
              style={{ cursor: "pointer", backgroundColor: activeDropdown === "account" ? "#f8f9fa" : "#fff" }}
              onClick={() => toggleDropdown("account")}
            >
              <div className="d-flex align-items-center text-dark">
                <span className="me-3 d-flex align-items-center" style={{ color: "#387ed1", fontSize: "18px" }}>
                  ⊕
                </span>
                <span className="fw-medium" style={{ fontSize: "18px", fontWeight: "400" }}>Account Opening</span>
              </div>
              <span className="text-muted d-flex align-items-center" style={{ color: "#387ed1", fontSize: "14px" }}>
                {activeDropdown === "account" ? "▲" : "▼"}
              </span>
            </div>
            {activeDropdown === "account" && (
              <div className="p-3 border-top" style={{ backgroundColor: "#fafafa" }}>
                <ul className="list-unstyled mb-0 ms-4" style={{ fontSize: "15px", lineHeight: "2" }}>
                  <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>Resident individual</a></li>
                  <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>Minor</a></li>
                  <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>Non Resident Indian (NRI)</a></li>
                  <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>Company, Partnership, HUF and LLP</a></li>
                  <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>Glossary</a></li>
                </ul>
              </div>
            )}
          </div>

          {/* 2. Your Zerodha Account Box */}
          <div className="border rounded mb-3">
            <div 
              className="d-flex justify-content-between align-items-center p-3" 
              style={{ cursor: "pointer", backgroundColor: activeDropdown === "zerodha" ? "#f8f9fa" : "#fff" }}
              onClick={() => toggleDropdown("zerodha")}
            >
              <div className="d-flex align-items-center text-dark">
                <span className="me-3 d-flex align-items-center" style={{ color: "#387ed1", fontSize: "18px" }}>
                  <i className="fa-regular fa-circle-user"></i>
                </span>
                <span className="fw-medium"  style={{ fontSize: "18px", fontWeight: "400" }}>Your Zerodha Account</span>
              </div>
              <span className="text-muted d-flex align-items-center" style={{ color: "#387ed1", fontSize: "14px" }}>
                {activeDropdown === "zerodha" ? "▲" : "▼"}
              </span>
            </div>
            {activeDropdown === "zerodha" && (
              <div className="p-3 border-top" style={{ backgroundColor: "#fafafa" }}>
                <ul className="list-unstyled mb-0 ms-4" style={{ fontSize: "15px", lineHeight: "2" }}>
                  <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>Your Profile</a></li>
                  <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>Account Modification</a></li>
                  <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>Client Master Report (CMR) and Depository Participant (DP)</a></li>
                  <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>Nomination</a></li>
                  <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>Transfer and conversion of securities</a></li>
                </ul>
              </div>
            )}
          </div>

          {/* 3. Kite Box */}
          <div className="border rounded mb-3">
            <div 
              className="d-flex justify-content-between align-items-center p-3" 
              style={{ cursor: "pointer", backgroundColor: activeDropdown === "kite" ? "#f8f9fa" : "#fff" }}
              onClick={() => toggleDropdown("kite")}
            >
              <div className="d-flex align-items-center text-dark">
                <span className="me-3 d-flex align-items-center" style={{ color: "#387ed1", fontSize: "18px" }}>
                  <i className="fa-brands fa-xing"></i>
                </span>
                <span className="fw-medium"  style={{ fontSize: "18px", fontWeight: "400" }}>Kite</span>
              </div>
              <span className="text-muted d-flex align-items-center" style={{ color: "#387ed1", fontSize: "14px" }}>
                {activeDropdown === "kite" ? "▲" : "▼"}
              </span>
            </div>
            {activeDropdown === "kite" && (
              <div className="p-3 border-top" style={{ backgroundColor: "#fafafa" }}>
                <ul className="list-unstyled mb-0 ms-4" style={{ fontSize: "15px", lineHeight: "2" }}>
                  <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>IPO</a></li>
                  <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>Trading FAQs</a></li>
                  <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>Margin Trading Facility (MTF) and Margins</a></li>
                  <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>Charts and orders</a></li>
                  <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>Alerts and Nudges</a></li>
                  <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>General</a></li>
                </ul>
              </div>
            )}
          </div>

          {/* 4. Funds Box */}
          <div className="border rounded mb-3">
            <div 
              className="d-flex justify-content-between align-items-center p-3" 
              style={{ cursor: "pointer", backgroundColor: activeDropdown === "funds" ? "#f8f9fa" : "#fff" }}
              onClick={() => toggleDropdown("funds")}
            >
              <div className="d-flex align-items-center text-dark">
                <span className="me-3 d-flex align-items-center" style={{ color: "#387ed1", fontSize: "18px" }}>
                  <i className="fa-solid fa-indian-rupee-sign"></i>
                </span>
                <span className="fw-medium"  style={{ fontSize: "18px", fontWeight: "400" }}>Funds</span>
              </div>
              <span className="text-muted d-flex align-items-center" style={{ color: "#387ed1", fontSize: "14px" }}>
                {activeDropdown === "funds" ? "▲" : "▼"}
              </span>
            </div>
            {activeDropdown === "funds" && (
              <div className="p-3 border-top" style={{ backgroundColor: "#fafafa" }}>
                <ul className="list-unstyled mb-0 ms-4" style={{ fontSize: "15px", lineHeight: "2" }}>
                  <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>Add money</a></li>
                  <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>Withdraw money</a></li>
                  <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>Add bank accounts</a></li>
                  <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>eMandates</a></li>
                  
                </ul>
              </div>
            )}
          </div>

          {/* 5. Console Box */}
          <div className="border rounded mb-3">
            <div 
              className="d-flex justify-content-between align-items-center p-3" 
              style={{ cursor: "pointer", backgroundColor: activeDropdown === "console" ? "#f8f9fa" : "#fff" }}
              onClick={() => toggleDropdown("console")}
            >
              <div className="d-flex align-items-center text-dark">
                <span className="me-3 d-flex align-items-center" style={{ color: "#387ed1", fontSize: "18px" }}>
                  ◎
                </span>
                <span className="fw-medium"  style={{ fontSize: "18px", fontWeight: "400" }}>Console</span>
              </div>
              <span className="text-muted d-flex align-items-center" style={{ color: "#387ed1", fontSize: "14px" }}>
                {activeDropdown === "console" ? "▲" : "▼"}
              </span>
            </div>
            {activeDropdown === "console" && (
              <div className="p-3 border-top" style={{ backgroundColor: "#fafafa" }}>
                <ul className="list-unstyled mb-0 ms-4" style={{ fontSize: "15px", lineHeight: "2" }}>
                  <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>Portfolio</a></li>
                  <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>Corporate actions</a></li>
                  <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>Funds statement</a></li>
                  <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>Reports</a></li>
                  <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>Profile</a></li>
                  <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>Segments</a></li>
                </ul>
              </div>
            )}
          </div>

          {/* 6. Coin Box */}
          <div className="border rounded mb-3">
            <div 
              className="d-flex justify-content-between align-items-center p-3" 
              style={{ cursor: "pointer", backgroundColor: activeDropdown === "coin" ? "#f8f9fa" : "#fff" }}
              onClick={() => toggleDropdown("coin")}
            >
              <div className="d-flex align-items-center text-dark">
                <span className="me-3 d-flex align-items-center" style={{ color: "#387ed1", fontSize: "18px" }}>
                  <i className="fa-solid fa-coins"></i>
                </span>
                <span style={{ fontSize: "18px", fontWeight: "400" }}>Coin</span>
              </div>
              <span className="text-muted d-flex align-items-center" style={{ color: "#387ed1", fontSize: "14px" }}>
                {activeDropdown === "coin" ? "▲" : "▼"}
              </span>
            </div>
            {activeDropdown === "coin" && (
              <div className="p-3 border-top" style={{ backgroundColor: "#fafafa" }}>
                <ul className="list-unstyled mb-0 ms-4" style={{ fontSize: "15px", lineHeight: "2" }}>
                  <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>Mutual funds </a></li>
                  <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>National Pension Scheme (NPS) </a></li>
                  <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}> Fixed Deposit (FD)</a></li>
                  <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>Features on Coin </a></li>
                  <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>Payments and Orders</a></li>
                  <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>General</a></li>
                </ul>
              </div>
            )}
          </div>

        </div>

        {/* --- RIGHT COLUMN (Sidebars/Widgets) --- */}
        <div className="col-lg-4">
          
          {/* A) ANNOUNCEMENT BOX */}
          <div className="p-4 mb-4" style={{ backgroundColor: "#fdf8f4", borderLeft: "4px solid #f68c1e" }}>
            <ul className="mb-0 ps-3" style={{ fontSize: "14px", lineHeight: "1.8" }}>
              <li className="mb-2"><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>Latest Intraday leverages and Square-off timings</a></li>
              <li><a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>Surveillance measure on scrips - August 2026</a></li>
            </ul>
          </div>

          {/* B) QUICK LINKS BOX */}
          <div className="border rounded">
            <div className="bg-light p-3 border-bottom text-dark fw-normal" style={{ fontSize: "15px" }}>Quick links</div>
            <div className="d-flex flex-column" style={{ fontSize: "14px" }}>
              <a href="#" className="text-decoration-none p-3 border-bottom" style={{ color: "#387ed1" }}>1. Track account opening</a>
              <a href="#" className="text-decoration-none p-3 border-bottom" style={{ color: "#387ed1" }}>2. Track segment activation</a>
              <a href="#" className="text-decoration-none p-3 border-bottom" style={{ color: "#387ed1" }}>3. Intraday margins</a>
              <a href="#" className="text-decoration-none p-3 border-bottom" style={{ color: "#387ed1" }}>4. Kite user manual</a>
              <a href="#" className="text-decoration-none p-3 border-0" style={{ color: "#387ed1" }}>5. Learn how to create a ticket</a>
            </div>
          </div>

        </div>
        
      </div>
    </div>
  );
}

export default AccountOp;