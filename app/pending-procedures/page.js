import Link from "next/link";
import Header from "../Components/General/Header";
import ProtectedRoute from "../Components/General/ProtectedRoute";

export default function PendingProceduresPage() {
    return (
        <ProtectedRoute allowedRoles={["Supervisor"]}>
            <div className="container-fluid">
                <Header title={'Pending Procedure Reviews'} desc={'Review procedure steps submitted by students that require supervisor approval'} />

                <hr className="m-0" />

                <div className="card border shadow-sm mt-3">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-hover align-middle rounded">
                                <thead className="table-light text-center rounded">
                                    <tr>
                                        <th>Patient Name</th>
                                        <th>Student Name</th>
                                        <th>Procedure</th>
                                        <th>Step Number</th>
                                        <th>Submission Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody className="text-center">
                                    <tr>
                                        <td className="fw-semibold">Sarah Johnson</td>
                                        <td className="text-muted">Mohammed Ali</td>
                                        <td className="text-muted">Root Canal Treatment</td>
                                        <td className="text-muted">Step 2</td>
                                        <td className="text-muted">March 5, 2026</td>
                                        <td>
                                            <Link href={""} className="btn btn-primary btn-sm">
                                                Review Step
                                            </Link>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="fw-semibold">Ahmed Hassan</td>
                                        <td className="text-muted">Fatima Zahra</td>
                                        <td className="text-muted">Crown Preparation</td>
                                        <td className="text-muted">Step 1</td>
                                        <td className="text-muted">March 6, 2026</td>
                                        <td>
                                            <Link href={""} className="btn btn-primary btn-sm">
                                                Review Step
                                            </Link>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="fw-semibold">Emily Chen</td>
                                        <td className="text-muted">Omar Khalid</td>
                                        <td className="text-muted">Tooth Extraction</td>
                                        <td className="text-muted">Step 3</td>
                                        <td className="text-muted">March 6, 2026</td>
                                        <td>
                                            <Link href={""} className="btn btn-primary btn-sm">
                                                Review Step
                                            </Link>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="fw-semibold">Michael Brown</td>
                                        <td className="text-muted">Layla Mansour</td>
                                        <td className="text-muted">Cavity Filling</td>
                                        <td className="text-muted">Step 2</td>
                                        <td className="text-muted">March 7, 2026</td>
                                        <td>
                                            <Link href={""} className="btn btn-primary btn-sm">
                                                Review Step
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
}