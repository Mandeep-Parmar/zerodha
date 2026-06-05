import React from "react";

const Universe = () => {
  return (
    <div className="container p-3">
      <div className="row justify-content-center text-center">
        <h1 className="mt-5 mb-4 fs-3">The Zerodha Universe</h1>
        <p className="mb-5 text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-lg-4 col-md-12 text-center my-4 mb-lg-0 px-lg-5">
          <img
            src="/media/images/zerodhaFundhouse.png"
            alt="zerodhaFundHouse"
            className="mb-3 image-fluid"
            style={{ maxWidth: "60%" }}
          />
          <p className="text-muted product-text mx-5">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-lg-4 col-md-12 text-center my-4 mb-lg-0 px-lg-5">
          <img
            src="/media/images/sensibullLogo.svg"
            alt="sensibull"
            className="mb-3"
            style={{ width: "14rem" }}
          />
          <p className="text-muted product-text mx-5">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-lg-4 col-md-12 text-center my-4 mb-lg-0 px-lg-5">
          <img
            src="/media/images/tijori.svg"
            alt="tijori"
            className="mb-3"
            style={{ maxWidth: "45%" }}
          />
          <p className="text-muted product-text mx-5">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-lg-4 col-md-12 text-center my-4 mb-lg-0 px-lg-5">
          <img
            src="/media/images/streakLogo.png"
            alt="streak"
            className="mb-3 image-fluid"
            style={{ maxWidth: "50%" }}
          />
          <p className="text-muted product-text mx-5">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col-lg-4 col-md-12 text-center my-4 mb-lg-0 px-lg-5">
          <img
            src="/media/images/smallcaseLogo.png"
            alt="smallcase"
            className="mb-3"
          />
          <p className="text-muted product-text mx-5">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-lg-4 col-md-12 text-center my-4 mb-lg-0 px-lg-5">
          <img
            src="/media/images/dittoLogo.png"
            alt="ditto"
            className="mb-3"
            style={{ maxWidth: "40%" }}
          />
          <p className="text-muted product-text mx-5">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>

        <div className="col-lg-8 col-md-10 col-sm-12">
          <button className="btn btn-primary px-4 py-2 mt-5 m-auto fs-5">
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Universe;
