import React, { useContext, useEffect, useState } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Topbar from "./components/TopBar";
import Summary from "./pages/Summary";
import Orders from "./pages/Orders";
import Holdings from "./pages/Holdings";
import Positions from "./pages/Positions";
import Funds from "./pages/Funds";
import WatchList from "./components/WatchList";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import Logout from "./pages/Logout";
import NotFound from "./pages/NotFound";

import { GeneralContext } from "./context/GeneralContext";
import BuyActionWindow from "./components/BuyActionWindow";

const App = () => {
  const { isBuyWindowOpen, selectedStockUID } = useContext(GeneralContext);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  // used to show loading screen while checking auth
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const checkAuth = async () => {
      // STEP 1: Check if token is coming from URL (after login redirect)
      const queryParams = new URLSearchParams(window.location.search);
      const queryToken = queryParams.get("token");

      let activeToken = token;

      if (queryToken) {
        // Save token in localStorage (so it persists after refresh)
        localStorage.setItem("token", queryToken);
        setToken(queryToken);
        activeToken = queryToken;

        // IMPORTANT: remove token from URL (security)
        window.history.replaceState({}, document.title, "/");
      }

      // STEP 2: If no token at all → redirect to login
      if (!activeToken) {
        redirectToLogin();
        return;
      }

      try {
        // Attach token to every API request
        axios.defaults.headers.common["token"] = activeToken;

        // STEP 3: Verify token with backend
        const res = await axios.get(`${backendUrl}/api/users/profile`);

        if (res.data.success) {
          // Token is valid → allow app
          setIsCheckingAuth(false);
        } else {
          // Token is invalid or expired
          localStorage.clear();
          setToken("");
          redirectToLogin();
        }
      } catch (error) {
        console.error("Token verification failed:", error);

        // Invalid token → clear everything
        localStorage.clear();
        setToken("");
        redirectToLogin();
      }
    };

    checkAuth();
  }, [token]);

  // Redirect helper
  const redirectToLogin = () => {
    const frontendUrl =
      import.meta.env.VITE_FRONTEND_URL || "http://localhost:5173";
    const dashboardUrl =
      import.meta.env.VITE_DASHBOARD_URL || "http://localhost:5174";

    // Send user to login with redirect back to dashboard
    window.location.href = `${frontendUrl}/login?redirect=${dashboardUrl}`;
  };

  // Show loading UI while checking authentication
  if (isCheckingAuth) {
    return (
      <div className="loaderContainer">
        <div className="spinner"></div>
        <p className="text">Checking authentication...</p>
      </div>
    );
  }

  return (
    <>
      <ToastContainer />
      <Topbar />

      <div className="dashboard-container">
        {!isMobile && <WatchList />}

        <div className="content">
          <Routes>
            <Route path="/" element={<Summary />} />
            {isMobile && <Route path="/watchlist" element={<WatchList />} />}
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            {/* this is only call when frontend logout occur  */}
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      </div>

      {isMobile && (
        <div className="bottom-nav">
          <NavLink
            to="/watchlist"
            className={({ isActive }) =>
              isActive ? "bottom-nav-item active" : "bottom-nav-item"
            }
          >
            <i className="fa-solid fa-list-ul"></i>
            <span>Watchlist</span>
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "bottom-nav-item active" : "bottom-nav-item"
            }
          >
            <i className="fa-solid fa-chart-pie"></i>
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive ? "bottom-nav-item active" : "bottom-nav-item"
            }
          >
            <i className="fa-solid fa-book"></i>
            <span>Orders</span>
          </NavLink>
          <NavLink
            to="/holdings"
            className={({ isActive }) =>
              isActive ? "bottom-nav-item active" : "bottom-nav-item"
            }
          >
            <i className="fa-solid fa-briefcase"></i>
            <span>Holdings</span>
          </NavLink>
          <NavLink
            to="/positions"
            className={({ isActive }) =>
              isActive ? "bottom-nav-item active" : "bottom-nav-item"
            }
          >
            <i className="fa-solid fa-chart-line"></i>
            <span>Positions</span>
          </NavLink>
          <NavLink
            to="/funds"
            className={({ isActive }) =>
              isActive ? "bottom-nav-item active" : "bottom-nav-item"
            }
          >
            <i className="fa-solid fa-wallet"></i>
            <span>Funds</span>
          </NavLink>
        </div>
      )}
    </>
  );
};

export default App;
