"use client";

import { useContext } from "react";
import { UsersContext } from "../Contexts/UsersContext";
import './dashboard.css';
import Header from "../Components/Header";
import StudentDashboard from "../Components/StudentDashboard";
import SupervisorDashboard from "../Components/SupervisorDashboard";
import Loading from "../loading";

export default function DashboardPage() {
    const { currentUser } = useContext(UsersContext);

    return (
        <div className="container-fluid pt-5">
            <Header title={`${currentUser?.role} Dashboard`} desc={currentUser?.role === "Student" ? `Welcome back, ${currentUser?.email}` : `Welcome back, Dr. ${currentUser?.name}`} />

            <hr className="m-0" />

            {currentUser?.role === "Student" ? (
                <StudentDashboard />
            ) : currentUser?.role === "Supervisor" ? (
                <SupervisorDashboard />
            ) : (
                <Loading />
            )}

        </div>
    );
}