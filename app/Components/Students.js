"use client";

import { useContext, useState } from "react";
import { UsersContext } from "../Contexts/UsersContext";
import Link from "next/link";

export default function Students() {
    const [search, setSearch] = useState('');
    const { users } = useContext(UsersContext);

    const students = users.filter((user) => user.role === "Student");

    const filteredStudents = students.filter(student => {
        const term = search.trim().toLowerCase();
        return (
            student.name.toLowerCase().includes(term) ||
            student.id.toString().includes(term)
        );
    });

    const renderStudents = filteredStudents.map((student) => {
        return (
            <div className="row text-center align-items-center" key={student.id}>
                <div className="col-2 text-truncate">
                    {student.id}
                </div>
                <div className="col-3 text-truncate">
                    {student.name}
                </div>
                <div className="col-2 text-truncate">
                    {student.email}
                </div>
                <div className="col-3 text-truncate">
                    <div className="d-inline-block">
                        <div className="d-flex justify-content-center bg-primary text-white rounded-pill px-3 py-2 gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-4 h-4" aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                            {student.files?.length || 0}
                        </div>
                    </div>
                </div>
                <div className="col d-flex justify-content-center text-truncate">
                    <Link href={`/students/${student.id}`} className="d-flex align-items-center btn btn-sm btn-primary gap-1">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye w-75 h-4" aria-hidden="true"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg></span>
                        View
                    </Link>
                </div>
                <hr className="mt-2" />
            </div>
        );
    });

    return (
        <div className="border rounded p-3 mt-5">
            <div className="input-group my-3">
                <div className="input-group-prepend">
                    <label className="input-group-text text-secondary bg-white border-end-0 p-3" htmlFor="search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" aria-hidden="true"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                    </label>
                </div>
                <input type="search" id="search" value={search} onChange={(e) => { setSearch(e.target.value) }} className="border-start-0 form-control p-3" placeholder="Search by student name or ID" aria-label="Search" aria-describedby="Search" />
            </div>

            <div className="row text-center align-items-center">
                <div className="col-2 text-truncate">
                    Student ID
                </div>
                <div className="col-3 text-truncate">
                    Student Name
                </div>
                <div className="col-2 text-truncate">
                    Email
                </div>
                <div className="col-3 text-truncate">
                    Files Submitted
                </div>
                <div className="col text-truncate">
                    Action
                </div>
            </div>

            <hr />

            {
                filteredStudents.length > 0 ? (
                    renderStudents
                ) : (
                    <div className="text-center text-muted py-4">
                        No students found.
                    </div>
                )
            }
        </div>
    );
}