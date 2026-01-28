"use client";

import { useContext, useState } from "react";
import { UsersContext } from "../Contexts/UsersContext";
import Link from "next/link";

export default function PatientFiles({ page }) {
    const [search, setSearch] = useState('');
    const [department, setDepartment] = useState('');
    const [status, setStatus] = useState('');
    const { users, totalFiles } = useContext(UsersContext);

    function getAllFiles(users) {
        const allFiles = [];

        users
            .filter(u => u.role === "Student")
            .forEach(student => {
                (student.files || []).forEach(file => {
                    allFiles.push({
                        fileId: file.fileId,
                        studentId: student.id,
                        studentName: student.name,
                        patientName: file.patientName,
                        department: file.department,
                        creationDate: file.creationDate,
                        grade: file.grade
                    });
                });
            });

        return allFiles;
    }


    const filess = getAllFiles(users);
    let filteredFiles;

    if (page === 'graded') {
        filteredFiles = filess.filter(file => {
            const matchesStatus =
                file.grade > 0

            return matchesStatus;
        });
    } else if (page === 'ungraded') {
        filteredFiles = filess.filter(file => {
            const matchesStatus =
                file.grade === 0;

            return matchesStatus;
        });
    } else {
        filteredFiles = filess.filter(file => {
            const matchesSearch =
                file.patientName.toLowerCase().includes(search.toLowerCase());

            const matchesDepartment =
                department === "" || department === "All Departments" || file.department === department;

            const matchesStatus =
                status === "" ||
                status === "All Status" ||
                (status === "graded" && file.grade > 0) ||
                (status === "not graded" && file.grade === 0);

            return matchesSearch && matchesDepartment && matchesStatus;
        });
    }

    const patientFiles = filteredFiles.map((file) => {
        return (
            <div className="row text-center align-items-center" key={file.fileId}>
                <div className="col-1 text-truncate">
                    {file.fileId}
                </div>
                <div className="col-2 text-truncate">
                    {file.studentName}
                </div>
                <div className="col-2 text-truncate">
                    {file.patientName}
                </div>
                <div className="col text-truncate">
                    {file.department}
                </div>
                <div className="col text-truncate">
                    {file.creationDate}
                </div>
                <div className="col text-truncate">
                    {file.grade > 0 ? file.grade + '/100' : "—"}
                </div>
                <div className="col d-flex justify-content-center text-truncate">
                    <Link href={`/students/${file.studentId}/files/${file.fileId}`} className="d-flex align-items-center btn btn-sm btn-primary gap-1">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye w-75 h-4" aria-hidden="true"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg></span>
                        {page === 'graded' || page === 'ungraded' ? 'Grade Now' : "View"}
                    </Link>
                </div>
                <hr className="mt-2" />
            </div>
        );
    });

    if (totalFiles === 0) {
        return (
            <div className="d-flex justify-content-center mt-3">
                No Submitted Files Yet.
            </div>
        );
    }

    return (
        <div className={`border rounded p-3 ${page ? '' : 'mt-3'}`}>
            {page === 'graded' || page === 'ungraded' ? (
                ''
            ) : (
                <div className="d-flex flex-column gap-2 mb-3">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <label className="input-group-text text-secondary bg-white border-end-0 p-3" htmlFor="search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" aria-hidden="true"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                            </label >
                        </div >
                        <input type="search" id="search" value={search} onChange={(e) => { setSearch(e.target.value) }} className="border-start-0 form-control p-3" placeholder="Search by patient name" aria-label="Search" aria-describedby="Search" />
                    </div >

                    <div className="input-group">
                        <div className="input-group-prepend">
                            <label className="input-group-text text-secondary bg-white border-end-0 p-3" htmlFor="search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-funnel absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
                            </label>
                        </div>
                        <select className="form-select" onChange={(e) => {
                            setDepartment(e.target.value);
                        }}>
                            <option>All Departments</option>
                            <option value={'Periodontics'}>Periodontics</option>
                            <option value={'Endodontics'}>Endodontics</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <div className="input-group-prepend">
                            <label className="input-group-text text-secondary bg-white border-end-0 p-3" htmlFor="search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-funnel absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
                            </label>
                        </div>
                        <select className="form-select" onChange={(e) => {
                            setStatus(e.target.value);
                        }}>
                            <option>All Status</option>
                            <option value={'graded'}>Graded</option>
                            <option value={'not graded'}>Not Graded</option>
                        </select>
                    </div>
                </div >
            )
            }

            <hr />

            <div className="row text-center align-items-center">
                <div className="col-1 text-truncate">
                    File ID
                </div>
                <div className="col-2 text-truncate">
                    Student Name
                </div>
                <div className="col-2 text-truncate">
                    Patient Name
                </div>
                <div className="col text-truncate">
                    Department
                </div>
                <div className="col text-truncate">
                    Submitted
                </div>
                <div className="col text-truncate">
                    Grade
                </div>
                <div className="col text-truncate">
                    Action
                </div>
            </div>

            <hr />

            {patientFiles}

        </div >
    );
}