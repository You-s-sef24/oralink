"use client";

import Link from "next/link";
import { useContext } from "react";
import { PatientInfoContext } from "../../Contexts/PatientInfoContext";
import { UsersContext } from "../../Contexts/UsersContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import { UIContext } from "@/app/Contexts/UIContext";

export default function Header({ title, desc, page }) {
    const { setIsEditing, isEditing, setSubmitModal, file, setFile, setIsLoading, isLoading, formErrors, setFormErrors, validateFile } = useContext(PatientInfoContext);
    const { currentUser } = useContext(UsersContext);
    const { setShowEditAdminModal } = useContext(UIContext);
    const router = useRouter();

    async function handleEdit() {
        if (!currentUser?.id) {
            alert("You must be logged in to edit.");
            return;
        }

        if (!isEditing) {
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

        try {
            setIsLoading(true);
            const formData = new FormData();

            // append simple & nested fields
            Object.entries(file).forEach(([key, value]) => {
                if (key === "prePatientImage" || key === "postPatientImage" || key === "xRay") {
                    if (value instanceof File) {
                        const fieldMap = {
                            prePatientImage: "PrePatientImage",
                            postPatientImage: "PostPatientImage",
                            xRay: "XRay"
                        };
                        formData.append(fieldMap[key], value);
                    }
                    // skip if it's a URL string — backend keeps existing image
                } else if (typeof value === "object" && value !== null) {
                    formData.append(key, JSON.stringify(value));
                } else {
                    formData.append(key, value ?? "");
                }
            });

            formData.append("studentId", currentUser.id);
            formData.append("updatedDate", new Date().toISOString());

            console.log("Updating file with data:", formData);

            const res = await axios.put(
                `https://oralink.runasp.net/api/patient-files/${file.fileId}/update`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            const updatedFile = res.data?.data || res.data;

            setFile(prev => ({
                ...prev,
                ...updatedFile
            }));

            console.log("------ FORM DATA START ------");
            for (let pair of formData.entries()) {
                console.log(pair[0], pair[1]);
            }
            console.log("------ FORM DATA END ------");

            alert("File updated successfully!");
            setIsEditing(false);

        } catch (err) {
            console.error(err.response?.data || err);
            alert(err.response?.data?.message || "Failed to update file");
        }
        setIsLoading(false);
    }

    function handleSubmit() {
        setSubmitModal(true);
    }

    return (
        <div className="p-4">
            {page === "Student Profile" ? (
                <button className="d-flex align-items-center text-decoration-none text-primary mb-2 btn p-0" onClick={() => { router.replace('/students') }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className="lucide lucide-chevron-left w-4 h-4" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg>
                    Back to Students List
                </button>
            ) : ''}

            <div className="d-flex align-items-center justify-content-between">
                <div>
                    <h3>{title}</h3>
                    <p className="m-0">{page === "Patient File" ? `File Id: ${file?.fileId}` : desc}</p>
                </div>

                {page === "Admin" ? (
                    <div>
                        <button className="btn btn-primary d-flex gap-1" onClick={() => { setShowEditAdminModal(true) }}>
                            <i className="bi bi-pencil"></i>
                            Edit Profile
                        </button>
                    </div>
                ) : ('')
                }

                {page === "Patient File" && !file.isSubmitted ?
                    <div className="d-flex gap-2">
                        {isEditing ? (
                            <button className={`btn btn-secondary`} onClick={() => { setIsEditing(false) }} disabled={isLoading}>
                                Cancel
                            </button>
                        ) : ''}

                        <button className={`btn ${isEditing ? 'btn-primary' : 'btn-secondary'} `} onClick={handleEdit} disabled={isLoading}>
                            {isEditing ?
                                <>
                                    {isLoading ?
                                        <div className="d-flex align-items-center gap-1">
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Saving Changes
                                        </div>
                                        : <div className="d-flex gap-1">
                                            <i className="bi bi-floppy"></i> Save Changes
                                        </div>}
                                </>
                                : <><i className="bi bi-pencil"></i> Edit File</>}
                        </button>

                        {isEditing ? '' :
                            <button className="btn btn-primary" onClick={handleSubmit}>
                                <i className="bi bi-upload"></i> Submit File
                            </button>
                        }
                    </div>
                    : ''
                }
            </div>
        </div>
    );
}