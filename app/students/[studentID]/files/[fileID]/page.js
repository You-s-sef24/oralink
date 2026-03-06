"use client";

import Header from "@/app/Components/General/Header";
import ProtectedRoute from "@/app/Components/General/ProtectedRoute";
import { useParams } from "next/navigation";
import DoctorsViewFile from "@/app/Components/Doctor/DoctorViewFile";

export default function File() {
    const params = useParams();
    const fileId = params?.fileId;
    console.log("params", params);
    console.log("id", fileId);

    if (!fileId) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-border text-primary" role="status" />
            </div>
        );
    }

    return (
        <ProtectedRoute allowedRoles={["Head of Department", "Doctor"]}>
            <div className="container-fluid">
                <Header title="Patient File Review" desc={`File ID: ${fileId}`} />
                <hr className="m-0" />
                <DoctorsViewFile fileId={fileId} />
            </div>
        </ProtectedRoute>
    );
}