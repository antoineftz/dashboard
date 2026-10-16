// Replace Linechwon and Linechdeal by one generic component later 

import { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Linechwon() {
  const [chartdata, setChartdata] = useState(null);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/antoineftz/dashboarddata/main/chartdata1.json")
      .then(res => res.json())
      .then(setChartdata)
      .catch(console.error);
  }, []);

  if (!chartdata) return <p>Loading...</p>;

  return (
    <Line
      data={chartdata}
      options={{
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Won deals (last 12 months)",
            color: "#000",
            font: {
              size: 12,
              weight: "bold"
            }
          }
        }
      }}
    />
  );
}
