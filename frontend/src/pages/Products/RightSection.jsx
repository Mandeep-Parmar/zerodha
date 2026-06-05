import React from "react";

const RightSection = ({ imgUrl, title, description, linkTitle1 }) => {
  return (
    <div className="container py-4">
      <div className="row align-items-center mt-5">
        {/* Left Content */}
        <div className="col-lg-5 col-md-12">
          <h3 className="mb-4">{title}</h3>
          <p className="mt-4 text-muted">{description}</p>
          <a
            href="#"
            className="text-decoration-none mb-3"
            style={{ marginRight: "1rem" }}
          >
            {linkTitle1} <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div className="col-lg-1"></div>

        {/* Right Image */}
        <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0">
          <img src={imgUrl} className="img-fluid" style={{ maxWidth: "90%" }} />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
