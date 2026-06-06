import React from "react";

const Brokerage = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-start px-lg-5 mt-5">

        {/* Left Section */}
        <div className="col-lg-8 col-md-12 mb-4">

          <a href="#" className="text-decoration-none px-lg-5 fs-5 fw-medium">
            Brokerage calculator →
          </a>

          <ul className="mt-3 text-muted brokerage-list px-lg-5">
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.
            </li>
            <li>
              Digital contract notes will be sent via e-mail.
            </li>
            <li>
              Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20.
            </li>
          </ul>

        </div>

        {/* Right Section (CTA Card) */}
        <div className="col-lg-4 col-md-12">

          <div className="border rounded p-4 text-center">

            <h5 className="mb-3">Detailed Charges</h5>

            <p className="text-muted mb-3">
              Explore complete breakdown of all brokerage, taxes and fees.
            </p>

            <a href="#" className="btn btn-outline-primary">
              View charges
            </a>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Brokerage;