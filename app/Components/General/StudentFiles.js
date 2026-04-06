import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UIContext } from "@/app/Contexts/UIContext";
import { UsersContext } from "@/app/Contexts/UsersContext";
import DeleteFileModal from "./DeleteFileModal";

export default function StudentFiles({ id }) {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [fileId, setFileId] = useState(null);
    const { showDeleteFileModal, setShowDeleteFileModal } = useContext(UIContext);
    const { currentUser } = useContext(UsersContext);

    const fetchFiles = async () => {
        try {
            setLoading(true);

            const response = await axios.get(
                `https://oralink.runasp.net/api/students/${id}/files`
            );
            setFiles(response.data.sort((a, b) => new Date(a.creationDate) - new Date(b.creationDate)));
        } catch (err) {
            console.error(err);
            setError("Failed to load files");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!id) return;

        fetchFiles();
    }, []);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center">
                <div className="spinner-border text-primary spinner-border-sm" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return <div className="text-danger text-center py-4">{error}</div>;
    }

    if (files.length === 0) {
        return (
            <div className="text-center py-4">
                <p className="mb-1">No files submitted yet</p>
                <small className="text-muted">
                    This student hasn&apos;t submitted any patient files
                </small>
            </div>
        );
    }

    return (
        <div className="shadow border rounded bg-white p-4 my-4">
            <div className="card border shadow-sm">
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0 text-center">
                            <thead className="table-light">
                                <tr>
                                    <th>#</th>
                                    <th>Patient Name</th>
                                    <th>Creation Date</th>
                                    <th>Submission Date</th>
                                    <th className="d-none d-md-table-cell">Status</th>
                                    <th>Grade</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {files.map((file, i) => (
                                    <tr key={file.fileId}>
                                        <td className="text-muted">{i + 1}</td>
                                        <td className="fw-bold">{file.patientName}</td>
                                        <td className="text-muted">{file.creationDate?.split("T")[0]}</td>
                                        <td className="text-muted">{file.submittedDate?.split("T")[0]}</td>
                                        <td className="d-none d-md-table-cell">
                                            {file.graded ? (
                                                <span className="badge bg-success rounded-pill px-3 py-2 d-inline-flex align-items-center gap-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                                                    Graded
                                                </span>
                                            ) : (
                                                <span className="badge bg-warning rounded-pill px-3 py-2 d-inline-flex align-items-center gap-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
                                                    Not Graded
                                                </span>
                                            )}
                                        </td>
                                        <td className="text-muted">
                                            {file.graded ? `${file.grade}` : "-"}/100
                                        </td>
                                        <td>
                                            <div className="d-flex justify-content-center gap-1">
                                                <Link
                                                    href={`/students/${id}/files/${file.fileId}`}
                                                    className="btn btn-sm btn-primary d-inline-flex align-items-center gap-1"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                                    
                                                </Link>
                                                {currentUser.role === "Head of Department" && (
                                                    <button
                                                        className="d-inline-flex align-items-center btn btn-sm btn-danger gap-1"
                                                        onClick={() => {
                                                            setFileId(file.fileId);
                                                            setShowDeleteFileModal(true);
                                                        }}
                                                    >
                                                        <i className="bi bi-trash"></i>
                                                    </button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <DeleteFileModal
                show={showDeleteFileModal}
                isClose={() => setShowDeleteFileModal(false)}
                id={fileId}
                refreshFiles={fetchFiles}
            />
        </div>
    );
}