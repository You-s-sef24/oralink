"use client";

import Header from "../Components/General/Header";
import XrayUploadBox from "../Components/AI/XrayUploadBox";
import XrayInfo from "../Components/AI/Xray Info";
import ProtectedRoute from "../Components/General/ProtectedRoute";

export default function UploadXrayPage() {
    return (
        <ProtectedRoute allowedRoles={["Student", "Supervisor", "Doctor", "Head of Department"]}>
            <div className="container-fluid">
                <Header title={'X-ray AI Diagnosis'} desc={'Upload dental X-rays for automated AI analysis'} />

                <hr className="m-0" />

                <XrayUploadBox />

                <XrayInfo />
            </div>
        </ProtectedRoute>
    );
}