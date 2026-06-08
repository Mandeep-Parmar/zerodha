import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Topbar from "./components/TopBar";
import Summary from "./pages/Summary";
import Orders from "./pages/Orders";
import Holdings from "./pages/Holdings";
import Positions from "./pages/Positions";
import Funds from "./pages/Funds";
import WatchList from "./components/WatchList";

import { GeneralContext } from "./context/GeneralContext";
import BuyActionWindow from "./components/BuyActionWindow";

const App = () => {
  const { isBuyWindowOpen, selectedStockUID } = useContext(GeneralContext);

  return (
    <>
      <Topbar />

      <div className="dashboard-container">
        <WatchList />

        <div className="content">
          <Routes>
            <Route path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
          </Routes>
        </div>

        {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      </div>
    </>
  );
};

export default App;
