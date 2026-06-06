import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

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
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
