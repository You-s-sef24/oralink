import Link from "next/link";
import Header from "../Components/General/Header";
import ProtectedRoute from "../Components/General/ProtectedRoute";
import ViewAllStudents from "../Components/Supervisor/ViewAllStudents";

export default function ViewAllStudentsPage() {
    return (
        <ProtectedRoute allowedRoles={["Supervisor"]}>
            <div className="container-fluid">
                <Header title={'View All Students'} desc={'View all students and review thier files and performance'} />

                <hr className="m-0" />

                <ViewAllStudents />
            </div>
        </ProtectedRoute>
    );
}