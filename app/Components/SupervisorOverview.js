"use client";

import { useContext } from "react";
import { UsersContext } from "../Contexts/UsersContext";

export default function SupervisorOverview() {
    const { users } = useContext(UsersContext);

    const totalStudents = users.reduce(
        (count, u) => (u.role === "Student" ? count + 1 : count),
        0
    );

    const allFiles = users.flatMap(user => user.files || []);
    const totalFiles = allFiles.length;

    const gradedFilesList = allFiles.filter(file => file.grade > 0);
    const gradedFiles = gradedFilesList.length;

    const averageGrade = gradedFilesList.length > 0 ? gradedFilesList.reduce((sum, file) => sum + file.grade, 0) / gradedFilesList.length : 0;

    return (
        <div className="row justify-content-between g-2 mb-5">
            <div className="col-6 col-md-2">
                <div className="d-flex flex-column bg-white rounded shadow p-3">
                    <span className="w-25 mb-3 text-center bg-primary text-white rounded p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-6 h-6" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                    </span>
                    <p>{totalStudents}</p>
                    <p className="text-muted m-0">Total Students</p>
                </div>
            </div>
            <div className="col-6 col-md-2">
                <div className="d-flex flex-column bg-white rounded shadow p-3">
                    <span className="w-25 mb-3 text-center bg-secondary text-white rounded p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-6 h-6" aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                    </span>
                    <p>{totalFiles}</p>
                    <p className="text-muted m-0">Total Files</p>
                </div>
            </div>
            <div className="col-6 col-md-2">
                <div className="d-flex flex-column bg-white rounded shadow p-3">
                    <span className="w-25 mb-3 text-center bg-success text-white rounded p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-check w-6 h-6" aria-hidden="true"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
                    </span>
                    <p>{gradedFiles}</p>
                    <p className="text-muted m-0">Files Graded</p>
                </div>
            </div>
            <div className="col-6 col-md-2">
                <div className="d-flex flex-column bg-white rounded shadow p-3">
                    <span className="w-25 mb-3 text-center bg-warning text-white rounded p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-6 h-6" aria-hidden="true"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                    </span>
                    <p>{averageGrade}</p>
                    <p className="text-muted m-0">Average Grade</p>
                </div>
            </div>
        </div>
    );
}