"use client";

import { useContext, use } from "react";
import Header from "@/app/Components/General/Header";
// import StudentCard from "@/app/Components/StudentCard";
// import StudentFiles from "@/app/Components/General/StudentFiles";
// import { UsersContext } from "@/app/Contexts/UsersContext";
import { useParams } from "next/navigation";

export default function StudentProfile() {
    const { studentID } = useParams();
    // const { users } = useContext(UsersContext);
    // const student = users.find(user => Number(user.id) === Number(studentID));

    return (
        <div className="container-fluid">
            <Header title={'Student Files'} desc={'View all patient files submitted by this student'} page={'Student Profile'} />

            <hr className="m-0" />

            {/* <StudentCard student={student} />

            <StudentFiles student={student} /> */}
        </div>
    );
}