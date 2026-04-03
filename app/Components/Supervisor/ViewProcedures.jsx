"use client";

import { PatientInfoContext } from "@/app/Contexts/PatientInfoContext";
import { useContext, useState } from "react";
import axios from "axios";
import { UsersContext } from "@/app/Contexts/UsersContext";

export default function ViewProcedures() {
  const { file, setFile } = useContext(PatientInfoContext);
  const { currentUser } = useContext(UsersContext);
  const [loadingIndex, setLoadingIndex] = useState(null);
  const [rejectingIndex, setRejectingIndex] = useState(null);
  const [feedback, setFeedback] = useState("");

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

  const lastIndex = procedures.length - 1;

  async function handleStatusChange(index, newStatus, feedbackText = "") {
    setLoadingIndex(index);

    try {
      const current =
        typeof file.treatmentProcedures === "string"
          ? JSON.parse(file.treatmentProcedures || "[]")
          : file.treatmentProcedures || [];

      const updated = [...current];
      updated[index] = {
        ...updated[index],
        status: newStatus,
        feedback: feedbackText,
        supervisorName: currentUser.name,
      };

      await axios.patch(
        `https://oralink.runasp.net/api/supervisor/files/${file.fileId}/treatment-procedures`,
        { treatmentProcedures: JSON.stringify(updated) },
      );

      setFile((prev) => ({ ...prev, treatmentProcedures: updated }));
    } catch (err) {
      console.error("Failed to update status:", err);
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

  const formatStatus = (status) => {
    if (!status) return "Pending";
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  const getStatusColor = (status) => statusColor[status] || "secondary";
  const getStatusIcon = (status) => statusIcon[status] || "bi-question-circle";

  return (
    <div className="p-3">
      <div className="position-relative border border-primary rounded-3 p-4 mt-4 bg-white">
        <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
          Treatment Procedures
        </span>

        {procedures.length === 0 && (
          <p className="text-muted mb-0">No procedures added yet.</p>
        )}

        <div className="d-flex flex-column gap-3">
          {procedures.map((proc, index) => {
            const isLast = index === lastIndex;
            const isLoading = loadingIndex === index;
            const isRejecting = rejectingIndex === index;

            return (
              <div
                key={index}
                className={`card border-${getStatusColor(proc.status)}`}
              >
                <div className="card-header d-flex justify-content-between align-items-center">
                  <span className="fw-bold">
                    Step {index + 1}: {proc.title || "Untitled"}
                  </span>
                  <div className="d-flex align-items-center gap-2">
                    <span className={`badge bg-${getStatusColor(proc.status)}`}>
                      <i
                        className={`bi ${getStatusIcon(proc.status)} me-1`}
                      ></i>
                      {formatStatus(proc.status)}
                    </span>
                    {isLast && proc.status !== "approved" && !isRejecting && (
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
                    {isLast && proc.status !== "rejected" && !isRejecting && (
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
                  <p className="mb-1 small text-muted">
                    Date: {proc.date || "-"}
                  </p>
                  {proc.desc && <p className="mb-0">{proc.desc}</p>}

                  {proc.status === "rejected" && proc.feedback && (
                    <div className="alert alert-danger mb-0 mt-2 py-2 small">
                      <i className="bi bi-chat-left-text me-2"></i>
                      <strong>Feedback:</strong> {proc.feedback}
                    </div>
                  )}

                  {isRejecting && (
                    <div className="mt-3">
                      <label className="form-label small fw-semibold text-danger">
                        Rejection Feedback
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
