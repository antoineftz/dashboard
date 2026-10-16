// Replace by one generic component for Doughnut Deallossre and Linechdeal later

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

export default function Deallossre() {
  
  const [doughnutdata, setDoughnutdata] = useState(null);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/antoineftz/dashboarddata/main/deallossrea.json")
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
            text: "Deal loss reasons",
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
