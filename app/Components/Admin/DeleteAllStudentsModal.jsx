"use client";

import axios from "axios";
import { useState } from "react";

export default function DeleteAllStudentsModal({
  show,
  isClose,
  refreshUsers,
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [confirmText, setConfirmText] = useState("");

  const CONFIRM_PHRASE = "DELETE ALL STUDENTS";

  function handleClose() {
    if (loading) return;
    setConfirmText("");
    setError("");
    isClose();
  }

  async function handleDeleteAll() {
    if (confirmText !== CONFIRM_PHRASE) return;
    setError("This is just a Demo u can't delete students  :)");
    return;

    setLoading(true);
    setError("");

    try {
      await axios.delete(
        "https://oralink.runasp.net/api/admin/delete-all-students",
      );
      refreshUsers();
      handleClose();
    } catch (err) {
      console.error("Error deleting all students:", err);
      setError(
        err.response?.data?.message ||
          "Failed to delete all students. Please try again.",
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
          backgroundColor: "rgba(0,0,0,0.6)",
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
                height: 5,
                background: "linear-gradient(90deg, #dc3545, #ff6b6b)",
              }}
            />

            <div className="modal-header border-0 pb-0 pt-4 px-4">
              <div className="d-flex align-items-center gap-3">
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle bg-danger bg-opacity-10"
                  style={{ width: 48, height: 48, flexShrink: 0 }}
                >
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
                    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
                <div>
                  <h5 className="modal-title fw-bold mb-0">
                    Delete All Students
                  </h5>
                  <p className="text-muted small mb-0">
                    This action is irreversible
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
                <div
                  className="alert alert-danger py-2 small mb-3"
                  role="alert"
                >
                  <i className="bi bi-exclamation-circle me-2"></i>
                  {error}
                </div>
              )}

              <div className="alert alert-warning py-2 small mb-3">
                <i className="bi bi-exclamation-triangle me-2"></i>
                <strong>Warning:</strong> This will permanently delete{" "}
                <strong>all student accounts</strong> from the system.
                <br />
                <span className="d-block mt-1">
                  However,{" "}
                  <strong className="text-primary">
                    all student files will be archived
                  </strong>
                  and will remain accessible to the{" "}
                  <strong>Head of Department</strong> for review.
                </span>
                <span className="d-block mt-1 text-muted">
                  This action is typically performed at the end of an academic
                  year.
                </span>
              </div>

              <p className="small text-muted mb-2">
                To confirm, type{" "}
                <strong className="text-danger">{CONFIRM_PHRASE}</strong> below:
              </p>
              <input
                type="text"
                className={`form-control ${confirmText && confirmText !== CONFIRM_PHRASE ? "is-invalid" : ""}`}
                placeholder={CONFIRM_PHRASE}
                value={confirmText}
                onChange={(e) => setConfirmText(e.target.value)}
                disabled={loading}
                autoComplete="off"
              />
              {confirmText && confirmText !== CONFIRM_PHRASE && (
                <div className="invalid-feedback">Text does not match.</div>
              )}
            </div>

            <div className="modal-footer border-0 px-4 pb-4 pt-2">
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
                className="btn btn-danger"
                onClick={handleDeleteAll}
                disabled={loading || confirmText !== CONFIRM_PHRASE}
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    />
                    Deleting...
                  </>
                ) : (
                  <>
                    <i className="bi bi-trash me-2"></i>
                    Delete All Students
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
