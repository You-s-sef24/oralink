"use client";

import { PatientInfoContext } from "@/app/Contexts/PatientInfoContext";
import { useContext, useState } from "react";
import axios from "axios";
import { UsersContext } from "@/app/Contexts/UsersContext";

export default function ViewProcedures() {
  const { file } = useContext(PatientInfoContext);
  const { currentUser, token } = useContext(UsersContext);

  const rawSteps = file?.treatmentProcedures || [];

  const [steps, setSteps] = useState(rawSteps);
  const [loadingIndex, setLoadingIndex] = useState(null);
  const [rejectingIndex, setRejectingIndex] = useState(null);
  const [feedback, setFeedback] = useState("");

  // ─── Review a step ───────────────────────────────────────────────────────
  async function handleStatusChange(index, newStatus, rejectionReason = "") {
    const step = steps[index];
    if (!step?.id) return;

    setLoadingIndex(index);
    try {
      const body =
        newStatus === "rejected"
          ? { status: newStatus, rejectionReason }
          : { status: newStatus };

      const res = await axios.patch(
        `https://oralink.runasp.net/api/supervisor/steps/${step.id}/review`,
        body,
        { headers: { Authorization: `Bearer ${token}` } },
      );

      const updated = [...steps];
      updated[index] = {
        ...updated[index],
        status: res.data?.status ?? newStatus,
        stepNumber: res.data?.stepNumber ?? updated[index].stepNumber,
        rejectionReason: res.data?.rejectionReason ?? rejectionReason,
        supervisorName: currentUser?.name,
      };
      setSteps(updated);
    } catch (err) {
      console.error("Failed to update step status:", err);
      alert(err.response?.data?.message || "Failed to update step");
    } finally {
      setLoadingIndex(null);
      setRejectingIndex(null);
      setFeedback("");
    }
  }

  function handleRejectClick(index) {
    setRejectingIndex(index);
    setFeedback("");
  }

  function handleCancelReject() {
    setRejectingIndex(null);
    setFeedback("");
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

  const lastIndex = steps.length - 1;

  return (
    <div className="p-3">
      <div className="position-relative border border-primary rounded-3 p-4 mt-4 bg-white">
        <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
          Treatment Procedures
        </span>

        {steps.length === 0 && (
          <p className="text-muted mb-0">No procedures added yet.</p>
        )}

        <div className="d-flex flex-column gap-3">
          {steps.map((step, index) => {
            const isLast = index === lastIndex;
            const isLoading = loadingIndex === index;
            const isRejecting = rejectingIndex === index;

            return (
              <div
                key={step.id ?? index}
                className={`card border-${getStatusColor(step.status)}`}
              >
                <div className="card-header d-flex justify-content-between align-items-center">
                  <span className="fw-bold">
                    Step {step.stepNumber ?? index + 1}:{" "}
                    {step.title || "Untitled"}
                  </span>
                  <div className="d-flex align-items-center gap-2">
                    <span className={`badge bg-${getStatusColor(step.status)}`}>
                      <i
                        className={`bi ${getStatusIcon(step.status)} me-1`}
                      ></i>
                      {formatStatus(step.status)}
                    </span>

                    {isLast && step.status !== "approved" && !isRejecting && (
                      <button
                        className="btn btn-sm btn-success"
                        disabled={isLoading}
                        onClick={() => handleStatusChange(index, "approved")}
                      >
                        {isLoading ? (
                          <span className="spinner-border spinner-border-sm me-1" />
                        ) : (
                          <i className="bi bi-check-lg me-1"></i>
                        )}
                        Approve
                      </button>
                    )}

                    {isLast && step.status !== "rejected" && !isRejecting && (
                      <button
                        className="btn btn-sm btn-danger"
                        disabled={isLoading}
                        onClick={() => handleRejectClick(index)}
                      >
                        <i className="bi bi-x-lg me-1"></i>Reject
                      </button>
                    )}
                  </div>
                </div>

                <div className="card-body">
                  <div className="row g-2 mb-2">
                    <div className="col-12 col-md-4">
                      <p className="mb-0 small text-muted">Phase</p>
                      <p className="mb-0 fw-medium">{step.title || "-"}</p>
                    </div>
                    <div className="col-12 col-md-4">
                      <p className="mb-0 small text-muted">Date</p>
                      <p className="mb-0 fw-medium">{step.date || "-"}</p>
                    </div>
                    <div className="col-12 col-md-4">
                      <p className="mb-0 small text-muted">Description</p>
                      <p className="mb-0 fw-medium">
                        {step.description || "-"}
                      </p>
                    </div>
                  </div>

                  {step.status === "rejected" && step.rejectionReason && (
                    <div className="alert alert-danger mb-0 mt-2 py-2 small">
                      <i className="bi bi-chat-left-text me-2"></i>
                      <strong>Feedback:</strong> {step.rejectionReason}
                    </div>
                  )}

                  {step.status === "approved" && step.supervisorName && (
                    <div className="alert alert-success mb-0 mt-2 py-2 small d-flex align-items-center">
                      <i className="bi bi-check-circle-fill me-2"></i>
                      Approved by{" "}
                      <strong className="ms-1">
                        Dr. {step.supervisorName}
                      </strong>
                    </div>
                  )}

                  {isRejecting && (
                    <div className="mt-3">
                      <label className="form-label small fw-semibold text-danger">
                        Rejection Reason
                      </label>
                      <textarea
                        className="form-control form-control-sm mb-2"
                        rows={3}
                        placeholder="Explain what needs to be corrected..."
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                      />
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-sm btn-danger"
                          disabled={isLoading || !feedback.trim()}
                          onClick={() =>
                            handleStatusChange(index, "rejected", feedback)
                          }
                        >
                          {isLoading ? (
                            <span className="spinner-border spinner-border-sm me-1" />
                          ) : (
                            <i className="bi bi-x-lg me-1"></i>
                          )}
                          Confirm Reject
                        </button>
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          disabled={isLoading}
                          onClick={handleCancelReject}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
