import React, { createContext, useState } from "react";

export const GeneralContext = createContext();

const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const value = {
    isBuyWindowOpen,
    selectedStockUID,
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
