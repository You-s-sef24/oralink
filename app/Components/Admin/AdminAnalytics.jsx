"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function AdminAnalytics() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalStudents: 0,
    totalSupervisors: 0,
    totalDoctors: 0,
    totalHods: 0,
  });

  useEffect(() => {
    let interval;

    const fetchStatistics = async () => {
      try {
        const { data } = await axios.get(
          "https://oralink.runasp.net/api/admin/statistics",
        );

        setStats({
          totalUsers: data.totalUsers || 0,
          totalStudents: data.students || 0,
          totalSupervisors: data.supervisors || 0,
          totalDoctors: data.doctors || 0,
          totalHods: data.hoDs || 0,
        });
      } catch (error) {
        console.error("Failed to fetch statistics:", error);
      }
    };

    fetchStatistics();
    interval = setInterval(fetchStatistics, 5000); // auto update every 5s

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="row g-2">
        <div className="col-12 col-sm-6 col-lg">
          <div className="bg-white rounded shadow action p-3">
            <div className="row d-flex align-items-center justify-content-around">
              <div className="col-9">
                <p className="text-muted">Total Users</p>
                <h2 className="fw-bold">{stats.totalUsers}</h2>
              </div>
              <div className="col-3">
                <span className="rounded p-2 text-white bg-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-users"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg">
          <div className="bg-white rounded shadow action p-3">
            <div className="row d-flex align-items-center justify-content-around">
              <div className="col-9">
                <p className="text-muted">Total Students</p>
                <h2 className="fw-bold">{stats.totalStudents}</h2>
              </div>
              <div className="col-3">
                <span className="rounded p-2 text-white bg-primary pb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2"></rect>
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg">
          <div className="bg-white rounded shadow action p-3">
            <div className="row d-flex align-items-center justify-content-around">
              <div className="col-9">
                <p className="text-muted">Total Supervisors</p>
                <h2 className="fw-bold">{stats.totalSupervisors}</h2>
              </div>
              <div className="col-3">
                <span className="rounded p-2 text-white bg-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-user-check"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <polyline points="16 11 18 13 22 9"></polyline>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg">
          <div className="bg-white rounded shadow action p-3">
            <div className="row d-flex align-items-center justify-content-around">
              <div className="col-9">
                <p className="text-muted">Total Doctors</p>
                <h2 className="fw-bold">{stats.totalDoctors}</h2>
              </div>
              <div className="col-3">
                <span className="rounded p-2 text-white bg-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-stethoscope"
                  >
                    <path d="M11 2v2"></path>
                    <path d="M5 2v2"></path>
                    <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
                    <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
                    <circle cx="20" cy="10" r="2"></circle>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg">
          <div className="bg-white rounded shadow action p-3">
            <div className="row d-flex align-items-center justify-content-around">
              <div className="col-9">
                <p className="text-muted">Total Head of Department</p>
                <h2 className="fw-bold">{stats.totalHods}</h2>
              </div>
              <div className="col-3">
                <span className="rounded p-2 text-white bg-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-briefcase"
                  >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
