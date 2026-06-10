import React from "react";
import { useNavigate } from "react-router-dom";

const OpenAccount = () => {
  const navigate = useNavigate();

  return (
    <div className="container p-3">
      <div className="row  justify-content-center text-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <h3 className="mt-5 mb-4">Open a Zerodha account</h3>
          <p className="mb-4 text-muted">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>

          <button
            className="btn btn-primary px-4 py-2 m-auto fs-5"
            onClick={() => navigate("/signup")}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpenAccount;
