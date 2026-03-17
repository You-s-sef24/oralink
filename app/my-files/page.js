import Header from "../Components/General/Header";
import Patients from "../Components/General/Patients";
import ProtectedRoute from "../Components/General/ProtectedRoute";

export default function MyFilesPage() {
    return (
        <ProtectedRoute allowedRoles={["Student"]}>
            <div className="container-fluid">
                <Header title={'Search Patient Files'} desc={'Find and view patient records'} />

                <hr className="m-0" />

                <Patients />
            </div>
        </ProtectedRoute>
    );
}