"use client";

import Link from "next/link";
import StudentGettingStarted from "./StudentGettingStarted";

export default function StudentHome() {
    return (
        <>
            <div className="p-4">
                <p>Quick Actions</p>
                <div className="row g-3">
                    <div className="col-12 col-sm-6 col-lg-4">
                        <Link href={'/createnewfile'} className="d-flex flex-column bg-white rounded shadow action text-decoration-none p-3">
                            <span className="w-25 mb-3 text-center bg-primary text-white rounded p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className="lucide lucide-file-text w-7 h-7 text-white" aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                            </span>
                            <p className="mb-2">Create New Patient File</p>
                            <p className="m-0 text-muted">Register a new patient and fill their medical forms</p>
                        </Link>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4">
                        <Link href={'/my-files'} className="d-flex flex-column bg-white rounded shadow action text-decoration-none p-3">
                            <span className="w-25 mb-3 text-center bg-primary text-white rounded p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search w-7 h-7 text-white" aria-hidden="true"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                            </span>
                            <p className="mb-2">Search Existing Patient File</p>
                            <p className="m-0 text-muted">Find and view patient records by name or ID</p>
                        </Link>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4">
                        <Link href={'/upload-xray'} className="d-flex flex-column bg-white rounded shadow action text-decoration-none p-3">
                            <span className="w-25 mb-3 text-center bg-primary text-white rounded p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className="lucide lucide-upload w-7 h-7 text-white" aria-hidden="true"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
                            </span>
                            <p className="mb-2">Upload X-ray for AI Diagnosis</p>
                            <p className="m-0 text-muted">Upload dental X-rays for automated AI analysis</p>
                        </Link>
                    </div>
                </div>
            </div>
            <StudentGettingStarted />
        </>
    );
}