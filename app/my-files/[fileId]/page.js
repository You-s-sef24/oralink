import ProtectedRoute from "@/app/Components/General/ProtectedRoute";
import StudentViewFile from "@/app/Components/Student/StudentViewFile";

export default function ViewFile({ params }) {
    return (
        <ProtectedRoute allowedRoles={["Student"]}>
            <StudentViewFile params={params} />
        </ProtectedRoute>
    );
}