"use client";

import { useContext, useState, useEffect } from "react";
import { UsersContext } from "../../Contexts/UsersContext";
import Link from "next/link";
import axios from "axios";

export default function PatientFiles({ page }) {
    const [search, setSearch] = useState('');
    const [status, setStatus] = useState('');
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true); const { currentUser } = useContext(UsersContext);

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                setLoading(true);

                const response = await axios.get(
                    "https://oralink.runasp.net/api/files"
                );

                const formattedFiles = response.data.map(file => ({
                    fileId: file.fileId,
                    studentId: file.studentId ?? null,
                    studentName: file.studentName || "-",
                    patientName: file.patientName || "-",
                    submittedDate: file.submittedDate || "-",
                    grade: file.grade
                }));
                setFiles(formattedFiles);
                console.log(response.data);
                
            } catch (error) {
                console.error("Error fetching files:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFiles();
    }, []);

    let filteredFiles = files.filter(file => {

        if (page === "graded") return file.grade > 0;
        if (page === "ungraded") return file.grade === 0;

        const matchesSearch =
            file.patientName.toLowerCase().includes(search.toLowerCase()) ||
            file.studentName.toLowerCase().includes(search.toLowerCase());

        const matchesStatus =
            status === "" ||
            status === "All Status" ||
            (status === "graded" && file.grade > 0) ||
            (status === "not graded" && file.grade === 0);

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
        <div className={`border rounded p-3 ${page ? '' : 'mt-3'}`}>
            {page !== "graded" && page !== "ungraded" && (
                <div className="d-flex flex-column gap-2 mb-3">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <label className="input-group-text text-secondary bg-white border-end-0 p-3" htmlFor="search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" aria-hidden="true">
                                    <path d="m21 21-4.34-4.34"></path>
                                    <circle cx="11" cy="11" r="8"></circle>
                                </svg>
                            </label>
                        </div>
                        <input type="search" id="search" value={search} onChange={e => setSearch(e.target.value)} className="border-start-0 form-control p-3" placeholder="Search by patient name or student name" aria-label="Search" aria-describedby="Search" />
                    </div>

                    <div className="input-group">
                        <div className="input-group-prepend">
                            <label className="input-group-text text-secondary bg-white border-end-0 p-3" htmlFor="search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-funnel absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true">
                                    <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                                </svg>
                            </label>
                        </div>
                        <select className="form-select" onChange={e => setStatus(e.target.value)}>
                            <option>All Status</option>
                            <option value="graded">Graded</option>
                            <option value="not graded">Not Graded</option>
                        </select>
                    </div>
                </div>
            )}

            <hr />

            <div className="row text-center align-items-center">
                <div className="col-1 text-truncate">#</div>
                <div className="col-3 text-truncate">Student Name</div>
                <div className="col-3 text-truncate">Patient Name</div>
                <div className="col text-truncate">Submitted</div>
                <div className="col text-truncate">Grade</div>
                <div className="col text-truncate">Action</div>
            </div>

            <hr />

            {filteredFiles.length > 0 ? (
                filteredFiles.map(file => (
                    <div
                        className="row text-center align-items-center"
                        key={file.fileId}
                    >
                        <div className="col-1">{file.fileId}</div>
                        <div className="col-3">{file.studentName}</div>
                        <div className="col-3">{file.patientName}</div>
                        <div className="col">{file.submittedDate}</div>
                        <div className="col">
                            {file.grade ? `${file.grade}/100` : "—"}
                        </div>
                        <div className="col">
                            <Link
                                href={`/students/${file.studentId}/files/${file.fileId}`}
                                className="btn btn-sm btn-primary"
                            >
                                {page === "graded" || page === "ungraded"
                                    ? "Grade Now"
                                    : "View"}
                            </Link>
                        </div>
                        <hr className="mt-2" />
                    </div>
                ))
            ) : (
                <div className="text-center text-muted py-4">
                    No files found.
                </div>
            )}
        </div>
    );
}