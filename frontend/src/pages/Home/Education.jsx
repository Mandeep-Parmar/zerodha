import React from "react";

const Education = () => {
  return (
    <div className="container py-5 mt-5">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0">
          <img
            src="/media/images/education.svg"
            alt="education"
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>

        {/* Right Content */}
        <div className="col-lg-6 col-md-12">
          <h3 className="mt-5 mb-4">Free and open market education</h3>

          <p className="mt-4 text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="text-decoration-none mb-3">
            Varsity <i className="fa-solid fa-arrow-right"></i>
          </a>

          <p className="mt-4 text-muted">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#" className="text-decoration-none mb-3">
            TradingQ&A <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
