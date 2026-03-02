import Header from "../Components/General/Header";
import HodDashboard from "../Components/HODDashboard/HodDashboard";
import ProtectedRoute from "../Components/General/ProtectedRoute";

export default function Dashboard() {
    return (
        <ProtectedRoute allowedRoles={["Head of Department"]}>
            <div className="container-fluid">
                <Header title={"Head of Department Dashboard"} desc={"View Analytics and Performance"} />

                <hr className="m-0" />

                <HodDashboard />
            </div>
        </ProtectedRoute>
    );
}