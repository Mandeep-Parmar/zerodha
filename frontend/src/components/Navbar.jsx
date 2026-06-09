import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect to dashboard logout route
    window.location.href = "http://localhost:5174/logout";
  };

  const handleGoToDashboard = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      return (window.location.href = "/login");
    }

    const encodedToken = encodeURIComponent(token);

    window.location.href = `http://localhost:5174?token=${encodedToken}`;
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top border-bottom py-2">
      <div className="container py-2 px-lg-5">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src="/media/images/logo.svg" alt="Zerodha Logo" width="140" />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right Side */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Push items to right */}
          <ul className="navbar-nav ms-auto gap-3 align-items-center">
            {/* If token exist (user logged in) then show logout and go to dashboard */}
            {token ? (
              <>
                <li className="nav-item">
                  <button
                    onClick={handleGoToDashboard}
                    className="nav-link btn btn-link text-primary border-0 p-0"
                    style={{ borderRadius: "4px" }}
                  >
                    Go to Dashboard
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link text-danger border-0 p-0"
                    onClick={handleLogout}
                    style={{ background: "none", cursor: "pointer" }}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              // if token doesn't exist then show login and signup
              <>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/signup"
                  >
                    Signup
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
              </>
            )}

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pricing">
                Pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/support">
                Support
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
