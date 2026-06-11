import React, { createContext, useState, useEffect } from "react";

export const GeneralContext = createContext();

const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [orderMode, setOrderMode] = useState("BUY");

  // Change detector switch
  const [refreshTrigger, setRefreshTrigger] = useState(false);

  const handleOpenBuyWindow = (uid, mode) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
    setOrderMode(mode);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const triggerRefresh = () => {
    setRefreshTrigger((prev) => !prev);
  };

  const value = {
    isBuyWindowOpen,
    selectedStockUID,
    orderMode,
    refreshTrigger,
    triggerRefresh,
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
