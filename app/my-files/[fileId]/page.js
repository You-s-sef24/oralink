import ProtectedRoute from "@/app/Components/General/ProtectedRoute";
import StudentViewFile from "@/app/Components/Student/StudentViewFile";

export default async function ViewFile({ params }) {
    const { fileId } = await params;
    return (
        <ProtectedRoute allowedRoles={["Student"]}>
            <StudentViewFile fileId={fileId} />
        </ProtectedRoute>
    );
}