import React, { useState, useEffect } from "react";
import axios from "axios";

const Summary = () => {
  const [username, setUsername] = useState("User");
  const [holdings, setHoldings] = useState([]);
  const [marginAvailable, setMarginAvailable] = useState(100000);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user profile
        const profileRes = await axios.get(`${backendUrl}/api/users/profile`);
        if (profileRes.data.success) {
          const user = profileRes.data.user;
          setUsername(user.username);

          // Get user-specific cash balance from localStorage
          const cachedFunds = localStorage.getItem(`funds_${user.email}`);
          if (cachedFunds !== null) {
            setMarginAvailable(Number(cachedFunds));
          } else {
            localStorage.setItem(`funds_${user.email}`, "100000");
            setMarginAvailable(100000);
          }
        }

        // Fetch holdings
        const holdingsRes = await axios.get(`${backendUrl}/api/holdings`);
        setHoldings(holdingsRes.data);
      } catch (error) {
        console.error("Failed to fetch summary data:", error);
      }
    };

    fetchData();
  }, [backendUrl]);

  // Calculate metrics
  const totalInvestment = holdings.reduce(
    (sum, stock) => sum + stock.qty * stock.avg,
    0,
  );
  const currentValue = holdings.reduce(
    (sum, stock) => sum + stock.qty * stock.price,
    0,
  );
  const pnl = currentValue - totalInvestment;
  const pnlPercent = totalInvestment > 0 ? (pnl / totalInvestment) * 100 : 0;
  const isProfit = pnl >= 0;

  return (
    <>
      <div className="username">
        <h6>Hi, {username}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>
              ₹
              {marginAvailable.toLocaleString("en-IN", {
                minimumFractionDigits: 2,
              })}
            </h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used{" "}
              <span>
                ₹
                {totalInvestment.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                })}
              </span>
            </p>
            <p>
              Opening balance{" "}
              <span>
                ₹
                {marginAvailable.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                })}
              </span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({holdings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={isProfit ? "profit" : "loss"}>
              ₹{pnl.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
              <small
                className={isProfit ? "profit" : "loss"}
                style={{ marginLeft: "8px" }}
              >
                {isProfit ? "+" : ""}
                {pnlPercent.toFixed(2)}%
              </small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value{" "}
              <span>
                ₹
                {currentValue.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                })}
              </span>
            </p>
            <p>
              Investment{" "}
              <span>
                ₹
                {totalInvestment.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                })}
              </span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
