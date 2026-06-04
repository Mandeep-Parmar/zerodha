// implement 404 not found page
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center my-5">
      <h1 className="display-1">404</h1>
      <p className="fs-3">Oops! Page not found.</p>
      <p className="lead">
        The page you are looking for does not exist. It might have been moved or
        deleted.
      </p>
      <Link to="/" className="btn btn-primary mt-3">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
