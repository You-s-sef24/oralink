"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import axios from "axios";

export default function Students() {
    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get("https://oralink.runasp.net/api/students");
                setStudents(response.data.sort((a, b) => a.name.localeCompare(b.name)));
            } catch (err) {
                console.error(err);
                setError("Failed to load students");
            } finally {
                setLoading(false);
            }
        };

        fetchStudents();
    }, []);

    const filteredStudents = useMemo(() => {
        const term = search.trim().toLowerCase();
        return students.filter(student =>
            student.name.toLowerCase().includes(term) ||
            student.email.toLowerCase().includes(term)
        );
    }, [students, search]);

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
        return <div className="text-danger text-center py-5">{error}</div>;
    }

    return (
        <div className="border rounded p-3 mt-5">
            <div className="input-group my-3">
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
                    onChange={(e) => setSearch(e.target.value)}
                    className="border-start-0 form-control p-3"
                    placeholder="Search by student name or email"
                    aria-label="Search"
                />
            </div>

            <div className="card border shadow-sm">
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead className="table-light text-center">
                                <tr>
                                    <th>#</th>
                                    <th>Student Name</th>
                                    <th>Email</th>
                                    <th>Files Submitted</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody className="text-center">
                                {filteredStudents.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="py-4 text-muted">
                                            No students found.
                                        </td>
                                    </tr>
                                ) : (
                                    filteredStudents.map((student, i) => (
                                        <tr key={i}>
                                            <td className="text-muted">{i + 1}</td>
                                            <td className="fw-bold">{student.name}</td>
                                            <td className="text-muted">{student.email}</td>
                                            <td>
                                                <span className="badge bg-primary rounded-pill px-3 py-2 d-inline-flex align-items-center gap-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                                        <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                                        <path d="M10 9H8"></path>
                                                        <path d="M16 13H8"></path>
                                                        <path d="M16 17H8"></path>
                                                    </svg>
                                                    {student.submittedFilesCount}
                                                </span>
                                            </td>
                                            <td>
                                                <Link
                                                    href={`/students/${student.studentId}`}
                                                    className="btn btn-sm btn-primary d-inline-flex align-items-center gap-1"
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
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}