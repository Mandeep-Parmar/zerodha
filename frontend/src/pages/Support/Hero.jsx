import React from "react";

const Hero = () => {
  return (
    <div className="support-hero text-white p-3">
      <div className="container py-5 px-lg-5">
        {/* Top Bar */}
        <div className="d-flex justify-content-between mb-5 px-lg-4">
          <h5>Support Portal</h5>
          <a href="#" className="text-white text-decoration-underline">
            Track Tickets
          </a>
        </div>

        <div className="row align-items-start px-lg-4">
          {/* Left Section */}
          <div className="col-lg-7 col-md-12 mb-4">
            <h4 className="mb-4">
              Search for an answer or browse help topics to create a ticket
            </h4>

            {/* Search Box */}
            <input
              type="text"
              placeholder="Eg: how do i activate F&O, why is my order getting rejected..."
              className="form-control p-3 mb-3"
            />

            {/* Quick Links */}
            <div className="d-flex flex-wrap gap-3 small">
              <a href="#" className="text-white text-decoration-underline">
                Track account opening
              </a>
              <a href="#" className="text-white text-decoration-underline">
                Track segment activation
              </a>
              <a href="#" className="text-white text-decoration-underline">
                Intraday margins
              </a>
              <a href="#" className="text-white text-decoration-underline">
                Kite user manual
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-lg-5 col-md-12 px-lg-5">
            <h5 className="mb-3">Featured</h5>

            <ol className="ps-3 px-lg-4">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-underlin ">
                  Current Takeovers and Delisting – January 2024
                </a>
              </li>

              <li>
                <a href="#" className="text-white text-decoration-underline">
                  Latest Intraday leverages - MIS & CO
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
