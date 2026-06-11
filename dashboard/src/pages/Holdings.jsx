import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GeneralContext } from "../context/GeneralContext";
import { VerticalGraph } from "../components/VertialGraph";

const Holdings = () => {
  const { refreshTrigger } = useContext(GeneralContext);
  const [holdings, setHoldings] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

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

  const fetchHoldings = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/holdings`);
      setHoldings(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHoldings();
  }, [refreshTrigger]);

  const labels = holdings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Investment Value",
        data: holdings.map((stock) => stock.qty * stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {holdings.map((stock, index) => {
              const currValue = stock.price * stock.qty;
              const isProfit = currValue - stock.avg * stock.qty >= 0.0;
              const profitClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{currValue.toFixed(2)}</td>
                  <td className={profitClass}>
                    {(currValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profitClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            {totalInvestment.toLocaleString("en-IN", {
              minimumFractionDigits: 2,
            })}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {currentValue.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={isProfit ? "profit" : "loss"}>
            ₹{pnl.toLocaleString("en-IN", { minimumFractionDigits: 2 })}{" "}
            <small>
              ({isProfit ? "+" : ""}
              {pnlPercent.toFixed(2)}%)
            </small>
          </h5>
          <p>P&L</p>
        </div>
      </div>

      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
