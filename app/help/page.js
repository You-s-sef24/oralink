"use client";

import { useContext } from "react";
import { UsersContext } from "../Contexts/UsersContext";
import StudentHelpPage from "../Components/Student/StudentHelpPage";
import ProtectedRoute from "../Components/General/ProtectedRoute";
import Header from "../Components/General/Header";
import AdminHelpPage from "../Components/Admin/AdminHelpPage";
import SupervisorHelpPage from "../Components/Supervisor/SupervisorHelpPage";
import DoctorHelpPage from "../Components/Doctor/DoctorHelpPage";
import HodHelpPage from "../Components/HOD/HODHelpPage";

export default function HelpPage() {
    const { currentUser } = useContext(UsersContext);
    console.log(currentUser);

    return (
        <ProtectedRoute>
            <div className="container-fluid">
                <Header
                    title={`${currentUser?.role} Help & Guide`}
                    desc={`Everything you need to know about using the system as a ${currentUser?.role}`}
                />

                <hr className="m-0" />

                {currentUser?.role === "Student" && <StudentHelpPage />}
                {currentUser?.role === "Supervisor" && <SupervisorHelpPage/>}
                {currentUser?.role === "Head of Department" && <HodHelpPage/>}
                {currentUser?.role === "Doctor" && <DoctorHelpPage/>}
                {currentUser?.role === "Admin" && <AdminHelpPage />}
            </div>
        </ProtectedRoute>
    );
}