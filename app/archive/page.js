"use client";

import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Header from "../Components/General/Header";
import ProtectedRoute from "../Components/General/ProtectedRoute";
import { useRouter } from "next/navigation";

export default function ArchivePage() {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deleteId, setDeleteId] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [search, setSearch] = useState("");

    const router = useRouter();

    useEffect(() => {
        fetchFiles();
    }, []);

    async function fetchFiles() {
        try {
            setLoading(true);

            const res = await axios.get(
                "https://oralink.runasp.net/api/archive"
            );

            setFiles(res.data ?? []);
        } catch (err) {
            console.error("Failed to fetch archive:", err);
        } finally {
            setLoading(false);
        }
    }

    async function handleDelete() {
        if (!deleteId) return;

        try {
            setIsDeleting(true);

            await axios.delete(
                `https://oralink.runasp.net/api/archive/${deleteId}`
            );

            setFiles((prev) => prev.filter((f) => f.id !== deleteId));
            setDeleteId(null);
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.message || "Delete failed");
        } finally {
            setIsDeleting(false);
        }
    }

    const filteredFiles = useMemo(() => {
        const query = search.toLowerCase();

        const result = files.filter((f) =>
            (f.studentName || "").toLowerCase().includes(query) ||
            (f.patientName || "").toLowerCase().includes(query) ||
            (f.phone || "").toLowerCase().includes(query)
        );

        return result.sort((a, b) => {
            const dateA = new Date(a.archivedDate || 0);
            const dateB = new Date(b.archivedDate || 0);
            return dateB - dateA;
        });
    }, [files, search]);

    return (
        <ProtectedRoute allowedRoles={["Head of Department"]}>
            <div className="container-fluid">
                <Header title={"Archive"} desc={"View archived student files and information"} />

                <hr className="m-0" />

                <div className="d-flex justify-content-between align-items-center px-3 mt-3 mb-2">
                    <div>
                        <h5 className="mb-0 fw-semibold">
                            Archived Files
                        </h5>
                        <small className="text-muted">
                            Showing {filteredFiles.length} of {files.length} files
                        </small>
                    </div>

                    <div
                        className="position-relative"
                        style={{ width: "300px" }}
                    >
                        <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
                        <input
                            type="text"
                            className="form-control ps-5"
                            placeholder="Search by student name or patient name or phone number..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                <div className="p-3">
                    <div className="card shadow-sm border-0 rounded-4">
                        <div className="card-body p-0">

                            {loading ? (
                                <div className="text-center p-5">
                                    <div className="spinner-border text-primary" />
                                </div>
                            ) : filteredFiles.length === 0 ? (
                                <div className="text-center p-5 text-muted">
                                    <i className="bi bi-inbox fs-3 d-block mb-2"></i>
                                    No archived files found
                                </div>
                            ) : (
                                <div className="table-responsive">
                                    <table className="table align-middle mb-0">
                                        <thead className="table-light">
                                            <tr className="text-center">
                                                <th>#</th>
                                                <th>Student Name</th>
                                                <th>Patient Name</th>
                                                <th>Phone Number</th>
                                                <th>Archived Date</th>
                                                <th>
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {filteredFiles.map((file, i) => (
                                                <tr key={file.id} className="text-center">
                                                    <td className="fw-semibold">
                                                        {i + 1}
                                                    </td>

                                                    <td>
                                                        {file.studentName || "-"}
                                                    </td>

                                                    <td>
                                                        {file.patientName || "-"}
                                                    </td>

                                                    <td>
                                                        {file.phone || "-"}
                                                    </td>

                                                    <td>
                                                        {file.archivedAt
                                                            ? new Date(
                                                                file.archivedAt
                                                            ).toLocaleDateString()
                                                            : "-"}
                                                    </td>

                                                    <td>
                                                        <div className="d-flex justify-content-end gap-2">
                                                            <button
                                                                className="btn btn-sm btn-outline-primary"
                                                                onClick={() =>
                                                                    router.push(
                                                                        `/archive/${file.id}`
                                                                    )
                                                                }
                                                            >
                                                                <i className="bi bi-eye"></i>
                                                            </button>

                                                            <button
                                                                className="btn btn-sm btn-outline-danger"
                                                                onClick={() =>
                                                                    setDeleteId(
                                                                        file.id
                                                                    )
                                                                }
                                                            >
                                                                <i className="bi bi-trash"></i>
                                                            </button>
                                                        </div>
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

                {deleteId && (
                    <>
                        <div
                            className="modal-backdrop fade show"
                            style={{ zIndex: 1050, backgroundColor: "rgba(0,0,0,0.4)" }}
                            onClick={() => setDeleteId(null)}
                        ></div>

                        <div
                            className="modal fade show d-block"
                            tabIndex="-1"
                            style={{ zIndex: 1055 }}
                        >
                            <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '400px' }}>
                                <div className="modal-content rounded-4 border-0 shadow-lg">

                                    <div className="modal-header border-bottom py-3 px-4">
                                        <h5 className="modal-title fw-bold text-danger d-flex align-items-center gap-2">
                                            <i className="bi bi-exclamation-triangle"></i>
                                            Confirm Deletion
                                        </h5>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            onClick={() => setDeleteId(null)}
                                        />
                                    </div>

                                    <div className="modal-body py-4 px-4 text-center">
                                        <p className="text-muted mb-0 fs-6">
                                            Are you sure you want to permanently delete this record?
                                            <br />
                                            <span className="fw-semibold text-dark">This action cannot be undone.</span>
                                        </p>
                                    </div>

                                    <div className="modal-footer border-0 pb-4 px-4 justify-content-center gap-2">
                                        <button
                                            className="btn btn-light px-4 rounded-3 fw-medium"
                                            style={{ minWidth: '100px' }}
                                            onClick={() => setDeleteId(null)}
                                            disabled={isDeleting}
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            className="btn btn-danger px-4 rounded-3 fw-medium"
                                            style={{ minWidth: '100px' }}
                                            onClick={handleDelete}
                                            disabled={isDeleting}
                                        >
                                            {isDeleting ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2" />
                                                    Deleting...
                                                </>
                                            ) : (
                                                "Delete"
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </ProtectedRoute>
    );
}