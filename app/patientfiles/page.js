import Header from "../Components/General/Header";
import PatientFiles from "../Components/General/PatientFiles";
import ProtectedRoute from "../Components/General/ProtectedRoute";

export default function PatientFilesPage() {
    return (
        <ProtectedRoute allowedRoles={["Head of Department", "Doctor"]}>
            <div className="container-fluid">
                <Header title={'All Patient Files'} desc={'Search and filter patient files across all students'} />

                <hr className="m-0" />

                <PatientFiles />
            </div>
        </ProtectedRoute>
    );
}