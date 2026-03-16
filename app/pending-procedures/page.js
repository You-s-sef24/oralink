"use client";

import Link from "next/link";
import Header from "../Components/General/Header";
import ProtectedRoute from "../Components/General/ProtectedRoute";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PendingProceduresPage() {
    const [procedures, setProcedures] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPending = async () => {
            try {
                const response = await axios.get(
                    "https://oralink.runasp.net/api/supervisor/procedures/pending"
                );
                setProcedures(response.data.sort((a, b) => new Date(a.stepDate) - new Date(b.stepDate)));
            } catch (err) {
                console.error(err);
                setError("Failed to load pending procedures");
            } finally {
                setLoading(false);
            }
        };

        fetchPending();
    }, []);

    const formatDate = (dateStr) => {
        if (!dateStr) return "-";
        return new Date(dateStr).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <ProtectedRoute allowedRoles={["Supervisor"]}>
            <div className="container-fluid">
                <Header
                    title={"Pending Procedure Reviews"}
                    desc={"Review procedure steps submitted by students that require supervisor approval"}
                />

                <hr className="m-0" />

                <div className="card border shadow-sm mt-3">
                    <div className="card-body">
                        {error && (
                            <div className="alert alert-danger">
                                <i className="bi bi-exclamation-circle me-2"></i>
                                {error}
                            </div>
                        )}

                        {loading ? (
                            <div className="text-center py-5">
                                <div className="spinner-border text-primary" role="status" />
                                <p className="text-muted mt-2 mb-0">Loading procedures...</p>
                            </div>
                        ) : procedures.length === 0 ? (
                            <div className="text-center py-5">
                                <i className="bi bi-check-circle text-success fs-1"></i>
                                <p className="text-muted mt-2 mb-0">No pending procedures.</p>
                            </div>
                        ) : (
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
                                        {procedures.map((proc) => (
                                            <tr key={`${proc.fileId}-${proc.stepNumber}`}>
                                                <td className="fw-semibold">{proc.patientName}</td>
                                                <td className="text-muted">{proc.studentName}</td>
                                                <td className="text-muted">{proc.procedureTitle}</td>
                                                <td className="text-muted">Step {proc.stepNumber}</td>
                                                <td className="text-muted">{formatDate(proc.stepDate)}</td>
                                                <td>
                                                    <Link
                                                        href={`/view-students/${proc.studentId}/files/${proc.fileId}`}
                                                        className="btn btn-primary btn-sm"
                                                    >
                                                        Review Step
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
}