"use client";

import { useMemo, useState } from "react";
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

export default function PassFailChart() {
  const [stats, setStats] = useState({
    passCount: 8,
    failCount: 2,
  });

  const chartData = useMemo(() => {
    const total = stats.passCount + stats.failCount || 1;

    const passPercent = Number(((stats.passCount / total) * 100).toFixed(1));
    const failPercent = Number(((stats.failCount / total) * 100).toFixed(1));

    return {
      labels: ["Passed", "Failed"],
      datasets: [
        {
          label: "Percentage (%)",
          data: [passPercent, failPercent],
          backgroundColor: ["#198754", "#dc3545"],
        },
      ],
    };
  }, [stats]);

  return (
    <div className="bg-white shadow rounded p-4">
      <h5 className="mb-3 text-center">Pass / Fail Percentage</h5>
      <Bar
        data={chartData}
        options={{
          scales: {
            y: {
              min: 0,
              max: 100,
              ticks: {
                callback: (value) => `${value}%`,
              },
            },
          },
        }}
      />
    </div>
  );
}
