"use client";

import { useEffect, useState, useContext } from "react";
import axios from "axios";
import ViewGeneralForm from "../ViewGeneralForm";
import ViewPeriodonticsPage1 from "../Periodontics/ViewPeriodonticsPage1";
import ViewPeriodonticsPage2 from "../Periodontics/ViewPeriodonticsPage2";
import ViewPeriodonticsPage3 from "../Periodontics/ViewPeriodonticsPage3";
import ViewPeriodonticsPage4 from "../Periodontics/ViewPeriodonticsPage4";
import ViewEndodonticsFile from "../Endodontics/ViewEndodonticsFile";
import { StatesContext } from "../../Contexts/StatesContext";
import { PatientInfoContext } from "../../Contexts/PatientInfoContext";
import { UsersContext } from "@/app/Contexts/UsersContext";
import { useRouter } from "next/navigation";
import ViewPeriodonticsPage5 from "../Periodontics/ViewPeriodonticsPage5";

export default function DoctorsViewFile({ fileId }) {
    const { state, setState } = useContext(StatesContext);
    const { currentUser } = useContext(UsersContext);

    const { file, setFile, isLoading, setIsLoading } = useContext(PatientInfoContext);
    const [grade, setGrade] = useState({ score: 0, feedback: "" });
    const [loading, setLoading] = useState(true);

    const router = useRouter();

    useEffect(() => {
        if (!fileId) return;

        const fetchFile = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://oralink.runasp.net/api/file/${fileId}`);
                const data = response.data;

                const parsedFile = {
                    ...data,
                    departmentData: data.departmentData ? JSON.parse(data.departmentData) : null,
                    medicalHistory: data.medicalHistory ? JSON.parse(data.medicalHistory) : null,
                    dentalHistory: data.dentalHistory ? JSON.parse(data.dentalHistory) : null,
                    treatmentProcedures: data.treatmentProcedures ? JSON.parse(data.treatmentProcedures) : [],
                    grade: data.doctorGrade !== null && data.doctorGrade !== undefined ? Number(data.doctorGrade) : 0,
                    feedback: data.feedBack ?? ""
                };
                setFile(parsedFile);
                setGrade({ score: parsedFile.doctorGrade, feedback: parsedFile.feedBack });
            } catch (error) {
                console.error("Error fetching file:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFile();
    }, [fileId, setFile]);

    const canEditGrade = currentUser?.role === "Head of Department";
    const canAddGrade = currentUser?.role === "Head of Department" || currentUser?.role === "Doctor";

    async function handleSubmit(e) {
        e.preventDefault();
        if (!canAddGrade && !canEditGrade) return;

        try {
            setIsLoading(true);
            await axios.patch(
                `https://oralink.runasp.net/api/file/${fileId}/grade`,
                {
                    grade: grade.score,
                    feedback: grade.feedback
                }
            );
            setFile({ ...file, grade: grade.score, feedback: grade.feedback });
            alert("Grade saved successfully!");
            router.back();

        } catch (error) {
            console.error("Error saving grade:", error);
        } finally {
            setIsLoading(false);
        }
    }

    if (loading) {
        return (
            <div className="d-flex justify-content-center py-5">
                <div className="spinner-border text-primary"></div>
            </div>
        );
    }

    if (!file) {
        return <div className="text-center py-5">File not found</div>;
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
        <div className="row">
            <h4 className="d-block d-md-none text-center text-primary mt-2">
                Student Name: {file?.student?.name}
            </h4>
            <div className="col-md-8">
                {file?.department === 'Periodontics' ?
                    state === 1 ? <ViewGeneralForm />
                        : state === 2 ? <ViewPeriodonticsPage1 />
                            : state === 3 ? <ViewPeriodonticsPage2 />
                                : state === 4 ? <ViewPeriodonticsPage3 />
                                    : state === 5 ? <ViewPeriodonticsPage4 />
                                        : <ViewPeriodonticsPage5 />
                    : file?.department === 'Endodontics' ?
                        state === 1 ? <ViewGeneralForm /> : <ViewEndodonticsFile />
                        : <></>
                }

                {(file?.department === "Periodontics" || file?.department === "Endodontics") &&
                    <div className="d-flex justify-content-between m-3">
                        {state === 1 ? <div></div> : <button className="btn btn-primary" onClick={() => setState(state - 1)}>Back</button>}
                        {((file.department === "Periodontics" && state < 6) || (file.department === "Endodontics" && state < 2)) &&
                            <button className="btn btn-primary" onClick={() => setState(state + 1)}>Next</button>
                        }
                    </div>
                }
            </div>

            <div className="col-md-4 d-lg-block">
                {((file?.doctorGrade !== null && canEditGrade) || (file?.doctorGrade === null && canAddGrade)) ?
                    (
                        <form className="position-sticky top-0 d-flex flex-column bg-white border border-primary rounded shadow p-4 w-sm-25 my-4" onSubmit={handleSubmit}>
                            <p className="d-flex align-items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-6 h-6 text-primary" aria-hidden="true"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
                                Grading Panel
                            </p>

                            <ReadOnlyTextField label={"Name"} value={file.student.name} />

                            <div className="mb-3">
                                <label className="form-label">Grade (0-100)*</label>
                                <input type="number" className="form-control" placeholder="Enter score" value={grade.score || 0} onChange={(e) => {
                                    if (!canAddGrade && !canEditGrade) return;
                                    const value = Number(e.target.value);
                                    if (value >= 0 && value <= 100) setGrade({ ...grade, score: value });
                                }} required />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Feedback & Comments *</label>
                                <textarea className="form-control" placeholder="Provide constructive feedback for the student..." value={grade.feedback || ""} onChange={(e) => {
                                    if (!canAddGrade && !canEditGrade) return;
                                    setGrade({ ...grade, feedback: e.target.value });
                                }} style={{ height: "130px", resize: "none" }}></textarea>
                            </div>

                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary d-flex justify-content-center align-items-center w-50 gap-1" disabled={!canAddGrade && !canEditGrade || isLoading}>
                                    {isLoading ? (
                                        <div className="d-flex align-items-center gap-1">
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Saving...
                                        </div>
                                    ) : (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-6 h-6 text-blue-600" aria-hidden="true"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
                                            Save Grade
                                        </>
                                    )
                                    }
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="position-sticky top-0 d-flex flex-column bg-white border border-primary rounded shadow p-4 w-sm-25 my-4">
                            <p className="d-flex align-items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-6 h-6 text-primary" aria-hidden="true"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
                                Grading Panel
                            </p>
                            <ReadOnlyTextField label={"Name"} value={file.student.name} />
                            <ReadOnlyTextField label={"Grade (0-100)"} value={file.doctorGrade} />
                            <ReadOnlyTextField label={"Feedback & Comments"} value={file.feedBack} />
                        </div>
                    )
                }
            </div>
        </div >
    );
}