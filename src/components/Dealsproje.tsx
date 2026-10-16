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

export default function Linechdeal() {
  const [chartdata, setChartdata] = useState(null);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/antoineftz/dashboarddata/main/chartdata2.json")
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
            text: "Deals projection (future 12 months)",
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
