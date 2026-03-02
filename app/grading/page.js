import GradingStats from "../Components/GradingStats";
import GradingTabs from "../Components/GradingTabs";
import Header from "../Components/General/Header";
import ProtectedRoute from "../Components/General/ProtectedRoute";

export default function GradingPanelPage() {
    return (
        <ProtectedRoute allowedRoles={["Head of Department", "Doctor"]}>
            <div className="container-fluid">
                <Header title={'Grading Dashboard'} desc={'Review and grade student submissions'} />

                <hr className="m-0" />

                <GradingStats />

                <GradingTabs />
            </div>
        </ProtectedRoute>
    );
}