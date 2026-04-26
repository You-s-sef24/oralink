"use client";

import { useContext, useRef, useState } from "react";
import { PatientInfoContext } from "../../Contexts/PatientInfoContext";
import { UsersContext } from "../../Contexts/UsersContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import { UIContext } from "@/app/Contexts/UIContext";

function safeParseJSON(value) {
    if (!value || typeof value !== "string") return value;
    try { return JSON.parse(value); } catch { return null; }
}

export default function Header({ title, desc, page }) {
    const {
        setIsEditing, isEditing,
        setSubmitModal,
        file, setFile,
        setIsLoading, isLoading,
        setFormErrors, validateFile,
        periodonticsData, setPeriodonticsData,
    } = useContext(PatientInfoContext);

    const { currentUser } = useContext(UsersContext);
    const { setShowEditAdminModal } = useContext(UIContext);
    const [toast, setToast] = useState({ show: false, msg: "", type: "success" });
    const router = useRouter();

    const originalPreImages = useRef([]);
    const originalPostImages = useRef([]);

    function showToast(msg, type = "success") {
        setToast({ show: true, msg, type });
        setTimeout(() => setToast({ show: false, msg: "", type: "success" }), 3000);
    }

    async function handleEdit() {
        if (!currentUser?.id) {
            showToast("You must be logged in to edit.");
            return;
        }

        if (!isEditing) {
            originalPreImages.current = (file.prePatientImage ?? []).filter(img => typeof img === "string");
            originalPostImages.current = (file.postPatientImage ?? []).filter(img => typeof img === "string");

            if (file?.departmentData?.periodontalChart) {
                setPeriodonticsData((prev) => ({
                    ...prev,
                    periodontalChart: file.departmentData.periodontalChart,
                }));
            }
            setIsEditing(true);
            return;
        }

        if (file.isSubmitted) {
            showToast("Submitted files cannot be edited.");
            return;
        }

        let updatedFile = { ...file };

        const newErrors = validateFile(updatedFile);
        setFormErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;

        const fileId = updatedFile.fileId ?? updatedFile.id;
        if (!fileId) {
            showToast("Cannot save: file ID is missing.");
            return;
        }

        try {
            setIsLoading(true);
            const formData = new FormData();

            const updatedDepartmentData = updatedFile.department === "Periodontics"
                ? { ...(updatedFile.departmentData ?? {}), periodontalChart: periodonticsData.periodontalChart }
                : updatedFile.departmentData;

            const fileToSave = {
                ...updatedFile,
                departmentData: updatedDepartmentData,
            };

            const EXCLUDED_KEYS = ["prePatientImage", "postPatientImage", "xRay", "fileId", "id", "steps", "treatmentProcedures"];

            Object.entries(fileToSave).forEach(([key, value]) => {
                if (EXCLUDED_KEYS.includes(key)) return;
                if (typeof value === "object" && value !== null) {
                    formData.append(key, JSON.stringify(value));
                } else {
                    formData.append(key, value ?? "");
                }
            });

            const currentPreImages = Array.isArray(fileToSave.prePatientImage)
                ? fileToSave.prePatientImage
                : fileToSave.prePatientImage ? [fileToSave.prePatientImage] : [];

            const currentPostImages = Array.isArray(fileToSave.postPatientImage)
                ? fileToSave.postPatientImage
                : fileToSave.postPatientImage ? [fileToSave.postPatientImage] : [];

            currentPreImages.forEach((img) => {
                if (img instanceof File) formData.append("PrePatientImages", img);
            });

            currentPostImages.forEach((img) => {
                if (img instanceof File) formData.append("PostPatientImages", img);
            });

            const keptPreUrls = new Set(currentPreImages.filter(img => typeof img === "string"));
            const keptPostUrls = new Set(currentPostImages.filter(img => typeof img === "string"));
            const deletedPreUrls = originalPreImages.current.filter(url => !keptPreUrls.has(url));
            const deletedPostUrls = originalPostImages.current.filter(url => !keptPostUrls.has(url));

            if (deletedPreUrls.length > 0)
                formData.append("DeletedPreImageUrls", deletedPreUrls.join(","));
            if (deletedPostUrls.length > 0)
                formData.append("DeletedPostImageUrls", deletedPostUrls.join(","));

            if (fileToSave.xRay instanceof File) {
                formData.append("XRay", fileToSave.xRay);
            }

            formData.append("studentId", currentUser.id);
            formData.append("updatedDate", new Date().toISOString());

            const res = await axios.put(
                `https://oralink.runasp.net/api/patient-files/${fileId}/update`,
                formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            );

            const raw = res.data?.data || res.data;

            const normalizedFile = {
                ...fileToSave,
                fileId: fileId,
                prePatientImage: raw?.prePatientImages?.length ? raw.prePatientImages : currentPreImages,
                postPatientImage: raw?.postPatientImages?.length ? raw.postPatientImages : currentPostImages,
                departmentData: safeParseJSON(raw?.departmentData) ?? updatedDepartmentData,
                medicalHistory: safeParseJSON(raw?.medicalHistory) ?? file.medicalHistory,
                dentalHistory: safeParseJSON(raw?.dentalHistory) ?? file.dentalHistory,
                steps: file.steps ?? [],
            };

            setFile(normalizedFile);

            originalPreImages.current = [];
            originalPostImages.current = [];

            if (file.department === "Periodontics" && normalizedFile.departmentData?.periodontalChart) {
                setPeriodonticsData((prev) => ({
                    ...prev,
                    periodontalChart: normalizedFile.departmentData.periodontalChart,
                }));
            }

            showToast("File updated successfully!");
            setIsEditing(false);

        } catch (err) {
            console.error(err.response?.data || err);
            showToast(err.response?.data?.message || "Failed to update file");
        } finally {
            setIsLoading(false);
        }
    }

    function handleCancel() {
        originalPreImages.current = [];
        originalPostImages.current = [];

        if (file?.departmentData?.periodontalChart) {
            setPeriodonticsData((prev) => ({
                ...prev,
                periodontalChart: file.departmentData.periodontalChart,
            }));
        }
        setIsEditing(false);
    }

    return (
        <div className={page === "Patient File" ? "py-4" : "p-4"}>
            {page === "Student Profile" && (
                <button
                    className="d-flex align-items-center text-decoration-none text-primary mb-2 btn p-0"
                    onClick={() => router.replace("/students")}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                    Back to Students List
                </button>
            )}

            {page !== "Patient File" ? (
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <h3>{title}</h3>
                        <p className="m-0">{desc}</p>
                    </div>
                    {page === "Admin" && (
                        <button className="btn btn-primary d-flex gap-1" onClick={() => setShowEditAdminModal(true)}>
                            <i className="bi bi-pencil" /> Edit Profile
                        </button>
                    )}
                </div>
            ) : (
                <div className="px-4">
                    <div>

                        <div className="d-flex align-items-start justify-content-between gap-3 flex-wrap mb-3">
                            <div className="d-flex align-items-center gap-3">
                                <div
                                    className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 bg-primary bg-opacity-10 text-primary fw-medium"
                                    style={{ width: 48, height: 48, fontSize: 15 }}
                                >
                                    {file?.patientName?.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase() || "?"}
                                </div>
                                <div>
                                    <p className="mb-0 text-muted" style={{ fontSize: 12 }}>Patient File</p>
                                    <h5 className="mb-0 fw-medium">{file?.patientName || "—"}</h5>
                                    <p className="mb-0 text-muted" style={{ fontSize: 12 }}>
                                        File ID: {file?.fileId ?? file?.id}
                                        {file?.department && <> &nbsp;·&nbsp; {file.department}</>}
                                    </p>
                                </div>
                            </div>

                            {!file.isSubmitted && currentUser.role === "Student" && (
                                <div className="d-flex gap-2 align-items-center flex-wrap">
                                    {isEditing && (
                                        <button className="btn btn-secondary btn-sm" onClick={handleCancel} disabled={isLoading}>
                                            Cancel
                                        </button>
                                    )}
                                    <button
                                        className={`btn btn-sm ${isEditing ? "btn-primary" : "btn-outline-secondary"}`}
                                        onClick={handleEdit}
                                        disabled={isLoading}
                                    >
                                        {isEditing ? (
                                            isLoading ? (
                                                <span className="d-flex align-items-center gap-1">
                                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                                                    Saving...
                                                </span>
                                            ) : (
                                                <span className="d-flex align-items-center gap-1">
                                                    <i className="bi bi-floppy" /> Save Changes
                                                </span>
                                            )
                                        ) : (
                                            <span className="d-flex align-items-center gap-1">
                                                <i className="bi bi-pencil" /> Edit File
                                            </span>
                                        )}
                                    </button>
                                    {!isEditing && (
                                        <button className="btn btn-primary btn-sm d-flex align-items-center gap-1" onClick={() => setSubmitModal(true)}>
                                            <i className="bi bi-upload" /> Submit File
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="row g-2 mt-1">
                            <div className="col-sm-6 col-md-auto d-flex align-items-center gap-1 text-muted" style={{ fontSize: 12 }}>
                                <i className="bi bi-calendar-plus" style={{ fontSize: 13 }} />
                                <span>Created</span>
                                <span className="text-dark fw-medium ms-1">{file?.creationDate?.split("T")[0] || "—"}</span>
                            </div>

                            <div className="col-sm-6 col-md-auto d-flex align-items-center gap-1 text-muted" style={{ fontSize: 12 }}>
                                {file?.isSubmitted ? (
                                    <>
                                        <i className="bi bi-calendar-check" style={{ fontSize: 13 }} />
                                        <span>Submitted</span>
                                        <span className="text-dark fw-medium ms-1">{file?.submittedDate?.split("T")[0] || "—"}</span>
                                    </>
                                ) : (
                                    <>
                                        <i className="bi bi-clock" style={{ fontSize: 13 }} />
                                        <span>Not submitted yet</span>
                                    </>
                                )}
                            </div>

                            {file?.student?.name && (
                                <div className="col-6 col-md-auto d-flex align-items-center gap-1 text-muted" style={{ fontSize: 12 }}>
                                    <i className="bi bi-person" style={{ fontSize: 13 }} />
                                    <span>Student</span>
                                    <span className="text-dark fw-medium ms-1">{file.student.name}</span>
                                </div>
                            )}

                            {file?.isSubmitted && (
                                <div className="col-6 col-md-auto d-flex align-items-center">
                                    <span
                                        className="badge rounded-pill"
                                        style={{
                                            fontSize: 11,
                                            padding: "4px 10px",
                                            background: file.isLate ? "#FCEBEB" : "#EAF3DE",
                                            color: file.isLate ? "#A32D2D" : "#3B6D11",
                                        }}
                                    >
                                        <i className={`bi ${file.isLate ? "bi-clock-history" : "bi-check-circle"} me-1`} />
                                        {file.isLate ? "Late submission" : "On time"}
                                    </span>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            )}
            {toast.show && (
                <div
                    style={{
                        position: "fixed",
                        bottom: 24,
                        right: 24,
                        zIndex: 9999,
                        minWidth: 260,
                        maxWidth: 360,
                    }}
                >
                    <div className={`alert alert-${toast.type} d-flex align-items-center gap-2 shadow mb-0 py-2 px-3`} role="alert">
                        {toast.type === "success" ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                                <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                                <circle cx="12" cy="12" r="10" /><path d="m15 9-6 6M9 9l6 6" />
                            </svg>
                        )}
                        <span style={{ fontSize: 13 }}>{toast.msg}</span>
                        <button
                            className="btn-close ms-auto"
                            style={{ fontSize: 10 }}
                            onClick={() => setToast({ show: false, msg: "", type: "success" })}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}