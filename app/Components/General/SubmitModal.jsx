"use client";

import { useContext, useState } from "react";
import { UsersContext } from "../../Contexts/UsersContext";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function SubmitModal({ show, isClose, file, setFile }) {
  const { token } = useContext(UsersContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const router = useRouter();

  async function handleSubmit() {
    try {
      setError("");
      setIsLoading(true);

      const res = await axios.put(
        `https://oralink.runasp.net/api/patient-files/${file.fileId}/Submit`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );

      const msg =
        res.data?.message || res.data || "File submitted successfully!";
      setSuccessMsg(msg);
      setFile((prev) => ({ ...prev, isSubmitted: true }));

      setTimeout(() => {
        isClose();
        router.replace("/my-files");
      }, 3500);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to submit file");
    } finally {
      setIsLoading(false);
    }
  }

  const handleClose = () => {
    if (isLoading || successMsg) return;
    setError("");
    isClose();
  };

  return (
    <>
      {show && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1040,
          }}
          onClick={handleClose}
        />
      )}

      <div
        className={`modal fade ${show ? "show d-block" : "d-none"}`}
        style={{ zIndex: 1045 }}
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-sm"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Submit Patient File</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleClose}
                disabled={isLoading || !!successMsg}
              />
            </div>

            <div className="modal-body">
              {error && (
                <div className="alert alert-danger py-2 small" role="alert">
                  {error}
                </div>
              )}

              {successMsg ? (
                <div className="text-center py-2">
                  <div className="mb-2 text-success">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <p className="mb-1 fw-medium">{successMsg}</p>
                  <small className="text-muted">
                    Redirecting you to your files...
                  </small>
                </div>
              ) : (
                <p>
                  Are you sure?{" "}
                  <small className="text-muted">
                    Once submitted you will not be able to edit it again.
                  </small>
                </p>
              )}
            </div>

            {!successMsg && (
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                  disabled={isLoading}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="d-flex align-items-center gap-2">
                      <span className="spinner-border spinner-border-sm" />
                      Submitting...
                    </div>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
