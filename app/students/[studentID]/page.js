"use client";

import { useContext, use } from "react";
import Header from "@/app/Components/General/Header";
import StudentCard from "@/app/Components/StudentCard";
import StudentFiles from "@/app/Components/General/StudentFiles";
// import { UsersContext } from "@/app/Contexts/UsersContext";
import { useParams } from "next/navigation";

export default function StudentProfile() {
    const { studentID } = useParams();
    const students = [
        { id: 1, name: "dfdfd", email: "sdsds", files: [
            {
                fileId:1,
                patientName:"cddf",
                creationDate:"2022-2-2",
                grade:21
            }
        ] },
        { id: 2, name: "dgdgf", email: "hghgh", files: [] }
    ];
    const student = students.find(user => Number(user.id) === Number(studentID));

    return (
        <div className="container-fluid">
            <Header title={'Student Files'} desc={'View all patient files submitted by this student'} page={'Student Profile'} />

            <hr className="m-0" />

            <StudentCard student={student} />

            <StudentFiles student={student} />
        </div>
    );
}