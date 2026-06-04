import React from "react";

const Hero = () => {
  return (
    <div className="container p-3">
      <div className="row  justify-content-center text-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <img
            src="media/images/homeHeroOg.svg"
            alt="hero"
            className="mb-5 img-fluid"
            style={{ maxWidth: "90%" }}
          />
          <h1 className="mt-5">Invest in everything</h1>
          <p className="fs-5 mb-5 text-muted">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <button className="btn btn-primary px-4 py-2 m-auto fs-5">
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
