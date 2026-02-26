"use client";

import { useContext, useEffect } from "react";
import { UsersContext } from "../Contexts/UsersContext";
import './home.css';
import Header from "../Components/General/Header";
import Loading from "../loading";
import StudentHome from "../Components/Student/StudentHome";
import SupervisorHome from "../Components/Supervisor/SupervisorHome";
import HodHome from "../Components/HOD/HodHome";
import { useRouter } from "next/navigation";
import AdminDashboard from "../Components/Admin/AdminDashboard";

export default function HomePage() {
    const { currentUser, token, isAuthReady } = useContext(UsersContext);
    const router = useRouter();

    return (
        <div className="container-fluid">
            <Header title={`${currentUser?.role} Dashboard`} desc={currentUser?.role === "Student" ? `Welcome back, ${currentUser?.email}` : `Welcome back, Dr. ${currentUser?.name}`} />

            <hr className="m-0" />

            {currentUser?.role === "Student" ? (
                <StudentHome />
            ) : currentUser?.role === "Supervisor" ? (
                <SupervisorHome />
            ) : currentUser?.role === "Head of department" ? (
                <HodHome />
            ) : currentUser?.role === "Doctor" ? (
                <Loading />
            ) : currentUser?.role === "Admin" ? (
                <AdminDashboard />
            ) : (
                <Loading />
            )}
        </div>
    );
}