import React from "react";

const Stats = () => {
  return (
    <div className="container py-5">
      <div className="row  align-items-center">
        {/* Left content */}
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 px-lg-5">
          <h2 className="mb-5">Trust with confidence</h2>

          <h4 className="fw-semibold">Customer-first always</h4>
          <p className="mb-4 text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h4 className="fw-semibold">No spam or gimmicks</h4>
          <p className="mb-4 text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>

          <h4 className="fw-semibold">The Zerodha universe</h4>
          <p className="mb-4 text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h4 className="fw-semibold">Do better with money</h4>
          <p className="mb-4 text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        {/* Right image */}
        <div className="col-lg-6 col-md-12 text-center">
          <img
            src="/media/images/ecosystem.png"
            alt="ecosystem"
            className="mb-5 img-fluid mt-4"
            style={{ maxWidth: "90%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
