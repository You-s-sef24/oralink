// "use client";

// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Tooltip,
//     Legend
// } from "chart.js";
// import { Bar } from "react-chartjs-2";
// import { useContext, useMemo } from "react";
// import { UsersContext } from "../../Contexts/UsersContext";

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Tooltip,
//     Legend
// );

// export default function FilesPerDepartmentChart() {
//     const { stats } = useContext(UsersContext);

//     const chartData = useMemo(() => {
//         const safeData = stats.filesPerDepartment || {};

//         return {
//             labels: Object.keys(safeData),
//             datasets: [
//                 {
//                     label: "Files",
//                     data: Object.values(safeData),
//                     backgroundColor: "#0d6efd",
//                     borderRadius: 6
//                 }
//             ]
//         };
//     }, [stats]);

//     if (!stats.filesPerDepartment || Object.keys(stats.filesPerDepartment).length === 0) {
//         return (
//             <div className="text-center text-muted">
//                 No files submitted yet
//             </div>
//         );
//     }

//     return (
//         <div className="bg-white border shadow rounded p-3">
//             <h5 className="mb-3 text-center">Files per Department</h5>
//             <Bar data={chartData} />
//         </div>
//     );
// }
