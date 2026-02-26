"use client";

import { PatientInfoContext } from "@/app/Contexts/PatientInfoContext";
import { useContext } from "react";

export default function ViewPeriodonticsPage5() {
    const { file, setFile, isEditing } = useContext(PatientInfoContext);

    // ✅ Safe parsing + enforce default status
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

    const canAddStep =
        procedures.length === 0 || lastStep?.status === "approved";

    const draftStep =
        procedures.length > 0 && lastStep?.status !== "approved"
            ? lastStep
            : null;

    function handleNewStepChange(field, value) {
        setFile((prev) => {
            const current =
                typeof prev.treatmentProcedures === "string"
                    ? JSON.parse(prev.treatmentProcedures || "[]")
                    : prev.treatmentProcedures || [];

            const updated = [...current];
            const last = updated[updated.length - 1];

            if (!last || last.status === "approved") {
                updated.push({
                    title: "",
                    desc: "",
                    date: "",
                    status: "pending",
                });
            }

            const lastIndex = updated.length - 1;
            updated[lastIndex] = {
                ...updated[lastIndex],
                [field]: value,
            };

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

    const getStatusColor = (status) =>
        statusColor[status] || "secondary";

    const getStatusIcon = (status) =>
        statusIcon[status] || "bi-question-circle";

    return (
        <div className="p-3">
            <div className="position-relative border border-primary rounded-3 p-4 mt-4 bg-white">
                <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                    Treatment Procedures
                </span>

                {procedures.length === 0 && (
                    <p className="text-muted mb-0">No procedures added yet.</p>
                )}

                <div className="d-flex flex-column gap-3 mb-3">
                    {procedures.map((proc, index) => (
                        <div
                            key={index}
                            className={`card border-${getStatusColor(proc.status)}`}
                        >
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <span className="fw-bold">
                                    Step {index + 1}: {proc.title || "Untitled"}
                                </span>
                                <span
                                    className={`badge bg-${getStatusColor(proc.status)}`}
                                >
                                    <i
                                        className={`bi ${getStatusIcon(proc.status)} me-1`}
                                    ></i>
                                    {formatStatus(proc.status)}
                                </span>
                            </div>
                            <div className="card-body">
                                <p className="mb-1 small text-muted">
                                    Date: {proc.date || "-"}
                                </p>
                                {proc.desc && <p className="mb-0">{proc.desc}</p>}
                            </div>
                        </div>
                    ))}
                </div>

                {isEditing && canAddStep && (
                    <div>
                        <p className="fw-semibold text-primary mb-2">
                            Step{" "}
                            {
                                procedures.filter(
                                    (p) => p.status === "approved"
                                ).length + 1
                            }
                        </p>
                        <div className="row g-3">
                            <div className="col-12 col-md-4">
                                <label className="form-label">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={draftStep?.title || ""}
                                    onChange={(e) =>
                                        handleNewStepChange("title", e.target.value)
                                    }
                                />
                            </div>

                            <div className="col-12 col-md-4">
                                <label className="form-label">Description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={draftStep?.desc || ""}
                                    onChange={(e) =>
                                        handleNewStepChange("desc", e.target.value)
                                    }
                                />
                            </div>

                            <div className="col-12 col-md-4">
                                <label className="form-label">
                                    Date Performed
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={draftStep?.date || ""}
                                    onChange={(e) =>
                                        handleNewStepChange("date", e.target.value)
                                    }
                                />
                            </div>
                        </div>
                    </div>
                )}

                {isEditing && !canAddStep && lastStep?.status === "pending" && (
                    <div className="alert alert-warning mb-0 mt-2">
                        <i className="bi bi-hourglass-split me-2"></i>
                        Waiting for supervisor approval before adding the next step.
                    </div>
                )}
            </div>
        </div>
    );
}