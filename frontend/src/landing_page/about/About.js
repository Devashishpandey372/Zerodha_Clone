import React from "react";

function About() {
  return (
    <div className="container">
      <div className="row text-center py-5">
        <h1 className="h3 text-muted">People</h1>
      </div>

      <div className="row pb-5 mb-5">
        <div className="offset-2 col-3 pt-2">
          <img
            style={{ borderRadius: "100%", width: "95%" }}
            src="media\images\nithinKamath.jpg"
          />
          <h1 className=" py-3 text-center" style={{ fontSize: "18px" }}>
            Nithin Kamath
          </h1>
          <h2 className=" text-muted text-center" style={{ fontSize: "16px" }}>
            Founder, CEO
          </h2>
        </div>

        <div
          className="col-5 pt-4 ps-4"
          style={{ lineHeight: "1.8", fontSize: "17px" }}
        >
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>

          <p>
            Connect on{" "}
            <a href="#" className="text-decoration-none">
              Homepage
            </a>{" "}
            /{" "}
            <a href="#" className="text-decoration-none">
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="#" className="text-decoration-none">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
