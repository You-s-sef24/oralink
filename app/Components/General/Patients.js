"use client";

import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../Contexts/UsersContext";
import Link from "next/link";
import axios from "axios";

export default function Patients() {
    const [search, setSearch] = useState('');
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const { token } = useContext(UsersContext);

    useEffect(() => {
        async function fetchPatients() {
            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const res = await axios.get(
                    "https://oralink.runasp.net/api/patient-files/my-files",
                    {
                        headers: {
                            'ngrok-skip-browser-warning': 'true',
                            'Content-Type': 'application/json',
                        }
                    }
                );
                setFiles(res.data);
            } catch (err) {
                console.error(err);
                setFiles([]);
            } finally {
                setLoading(false);
            }
        }

        fetchPatients();
    }, [token]);

    const filteredFiles = files.filter(file =>
        file?.patientName?.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) {
        return (
            <div className="text-center mt-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3">Loading patients...</p>
            </div>
        );
    }

    if (files.length === 0) {
        return (
            <div className="text-center mt-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted mb-3">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="12" y1="18" x2="12" y2="12"></line>
                    <line x1="9" y1="15" x2="15" y2="15"></line>
                </svg>
                <h5 className="text-muted mb-3">No Patient Files Yet</h5>
                <p className="text-muted mb-4">Get started by creating your first patient file.</p>
                <Link href="/createnewfile" className="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    Create New File
                </Link>
            </div>
        );
    }

    const patients = filteredFiles.map((file) => {
        return (
            <div className="row text-center align-items-center" key={file.fileId}>
                <div className="col-2 text-truncate">
                    {file.fileId}
                </div>
                <div className="col-4 text-truncate">
                    {file.patientName}
                </div>
                <div className="col-1 text-truncate">
                    {file.birthDate}
                </div>
                <div className="col text-truncate">
                    {file.phone}
                </div>
                <div className="col text-truncate">
                    {file.department}
                </div>
                <div className="col text-truncate">
                    {file.creationDate}
                </div>
                <div className="col d-flex justify-content-center text-truncate">
                    <Link href={`my-files/${file.fileId}`} className="d-flex align-items-center btn btn-sm btn-primary gap-1">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye w-75 h-4" aria-hidden="true"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg></span>
                        View
                    </Link>
                </div>
                <hr className="mt-2" />
            </div>
        );
    });

    if (loading) {
        return <p className="text-center mt-5">Loading patients...</p>;
    }

    return (
        <div className="border rounded p-3 mt-5">
            <div className="input-group my-3">
                <div className="input-group-prepend">
                    <label className="input-group-text text-secondary bg-white border-end-0 p-3" htmlFor="search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" aria-hidden="true"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                    </label>
                </div>
                <input type="search" id="search" value={search} onChange={(e) => { setSearch(e.target.value) }} className="border-start-0 form-control p-3" placeholder="Search by patient name" aria-label="Search" aria-describedby="Search" />
            </div>

            <div className="row text-center align-items-center">
                <div className="col-2 text-truncate">
                    File ID
                </div>
                <div className="col-4 text-truncate">
                    Patient Name
                </div>
                <div className="col-1 text-truncate">
                    Birth Date
                </div>
                <div className="col text-truncate">
                    Phone
                </div>
                <div className="col text-truncate">
                    Department
                </div>
                <div className="col text-truncate">
                    Created
                </div>
                <div className="col text-truncate">
                    Action
                </div>
            </div>

            <hr />

            {patients}
        </div>
    );
}