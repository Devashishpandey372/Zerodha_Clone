import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#FBFBFB" }}>
      <div
        className=" container border-top mt-5"
        style={{ paddingLeft: "110px", paddingRight: "110px" }}
      >
        <div className="row mt-5">
          <div className="col-3">
            <img
              src="media\images\logo.svg"
              style={{ width: "60%" }}
              alt="logo"
            />
            <p className="text-muted mt-3" style={{ fontSize: "14px" }}>
              © 2010 - 2026, Zerodha Broking Ltd.
              <br></br>
              All rights reserved.
            </p>
            <p className="text-muted fs-5 pb-4 border-bottom">
              <i
                class="fa-brands fa-x-twitter"
              ></i>
              <i
                class="fa-brands fa-square-facebook"
                style={{ marginLeft: "15px" }}
              ></i>{" "}
              <i
                class="fa-brands fa-instagram"
                style={{ marginLeft: "15px" }}
              ></i>{" "}
              <i
                class="fa-brands fa-linkedin-in"
                style={{ marginLeft: "15px" }}
              ></i>
            </p>
            
            <p className="text-muted fs-5 pb-4">
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-whatsapp" style={{ marginLeft: "15px" }}></i>
                <i class="fa-brands fa-telegram" style={{ marginLeft: "15px" }}></i>
            </p>

            <div className="d-flex align-items-center gap-2">
                <img src="media\images\google-play-badge-light.svg " style={{width:"48%"}}/>
                <img src="media\images\appstore-badge-light.svg " style={{width:"48%"}}/>
            </div>
            
          </div>
          <div className="col">
            <p className="fw-medium mb-3">Account</p>
            <a
              href="#"
              className="text-decoration-none text-muted d-block mb-3"
            >
              Open demat account
            </a>

            <a
              href="#"
              className="text-decoration-none text-muted d-block mb-3"
            >
              Minor demat account
            </a>

            <a
              href="#"
              className="text-decoration-none text-muted d-block mb-3"
            >
              NRI demat account
            </a>

            <a
              href="#"
              className="text-decoration-none text-muted d-block mb-3"
            >
              HUF demat account
            </a>

            <a
              href="#"
              className="text-decoration-none text-muted d-block mb-3"
            >
              Commodity
            </a>

            <a
              href="#"
              className="text-decoration-none text-muted d-block mb-3"
            >
              Dematerialisation
            </a>

            <a
              href="#"
              className="text-decoration-none text-muted d-block mb-3"
            >
              Fund transfer
            </a>

            <a
              href="#"
              className="text-decoration-none text-muted d-block mb-3"
            >
              MTF
            </a>
          </div>
          <div className="col">
            <p className="fw-medium mb-3">Support</p>
            <a
              href="#"
              className="text-decoration-none text-muted d-block mb-3"
            >
              Contact us
            </a>
            <a
              href="#"
              className="text-decoration-none text-muted d-block mb-3"
            >
              Support portal
            </a>
            <a
              href="#"
              className="text-decoration-none text-muted d-block mb-3"
            >
              How to file a complaint?
            </a>
            <a
              href="#"
              className="text-decoration-none text-muted d-block mb-3"
            >
              Status of your complaints
            </a>
            <a
              href="#"
              className="text-decoration-none text-muted d-block mb-3"
            >
              Bulletin
            </a>
            <a
              href="#"
              className="text-decoration-none text-muted d-block mb-3"
            >
              Circular
            </a>
            <a
              href="#"
              className="text-decoration-none text-muted d-block mb-3"
            >
              Z-Connect blog
            </a>
            <a
              href="#"
              className="text-decoration-none text-muted d-block mb-3"
            >
              Downloads
            </a>
          </div>
          <div className="col">
            <p className="fw-medium mb-3">Company</p>
            <a
              href="#"
              className="text-decoration-none text-muted d-block mb-3"
            >
              About
            </a>
            <a
              href="#"
              className="text-decoration-none text-muted d-block mb-3"
            >
              Philosophy
            </a>
            <a
              href="#"
              className="text-decoration-none text-muted d-block mb-3"
            >
              Press & media
            </a>
            <a
              href="#"
              className="text-decoration-none text-muted d-block mb-3"
            >
              Careers
            </a>
            <a
              href="#"
              className="text-decoration-none text-muted d-block mb-3"
            >
              Zerodha Cares (CSR)
            </a>
            <a
              href="#"
              className="text-decoration-none text-muted d-block mb-3"
            >
              Zerodha.tech
            </a>
            <a
              href="#"
              className="text-decoration-none text-muted d-block mb-3"
            >
              Open source
            </a>
            <a
              href="#"
              className="text-decoration-none text-muted d-block mb-3"
            >
              Referral program
            </a>
          </div>
          <div className="col">
            <p className="fw-medium mb-3">Quick links</p>
            <a
              href="#"
              className="text-decoration-none text-muted d-block mb-3"
            >
              Upcoming IPOs
            </a>
            <a
              href="#"
              className="text-decoration-none text-muted d-block mb-3"
            >
              Brokerage charges
            </a>
            <a
              href="#"
              className="text-decoration-none text-muted d-block mb-3"
            >
              Market holidays
            </a>
            <a
              href="#"
              className="text-decoration-none text-muted d-block mb-3"
            >
              Economic calendar
            </a>
            <a
              href="#"
              className="text-decoration-none text-muted d-block mb-3"
            >
              Calculators
            </a>
            <a
              href="#"
              className="text-decoration-none text-muted d-block mb-3"
            >
              Markets
            </a>
            <a
              href="#"
              className="text-decoration-none text-muted d-block mb-3"
            >
              Sectors
            </a>
            <a
              href="#"
              className="text-decoration-none text-muted d-block mb-3"
            >
              Gift Nifty
            </a>
          </div>
        </div>

        <p
          className="mt-5 pt-2"
          style={{ color: "#9B9B9B", fontSize: "12.4px" }}
        >
          Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
          Registration no.: INZ000031633 CDSL/NSDL: Depository services through
          Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
          Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars
          Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
          560078, Karnataka, India. For any complaints pertaining to securities
          broking please write to
          <a href="#" className="text-decoration-none">
            {" "}
            complaints@zerodha.com
          </a>
          , for DP related to{" "}
          <a href="#" className="text-decoration-none">
            dp@zerodha.com
          </a>
          . Please ensure you carefully read the Risk Disclosure Document as
          prescribed by SEBI | ICF
          <br></br>
          <br></br>
          Procedure to file a complaint on{" "}
          <a href="#" className="text-decoration-none">
            SEBI SCORES
          </a>
          : Register on SCORES portal. Mandatory details for filing complaints
          on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
          Effective Communication, Speedy redressal of the grievances
          <br></br>
          <br></br>
          <a href="#" className="text-decoration-none">
            Smart Online Dispute Resolution
          </a>{" "}
          |{" "}
          <a href="#" className="text-decoration-none">
            Grievances Redressal Mechanism
          </a>
          <br></br>
          <br></br>
          in securities market are subject to market risks; read all the related
          documents carefully before investing.
          <br></br>
          <br></br>
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
          <br></br>
          <br></br>
          India's largest broker based on networth as per NSE.
          <a href="#" className="text-decoration-none">
            {" "}
            NSE broker factsheet
          </a>
          <br></br>
          <br></br>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers/depository participants.
          Receive information of your transactions directly from
          Exchange/Depositories on your mobile/email at the end of the day.
          Issued in the interest of investors. KYC is one time exercise while
          dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please{" "}
          <a href="#" className="text-decoration-none">
            create a ticket here
          </a>
          .<br></br>
          <br></br>
          *Customers availing insurance advisory services offered by Ditto
          (Tacterial Consulting Private Limited | IRDAI Registered Corporate
          Agent (Composite) License No CA0738) will not have access to the
          exchange investor grievance redressal forum, SEBI SCORES/ODR, or
          arbitration mechanism for such products.
          <br></br>
          <br></br>
          Fixed deposit products offered on this platform are third-party
          products (TPP) and are not Exchange traded products. These are offered
          through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI
          Registration No.: INZ000031633) is acting solely as a distributor for
          these products. Any disputes arising with respect to such distribution
          activity will not have access to SEBI SCORES/ODR, Exchange Investor
          Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits
          are regulated by the Reserve Bank of India (RBI).
        </p>
      </div>
      <div className="container d-flex justify-content-center flex-wrap gap-4 pb-5 pt-2">
        <a href="#" className="text-decoration-none text-muted" style={{ fontSize: "13px" }}>NSE</a> 
        <a href="#" className="text-decoration-none text-muted" style={{ fontSize: "13px" }}>BSE</a> 
        <a href="#" className="text-decoration-none text-muted" style={{ fontSize: "13px" }}>MCX</a> 
        <a href="#" className="text-decoration-none text-muted" style={{ fontSize: "13px" }}>MSEI</a> 
        <a href="#" className="text-decoration-none text-muted" style={{ fontSize: "13px" }}>Terms & conditions</a>
        <a href="#" className="text-decoration-none text-muted" style={{ fontSize: "13px" }}>Policies & procedures</a>
        <a href="#" className="text-decoration-none text-muted" style={{ fontSize: "13px" }}>Privacy policy</a> 
        <a href="#" className="text-decoration-none text-muted" style={{ fontSize: "13px" }}>Disclosure</a> 
        <a href="#" className="text-decoration-none text-muted" style={{ fontSize: "13px" }}>For investor's attention</a> 
        <a href="#" className="text-decoration-none text-muted" style={{ fontSize: "13px" }}>Investor charter</a>
      </div>
    </footer>
  );
}

export default Footer;
