"use client";

import { useContext } from "react";
import { UsersContext } from "../Contexts/UsersContext";

export default function GradingStats() {
    const { totalFiles, gradedFiles } = useContext(UsersContext);

    return (
        <div className="row g-3 my-4">
            <div className="col-12 col-sm-6">
                <div className="rounded shadow bg-white p-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <p>Ungraded Files</p>
                            <h3>{totalFiles - gradedFiles}</h3>
                        </div>
                        <div>
                            <span className="bg-warning text-danger rounded p-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-6 h-6 text-amber-600" aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></span>
                        </div>
                    </div>
                    <hr />
                    <p className="text-muted">Awaiting your review</p>
                </div>
            </div>

            <div className="col-12 col-sm-6">
                <div className="rounded shadow bg-white p-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <p>Graded Files</p>
                            <h3>{gradedFiles}</h3>
                        </div>
                        <div>
                            <span className="bg-success text-white rounded p-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-6 h-6 text-amber-600" aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></span>
                        </div>
                    </div>
                    <hr />
                    <p className="text-muted">Successfully reviewed</p>
                </div>
            </div>
        </div>
    );
}