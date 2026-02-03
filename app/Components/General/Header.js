"use client";

import Link from "next/link";
import { useContext } from "react";
import { PatientInfoContext } from "../../Contexts/PatientInfoContext";
import { UsersContext } from "../../Contexts/UsersContext";

export default function Header({ title, desc, page, file }) {
    const { setIsEditing, isEditing } = useContext(PatientInfoContext);
    const { updateFile } = useContext(UsersContext);

    function handleEdit() {
        if (isEditing) {
            updateFile(file);
            setIsEditing(false);
        } else {
            setIsEditing(true);
        }
    }

    return (
        <div className="p-4">
            {page === "Student Profile" ? (
                <Link href={'/students'} className="d-flex align-items-center text-decoration-none text-primary mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className="lucide lucide-chevron-left w-4 h-4" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg>
                    Back to Students List
                </Link>
            ) : ''}

            <div className="d-flex align-items-center justify-content-between">
                <div>
                    <h3>{title}</h3>
                    <p className="m-0">{page === "Patient File" ? `File Id: ${file?.fileId}` : desc}</p>
                </div>
                {page === "Patient File" ?
                    <div>
                        <button className="btn btn-primary" onClick={handleEdit}>
                            {isEditing ? <><i className="bi bi-floppy"></i> Save Changes</> : <><i className="bi bi-pencil"></i> Edit File</>}
                        </button>
                    </div>
                    : ''
                }
            </div>
        </div>
    );
}