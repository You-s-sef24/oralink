// "use client";

// import { useContext, useMemo } from "react";
// import { Bar } from "react-chartjs-2";
// import { UsersContext } from "../../Contexts/UsersContext";

// export default function PassFailChart() {
//     const { stats } = useContext(UsersContext);

//     const chartData = useMemo(() => {
//         const total = stats.passCount + stats.failCount || 1;

//         const passPercent = ((stats.passCount / total) * 100).toFixed(1);
//         const failPercent = ((stats.failCount / total) * 100).toFixed(1);

//         return {
//             labels: ["Passed", "Failed"],
//             datasets: [
//                 {
//                     label: "Percentage (%)",
//                     data: [passPercent, failPercent],
//                     backgroundColor: ["#198754", "#dc3545"],
//                 },
//             ],
//         };
//     }, [stats.passCount, stats.failCount]);

//     return (
//         <div className="bg-white shadow rounded p-4">
//             <h5 className="mb-3 text-center">Pass / Fail Percentage</h5>
//             <Bar
//                 data={chartData}
//                 options={{
//                     scales: {
//                         y: {
//                             min: 0,
//                             max: 100,
//                             ticks: {
//                                 callback: value => `${value}%`,
//                             },
//                         },
//                     },
//                 }}
//             />
//         </div>
//     );
// }
