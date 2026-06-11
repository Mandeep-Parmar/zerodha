import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GeneralContext } from "../context/GeneralContext";

const Funds = () => {
  const { refreshTrigger, triggerRefresh } = useContext(GeneralContext);
  const [totalFunds, setTotalFunds] = useState(100000);
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
          setTotalFunds(Number(cachedFunds));
        } else {
          localStorage.setItem(`funds_${user.email}`, "100000");
          setTotalFunds(100000);
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
  }, [backendUrl, refreshTrigger]);

  const handleAddFunds = () => {
    const amountStr = prompt("Enter the amount of funds to add (₹):");
    if (!amountStr) return;

    const amount = parseFloat(amountStr);
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid positive number.");
      return;
    }

    const updatedFunds = totalFunds + amount;
    setTotalFunds(updatedFunds);
    if (userEmail) {
      localStorage.setItem(`funds_${userEmail}`, updatedFunds.toString());
    }
    alert(
      `₹${amount.toLocaleString("en-IN", { minimumFractionDigits: 2 })} added successfully!`,
    );
    triggerRefresh();
  };

  const handleWithdrawFunds = () => {
    const amountStr = prompt("Enter the amount of funds to withdraw (₹):");
    if (!amountStr) return;

    const amount = parseFloat(amountStr);
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid positive number.");
      return;
    }

    if (amount > totalFunds - usedMargin) {
      alert("Insufficient funds for withdrawal.");
      return;
    }

    const updatedFunds = totalFunds - amount;
    setTotalFunds(updatedFunds);
    if (userEmail) {
      localStorage.setItem(`funds_${userEmail}`, updatedFunds.toString());
    }
    alert(
      `₹${amount.toLocaleString("en-IN", { minimumFractionDigits: 2 })} withdrawn successfully!`,
    );
    triggerRefresh();
  };

  const availableMargin = totalFunds - usedMargin;

  return (
    <>
      <div className="funds-container">
        <p className="funds-desc">Instant, zero-cost fund transfers with UPI</p>
        <div className="funds-buttons">
          <button className="btn btn-green btn-action" onClick={handleAddFunds}>
            Add Funds
          </button>
          <button
            className="btn btn-blue btn-action"
            onClick={handleWithdrawFunds}
          >
            Withdraw
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col col-full">
          <span className="funds-title-wrapper">
            <h4 className="funds-title">Equity Funds Summary</h4>
          </span>

          <div className="funds-table">
            <div className="funds-row divider-bottom">
              <p className="funds-label">Available Margin</p>
              <p className="funds-value highlight">
                ₹
                {availableMargin.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
            <div className="funds-row divider-bottom">
              <p className="funds-label">Used Margin (Invested in Holdings)</p>
              <p className="funds-value">
                ₹
                {usedMargin.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
            <div className="funds-row">
              <p className="funds-label">Available Cash</p>
              <p className="funds-value">
                ₹
                {availableMargin.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
