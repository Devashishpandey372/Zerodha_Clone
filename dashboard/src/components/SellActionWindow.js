import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./ActionWindow.css";

const SellActionWindow = ({ uid, availableQty }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  // 2. Context variable banaya
  const context = useContext(GeneralContext);

  const handleSellClick = () => {
    if (stockQuantity > availableQty) {
        alert(`Insufficient holdings! You only have ${availableQty} shares of ${uid}.`);
        return;
    }

    //1. Storage as token nikalo
    const token = localStorage.getItem("zerodha_token");

    axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "SELL",
    }, {
      // Yahan token bhej rahe hain
      headers: {
        Authorization: `Bearer ${token}` 
      }
    })
    .then((res) => {
      // Agr token sahi hai aur order place ho gaya 
      alert("Sell Order Placed Successfully!");
    })
    .catch((err) => {
      //Agr user login nhi hai ya token expire ho gaya hai 
      alert("Action Failed! Please Login First.");
    });

    // 3. Window close karein (Aapka useContext wala variable)
    context.closeSellWindow();

  };

  const handleCancelClick = () => {
    context.closeSellWindow();
  };

  return (
    <div className="container" id="Sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-red" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
