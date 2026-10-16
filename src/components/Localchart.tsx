/*Local chart for page 2 of the project used to learn chart.js before working on page 1 of the Dashboard*/

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
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 0,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Sales pipeline by agent",
      color: "#000", 
        font: {
      size: 18,           
      weight: "bold" as const,     
    }
       
    },
  },
  scales: {
    x: {
      stacked: true,
      grid: { display: false }, 
       
       
    },
    y: {
      stacked: true,
      grid: { display: false }, 
    },
  },
};


const labels = ["Catherine Dereve", "Zara Khan", "Sebastian Muller", "Emily Johnson", "Emma Chen", "Isabella Rossi", "Oliver Kim","Daniel Garcia","Amelia Wilson","Clint East"];

export const data = {
  labels,
  datasets: [
    {
      label: "Lost", 
      data: [33, 34, 30, 30, 28, 35, 32, 26, 24, 30],
      backgroundColor: "rgba(0, 103, 182, 1)",
    },
    {
      label: "Won", 
      data: [10, 3, 3, 4, 6, 7, 4, 3, 6, 5],
      backgroundColor: "rgba(53, 178, 242, 1)",
    },

    {
      label: "Contact", 
      data: [110, 60, 100, 40, 150, 200, 90, 150, 180, 250],
      backgroundColor: "rgba(86, 40, 162, 1)",
    },

    {
      label: "Interview", 
      data: [25, 20, 17, 18, 21, 21, 20, 20, 15, 24],
      backgroundColor: "rgba(126, 154, 175, 1)",
    },

    {
      label: "Lead In", 
      data: [37, 39, 39, 45, 31, 34, 40, 36, 43, 36],
      backgroundColor: "rgba(250, 126, 124, 1)",
    },

    {
      label: "Negotiation", 
      data: [5, 7, 14, 6, 5, 7, 7, 5, 4, 4],
      backgroundColor: "rgba(105, 200, 134, 1)",
    },

     {
      label: "Proposal", 
      data: [17, 17, 12, 21, 19, 14, 11, 13, 14, 3],
      backgroundColor: "rgba(4, 157, 188, 1)",
    },
  ],
};


export default function Charthoriz() {
  return <Bar options={options} data={data} />;
}
