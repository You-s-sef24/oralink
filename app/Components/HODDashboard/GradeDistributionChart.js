// "use client";

// import { useContext } from "react";
// import { UsersContext } from "../../Contexts/UsersContext";
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";

// // Register chart elements
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// export default function GradeDistributionChart() {
//     const { stats } = useContext(UsersContext);

//     // use the already calculated gradeDist
//     const distribution = stats.gradeDistribution || {
//         '90-100': 0,
//         '80-89': 0,
//         '70-79': 0,
//         '60-69': 0,
//         '0-59': 0,
//     };

//     const data = {
//         labels: Object.keys(distribution),
//         datasets: [
//             {
//                 label: "Number of Files",
//                 data: Object.values(distribution),
//                 backgroundColor: [
//                     "#4caf50",
//                     "#2196f3",
//                     "#ff9800",
//                     "#ff5722",
//                     "#f44336",
//                 ],
//                 borderRadius: 6,
//             },
//         ],
//     };

//     const options = {
//         responsive: true,
//         plugins: {
//             legend: { display: false },
//             tooltip: {
//                 callbacks: {
//                     label: (context) => `${context.raw} files`,
//                 },
//             },
//         },
//         scales: {
//             y: { beginAtZero: true, ticks: { stepSize: 1 } },
//         },
//     };

//     return (
//         <div className="bg-white shadow rounded p-4">
//             <h5 className="text-center mb-3">Grade Distribution</h5>
//             <Bar data={data} options={options} />
//         </div>
//     );
// }
