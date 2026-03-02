import Header from "../Components/General/Header";
import ProtectedRoute from "../Components/General/ProtectedRoute";
import Students from "../Components/General/Students";

export default function StudentsPage() {
    return (
        <ProtectedRoute allowedRoles={["Head of Department", "Doctor"]}>
            <div className="container-fluid">
                <Header title={'Students Management'} desc={'View and manage all registered students'} />

                <hr className="m-0" />

                <Students />
            </div>
        </ProtectedRoute>
    );
}