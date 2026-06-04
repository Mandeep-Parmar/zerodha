import React from "react";

const Pricing = () => {
  return (
    <div className="container py-5">
      <div className="row  align-items-center">
        {/* Left content */}
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 px-lg-5">
          <h3 className="mb-5 mt-1">Unbeatable pricing</h3>

          <p className="mb-4 text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a href="#" className="text-decoration-none">
            See Pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* Free Space */}
        <div className="col-lg-2"></div>

        {/* Right content */}
        <div className="col-lg-6 col-md-12 text-center">
          <div className="row g-0 border rounded overflow-hidden">
            <div className="col p-4 border">
              <h1 className="mb-3">₹0</h1>
              <p className="mb-0 text-muted">
                Free equity delivery and <br /> direct mutual funds
              </p>
            </div>

            <div className="col p-4 border">
              <h1 className="mb-3">₹20</h1>
              <p className="mb-0 text-muted">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
