"use client";

import Header from "@/app/Components/General/Header";
import ProtectedRoute from "@/app/Components/General/ProtectedRoute";
import ViewArchivedFile from "@/app/Components/HOD/ViewArchivedFile";
import { useParams } from "next/navigation";

export default function ArchivedFilePage() {
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
        <ProtectedRoute allowedRoles={["Head of Department"]}>
            <div className="container-fluid">
                <Header title="Archived Files" page={"Patient File"} />

                <hr className="m-0" />

                <ViewArchivedFile fileId={fileId} />
            </div>
        </ProtectedRoute>
    );
}