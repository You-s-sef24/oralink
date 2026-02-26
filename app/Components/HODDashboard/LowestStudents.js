"use client";

import { useContext } from "react";
import { UsersContext } from "../../Contexts/UsersContext";

export default function LowestStudents() {
    const { stats } = useContext(UsersContext);

    const lowestStudents = stats.lowestStudents;
    if (!lowestStudents || lowestStudents.length === 0) {
        return (
            <div className="text-center text-muted mt-3">
                No student data available.
            </div>
        );
    }

    return (
        <div className="shadow border rounded bg-white p-4">
            <div className="h4 d-flex justify-content-between align-items-center text-danger fw-bold mb-3">
                Lowest Students
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                    fill="currentColor" viewBox="0 0 24 24" >
                    <path d="M15.71 9.29a.996.996 0 0 0-1.41 0l-4.29 4.29-6.3-6.29L2.3 8.7l7 7c.2.2.45.29.71.29s.51-.1.71-.29l4.29-4.29 3.29 3.29-2.29 2.29h6v-6l-2.29 2.29-4-4Z"></path>
                </svg></div>
            <div className="table-responsive">
                <table className="table table-hover align-middle text-center mb-0">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Student Name</th>
                            <th scope="col">Average Grade</th>
                            <th scope="col">Total Files</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lowestStudents.map((student, index) => (
                            <tr key={student.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{student.name}</td>
                                <td>{student.avgGrade.toFixed(2)}/100</td>
                                <td>{student.totalFiles}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
