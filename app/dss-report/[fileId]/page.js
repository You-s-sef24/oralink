import ViewDSSFile from "@/app/Components/DSS/ViewDSSFile";
import ProtectedRoute from "@/app/Components/General/ProtectedRoute";

export default async function DSSFile({ params }) {
    const { fileId } = await params;
    return (
        <ProtectedRoute allowedRoles={["Student"]}>
            <ViewDSSFile fileId={fileId} />
        </ProtectedRoute>
    );
}