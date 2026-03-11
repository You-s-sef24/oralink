import Link from "next/link";
import Header from "../Components/General/Header";
import ProtectedRoute from "../Components/General/ProtectedRoute";
import ViewPatientCases from "../Components/Supervisor/ViewPatientCases";

export default function ViewCasesPage() {
    return (
        <ProtectedRoute allowedRoles={["Supervisor"]}>
            <div className="container-fluid">
                <Header title={'All Patient Cases'} desc={'Browse all patient files and monitor student work'} />

                <hr className="m-0" />

                <ViewPatientCases />
            </div>
        </ProtectedRoute>
    );
}