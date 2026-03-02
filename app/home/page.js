"use client";

import { useContext } from "react";
import { UsersContext } from "../Contexts/UsersContext";
import "./home.css";
import Header from "../Components/General/Header";
import Loading from "../loading";
import StudentHome from "../Components/Student/StudentHome";
import SupervisorHome from "../Components/Supervisor/SupervisorHome";
import HodHome from "../Components/HOD/HodHome";
import AdminDashboard from "../Components/Admin/AdminDashboard";
import DoctorHome from "../Components/Doctor/DoctorHome";
import ProtectedRoute from "../Components/General/ProtectedRoute";

export default function HomePage() {
    const { currentUser } = useContext(UsersContext);

    return (
        <ProtectedRoute>
            <div className="container-fluid">

                <Header
                    title={`${currentUser?.role} Dashboard`}
                    desc={
                        currentUser?.role === "Student"
                            ? `Welcome back, ${currentUser?.name}`
                            : `Welcome back, Dr. ${currentUser?.name}`
                    }
                    page={currentUser?.role === "Admin" ? "Admin" : ""}
                />

                <hr className="m-0" />

                {currentUser?.role === "Student" && <StudentHome />}
                {currentUser?.role === "Supervisor" && <SupervisorHome />}
                {currentUser?.role === "Head of Department" && <HodHome />}
                {currentUser?.role === "Doctor" && <DoctorHome />}
                {currentUser?.role === "Admin" && <AdminDashboard />}

            </div>
        </ProtectedRoute>
    );
}