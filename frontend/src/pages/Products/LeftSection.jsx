import React from "react";

const LeftSection = ({
  imgUrl,
  title,
  description,
  linkTitle1,
  linkTitle2,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container py-4">
      <div className="row align-items-center mt-5">
        {/* Left Image */}
        <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0 px-lg-5">
          <img src={imgUrl} className="img-fluid" style={{ maxWidth: "90%" }} />
        </div>

        <div className="col-lg-1"></div>

        {/* Right Content */}
        <div className="col-lg-5 col-md-12 px-lg-5">
          <h3 className="mt-3 mb-4">{title}</h3>
          <p className="mt-4 text-muted">{description}</p>

          <div className="mb-4">
            {linkTitle1 && (
              <a
                href="#"
                className="text-decoration-none mb-3"
                style={{ marginRight: "1rem" }}
              >
                {linkTitle1} <i className="fa-solid fa-arrow-right"></i>
              </a>
            )}

            {linkTitle2 && (
              <a href="#" className="text-decoration-none mb-3">
                {linkTitle2} <i className="fa-solid fa-arrow-right"></i>
              </a>
            )}
          </div>

          <a
            href={googlePlay}
            className="text-decoration-none my-3"
            style={{ marginRight: "1rem" }}
          >
            <img
              src="/media/images/googlePlayBadge.svg"
              alt="Google Play"
              className="img-fluid"
            />
          </a>
          <a href={appStore} className="text-decoration-none mb-3">
            <img
              src="/media/images/appstoreBadge.svg"
              alt="App Store"
              className="img-fluid"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
