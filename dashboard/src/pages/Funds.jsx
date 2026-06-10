import React, { useState, useEffect } from "react";
import axios from "axios";

const Funds = () => {
  const [funds, setFunds] = useState(100000);
  const [usedMargin, setUsedMargin] = useState(0);
  const [userEmail, setUserEmail] = useState("");
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const fetchData = async () => {
    try {
      // Fetch user profile
      const profileRes = await axios.get(`${backendUrl}/api/users/profile`);
      if (profileRes.data.success) {
        const user = profileRes.data.user;
        setUserEmail(user.email);

        // Get user-specific cash balance from localStorage
        const cachedFunds = localStorage.getItem(`funds_${user.email}`);
        if (cachedFunds !== null) {
          setFunds(Number(cachedFunds));
        } else {
          localStorage.setItem(`funds_${user.email}`, "100000");
          setFunds(100000);
        }
      }

      // Fetch holdings to calculate used margin
      const holdingsRes = await axios.get(`${backendUrl}/api/holdings`);
      const totalInvestment = holdingsRes.data.reduce(
        (sum, stock) => sum + stock.qty * stock.avg,
        0,
      );
      setUsedMargin(totalInvestment);
    } catch (error) {
      console.error("Failed to fetch funds data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [backendUrl]);

  const handleAddFunds = () => {
    const amountStr = prompt("Enter the amount of funds to add (₹):");
    if (!amountStr) return;

    const amount = parseFloat(amountStr);
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid positive number.");
      return;
    }

    const updatedFunds = funds + amount;
    setFunds(updatedFunds);
    if (userEmail) {
      localStorage.setItem(`funds_${userEmail}`, updatedFunds.toString());
    }
    alert(
      `₹${amount.toLocaleString("en-IN", { minimumFractionDigits: 2 })} added successfully!`,
    );
  };

  const handleWithdrawFunds = () => {
    const amountStr = prompt("Enter the amount of funds to withdraw (₹):");
    if (!amountStr) return;

    const amount = parseFloat(amountStr);
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid positive number.");
      return;
    }

    if (amount > funds) {
      alert("Insufficient funds for withdrawal.");
      return;
    }

    const updatedFunds = funds - amount;
    setFunds(updatedFunds);
    if (userEmail) {
      localStorage.setItem(`funds_${userEmail}`, updatedFunds.toString());
    }
    alert(
      `₹${amount.toLocaleString("en-IN", { minimumFractionDigits: 2 })} withdrawn successfully!`,
    );
  };

  return (
    <>
      <div
        className="funds"
        style={{
          marginBottom: "30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ margin: 0, color: "#666" }}>
          Instant, zero-cost fund transfers with UPI
        </p>
        <div>
          <button
            className="btn btn-green"
            onClick={handleAddFunds}
            style={{
              border: "none",
              cursor: "pointer",
              marginRight: "10px",
              padding: "10px 20px",
            }}
          >
            Add Funds
          </button>
          <button
            className="btn btn-blue"
            onClick={handleWithdrawFunds}
            style={{ border: "none", cursor: "pointer", padding: "10px 20px" }}
          >
            Withdraw
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col" style={{ flexBasis: "100%" }}>
          <span
            style={{
              borderBottom: "1px solid #f0f0f0",
              paddingBottom: "10px",
              display: "block",
              marginBottom: "20px",
            }}
          >
            <h4 style={{ margin: 0, fontSize: "1.1rem", color: "#2c3e50" }}>
              Equity Funds Summary
            </h4>
          </span>

          <div
            className="table"
            style={{
              border: "1px solid #eef2f5",
              borderRadius: "8px",
              padding: "20px",
              background: "#fff",
            }}
          >
            <div
              className="data"
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "12px 0",
                borderBottom: "1px solid #f5f6f8",
              }}
            >
              <p style={{ margin: 0, color: "#7f8c8d" }}>Available Margin</p>
              <p
                className="imp colored"
                style={{ margin: 0, fontWeight: "600", fontSize: "1.1rem" }}
              >
                ₹{funds.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div
              className="data"
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "12px 0",
                borderBottom: "1px solid #f5f6f8",
              }}
            >
              <p style={{ margin: 0, color: "#7f8c8d" }}>
                Used Margin (Invested in Holdings)
              </p>
              <p className="imp" style={{ margin: 0, fontWeight: "600" }}>
                ₹
                {usedMargin.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
            <div
              className="data"
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "12px 0",
              }}
            >
              <p style={{ margin: 0, color: "#7f8c8d" }}>Available Cash</p>
              <p className="imp" style={{ margin: 0, fontWeight: "600" }}>
                ₹{funds.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
