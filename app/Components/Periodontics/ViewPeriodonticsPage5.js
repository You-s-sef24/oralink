"use client";

import { PatientInfoContext } from "@/app/Contexts/PatientInfoContext";
import { useContext, useState, useEffect } from "react";

export default function ViewPeriodonticsPage5() {
    const { file, setFile, isEditing } = useContext(PatientInfoContext);
    const [isAddingStep, setIsAddingStep] = useState(false);

    const proceduresRaw =
        typeof file?.treatmentProcedures === "string"
            ? (() => {
                try {
                    return JSON.parse(file.treatmentProcedures);
                } catch {
                    return [];
                }
            })()
            : file?.treatmentProcedures || [];

    const procedures = proceduresRaw.map((p) => ({
        ...p,
        status: p?.status || "pending",
    }));

    const lastStep = procedures[procedures.length - 1];
    const canAddStep = !isAddingStep && (
        procedures.length === 0 || lastStep?.status === "approved" || lastStep?.status === "rejected"
    );

    useEffect(() => {
        if (!isEditing) {
            setIsAddingStep(false);
        }
    }, [isEditing]);

    function handleNewStepChange(field, value) {
        setIsAddingStep(true);
        setFile((prev) => {
            const current =
                typeof prev.treatmentProcedures === "string"
                    ? JSON.parse(prev.treatmentProcedures || "[]")
                    : prev.treatmentProcedures || [];

            const last = current[current.length - 1];
            let updated;

            if (!last || last.status === "approved") {
                // Append new step
                updated = [...current, { title: "", desc: "", date: "", status: "pending", [field]: value }];
            } else if (last.status === "rejected") {
                // Replace the rejected step
                updated = [...current.slice(0, -1), { title: "", desc: "", date: "", status: "pending", [field]: value }];
            } else {
                // Update existing pending draft
                updated = [...current];
                updated[updated.length - 1] = { ...updated[updated.length - 1], [field]: value };
            }

            return { ...prev, treatmentProcedures: updated };
        });
    }

    const statusColor = {
        pending: "warning",
        approved: "success",
        rejected: "danger",
    };

    const statusIcon = {
        pending: "bi-hourglass-split",
        approved: "bi-check-circle-fill",
        rejected: "bi-x-circle-fill",
    };

    const formatStatus = (status) => {
        if (!status) return "Pending";
        return status.charAt(0).toUpperCase() + status.slice(1);
    };

    const getStatusColor = (status) => statusColor[status] || "secondary";
    const getStatusIcon = (status) => statusIcon[status] || "bi-question-circle";

    const draftStep = isAddingStep ? procedures[procedures.length - 1] : null;

    return (
        <div className="p-3">
            <div className="position-relative border border-primary rounded-3 p-4 mt-4 bg-white">
                <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                    Treatment Procedures
                </span>

                {procedures.length === 0 && !isEditing && (
                    <p className="text-muted mb-0">No procedures added yet.</p>
                )}

                <div className="d-flex flex-column gap-3 mb-3">
                    {procedures.map((proc, index) => {
                        // Don't render the draft step as a card while editing
                        if (isAddingStep && index === procedures.length - 1) return null;

                        return (
                            <div
                                key={index}
                                className={`card border-${getStatusColor(proc.status)}`}
                            >
                                <div className={`card-header d-flex justify-content-between align-items-center bg-${getStatusColor(proc.status)} bg-opacity-10`}>
                                    <span className="fw-bold">
                                        Step {index + 1}: {proc.title || "Untitled"}
                                    </span>
                                    <span className={`badge bg-${getStatusColor(proc.status)}`}>
                                        <i className={`bi ${getStatusIcon(proc.status)} me-1`}></i>
                                        {formatStatus(proc.status)}
                                    </span>
                                </div>

                                <div className="card-body">
                                    <div className="row g-2 mb-2">
                                        <div className="col-12 col-md-4">
                                            <p className="mb-0 small text-muted">Title</p>
                                            <p className="mb-0 fw-medium">{proc.title || "-"}</p>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <p className="mb-0 small text-muted">Date Performed</p>
                                            <p className="mb-0 fw-medium">{proc.date || "-"}</p>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <p className="mb-0 small text-muted">Description</p>
                                            <p className="mb-0 fw-medium">{proc.desc || "-"}</p>
                                        </div>
                                    </div>

                                    {proc.status === "rejected" && proc.feedback && (
                                        <div className="alert alert-danger mb-0 mt-2 py-2 small">
                                            <i className="bi bi-chat-left-text me-2"></i>
                                            <strong>Supervisor Feedback:</strong> {proc.feedback}
                                        </div>
                                    )}

                                    {proc.status === "pending" && (
                                        <div className="alert alert-warning mb-0 mt-2 py-2 small">
                                            <i className="bi bi-hourglass-split me-2"></i>
                                            Awaiting supervisor approval.
                                        </div>
                                    )}

                                    {proc.status === "approved" && (
                                        <div className="alert alert-success mb-0 mt-2 py-2 small">
                                            <i className="bi bi-check-circle-fill me-2"></i>
                                            Approved by supervisor.
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {isEditing && (canAddStep || isAddingStep) && (
                    <div>
                        <p className="fw-semibold text-primary mb-2">
                            Step {procedures.filter((p) => p.status === "approved").length + 1}
                        </p>
                        <div className="row g-3">
                            <div className="col-12 col-md-4">
                                <label className="form-label">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={draftStep?.title || ""}
                                    onChange={(e) => handleNewStepChange("title", e.target.value)}
                                />
                            </div>
                            <div className="col-12 col-md-4">
                                <label className="form-label">Description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={draftStep?.desc || ""}
                                    onChange={(e) => handleNewStepChange("desc", e.target.value)}
                                />
                            </div>
                            <div className="col-12 col-md-4">
                                <label className="form-label">Date Performed</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={draftStep?.date || ""}
                                    onChange={(e) => handleNewStepChange("date", e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                )}

                {isEditing && !canAddStep && !isAddingStep && lastStep?.status === "pending" && (
                    <div className="alert alert-warning mb-0 mt-2">
                        <i className="bi bi-hourglass-split me-2"></i>
                        Waiting for supervisor approval before adding the next step.
                    </div>
                )}
            </div>
        </div>
    );
}