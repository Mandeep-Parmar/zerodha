import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.label}: ₹ ${context.raw}`;
        },
      },
    },
    legend: {
      position: "top",
    },
  },
};

export function DoughnutChart({ data }) {
  return <Doughnut data={data} options={options} />;
}
