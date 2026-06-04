import React from "react";

const Hero = () => {
  return (
    <div className="container p-3">
      <div className="row text-center py-5 border-bottom mx-lg-5">
        <h1 className="my-5 fs-3">
          We pioneered the discount broking model in India. <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>
      <div className="row align-items-center">
        {/* Left Content */}
        <div
          className="col-lg-6 col-md-12 mb-4 mb-lg-0 px-lg-5 text-muted"
          style={{ fontSize: "1.1rem" }}
        >
          <p className="mt-5 px-lg-5">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>

          <p className="mt-4 px-lg-5">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>

          <p className="mt-4 px-lg-5">
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>

        {/* Right Content */}
        <div
          className="col-lg-6 col-md-12 mb-4 mb-lg-0 px-lg-5 text-muted"
          style={{ fontSize: "1.1rem" }}
        >
          <p className="mt-4 px-lg-5">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p className="mt-4 px-lg-5">
            <a href="#" className="text-decoration-none">
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>

          <p className="mt-4 px-lg-5">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <a href="#" className="text-decoration-none">
              blog
            </a>{" "}
            or see what the media is{" "}
            <a href="#" className="text-decoration-none">
              saying about us
            </a>{" "}
            or learn more about our business and product{" "}
            <a href="#" className="text-decoration-none">
              philosophies
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
