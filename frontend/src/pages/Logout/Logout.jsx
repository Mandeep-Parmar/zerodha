import React, { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    // Clear all user credentials from frontend localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect to login page
    window.location.href = "/login";
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Logging out...</span>
        </div>
        <p className="mt-3 text-muted">Logging out of Kite...</p>
      </div>
    </div>
  );
};

export default Logout;
