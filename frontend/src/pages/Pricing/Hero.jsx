import React from "react";
import PricingCard from "./PricingCard";

const Hero = () => {
  return (
    <div className="container p-3">
      <div className="row text-center py-5 border-bottom mx-lg-5">
        <h1 className="my-3 fs-3">Charges</h1>
        <p className="text-muted mt-1 fs-5">List of all charges and taxes</p>
      </div>

      <div className="row">
        <PricingCard
          img="/media/images/pricingEquity.svg"
          title="Free equity delivery"
          description="All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage."
        />

        <PricingCard
          img="/media/images/intradayTrades.svg"
          title="Intraday and F&O trades"
          description="Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades."
        />

        <PricingCard
          img="/media/images/pricingEquity.svg"
          title="Free direct MF"
          description="All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges."
        />
      </div>
    </div>
  );
};

export default Hero;
