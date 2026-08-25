import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom ">
      <div className="container pb-2">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="Logo"
            style={{ width: "36%", paddingLeft:"100px"}}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* ms-auto options ko right me bhejega, aur marginRight usko thoda left dhakelega */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ marginRight: "85px" }}>
            <li className="nav-item active">
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#" style={{fontSize:"20px"}}>
                <i class="fa-solid fa-bars"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;