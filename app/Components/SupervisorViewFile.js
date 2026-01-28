"use client";

import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../Contexts/UsersContext";
import ViewGeneralForm from "./ViewGeneralForm";
import ViewPeriodonticsPage1 from "./Periodontics/ViewPeriodonticsPage1";
import ViewPeriodonticsPage2 from "./Periodontics/ViewPeriodonticsPage2";
import ViewPeriodonticsPage3 from "./Periodontics/ViewPeriodonticsPage3";
import ViewPeriodonticsPage4 from "./Periodontics/ViewPeriodonticsPage4";
import ViewEndodonticsFile from "./Endodontics/ViewEndodonticsFile";
import { StatesContext } from "../Contexts/StatesContext";
import { PatientInfoContext } from "../Contexts/PatientInfoContext";
import { useRouter } from "next/navigation";

export default function SupervisorViewFile({ fileId }) {
    const { users } = useContext(UsersContext);
    const { state, setState } = useContext(StatesContext);
    const { file, setFile } = useContext(PatientInfoContext);
    const [grade, setGrade] = useState({ score: 0, feedback: "" });
    const router = useRouter();

    function handleSubmit(e) {
        e.preventDefault();
        if (grade.score !== "") {
            setFile(prev => ({
                ...prev,
                grade: grade.score,
                feedback: grade.feedback
            }));
            router.push(`/students/${file.studentId}`);
        }
    }

    useEffect(() => {
        if (!users?.length || !fileId) return;

        const foundFile = users.flatMap(user => user.files || []).find(file => Number(file.fileId) === Number(fileId));
        setFile(foundFile);
        console.log(foundFile);
    }, [users, fileId]);

    useEffect(() => {
        if (!file) return;

        setGrade({
            score: file.grade ?? 0,
            feedback: file.feedback ?? ""
        });
    }, [file]);


    return (
        <div className="row">
            <div className="col-md-8">
                {
                    file?.department === 'Periodontics' ?
                        state === 1 ?
                            <ViewGeneralForm />
                            : state === 2 ?
                                <ViewPeriodonticsPage1 />
                                : state === 3 ? <ViewPeriodonticsPage2 />
                                    : state === 4 ? <ViewPeriodonticsPage3 />
                                        : <ViewPeriodonticsPage4 />
                        : file?.department === 'Endodontics' ?
                            state === 1 ?
                                <ViewGeneralForm />
                                :
                                <ViewEndodonticsFile />
                            : <></>
                }
                {
                    file?.department === "Periodontics" ?
                        <div className="d-flex justify-content-between m-3">
                            {state === 1 ? <div></div> : <button className="btn btn-primary" onClick={() => { setState(state - 1) }}>Back</button>}
                            {state === 5 ? <div></div> : <button className="btn btn-primary" onClick={() => { setState(state + 1) }}>Next</button>}
                        </div>
                        : file?.department === "Endodontics" ?
                            <div className="d-flex justify-content-between m-3">
                                {state === 1 ? <div></div> : <button className="btn btn-primary" onClick={() => { setState(state - 1) }}>Back</button>}
                                {state === 2 ? <div></div> : <button className="btn btn-primary" onClick={() => { setState(state + 1) }}>Next</button>}
                            </div>
                            : <div className="d-flex justify-content-between m-3">
                            </div>
                }
            </div>
            <div className="col-md-4 d-lg-block">
                <form className="position-sticky top-0 d-flex flex-column bg-white border border-primary rounded shadow p-4 w-sm-25 my-4" onSubmit={handleSubmit}>
                    <p className="d-flex align-items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-6 h-6 text-primary" aria-hidden="true"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
                        Grading Panel
                    </p>

                    <div className="mb-3">
                        <label className="form-label">Grade (0-100)*</label>
                        <input type="number" className="form-control" placeholder="Enter score" value={grade.score} onChange={(e) => {
                            const value = Number(e.target.value);
                            if (value >= 0 && value <= 100) {
                                setGrade({ ...grade, score: value });
                            }
                        }
                        } required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Feedback & Comments *</label>
                        <textarea className="form-control" placeholder="Provide constructive feedback for the student..." value={grade.feedback} onChange={(e) => {
                            setGrade({ ...grade, feedback: e.target.value });
                        }} style={{ height: "130px", resize: "none" }}></textarea>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary d-flex justify-content-center align-items-center w-50 gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-6 h-6 text-blue-600" aria-hidden="true"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
                            Save Grade
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}