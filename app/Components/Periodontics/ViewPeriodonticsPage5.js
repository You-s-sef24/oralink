"use client";

import { PatientInfoContext } from "@/app/Contexts/PatientInfoContext";
import { useContext, useState, useEffect, useCallback } from "react";
import axios from "axios";

export default function ViewPeriodonticsPage5() {
    const { file } = useContext(PatientInfoContext);

    const [steps, setSteps] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [hasDraft, setHasDraft] = useState(false);
    const [draft, setDraft] = useState({ title: "", desc: "", date: "" });
    const [draftErrors, setDraftErrors] = useState({});

    const fileId = file?.fileId ?? file?.id;

    const fetchSteps = useCallback(async () => {
        if (!fileId) return;
        setIsFetching(true);
        try {
            const res = await axios.get(
                `https://oralink.runasp.net/api/patient-files/${fileId}/steps`
            );
            setSteps(res.data ?? []);
        } catch (err) {
            console.error("Failed to fetch steps:", err);
        } finally {
            setIsFetching(false);
        }
    }, [fileId]);

    useEffect(() => {
        fetchSteps();
    }, [fetchSteps]);

    const lastStep = steps[steps.length - 1];
    const isLastStepPending = lastStep?.status === "pending";
    const approvedCount = steps.filter((s) => s.status === "approved").length;

    const canShowAddButton = !isLastStepPending && !hasDraft;

    function handleAddStep() {
        setHasDraft(true);
        setDraft({ title: "", desc: "", date: "" });
        setDraftErrors({});
    }

    function handleCancelDraft() {
        setHasDraft(false);
        setDraft({ title: "", desc: "", date: "" });
        setDraftErrors({});
    }

    function handleDraftChange(field, value) {
        setDraft((prev) => ({ ...prev, [field]: value }));
        if (draftErrors[field]) {
            setDraftErrors((prev) => ({ ...prev, [field]: "" }));
        }
    }

    function validateDraft() {
        const errors = {};
        if (!draft.title?.trim()) errors.title = "Title is required";
        if (!draft.desc?.trim()) errors.desc = "Description is required";
        if (!draft.date?.trim()) errors.date = "Date is required";
        return errors;
    }

    async function handleSubmitStep() {
        const errors = validateDraft();
        if (Object.keys(errors).length > 0) {
            setDraftErrors(errors);
            return;
        }

        setIsSubmitting(true);
        try {
            const res = await axios.post(
                `https://oralink.runasp.net/api/patient-files/${fileId}/add-step`,
                {
                    title: draft.title,
                    description: draft.desc,
                    date: draft.date,
                }
            );

            const newStep = res.data?.step ?? res.data;
            setSteps((prev) => [...prev, newStep]);

            setHasDraft(false);
            setDraft({ title: "", desc: "", date: "" });
            setDraftErrors({});
        } catch (err) {
            alert(err.response?.data?.message || "Failed to add step");
        } finally {
            setIsSubmitting(false);
        }
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

    const formatStatus = (s) =>
        !s ? "Pending" : s.charAt(0).toUpperCase() + s.slice(1);

    const getStatusColor = (s) => statusColor[s] || "secondary";
    const getStatusIcon = (s) => statusIcon[s] || "bi-question-circle";

    function getStepNumber(step, index) {
        let num = 1;
        for (let i = 0; i < index; i++) {
            if (steps[i].status === "approved") num++;
        }
        return num;
    }

    return (
        <div className="p-3">
            <div className="position-relative border border-primary rounded-3 p-4 mt-4 bg-white">

                <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                    Treatment Procedures
                </span>

                {isFetching && (
                    <div className="d-flex align-items-center gap-2 text-muted mb-3">
                        <span className="spinner-border spinner-border-sm" />
                        Loading steps...
                    </div>
                )}

                {!isFetching && steps.length === 0 && !hasDraft && (
                    <p className="text-muted mb-0">No procedures added yet.</p>
                )}

                <div className="d-flex flex-column gap-3 mb-3">
                    {steps.map((step, index) => (
                        <div
                            key={step.id ?? index}
                            className={`card border-${getStatusColor(step.status)}`}
                        >
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <span className="fw-bold">
                                    Step {step.stepNumber ?? getStepNumber(step, index)}:{" "}
                                    {step.title || "Untitled"}
                                </span>

                                <span className={`badge bg-${getStatusColor(step.status)}`}>
                                    <i className={`bi ${getStatusIcon(step.status)} me-1`}></i>
                                    {formatStatus(step.status)}
                                </span>
                            </div>

                            <div className="card-body">
                                <div className="row g-2 mb-2">
                                    <div className="col-md-4">
                                        <p className="mb-0 small text-muted">Title</p>
                                        <p className="mb-0 fw-medium">{step.title || "-"}</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p className="mb-0 small text-muted">Date</p>
                                        <p className="mb-0 fw-medium">{step.date || "-"}</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p className="mb-0 small text-muted">Description</p>
                                        <p className="mb-0 fw-medium">{step.description || "-"}</p>
                                    </div>
                                </div>

                                {step.status === "rejected" && step.rejectionReason && (
                                    <div className="alert alert-danger mt-2 py-2 small">
                                        <i className="bi bi-chat-left-text me-2"></i>
                                        <strong>Feedback:</strong> {step.rejectionReason}

                                        {step.supervisorName && (
                                            <div className="mt-1">
                                                <small className="text-muted">
                                                    Rejected by <strong>Dr. {step.supervisorName}</strong>
                                                </small>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {step.status === "approved" && step.supervisorName && (
                                    <div className="alert alert-success mt-2 py-2 small d-flex align-items-center">
                                        <i className="bi bi-check-circle-fill me-2"></i>
                                        Approved by{" "}
                                        <strong className="ms-1">
                                            Dr. {step.supervisorName}
                                        </strong>
                                    </div>
                                )}

                                {step.status === "pending" && (
                                    <div className="alert alert-warning mt-2 py-2 small d-flex align-items-center">
                                        <i className="bi bi-hourglass-split me-2"></i>
                                        Awaiting supervisor approval.
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {canShowAddButton && (
                    <button
                        className="btn btn-outline-primary btn-sm"
                        onClick={handleAddStep}
                    >
                        <i className="bi bi-plus-circle me-1"></i>
                        Add New Step
                    </button>
                )}

                {hasDraft && !isLastStepPending && (
                    <div className="mt-3 p-3 border border-primary rounded">
                        <p className="fw-semibold text-primary">
                            Step {approvedCount + 1}
                        </p>

                        <div className="row g-3">
                            <div className="col-md-4">
                                <input
                                    className="form-control"
                                    placeholder="Title"
                                    value={draft.title}
                                    onChange={(e) => handleDraftChange("title", e.target.value)}
                                />
                            </div>
                            <div className="col-md-4">
                                <input
                                    className="form-control"
                                    placeholder="Description"
                                    value={draft.desc}
                                    onChange={(e) => handleDraftChange("desc", e.target.value)}
                                />
                            </div>
                            <div className="col-md-4">
                                <input
                                    type="date"
                                    className="form-control"
                                    value={draft.date}
                                    onChange={(e) => handleDraftChange("date", e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mt-3 d-flex gap-2">
                            <button
                                className="btn btn-primary btn-sm"
                                onClick={handleSubmitStep}
                                disabled={isSubmitting}
                            >
                                Submit
                            </button>

                            <button
                                className="btn btn-outline-secondary btn-sm"
                                onClick={handleCancelDraft}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}

                {isLastStepPending && (
                    <div className="alert alert-warning mt-3 mb-0 d-flex align-items-center">
                        <i className="bi bi-hourglass-split me-2"></i>
                        Waiting for supervisor approval before adding the next step.
                    </div>
                )}
            </div>
        </div>
    );
}