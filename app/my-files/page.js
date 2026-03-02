"use client";

import { useContext, useEffect } from "react";
import Header from "../Components/General/Header";
import Patients from "../Components/General/Patients";
import { useRouter } from "next/navigation";
import { UsersContext } from "../Contexts/UsersContext";
import ProtectedRoute from "../Components/General/ProtectedRoute";

export default function MyFilesPage() {
    const { token, currentUser } = useContext(UsersContext);
    const router = useRouter();

    return (
        <ProtectedRoute allowedRoles={["Student"]}>
            <div className="container-fluid">
                <Header title={'Search Patient Files'} desc={'Find and view patient records'} />

                <hr className="m-0" />

                <Patients />
            </div>
        </ProtectedRoute>
    );
}