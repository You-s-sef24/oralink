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
import DoctorViewProcedures from "./DoctorViewProcedures";

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
                    prePatientImage: data.prePatientImages ?? [],
                    postPatientImage: data.postPatientImages ?? [],
                    departmentData: data.departmentData ? JSON.parse(data.departmentData) : null,
                    medicalHistory: data.medicalHistory ? JSON.parse(data.medicalHistory) : null,
                    dentalHistory: data.dentalHistory ? JSON.parse(data.dentalHistory) : null,
                    treatmentProcedures: data.treatmentProcedures ? JSON.parse(data.treatmentProcedures) : [],
                    grade: data.doctorGrade !== null && data.doctorGrade !== undefined ? Number(data.doctorGrade) : 0,
                    feedback: data.feedBack ?? "",
                    gradedBy: data.gradedBy ?? ""
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
                    feedback: grade.feedback,
                    gradedBy: currentUser.name
                }
            );
            setFile({ ...file, grade: grade.score, feedback: grade.feedback, gradedBy: currentUser.name });
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
            <div className="col-md-8">
                {file?.department === 'Periodontics' ?
                    state === 1 ? <ViewGeneralForm />
                        : state === 2 ? <ViewPeriodonticsPage1 />
                            : state === 3 ? <ViewPeriodonticsPage2 />
                                : state === 4 ? <ViewPeriodonticsPage3 />
                                    : state === 5 ? <ViewPeriodonticsPage4 />
                                        : <DoctorViewProcedures />
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
                        <form
                            className="position-sticky top-0 bg-white border-0 rounded-4 shadow-sm p-4 my-4"
                            onSubmit={handleSubmit}
                        >

                            <div className="d-flex align-items-center gap-2 mb-3">
                                <div className="bg-primary bg-opacity-10 p-2 rounded-3">
                                    <i className="bi bi-award text-primary"></i>
                                </div>
                                <div>
                                    <h6 className="mb-0 fw-bold">Grading Panel</h6>
                                    <small className="text-muted">Evaluate student performance</small>
                                </div>
                            </div>

                            <hr />

                            <div className="mb-3">
                                <div className="p-2 rounded bg-light mb-2">
                                    <small className="text-muted">Student</small>
                                    <div className="fw-semibold">{file.student.name}</div>
                                </div>

                                <div className="p-2 rounded bg-light">
                                    <small className="text-muted">Graded By</small>
                                    <div className="fw-semibold">{file.gradedBy || "-"}</div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">
                                    Grade <span className="text-muted">(0 - 100)</span>
                                </label>

                                <input
                                    type="number"
                                    className="form-control form-control-lg text-center fw-bold"
                                    value={grade.score || 0}
                                    onChange={(e) => {
                                        if (!canAddGrade && !canEditGrade) return;
                                        const value = Number(e.target.value);
                                        if (value >= 0 && value <= 100) {
                                            setGrade({ ...grade, score: value });
                                        }
                                    }}
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="form-label fw-semibold">
                                    Feedback & Comments
                                </label>

                                <textarea
                                    className="form-control"
                                    placeholder="Write clear, constructive feedback..."
                                    value={grade.feedback || ""}
                                    onChange={(e) => {
                                        if (!canAddGrade && !canEditGrade) return;
                                        setGrade({ ...grade, feedback: e.target.value });
                                    }}
                                    style={{ height: "140px", resize: "none" }}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary w-100 d-flex justify-content-center align-items-center gap-2"
                                disabled={!canAddGrade && !canEditGrade || isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm"></span>
                                        Saving...
                                    </>
                                ) : (
                                    <>
                                        <i className="bi bi-check-circle"></i>
                                        Save Grade
                                    </>
                                )}
                            </button>

                        </form>
                    ) : (
                        <div className="position-sticky top-0 bg-white border-0 rounded-4 shadow-sm p-4 my-4">

                            <div className="d-flex align-items-center gap-2 mb-3">
                                <div className="bg-success bg-opacity-10 p-2 rounded-3">
                                    <i className="bi bi-award text-success"></i>
                                </div>
                                <div>
                                    <h6 className="mb-0 fw-bold">Final Evaluation</h6>
                                    <small className="text-muted">Submitted grading result</small>
                                </div>
                            </div>

                            <hr />

                            <div className="mb-3">
                                <small className="text-muted">Student</small>
                                <div className="fw-semibold">{file.student.name}</div>
                            </div>

                            <div className="mb-3">
                                <small className="text-muted">Graded By</small>
                                <div className="fw-semibold">{file.gradedBy}</div>
                            </div>

                            <div className="text-center my-4">
                                <div className="display-5 fw-bold text-primary">
                                    {file.doctorGrade}
                                </div>
                                <small className="text-muted">Final Score</small>
                            </div>

                            <div>
                                <small className="text-muted">Feedback</small>
                                <div className="bg-light p-3 rounded mt-1" style={{ whiteSpace: "pre-wrap" }}>
                                    {file.feedBack || "-"}
                                </div>
                            </div>

                        </div>
                    )
                }
            </div>
        </div >
    );
}