import DSSFiles from "../Components/DSS/DSSFiles";
import Header from "../Components/General/Header";
import ProtectedRoute from "../Components/General/ProtectedRoute";

export default function DSSReports() {
    return (
        <ProtectedRoute allowedRoles={["Student"]}>
            <div className="container-fluid">
                <Header title={'DSS Reports'} desc={'Access and review AI-generated diagnostic reports for your patients.'} />

                <hr className="m-0" />

                <DSSFiles />
            </div>
        </ProtectedRoute>
    );
}