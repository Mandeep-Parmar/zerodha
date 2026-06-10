import React, { useContext, useState } from "react";

import { Tooltip, Grow } from "@mui/material";
import { BarChartOutlined } from "@mui/icons-material";

import { GeneralContext } from "../context/GeneralContext";
import AnalyticsChart from "./AnalyticsChart";

const WatchListActions = ({ uid, stock }) => {
  const { handleOpenBuyWindow } = useContext(GeneralContext);

  const [showAnalytics, setShowAnalytics] = useState(false);

  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow>
          <button
            className="buy"
            onClick={() => handleOpenBuyWindow(uid, "BUY")}
          >
            Buy
          </button>
        </Tooltip>

        <Tooltip title="Sell (S)" placement="top" arrow>
          <button
            className="sell"
            onClick={() => handleOpenBuyWindow(uid, "SELL")}
          >
            Sell
          </button>
        </Tooltip>

        <Tooltip title="Analytics (A)" placement="top" arrow>
          <button className="action" onClick={() => setShowAnalytics(true)}>
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>

        {/* MODAL */}
        {showAnalytics && (
          <div
            className="modal-overlay"
            onClick={() => setShowAnalytics(false)}
          >
            <div className="modal" style={{ display: "block" }} onClick={(e) => e.stopPropagation()}>
              <h3>{stock.name} Analytics</h3>
              {/*  GRAPH */}
              <AnalyticsChart stock={stock} key={stock.name} />
              <p>LTP: ₹{stock.price}</p>
              <button
                className="btn-close"
                onClick={() => setShowAnalytics(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </span>
    </span>
  );
};

export default WatchListActions;
