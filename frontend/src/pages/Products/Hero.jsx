import React from "react";

const Hero = () => {
  return (
    <div className="container p-3 border-bottom">
      <div className="row justify-content-center text-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <h1 className="mt-5 mb-4 fs-2">Zerodha Products</h1>
          <h3 className="mb-4 text-muted fs-5">
            Sleek, modern, and intuitive trading platforms
          </h3>
          <p className="mb-4 text-muted">
            Check out our{" "}
            <a href="#" className="text-decoration-none mb-3">
              investment offerings <i className="fa-solid fa-arrow-right"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
