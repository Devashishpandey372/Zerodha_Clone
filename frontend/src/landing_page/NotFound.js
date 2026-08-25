import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container p-5">
      <div className="row pt-5">
        <div className="col-10 offset-2">
          <p style={{ fontSize: "20px" }}>404</p>
          <h2
            className="pt-1 mb-3"
            style={{ color: "#424242", fontSize: "30px" }}
          >
            Kiaan couldn’t find that page
          </h2>
          <p style={{ color: "#666666", fontSize: "18px" }}>
            We couldn’t find the page you were looking for.
          </p>
          <p style={{ color: "#666666", fontSize: "18px" }}>
            Visit{" "}
            <Link className="text-decoration-none" to="/">
              {" "}
              Zerodha’s home page
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
