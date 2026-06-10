import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context) {
          return `₹ ${context.raw}`;
        },
      },
    },
    title: {
      display: true,
      text: "Holdings",
    },
    legend: {
      display: false, // cleaner UI (only 1 dataset)
    },
  },
};

export function VerticalGraph({ data }) {
  return <Bar options={options} data={data} />;
}
