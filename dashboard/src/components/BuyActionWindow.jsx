import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GeneralContext } from "../context/GeneralContext";
import "./BuyActionWindow.css";
import axios from "axios";

const BuyActionWindow = ({ uid }) => {
  const { handleCloseBuyWindow, orderMode } = useContext(GeneralContext);

  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(0);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleCancleClick = () => {
    handleCloseBuyWindow();
  };

  const handleBuyClick = async () => {
    try {
      await axios.post(`${backendUrl}/api/orders`, {
        name: uid,
        qty: Number(qty),
        price: Number(price),
        mode: orderMode,
      });

      alert("Order placed ✅");
      handleCloseBuyWindow();
    } catch (error) {
      console.log(error);
      alert("Order failed ❌");
    }
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setQty(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button
            className={`btn ${orderMode === "BUY" ? "btn-blue" : "btn-red"}`}
            onClick={handleBuyClick}
          >
            {orderMode}
          </button>
          <Link to="" className="btn btn-grey" onClick={handleCancleClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
