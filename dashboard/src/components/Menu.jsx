import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Menu = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [user, setUser] = useState({ username: "User", email: "" });

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/users/profile`);

        if (res.data.success) {
          setUser(res.data.user);
        }
      } catch (error) {
        console.error("Failed to load user profile", error);
      }
    };

    fetchUserProfile();
  }, [backendUrl]);

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect to frontend logout handler
    const frontendUrl =
      import.meta.env.VITE_FRONTEND_URL || "http://localhost:5173";
    window.location.href = `${frontendUrl}/logout`;
  };

  const avatarText = user.username
    ? user.username.substring(0, 2).toUpperCase()
    : "US";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <NavLink
              to={"/"}
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/orders"}
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
            >
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/holdings"}
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
            >
              Holdings
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/positions"}
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
            >
              Positions
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/funds"}
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
            >
              Funds
            </NavLink>
          </li>
        </ul>
        <hr />

        <div className="profile-wrapper">
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">{avatarText}</div>
            <p className="username">{user.username}</p>
          </div>

          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <div className="dropdown-info">
                <p className="dropdown-username">{user.username}</p>
                <p className="dropdown-email">{user.email}</p>
              </div>
              <hr />
              <button className="dropdown-logout-btn" onClick={handleLogout}>
                <i className="fa-solid fa-right-from-bracket"></i> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
