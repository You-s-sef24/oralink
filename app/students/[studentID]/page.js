"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/app/Components/General/Header";
import StudentCard from "@/app/Components/StudentCard";
import StudentFiles from "@/app/Components/General/StudentFiles";
import { useParams } from "next/navigation";
import ProtectedRoute from "@/app/Components/General/ProtectedRoute";

export default function StudentProfile() {
    const { studentID } = useParams();
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!studentID) return;

        const fetchStudent = async () => {
            try {
                const response = await axios.get(`https://oralink.runasp.net/api/students/${studentID}`);
                setStudent(response.data);
                console.log(response.data);
                
            } catch (err) {
                console.error(err);
                setError("Failed to load student profile");
            } finally {
                setLoading(false);
            }
        };

        fetchStudent();
    }, [studentID]);

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
        <ProtectedRoute allowedRoles={["Head of Department", "Doctor"]}>
            <div className="container-fluid">
                <Header title={'Student Files'} desc={'View all patient files submitted by this student'} page={'Student Profile'} />

                <hr className="m-0" />

                <StudentCard student={student} />

                <StudentFiles id={studentID} />
            </div>
        </ProtectedRoute>
    );
}