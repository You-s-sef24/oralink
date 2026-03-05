"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function TopStudents() {
  const [topStudents, setTopStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopStudents = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          "https://oralink.runasp.net/api/students/top-5",
        );

        const formatted = response.data.map((student) => ({
          name: student.name,
          avgGrade: Number(student.averageGrade) || 0,
          totalFiles: Number(student.totalFiles) || 0,
        }));

        setTopStudents(formatted);
      } catch (error) {
        console.error("Error fetching top students:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopStudents();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-4">
        <div className="spinner-border text-success"></div>
      </div>
    );
  }

  if (!topStudents || topStudents.length === 0) {
    return (
      <div className="text-center text-muted mt-3">
        No student data available.
      </div>
    );
  }

  return (
    <div className="shadow border rounded bg-white p-4">
      <div className="h4 text-success d-flex justify-content-between align-items-center fw-bold mb-3">
        Top Students
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M18.29 9.29 15 12.58l-4.29-4.29a.996.996 0 0 0-1.41 0l-7 7 1.41 1.41L10 10.41l4.29 4.29c.39.39 1.02.39 1.41 0l4-4 2.29 2.29v-6h-6l2.29 2.29Z"></path>
        </svg>
      </div>
      <div className="table-responsive">
        <table className="table table-hover align-middle text-center mb-0">
          <thead className="table-light">
            <tr>
              <th scope="col">#</th>
              <th className="text-truncate" scope="col">
                Student Name
              </th>
              <th scope="col">Average Grade</th>
              <th scope="col">Total Files</th>
            </tr>
          </thead>
          <tbody>
            {topStudents.map((student, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td className="text-truncate">{student.name}</td>
                <td>{student.avgGrade.toFixed(2)}/100</td>
                <td>{student.totalFiles}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
