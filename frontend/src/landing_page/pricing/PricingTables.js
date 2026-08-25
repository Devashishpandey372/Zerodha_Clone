import React, { useState } from "react";

function PricingTables() {
  // useState ka use kar rahe hain default tab set karne ke liye (First tab 'equity' hai)
  const [activeTab, setActiveTab] = useState("equity");

  // Tab ki styling dynamically change karne ke liye ek chota function
  const getTabStyle = (tabName) => {
    return {
      cursor: "pointer",
      padding: "10px 30px",
      fontSize: "22px",
      fontWeight: activeTab === tabName ? "500" : "400",
      color: activeTab === tabName ? "#424242" : "#387ed1", // Active pe dark grey, inactive pe blue
      borderBottom: activeTab === tabName ? "2px solid #387ed1" : "none", // Active pe blue line
      marginBottom: "-1px" // Taki border bottom line ke upar perfectly overlap kare
    };
  };

  return (
    <div className="container mt-5" style={{maxWidth:"1130px"}}>
      
      {/* TABS SECTION (Buttons) */}
      <div className="d-flex mb-4" style={{ borderBottom: "1px solid #eee" }}>
        <div 
          style={getTabStyle("equity")} 
          onClick={() => setActiveTab("equity")}
        >
          Equity
        </div>
        <div 
          style={getTabStyle("currency")} 
          onClick={() => setActiveTab("currency")}
        >
          Currency
        </div>
        <div 
          style={getTabStyle("commodity")} 
          onClick={() => setActiveTab("commodity")}
        >
          Commodity
        </div>
      </div>

      {/* TABLE SECTION */}
      
      {/* 1st Table - Default Show Hoga */}
      {activeTab === "equity" && (
        <div className="table-responsive">
          <table className="table text-muted align-middle border" style={{ fontSize: "15px" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #dee2e6" }}>
                <th className="fw-normal py-3"></th>
                <th className="fw-normal py-3">Equity delivery</th>
                <th className="fw-normal py-3">Equity intraday</th>
                <th className="fw-normal py-3">F&O - Futures</th>
                <th className="fw-normal py-3">F&O - Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4">Brokerage</td>
                <td className="py-4">Zero Brokerage</td>
                <td className="py-4">0.03% or Rs. 20/executed order whichever is lower</td>
                <td className="py-4">0.03% or Rs. 20/executed order whichever is lower</td>
                <td className="py-4">Flat Rs. 20 per executed order</td>
              </tr>
              <tr>
                <td className="py-4">STT/CTT</td>
                <td className="py-4">0.1% on buy & sell</td>
                <td className="py-4">0.025% on the sell side</td>
                <td className="py-4">0.05% on the sell side</td>
                <td className="py-4">
                  <ul className="mb-0 ps-3">
                    <li>0.15% of the intrinsic value on options that are bought and exercised</li>
                    <li>0.15% on sell side (on premium)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="py-4">Transaction charges</td>
                <td className="py-4">NSE: 0.00307% <br /> BSE: 0.00375%</td>
                <td className="py-4">NSE: 0.00307% <br/> BSE: 0.00375%</td>
                <td className="py-4">NSE: 0.00183% <br/> BSE: 0</td>
                <td className="py-4">NSE: 0.03553% (on premium) <br/> BSE: 0.0325% (on premium)</td>
              </tr>
              <tr>
                <td className="py-4">GST</td>
                <td className="py-4">18% on (brokerage + SEBI charges + transaction charges)</td>
                <td className="py-4">18% on (brokerage + SEBI charges + transaction charges)</td>
                <td className="py-4">18% on (brokerage + SEBI charges + transaction charges)</td>
                <td className="py-4">18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>
              <tr>
                <td className="py-4">SEBI charges	</td>
                <td className="py-4">₹10 / crore</td>
                <td className="py-4">₹10 / crore</td>
                <td className="py-4">₹10 / crore</td>
                <td className="py-4">₹10 / crore</td>
              </tr>
              <tr>
                <td className="py-4">Stamp charges</td>
                <td className="py-4">0.015% or ₹1500 / crore on buy side</td>
                <td className="py-4">0.003% or ₹300 / crore on buy side</td>
                <td className="py-4">0.002% or ₹200 / crore on buy side</td>
                <td className="py-4">0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* 2nd Table - Click karne par show hoga */}
      {activeTab === "currency" && (
        <div className="table-responsive">
          <table className="table text-muted align-middle border" style={{ fontSize: "15px" }}>
             <thead>
              <tr style={{ borderBottom: "2px solid #dee2e6" }}>
                <th className="fw-normal py-3 "></th>
                <th className="fw-normal py-3 ">Currency futures</th>
                <th className="fw-normal py-3 ">Currency options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4">Brokerage</td>
                <td className="py-4">0.03% or Rs. 20/executed order whichever is lower</td>
                <td className="py-4">Flat Rs. 20 per executed order</td>
              </tr>
              <tr>
                <td className="py-4">STT/CTT</td>
                <td className="py-4">No STT</td>
                <td className="py-4">No STT</td>
              </tr>
              <tr>
                <td className="py-4">Transaction charges</td>
                <td className="py-4">NSE: 0.00035% <br/> BSE: 0.00045%</td>
                <td className="py-4">NSE: 0.0311% <br/> BSE: 0.001%</td>
              </tr>
              <tr>
                <td className="py-4">GST</td>
                <td className="py-4">18% on (brokerage + SEBI charges + transaction charges)</td>
                <td className="py-4">18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>
              <tr>
                <td className="py-4">SEBI charges	</td>
                <td className="py-4">₹10 / crore</td>
                <td className="py-4">₹10 / crore</td>
              </tr>
              <tr>
                <td className="py-4">Stamp charges</td>
                <td className="py-4">0.0001% or ₹10 / crore on buy side</td>
                <td className="py-4">0.0001% or ₹10 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* 3rd Table - Click karne par show hoga */}
      {activeTab === "commodity" && (
        <div className="table-responsive">
          <table className="table  text-muted align-middle border" style={{ fontSize: "15px" }}>
             <thead>
              <tr style={{ borderBottom: "2px solid #dee2e6" }}>
                <th className="fw-normal py-3 "></th>
                <th className="fw-normal py-3 ">Commodity futures</th>
                <th className="fw-normal py-3 ">Commodity options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4">Brokerage</td>
                <td className="py-4">0.03% or Rs. 20/executed order whichever is lower</td>
                <td className="py-4">Flat Rs. 20 per executed order</td>
              </tr>
              <tr>
                <td className="py-4">STT/CTT</td>
                <td className="py-4">0.01% on sell side (Non-Agri)</td>
                <td className="py-4">0.05% on sell side</td>
              </tr>
              <tr>
                <td className="py-4">Transaction charges</td>
                <td className="py-4">MCX: 0.0021% <br/> NSE: 0.0001%</td>
                <td className="py-4">MCX: 0.0418% <br/> NSE: 0.0001%</td>
              </tr>
              <tr>
                <td className="py-4">GST</td>
                <td className="py-4">18% on (brokerage + SEBI charges + transaction charges)</td>
                <td className="py-4">18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>
              <tr>
                <td className="py-4">SEBI charges</td>
                <td className="py-4">Agri: <br/> ₹1 / crore <br/> Non-agri: <br/> ₹10 / crore</td>
                <td className="py-4">₹10 / crore</td>
              </tr>
              <tr>
                <td className="py-4">Stamp charges</td>
                <td className="py-4">0.002% or ₹200 / crore on buy side</td>
                <td className="py-4">0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <p className="text-center fs-5 py-3"><a href="#" className="text-decoration-none">Calculate your costs upfront</a> using our brokerage calculator</p>
    </div>
  );
}

export default PricingTables;