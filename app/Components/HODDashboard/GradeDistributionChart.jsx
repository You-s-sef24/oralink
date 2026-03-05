"use client";

import { useEffect, useState, useMemo } from "react";
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

export default function GradeDistributionChart() {
  const [distribution, setDistribution] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDistribution = async () => {
      try {
        const res = await axios.get(
          "https://oralink.runasp.net/api/students/grade-distribution",
        );

        setDistribution({
          "90-100": res.data.count90to100 ?? 0,
          "80-89": res.data.count80to89 ?? 0,
          "70-79": res.data.count70to79 ?? 0,
          "60-69": res.data.count60to69 ?? 0,
          "0-59": res.data.count0to59 ?? 0,
        });
      } catch (error) {
        console.error("Error fetching grade distribution:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDistribution();
  }, []);

  const data = useMemo(() => {
    if (!distribution) return null;

    return {
      labels: Object.keys(distribution),
      datasets: [
        {
          label: "Number of Files",
          data: Object.values(distribution),
          backgroundColor: [
            "#4caf50",
            "#2196f3",
            "#ff9800",
            "#ff5722",
            "#f44336",
          ],
          borderRadius: 6,
        },
      ],
    };
  }, [distribution]);

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `${context.raw} files`,
        },
      },
    },
    scales: {
      y: { beginAtZero: true, ticks: { stepSize: 1 } },
    },
  };

  if (loading) {
    return (
      <div className="bg-white shadow rounded p-4 text-center">Loading...</div>
    );
  }

  if (!distribution) {
    return (
      <div className="bg-white shadow rounded p-4 text-center text-danger">
        Failed to load data.
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded p-4">
      <h5 className="text-center mb-3">Grade Distribution</h5>
      <Bar data={data} options={options} />
    </div>
  );
}
