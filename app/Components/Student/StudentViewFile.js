"use client";

import Header from "@/app/Components/General/Header";
import { UsersContext } from "@/app/Contexts/UsersContext";
import { useContext, useEffect, useState } from "react";
import ViewGeneralForm from "../ViewGeneralForm";
import { PatientInfoContext } from "../../Contexts/PatientInfoContext";
import { StatesContext } from "../../Contexts/StatesContext";
import ViewPeriodonticsPage1 from "../Periodontics/ViewPeriodonticsPage1";
import ViewPeriodonticsPage2 from "../Periodontics/ViewPeriodonticsPage2";
import ViewPeriodonticsPage3 from "../Periodontics/ViewPeriodonticsPage3";
import ViewPeriodonticsPage4 from "../Periodontics/ViewPeriodonticsPage4";
import ViewEndodonticsFile from "../Endodontics/ViewEndodonticsFile";
import Loading from "../../loading";
import { useParams } from "next/navigation";
import axios from "axios";
import SubmitModal from "../General/SubmitModal";
import ViewPeriodonticsPage5 from "../Periodontics/ViewPeriodonticsPage5";

export default function StudentViewFile() {
    const { fileId } = useParams();
    const { token } = useContext(UsersContext);
    const { file, setFile, submitModal, setSubmitModal } = useContext(PatientInfoContext);
    const { state, setState } = useContext(StatesContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const safeParseJSON = (value) => {
        if (!value || typeof value !== "string") return value;

        try {
            return JSON.parse(value);
        } catch (error) {
            console.error("JSON parse error:", error);
            return null;
        }
    };

    useEffect(() => {
        async function fetchFile() {
            if (!token) {
                setError("Authentication required");
                setLoading(false);
                return;
            }

            if (!fileId) {
                setError("File ID is required");
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                setError(null);
                setState(1);

                const res = await axios.get(
                    `https://oralink.runasp.net/api/patient-files/${fileId}/get-by-id`,
                    {
                        headers: {
                            'ngrok-skip-browser-warning': 'true',
                            'Content-Type': 'application/json',
                        }
                    }
                );

                const fetchedFile = res.data?.data || res.data;

                if (fetchedFile) {
                    const normalizedFile = {
                        ...fetchedFile,
                        departmentData: safeParseJSON(fetchedFile.departmentData),
                        medicalHistory: safeParseJSON(fetchedFile.medicalHistory),
                        dentalHistory: safeParseJSON(fetchedFile.dentalHistory),
                    };

                    setFile(normalizedFile);
                } else {
                    setError("File not found");
                }

            } catch (err) {
                console.error("Error fetching file:", err);

                if (err.res?.status === 401) {
                    setError("Session expired. Please login again.");
                } else if (err.res?.status === 403) {
                    setError("You don't have permission to view this file.");
                } else if (err.res?.status === 404) {
                    setError("File not found.");
                } else {
                    setError(err.res?.data?.message || "Failed to load file. Please try again.");
                }

                setFile(null);
            } finally {
                setLoading(false);
            }
        }

        fetchFile();
    }, [fileId, token, setFile, setState]);

    if (loading) {
        return <Loading />;
    }

    if (!file) {
        return (
            <div className="container-fluid pt-5">
                <div className="text-center mt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted mb-3">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="8" y1="13" x2="16" y2="13"></line>
                        <line x1="8" y1="17" x2="16" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    <h5 className="text-muted mb-3">File Not Found</h5>
                    <p className="text-muted mb-4">The requested patient file could not be found.</p>
                    <button
                        className="btn btn-primary"
                        onClick={() => window.history.back()}
                    >
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    const ReadOnlyTextField = ({ label, value }) => (
        <div className="mb-2">
            <label className="form-label fw-semibold">{label}</label>
            <p
                className="border rounded px-2 py-2 bg-light"
                style={{
                    minHeight: "75px",
                    whiteSpace: "pre-wrap",
                    marginBottom: 0
                }}
            >
                {value || "-"}
            </p>
        </div>
    );

    return (
        <div className="container-fluid">
            <Header title={'Patient File'} desc={'View and Edit Patient File'} page={'Patient File'} file={file} setFile={setFile} />

            <hr className="mt-0" />

            {
                file.department === 'Periodontics' ?
                    state === 1 ? <ViewGeneralForm />
                        : state === 2 ? <ViewPeriodonticsPage1 />
                            : state === 3 ? <ViewPeriodonticsPage2 />
                                : state === 4 ? <ViewPeriodonticsPage3 />
                                    : state === 5 ? < ViewPeriodonticsPage4 />
                                        : <ViewPeriodonticsPage5 />
                    : file.department === 'Endodontics' ?
                        state === 1 ?
                            <ViewGeneralForm />
                            :
                            <ViewEndodonticsFile />
                        : <></>
            }
            {file.doctorGrade && (
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column bg-white border border-primary rounded shadow p-4 my-2 w-50">
                        <p className="d-flex align-items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-6 h-6 text-primary" aria-hidden="true"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
                            Grade & Feedback
                        </p>
                        <ReadOnlyTextField label={"Grade (0-100)"} value={file.doctorGrade} />
                        <ReadOnlyTextField label={"Feedback & Comments"} value={file.feedBack} />
                    </div>
                </div>
            )}
            {
                file.department === "Periodontics" ?
                    <div className="d-flex justify-content-between m-3">
                        {state === 1 ? <div></div> : <button className="btn btn-primary" onClick={() => { setState(state - 1) }}>Back</button>}
                        {state === 6 ? <div></div> : <button className="btn btn-primary" onClick={() => { setState(state + 1) }}>Next</button>}
                    </div>
                    : file.department === "Endodontics" ?
                        <div className="d-flex justify-content-between m-3">
                            {state === 1 ? <div></div> : <button className="btn btn-primary" onClick={() => { setState(state - 1) }}>Back</button>}
                            {state === 2 ? <div></div> : <button className="btn btn-primary" onClick={() => { setState(state + 1) }}>Next</button>}
                        </div>
                        : <div className="d-flex justify-content-between m-3">
                        </div>
            }
            {submitModal ? <SubmitModal show={submitModal} isClose={() => setSubmitModal(false)} file={file} setFile={setFile} /> : ''}
        </div>
    );
}