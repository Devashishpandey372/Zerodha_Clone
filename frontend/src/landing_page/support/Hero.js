import React from "react";

function Hero() {
  return (
    <div style={{ backgroundColor: "#f8f9fa" }} className="pt-4 pb-5 mb-5">
    <div className="container" style={{ maxWidth: "1250px" }}>
      {/* 1. HEADER SECTION */}
      {/* d-flex, justify-content-between aur align-items-center in dono elements ko ek row me, aamne-saamne set karte hain */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        {/* Support Portal ki main heading */}
        <h1 className="fw-medium text-dark mb-1">Support Portal</h1>
        {/* My tickets button. Custom inline style se background color aur text color set kiya hai */}
        <button
          className="btn"
          style={{
            backgroundColor: "#387ed1",
            color: "white",
            padding: "8px 20px",
          }}
        >
          My tickets
        </button>
      </div>
      {/* 2. SEARCH BAR SECTION */}
      {/* mb-5 (margin-bottom) de raha hai taaki search bar aur neeche ke content me gap rahe */}
      <div className="mb-2">
        {/* position-relative zaruri hai taaki hum search icon ko input ke upar position kar sakein */}
        <div className="position-relative">
          {/* Ek normal span/div text banaya hai search icon (magnifying glass) dikhane ke liye */}
          <span 
            className="position-absolute text-muted" 
            style={{ left: "15px", top: "50%", transform: "translateY(-50%)", fontSize: "18px" }}
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
          {/* Main Search Input field. 'form-control' bootstrap ki class hai. */}
          {/* padding-left (pl) zyada rakhi hai (pl-5 style) taaki text icon ke upar overlap na kare */}
          <input 
            type="text" 
            className="form-control form-control-lg border-light shadow-sm" 
            placeholder="Eg: How do I open my account, How do i activate F&O..." 
            style={{ paddingLeft: "45px", backgroundColor: "#fff", border: "1px solid #eee", height:"65px", fontSize:"17px" }}
          />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Hero;
