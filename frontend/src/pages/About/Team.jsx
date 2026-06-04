import React from "react";

const Team = () => {
  return (
    <div className="container p-3">
      <div className="row text-center py-5 mx-lg-5">
        <h1 className="mb-5 fs-3">People</h1>
      </div>

      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 text-muted text-center">
          <img
            src="/media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="img-fluid"
            style={{ borderRadius: "100%", width: "45%" }}
          />
          <h5 className="mt-4">Nithin Kamath</h5>
          <p className="text-muted mt-2">Founder, CEO</p>
        </div>

        {/* Right Content */}
        <div
          className="col-lg-6 col-md-12 mb-4 px-lg-5 text-muted"
          style={{ fontSize: "1.1rem" }}
        >
          <p className="px-lg-5">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry
          </p>

          <p className="mt-4 px-lg-5">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p className="mt-4 px-lg-5">Playing basketball is his zen.</p>

          <p className="mt-4 px-lg-5">
            Connect on{" "}
            <a href="#" className="text-decoration-none">
              Homepage
            </a>{" "}
            /{" "}
            <a href="#" className="text-decoration-none">
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="#" className="text-decoration-none">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
