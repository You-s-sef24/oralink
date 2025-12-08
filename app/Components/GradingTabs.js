"use client";

import { useContext } from "react";
import { UsersContext } from "../Contexts/UsersContext";
import PatientFiles from "./PatientFiles";

export default function GradingTabs() {
    const { totalFiles, gradedFiles, users } = useContext(UsersContext);

    return (
        <div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item w-50" role="presentation">
                    <button
                        className="nav-link active w-100"
                        id="ungradedFiles-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#ungradedFiles"
                        type="button"
                        role="tab"
                        aria-controls="ungradedFiles"
                        aria-selected="true"
                    >
                        Ungraded Files ({totalFiles - gradedFiles})
                    </button>
                </li>

                <li className="nav-item w-50" role="presentation">
                    <button
                        className="nav-link w-100"
                        id="gradedFiles-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#gradedFiles"
                        type="button"
                        role="tab"
                        aria-controls="gradedFiles"
                        aria-selected="false"
                    >
                        Graded Files ({gradedFiles})
                    </button>
                </li>
            </ul>

            <div className="tab-content">
                <div
                    className="tab-pane fade show active"
                    id="ungradedFiles"
                    role="tabpanel"
                    aria-labelledby="ungradedFiles-tab"
                >
                    <PatientFiles page={'ungraded'} />
                </div>

                <div
                    className="tab-pane fade"
                    id="gradedFiles"
                    role="tabpanel"
                    aria-labelledby="gradedFiles-tab"
                >
                    <PatientFiles page={'graded'} />
                </div>
            </div>
        </div>
    );
}
