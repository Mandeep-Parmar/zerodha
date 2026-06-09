import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-card">
        <div className="notfound-icon-wrapper">
          <i className="fa-solid fa-compass notfound-icon"></i>
        </div>
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">Page Not Found</h2>
        <p className="notfound-text">
          We couldn't find the page you are looking for. It might have been moved, deleted, or never existed in the first place.
        </p>
        <Link to="/" className="notfound-btn">
          <i className="fa-solid fa-house"></i> Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
