import React, { useContext } from "react";

import { Tooltip, Grow } from "@mui/material";
import { BarChartOutlined, MoreHoriz } from "@mui/icons-material";

import { GeneralContext } from "../context/GeneralContext";

const WatchListActions = ({ uid }) => {
  const { handleOpenBuyWindow } = useContext(GeneralContext);

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
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>

        <Tooltip title="More (M)" placement="top" arrow>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};

export default WatchListActions;
