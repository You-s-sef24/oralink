"use client";

import Header from "@/app/Components/General/Header";
import ProtectedRoute from "@/app/Components/General/ProtectedRoute";
import SupervisorViewFile from "@/app/Components/Supervisor/SupervisorViewFile";
import { useParams } from "next/navigation";

export default function StudentFile() {
    const params = useParams();
    const fileId = params?.fileId ?? params?.fileID;

    if (!fileId) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-border text-primary" role="status" />
            </div>
        );
    }

    return (
        <ProtectedRoute allowedRoles={["Supervisor"]}>
            <div className="container-fluid">
                <Header title="Patient File Review" desc={`File ID: ${fileId}`} page={"Patient File"} />
                <hr className="m-0" />
                <SupervisorViewFile fileId={fileId} />
            </div>
        </ProtectedRoute>
    );
}