import Header from "../Components/General/Header";
import HodDashboard from "../Components/Dashboard/HodDashboard";

export default function Dashboard() {
    return (
        <div className="container-fluid">
            <Header title={"Head of Department Dashboard"} desc={"View Analytics and Performance"} />

            <hr className="m-0" />

            <HodDashboard />
        </div>
    );
}