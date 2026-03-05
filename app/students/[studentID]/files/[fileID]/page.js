"use client";

import Header from "@/app/Components/General/Header";
import ProtectedRoute from "@/app/Components/General/ProtectedRoute";
import { useParams } from "next/navigation";
import DoctorsViewFile from "@/app/Components/Doctor/DoctorViewFile";

export default function File() {
    const { fileId } = useParams();

    return (
        <ProtectedRoute allowedRoles={["Head of Department", "Doctor"]}>
            <div className="container-fluid">
                <Header title={'Patient File Review'} desc={`File ID: ${fileId}`} />

                <hr className="m-0" />

                <DoctorsViewFile fileId={fileId} />
            </div>
        </ProtectedRoute>
    );
}