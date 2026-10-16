import { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, DoughnutController);

import { Doughnut } from "react-chartjs-2";

export default function Salespip() {
  
  const [doughnutdata, setDoughnutdata] = useState(null);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/antoineftz/dashboarddata/main/salespipeline.json")
      .then(res => res.json())
      .then(setDoughnutdata)
      .catch(console.error);
  }, []);

  if (!doughnutdata) return <p>Loading...</p>;

  return (
    <Doughnut
      data={doughnutdata}
      width={150}
      height={150}
      options={{
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false   
          },
          title: {
            display: true,
            text: "Sales pipeline",
            color: "#000",
            font: {
              size: 12,
              weight: "bold"
            }
          },
          tooltip: {
            enabled: true    
          }
        }
      }}
    />
  );
}
