import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler, // for area fill
);

const AnalyticsChart = ({ stock }) => {
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  let base = stock.price;

  const prices = labels.map(() => {
    base += faker.number.int({ min: -8, max: 8 }); // smoother movement
    return base;
  });

  // 🔥 Decide color based on trend
  const isUp = prices[prices.length - 1] >= prices[0];

  const data = {
    labels,
    datasets: [
      {
        label: stock.name,
        data: prices,
        borderColor: isUp ? "#2ecc71" : "#e74c3c", // green/red
        backgroundColor: isUp
          ? "rgba(46, 204, 113, 0.15)"
          : "rgba(231, 76, 60, 0.15)",
        fill: true, // 🔥 area graph
        tension: 0.4, // smooth curve
        pointRadius: 0, // remove dots
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    interaction: {
      mode: "index",
      intersect: false,
    },

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        backgroundColor: "#111",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 10,
        displayColors: false,
        callbacks: {
          label: (ctx) => `₹ ${ctx.raw}`,
        },
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#888",
        },
      },
      y: {
        grid: {
          color: "#eee",
        },
        ticks: {
          color: "#888",
        },
      },
    },

    //  Smooth animation
    animation: {
      duration: 1200,
      easing: "easeInOutCubic",
    },
  };

  return (
    <div style={{ height: "300px", width: "100%" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default AnalyticsChart;
