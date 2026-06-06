import React from "react";
import TopicColumn from "./TopicColumn";

const CreateTicket = () => {
  return (
    <div className="container py-5 px-lg-5">
      {/* Title */}
      <h4 className="mb-5">To create a ticket, select a relevant topic</h4>

      <div className="row">
        {/* Column 1 */}
        <TopicColumn
          icon="fa-solid fa-plus-circle"
          title="Account Opening"
          links={[
            "Online Account Opening",
            "Offline Account Opening",
            "Company, Partnership and HUF Account Opening",
            "NRI Account Opening",
            "Charges at Zerodha",
            "Zerodha IDFC FIRST Bank 3-in-1 Account",
            "Getting Started",
          ]}
        />

        {/* Column 2 */}
        <TopicColumn
          icon="fa-solid fa-user"
          title="Your Zerodha Account"
          links={[
            "Login Credentials",
            "Account Modification and Segment Addition",
            "DP ID and bank details",
            "Your Profile",
            "Transfer and conversion of shares",
          ]}
        />

        {/* Column 3 */}
        <TopicColumn
          icon="fa-solid fa-chart-column"
          title="Your Zerodha Account"
          links={[
            "Margin/leverage, Product and Order types",
            "Kite Web and Mobile",
            "Trading FAQs",
            "Corporate Actions",
            "Sentinel",
            "Kite API",
            "Pi and other platforms",
            "Stockreports+",
            "GTT",
          ]}
        />

        <TopicColumn
          icon="fa-solid fa-wallet"
          title="Funds"
          links={[
            "Adding Funds",
            "Fund Withdrawal",
            "eMandates",
            "Adding Bank Accounts",
          ]}
        />

        <TopicColumn
          icon="fa-solid fa-circle-notch"
          title="Console"
          links={[
            "Reports",
            "Ledger",
            "Portfolio",
            "60 Day Challenge",
            "IPO",
            "Referral Program",
          ]}
        />

        <TopicColumn
          icon="fa-regular fa-circle"
          title="Coin"
          links={[
            "Understanding Mutual Funds",
            "About Coin",
            "Buying and Selling through Coin",
            "Starting an SIP",
            "Managing your Portfolio",
            "Coin App",
            "Moving to Coin",
            "Government Securities",
          ]}
        />
      </div>
    </div>
  );
};

export default CreateTicket;
