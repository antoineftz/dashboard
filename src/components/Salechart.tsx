import { useEffect, useState } from "react";
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
  Legend
);

export const options = {
  responsive: true,
   maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Sales by agent",
      color: "#000",
      font: {
        size: 12,
        weight: "bold" as const,
      },
    },
  },
  scales: {
    x: {
      grid: { display: false },
    },
    y: {
      grid: { display: false },
    },
  },
};

export default function Saleagent() {
  const [chartdata, setChartdata] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/antoineftz/dashboarddata/main/saleagent.json"
    )
      .then((res) => res.json())
      .then(setChartdata)
      .catch(console.error);
  }, []);

  if (!chartdata) return <p>Loading...</p>;

  return <Bar options={options} data={chartdata} />;
}