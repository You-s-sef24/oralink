"use client";

import { useEffect, useState } from "react";
import Header from "@/app/Components/General/Header";
import { useParams } from "next/navigation";
import ProtectedRoute from "@/app/Components/General/ProtectedRoute";
import ViewStudentFiles from "@/app/Components/Supervisor/ViewStudentFiles";
import axios from "axios";

export default function ViewStudentProfile() {
    const { studentId } = useParams();
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!studentId) return;

        const fetchStudent = async () => {
            try {
                const response = await axios.get(`https://oralink.runasp.net/api/supervisor/students/${studentId}/student-card`);
                setStudent(response.data);
            } catch (err) {
                console.error(err);
                setError("Failed to load student profile");
            } finally {
                setLoading(false);
            }
        };

        fetchStudent();
    }, [studentId]);

    if (loading) {
        return <div className="d-flex justify-content-center align-items-center">
            <div
                className="spinner-border text-primary spinner-border-sm"
                role="status"
            >
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
            ;
    }

    if (error) {
        return <div className="text-danger text-center py-5">{error}</div>;
    }

    if (!student) {
        return <div className="text-center py-5">Student not found.</div>;
    }

    return (
        <ProtectedRoute allowedRoles={["Supervisor"]}>
            <div className="container-fluid">
                <Header title={'Student Files'} desc={'View all patient files created by this student'} />

                <hr className="m-0" />

                <div className="shadow rounded bg-white p-4 my-4">
                    <div className="row align-items-center">
                        <div className="col-12 col-sm-6">
                            <div className="d-flex align-items-center gap-2">
                                <span className="bg-primary text-white rounded p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className="lucide lucide-user w-8 h-8 text-blue-600" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                </span>
                                <div className="d-flex flex-column">
                                    <h3>{student?.name}</h3>
                                    <small className="d-flex align-items-center gap-1 text-muted">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className="lucide lucide-mail w-4 h-4" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
                                        {student?.email}
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="d-flex justify-content-around text-center mt-3 mt-md-0">
                                <div className="text-warning">
                                    <h3>{student?.pendingFilesCount}</h3>
                                    <p>Pending Files</p>
                                </div>
                                <div>
                                    <h3>{student?.savedFilesCount}</h3>
                                    <p className="text-muted">Total Files</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ViewStudentFiles id={studentId} />
            </div>
        </ProtectedRoute>
    );
}