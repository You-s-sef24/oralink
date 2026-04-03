"use client";

import { PatientInfoContext } from "@/app/Contexts/PatientInfoContext";
import { useContext, useState, useEffect } from "react";

export default function ViewPeriodonticsPage5() {
    const { file, setFile, isEditing, formErrors } = useContext(PatientInfoContext);
    const [hasDraft, setHasDraft] = useState(false);

    useEffect(() => {
        if (!isEditing) setHasDraft(false);
    }, [isEditing]);

    const proceduresRaw =
        typeof file?.treatmentProcedures === "string"
            ? (() => { try { return JSON.parse(file.treatmentProcedures); } catch { return []; } })()
            : file?.treatmentProcedures || [];

    const procedures = proceduresRaw.map((p) => ({
        ...p,
        status: p?.status || "draft",
    }));

    // ✅ hide draft from cards
    const visibleProcedures = procedures.filter(p => p.status !== "draft");

    const lastStep = procedures[procedures.length - 1];
    const approvedCount = procedures.filter(p => p.status === "approved").length;

    const isLastStepPending = lastStep?.status === "pending";
    const canShowAddButton = isEditing && !isLastStepPending && !hasDraft;
    const canAddStep = isEditing && hasDraft && !isLastStepPending;

    const draftStep = hasDraft
        ? (lastStep?.status === "draft" && !lastStep?.id ? lastStep : null)
        : null;

    function getStepNumber(proc, index) {
        let step = 1;

        for (let i = 0; i < index; i++) {
            if (visibleProcedures[i].status === "approved") {
                step++;
            }
        }

        return step;
    }

    function handleAddStep() {
        setHasDraft(true);
    }

    function handleCancelDraft() {
        setFile((prev) => {
            const current =
                typeof prev.treatmentProcedures === "string"
                    ? JSON.parse(prev.treatmentProcedures || "[]")
                    : [...(prev.treatmentProcedures || [])];

            const last = current[current.length - 1];

            // ✅ remove draft (not pending anymore)
            if (last?.status === "draft" && !last?.id) {
                return { ...prev, treatmentProcedures: current.slice(0, -1) };
            }

            return prev;
        });

        setHasDraft(false);
    }

    function handleNewStepChange(field, value) {
        setFile((prev) => {
            const current =
                typeof prev.treatmentProcedures === "string"
                    ? JSON.parse(prev.treatmentProcedures || "[]")
                    : [...(prev.treatmentProcedures || [])];

            const last = current[current.length - 1];

            // 🚫 prevent editing backend pending
            if (last?.status === "pending" && last?.id) {
                return prev;
            }

            let updated;

            if (!last || last.status === "approved" || last.status === "rejected") {
                updated = [
                    ...current,
                    {
                        title: field === "title" ? value : "",
                        desc: field === "desc" ? value : "",
                        date: field === "date" ? value : "",
                        status: "draft",
                    },
                ];
            } else {
                updated = current.map((p, i) =>
                    i === current.length - 1 ? { ...p, [field]: value } : p
                );
            }

            return { ...prev, treatmentProcedures: updated };
        });
    }

    const statusColor = { pending: "warning", approved: "success", rejected: "danger" };
    const statusIcon = {
        pending: "bi-hourglass-split",
        approved: "bi-check-circle-fill",
        rejected: "bi-x-circle-fill"
    };

    const formatStatus = (s) => !s ? "Pending" : s.charAt(0).toUpperCase() + s.slice(1);
    const getStatusColor = (s) => statusColor[s] || "secondary";
    const getStatusIcon = (s) => statusIcon[s] || "bi-question-circle";

    return (
        <div className="p-3">
            <div className="position-relative border border-primary rounded-3 p-4 mt-4 bg-white">

                <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                    Treatment Procedures
                </span>

                {visibleProcedures.length === 0 && !hasDraft && (
                    <p className="text-muted mb-0">No procedures added yet.</p>
                )}

                {/* ===== LIST ===== */}
                <div className="d-flex flex-column gap-3 mb-3">
                    {visibleProcedures.map((proc, index) => (
                        <div key={index} className={`card border-${getStatusColor(proc.status)}`}>

                            <div className={`card-header d-flex justify-content-between align-items-center bg-${getStatusColor(proc.status)} bg-opacity-10`}>
                                <span className="fw-bold">
                                    Step {getStepNumber(proc, index)}: {proc.title || "Untitled"}
                                </span>
                                <span className={`badge bg-${getStatusColor(proc.status)} d-flex align-items-center gap-1`}>
                                    <i className={`bi ${getStatusIcon(proc.status)}`}></i>
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
                                        <p className="mb-0 small text-muted">Date</p>
                                        <p className="mb-0 fw-medium">{proc.date || "-"}</p>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <p className="mb-0 small text-muted">Description</p>
                                        <p className="mb-0 fw-medium">{proc.desc || "-"}</p>
                                    </div>
                                </div>

                                {proc.status === "rejected" && proc.feedback && (
                                    <div className="alert alert-danger mt-2 py-2 small d-flex justify-content-between align-items-start">

                                        <div className="d-flex align-items-start">
                                            <i className="bi bi-chat-left-text me-2 mt-1"></i>
                                            <div>
                                                <div>
                                                    <strong>Supervisor Feedback:</strong> {proc.feedback}
                                                </div>
                                                <small className="text-muted">
                                                    Reviewed by Dr. {proc.supervisorName}
                                                </small>
                                            </div>
                                        </div>

                                    </div>
                                )}

                                {proc.status === "pending" && (
                                    <div className="alert alert-warning mt-2 py-2 small d-flex align-items-center">
                                        <i className="bi bi-hourglass-split me-2"></i>
                                        Awaiting supervisor approval.
                                    </div>
                                )}

                                {proc.status === "approved" && (
                                    <div className="alert alert-success mt-2 py-2 small d-flex align-items-center">
                                        <i className="bi bi-check-circle-fill me-2"></i>
                                        <span>
                                            Approved by&nbsp;
                                            <strong>Dr.{proc.supervisorName}</strong>
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* ===== ADD BUTTON ===== */}
                {canShowAddButton && (
                    <button
                        className="btn btn-outline-primary btn-sm mt-1"
                        onClick={handleAddStep}
                    >
                        <i className="bi bi-plus-circle me-1"></i>
                        Add New Step
                    </button>
                )}

                {/* ===== DRAFT FORM ===== */}
                {canAddStep && (
                    <div className="mt-3 p-3 border border-primary rounded">

                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <p className="fw-semibold text-primary mb-0">
                                Step {approvedCount + 1}
                            </p>
                            <button
                                className="btn btn-sm btn-outline-secondary"
                                onClick={handleCancelDraft}
                            >
                                <i className="bi bi-x me-1"></i>Cancel
                            </button>
                        </div>

                        <div className="row g-3">
                            <div className="col-12 col-md-4">
                                <label className="form-label">Title</label>
                                <input
                                    type="text"
                                    className={`form-control ${formErrors?.procedureTitle ? "is-invalid" : ""}`}
                                    value={draftStep?.title || ""}
                                    onChange={(e) => handleNewStepChange("title", e.target.value)}
                                />
                            </div>

                            <div className="col-12 col-md-4">
                                <label className="form-label">Description</label>
                                <input
                                    type="text"
                                    className={`form-control ${formErrors?.procedureDesc ? "is-invalid" : ""}`}
                                    value={draftStep?.desc || ""}
                                    onChange={(e) => handleNewStepChange("desc", e.target.value)}
                                />
                            </div>

                            <div className="col-12 col-md-4">
                                <label className="form-label">Date</label>
                                <input
                                    type="date"
                                    className={`form-control ${formErrors?.procedureDate ? "is-invalid" : ""}`}
                                    value={draftStep?.date || ""}
                                    onChange={(e) => handleNewStepChange("date", e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* ===== LOCK ===== */}
                {isEditing && isLastStepPending && (
                    <div className="alert alert-warning mt-3 mb-0 d-flex align-items-center">
                        <i className="bi bi-hourglass-split me-2"></i>
                        Waiting for supervisor approval before adding the next step.
                    </div>
                )}

            </div>
        </div>
    );
}