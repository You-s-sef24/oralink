"use client";

import { useEffect, useMemo, useState } from "react";
import axios from "axios";
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
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get(
          "https://oralink.runasp.net/api/students/pass-fail",
        );

        setStats({
          passCount: Number(res.data.passPercentage) || 0,
          failCount: Number(res.data.failPercentage) || 0,
        });
      } catch (error) {
        console.error("Error fetching pass/fail stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const chartData = useMemo(() => {
    if (!stats) return null;

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

  if (loading) {
    return (
      <div className="bg-white shadow rounded p-4 text-center">Loading...</div>
    );
  }

  if (!stats) {
    return (
      <div className="bg-white shadow rounded p-4 text-center text-danger">
        Failed to load data.
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded p-4">
      <h5 className="mb-3 text-center">
        Pass: {stats.passCount} | Fail: {stats.failCount}
      </h5>

      <Bar
        data={chartData}
        options={{
          responsive: true,
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
