"use client";

import { useContext, useRef } from "react";
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
    const router = useRouter();

    const originalPreImages = useRef([]);
    const originalPostImages = useRef([]);

    async function handleEdit() {
        if (!currentUser?.id) {
            alert("You must be logged in to edit.");
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
            alert("Submitted files cannot be edited.");
            return;
        }

        const newErrors = validateFile(file);
        const procedures = typeof file.treatmentProcedures === "string"
            ? JSON.parse(file.treatmentProcedures || "[]")
            : file.treatmentProcedures || [];

        const lastProc = procedures[procedures.length - 1];
        if (lastProc?.status === "pending") {
            if (!lastProc.title?.trim()) newErrors.procedureTitle = "Procedure title is required";
            if (!lastProc.desc?.trim()) newErrors.procedureDesc = "Procedure description is required";
            if (!lastProc.date?.trim()) newErrors.procedureDate = "Procedure date is required";
        }

        setFormErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;

        const fileId = file.fileId ?? file.id;
        if (!fileId) {
            alert("Cannot save: file ID is missing.");
            return;
        }

        try {
            setIsLoading(true);
            const formData = new FormData();

            const updatedDepartmentData = file.department === "Periodontics"
                ? { ...(file.departmentData ?? {}), periodontalChart: periodonticsData.periodontalChart }
                : file.departmentData;

            const fileToSave = { ...file, departmentData: updatedDepartmentData };

            Object.entries(fileToSave).forEach(([key, value]) => {
                if (["prePatientImage", "postPatientImage", "xRay", "fileId", "id"].includes(key)) return;
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

            alert("File updated successfully!");
            setIsEditing(false);

        } catch (err) {
            console.error(err.response?.data || err);
            alert(err.response?.data?.message || "Failed to update file");
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
        <div className="p-4">
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

            <div className="d-flex align-items-center justify-content-between">
                <div>
                    <h3>{title}</h3>
                    <p className="m-0">
                        {page === "Patient File" ? `File Id: ${file?.fileId ?? file?.id}` : desc}
                    </p>
                </div>

                {page === "Admin" && (
                    <button className="btn btn-primary d-flex gap-1" onClick={() => setShowEditAdminModal(true)}>
                        <i className="bi bi-pencil" /> Edit Profile
                    </button>
                )}

                {page === "Patient File" && !file.isSubmitted && (
                    <div className="d-flex gap-2">
                        {isEditing && (
                            <button className="btn btn-secondary" onClick={handleCancel} disabled={isLoading}>
                                Cancel
                            </button>
                        )}

                        <button
                            className={`btn ${isEditing ? "btn-primary" : "btn-secondary"}`}
                            onClick={handleEdit}
                            disabled={isLoading}
                        >
                            {isEditing ? (
                                isLoading ? (
                                    <div className="d-flex align-items-center gap-1">
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
                                        Saving Changes
                                    </div>
                                ) : (
                                    <div className="d-flex gap-1">
                                        <i className="bi bi-floppy" /> Save Changes
                                    </div>
                                )
                            ) : (
                                <><i className="bi bi-pencil" /> Edit File</>
                            )}
                        </button>

                        {!isEditing && (
                            <button className="btn btn-primary" onClick={() => setSubmitModal(true)}>
                                <i className="bi bi-upload" /> Submit File
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}