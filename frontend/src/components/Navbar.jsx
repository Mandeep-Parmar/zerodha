import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top border-bottom py-2">
      <div className="container py-2 px-lg-5">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src="/media/images/logo.svg" alt="Zerodha Logo" width="140" />
        </a>

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
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Signup
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
