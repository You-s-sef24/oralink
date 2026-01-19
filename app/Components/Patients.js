"use client";

import { useContext, useState } from "react";
import { UsersContext } from "../Contexts/UsersContext";
import Link from "next/link";

export default function Patients() {
    const [search, setSearch] = useState('');
    const { currentUser } = useContext(UsersContext);
    const files = currentUser?.files ?? [];

    const filteredFiles = files.filter(file => {
        const term = search.toLowerCase();
        return file.patientName.toLowerCase().includes(term);
    });

    const patients = filteredFiles.map((file) => {
        function handleView(id) {
            alert(id);
        }

        return (
            <div className="row text-center align-items-center" key={file.fileId}>
                <div className="col-2 text-truncate">
                    {file.fileId}
                </div>
                <div className="col-4 text-truncate">
                    {file.patientName}
                </div>
                <div className="col-1 text-truncate">
                    {file.age}
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
                    <button className="d-flex align-items-center btn btn-sm btn-primary gap-1" onClick={() => { handleView(file.fileId) }}>
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye w-75 h-4" aria-hidden="true"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg></span>
                        View
                    </button>
                </div>
                <hr className="mt-2" />
            </div>
        );
    });

    if (!currentUser?.files) {
        return (
            <div className="d-flex justify-content-center mt-3">
                <Link href={'/createnewfile'} className="btn btn-primary" key={1}>Create new file</Link>
            </div>
        );
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
                    Age
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