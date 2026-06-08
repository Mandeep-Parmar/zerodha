import React, { createContext, useState } from "react";

export const GeneralContext = createContext();

const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [orderMode, setOrderMode] = useState("BUY");

  const handleOpenBuyWindow = (uid, mode) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
    setOrderMode(mode);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const value = {
    isBuyWindowOpen,
    selectedStockUID,
    orderMode,
    handleCloseBuyWindow,
    handleOpenBuyWindow,
  };

  return (
    <GeneralContext.Provider value={value}>
      {props.children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
