"use client";

import { useContext, useMemo } from "react";
import { Bar } from "react-chartjs-2";
import { UsersContext } from "../../Contexts/UsersContext";

export default function DepartmentQualityChart() {
    const { stats } = useContext(UsersContext);

    const chartData = useMemo(() => {
        const labels = Object.keys(stats.departmentQuality || {});
        const data = labels.map(
            dep => Number(stats.departmentQuality[dep].avgGrade)
        );

        return {
            labels,
            datasets: [
                {
                    label: "Average Grade",
                    data,
                    backgroundColor: "#0d6efd",
                },
            ],
        };
    }, [stats.departmentQuality]);

    return (
        <div className="bg-white shadow rounded p-4">
            <h5 className="mb-3 text-center">Department Performance</h5>
            <Bar
                data={chartData}
                options={{
                    scales: {
                        y: {
                            min: 0,
                            max: 100,
                        },
                    },
                }}
            />
        </div>
    );
}
