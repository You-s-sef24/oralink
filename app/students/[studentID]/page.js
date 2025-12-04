"use client";

import Header from "@/app/Components/Header";
import StudentCard from "@/app/Components/StudentCard";
import StudentFiles from "@/app/Components/StudentFiles";
import { UsersContext } from "@/app/Contexts/UsersContext";
import { useContext } from "react";

export default function StudentProfile({ params }) {
    const { studentID } = params;
    const { users } = useContext(UsersContext);
    const student = users.find(user => user.id === Number(studentID));

    return (
        <div className="container-fluid pt-5">
            <Header title={'Student Files'} desc={'View all patient files submitted by this student'} page={'Student Profile'} />

            <hr className="m-0" />

            <StudentCard student={student} />

            <StudentFiles student={student} />
        </div>
    );
}