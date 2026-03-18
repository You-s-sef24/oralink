"use client";

import { useContext, useState, useEffect } from "react";
import { UsersContext } from "../../Contexts/UsersContext";
import Link from "next/link";
import axios from "axios";

export default function PatientFiles() {
    const [search, setSearch] = useState('');
    const [status, setStatus] = useState('');
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const { currentUser } = useContext(UsersContext);

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                setLoading(true);
                const response = await axios.get("https://oralink.runasp.net/api/files");
                const formattedFiles = response.data.map(file => ({
                    fileId: file.fileId,
                    studentId: file.studentId ?? null,
                    studentName: file.studentName || "-",
                    patientName: file.patientName || "-",
                    creationDate: file.creationDate || "-",
                    submittedDate: file.submittedDate || "-",
                    grade: file.grade
                }));
                setFiles(formattedFiles.sort((a, b) => new Date(a.submittedDate) - new Date(b.submittedDate)));
            } catch (error) {
                console.error("Error fetching files:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFiles();
    }, []);

    const filteredFiles = files.filter(file => {
        const matchesSearch =
            file.patientName.toLowerCase().includes(search.toLowerCase()) ||
            file.studentName.toLowerCase().includes(search.toLowerCase());

        const matchesStatus =
            status === "" ||
            status === "All Status" ||
            (status === "graded" && file.grade) ||
            (status === "not graded" && !file.grade);

        return matchesSearch && matchesStatus;
    });

    if (loading) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border text-primary"></div>
            </div>
        );
    }

    return (
        <div className="border rounded p-3 mt-3">
            <div className="d-flex flex-column gap-2 mb-3">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <label className="input-group-text text-secondary bg-white border-end-0 p-3" htmlFor="search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m21 21-4.34-4.34"></path>
                                <circle cx="11" cy="11" r="8"></circle>
                            </svg>
                        </label>
                    </div>
                    <input
                        type="search"
                        id="search"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="border-start-0 form-control p-3"
                        placeholder="Search by patient name or student name"
                    />
                </div>

                <div className="input-group">
                    <div className="input-group-prepend">
                        <label className="input-group-text text-secondary bg-white border-end-0 p-3" htmlFor="status">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                            </svg>
                        </label>
                    </div>
                    <select id="status" className="form-select" onChange={e => setStatus(e.target.value)}>
                        <option>All Status</option>
                        <option value="graded">Graded</option>
                        <option value="not graded">Not Graded</option>
                    </select>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-hover align-middle text-center mb-0">
                    <thead className="table-light">
                        <tr>
                            <th>#</th>
                            <th>Student Name</th>
                            <th>Patient Name</th>
                            <th>Creation Date</th>
                            <th>Submission Date</th>
                            <th>Grade</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredFiles.length > 0 ? (
                            filteredFiles.map((file, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{file.studentName}</td>
                                    <td>{file.patientName}</td>
                                    <td>{file.creationDate}</td>
                                    <td>{file.submittedDate}</td>
                                    <td>
                                        {file.grade ? (
                                            <span className={`badge rounded-pill px-3 py-2 ${file.grade >= 90 ? "bg-success" :
                                                file.grade >= 75 ? "bg-primary" :
                                                    file.grade >= 60 ? "bg-warning" : "bg-danger"
                                                }`}>
                                                {file.grade}/100
                                            </span>
                                        ) : (
                                            <span className="badge rounded-pill bg-secondary px-3 py-2">—</span>
                                        )}
                                    </td>
                                    <td>
                                        <Link
                                            href={`/students/${file.studentId}/files/${file.fileId}`}
                                            className="d-inline-flex align-items-center btn btn-sm btn-primary gap-1"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                            View
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center text-muted py-4">No files found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}