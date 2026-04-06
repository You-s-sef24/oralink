"use client";

import axios from "axios";
import { useState } from "react";

export default function SubmissionToggleModal({
  show,
  isClose,
  isEnabled,
  deadlineDate,
  onSuccess,
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [choice, setChoice] = useState(isEnabled ? "open" : "stop");

  const formatForInput = (dateStr) => {
    if (!dateStr) return "";
    try {
      const d = new Date(dateStr.replace(" ", "T"));
      return d.toISOString().slice(0, 16);
    } catch (e) {
      return "";
    }
  };

  const [deadline, setDeadline] = useState(formatForInput(deadlineDate));

  const now = new Date().toISOString().slice(0, 16);

  function handleClose() {
    if (loading) return;
    setError("");
    isClose();
  }

  const isValid = choice === "open" || (choice === "stop" && deadline);

  async function handleSubmit() {
    if (!isValid) return;

    setLoading(true);
    setError("");

    try {
      let finalDeadline = null;
      let deadlineActive = false;

      if (choice === "stop") {
        // Option 2: Add deadline for submissions
        finalDeadline = deadline.replace("T", " ") + ":00";
        deadlineActive = true; // "isEnabled" in your API means "Deadline is ON"
      } else {
        // Option 1: Open submissions with NO deadlines
        finalDeadline = null;
        deadlineActive = false; // No deadline active
      }

      await axios.put("https://oralink.runasp.net/api/set-deadline", {
        isEnabled: deadlineActive,
        deadlineDate: finalDeadline,
      });

      onSuccess({
        isEnabled: deadlineActive,
        deadlineDate: finalDeadline,
      });

      handleClose();
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to update. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  if (!show) return null;

  return (
    <>
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.55)",
          zIndex: 1040,
        }}
        onClick={handleClose}
      />
      <div
        className="modal show d-block"
        style={{ zIndex: 1045 }}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content border-0 shadow-lg overflow-hidden">
            <div
              style={{
                height: 4,
                background:
                  choice === "stop"
                    ? "linear-gradient(90deg, #dc3545, #ff6b6b)"
                    : "linear-gradient(90deg, #198754, #20c997)",
              }}
            />

            <div className="modal-header border-0 pb-0 pt-4 px-4">
              <div className="d-flex align-items-center gap-3">
                <div
                  className={`d-flex align-items-center justify-content-center rounded-circle bg-opacity-10 ${choice === "stop" ? "bg-danger" : "bg-success"}`}
                  style={{ width: 48, height: 48, flexShrink: 0 }}
                >
                  {choice === "stop" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#dc3545"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="18" height="11" x="3" y="11" rx="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#198754"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="18" height="11" x="3" y="11" rx="2" />
                      <path d="M7 11V7a5 5 0 0 1 9.9-1" />
                    </svg>
                  )}
                </div>
                <div>
                  <h5 className="modal-title fw-bold mb-0">
                    Manage File Submissions
                  </h5>
                  <p className="text-muted small mb-0">
                    Control whether students can submit files
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="btn-close"
                onClick={handleClose}
                disabled={loading}
              />
            </div>

            <div className="modal-body px-4 pt-3 pb-2">
              {error && (
                <div className="alert alert-danger py-2 small mb-3">
                  {error}
                </div>
              )}

              <label className="form-label fw-semibold small">
                Submission Status
              </label>
              <div className="d-flex gap-3 mb-3">
                <div
                  className={`flex-fill border rounded-3 p-3 d-flex align-items-center gap-2 cursor-pointer ${choice === "open" ? "border-success bg-success bg-opacity-10" : "border-light"}`}
                  style={{ cursor: "pointer" }}
                  onClick={() => !loading && setChoice("open")}
                >
                  <input
                    type="radio"
                    className="form-check-input mt-0"
                    checked={choice === "open"}
                    onChange={() => setChoice("open")}
                    disabled={loading}
                  />
                  <div>
                    <p className="fw-semibold mb-0 small text-success">Open</p>
                    <p className="text-muted mb-0" style={{ fontSize: 11 }}>
                      Students can submit files
                    </p>
                  </div>
                </div>

                <div
                  className={`flex-fill border rounded-3 p-3 d-flex align-items-center gap-2 ${choice === "stop" ? "border-danger bg-danger bg-opacity-10" : "border-light"}`}
                  style={{ cursor: "pointer" }}
                  onClick={() => !loading && setChoice("stop")}
                >
                  <input
                    type="radio"
                    className="form-check-input mt-0"
                    checked={choice === "stop"}
                    onChange={() => setChoice("stop")}
                    disabled={loading}
                  />
                  <div>
                    <p className="fw-semibold mb-0 small text-danger">Stop</p>
                    <p className="text-muted mb-0" style={{ fontSize: 11 }}>
                      Students cannot submit files
                    </p>
                  </div>
                </div>
              </div>

              {choice === "stop" && (
                <div>
                  <label className="form-label fw-semibold small">
                    Deadline Date & Time{" "}
                    <span className="text-danger ms-1">*</span>
                  </label>
                  <input
                    type="datetime-local"
                    className={`form-control ${choice === "stop" && !deadline ? "is-invalid" : ""}`}
                    min={now}
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    disabled={loading}
                  />
                  {!deadline && (
                    <div className="invalid-feedback">
                      Deadline is required when stopping submissions.
                    </div>
                  )}
                  <p className="text-muted small mt-1 mb-0">
                    Select the exact date and time for the cutoff.
                  </p>
                </div>
              )}

              {choice === "open" && (
                <div className="alert alert-success py-2 small mb-0">
                  <i className="bi bi-info-circle me-2"></i>Students will
                  immediately be able to submit files.
                </div>
              )}
            </div>

            <div className="modal-footer border-0 px-4 pb-4 pt-3">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClose}
                disabled={loading}
              >
                Cancel
              </button>
              <button
                type="button"
                className={`btn ${choice === "stop" ? "btn-danger" : "btn-success"}`}
                onClick={handleSubmit}
                disabled={loading || !isValid}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" />
                    Saving...
                  </>
                ) : choice === "stop" ? (
                  <>
                    <i className="bi bi-lock me-2"></i>Stop Submissions
                  </>
                ) : (
                  <>
                    <i className="bi bi-unlock me-2"></i>Open Submissions
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
