import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GeneralContext } from "../context/GeneralContext";
import "./BuyActionWindow.css";
import axios from "axios";
import { toast } from "react-toastify";

const BuyActionWindow = ({ uid }) => {
  const { handleCloseBuyWindow, orderMode, triggerRefresh } =
    useContext(GeneralContext);

  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(0);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleCancleClick = () => {
    handleCloseBuyWindow();
  };

  const handleBuyClick = async () => {
    try {
      const res = await axios.post(`${backendUrl}/api/orders`, {
        name: uid,
        qty: Number(qty),
        price: Number(price),
        mode: orderMode,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        triggerRefresh();
        handleCloseBuyWindow();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const marginRequired = qty * price;

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
              required
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
              required
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        Margin required ₹
        {marginRequired.toLocaleString("en-IN", {
          minimumFractionDigits: 2,
        })}
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
