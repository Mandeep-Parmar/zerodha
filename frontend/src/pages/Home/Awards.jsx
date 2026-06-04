import React from "react";

const Awards = () => {
  return (
    <div className="container py-5 mt-5">
      <div className="row  align-items-center">

        {/* Left Image */}
        <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0">
          <img
            src="media/images/largestBroker.svg"
            alt="awards"
            className="img-fluid"
          />
        </div>

        {/* Right Content */}
        <div className="col-lg-6 col-md-12">
          <h2 className="mt-5">Largest stock broker in India</h2>

          <p className="fs-5 mb-4 text-muted">
            2+ million zerodha clients to over 15% of all retail order volumes
            in India daily by trading and investing in:
          </p>

          <div className="row mb-4">
            <div className="col-6">
              <ul>
                <li className="py-1">Future Options</li>
                <li className="py-1">Commodities derivatives</li>
                <li className="py-1">Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li className="py-1">Stocks & IPOs</li>
                <li className="py-1">Direct Mutual Funds</li>
                <li className="py-1">Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>

          <img src="media/images/pressLogos.png" alt="press logos" className="mb-5 img-fluid mt-4" />
        </div>
      </div>
    </div>
  );
};

export default Awards;
