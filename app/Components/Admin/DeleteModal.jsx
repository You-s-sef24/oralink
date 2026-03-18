"use client";

import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function DeleteModal({
  show,
  isClose,
  selectedUser,
  refreshUsers,
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleDelete() {
    if (!selectedUser) return;

    setLoading(true);
    setError("");

    try {
      await axios.delete(
        `https://oralink.runasp.net/api/admin/delete-user/${selectedUser.id}`,
      );

      if (refreshUsers) refreshUsers();

      isClose();
    } catch (err) {
      console.error("Error deleting user:", err);
      setError(
        err.response?.data?.message ||
          "Failed to delete user. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

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
          onClick={() => !loading && isClose()}
        />
      )}

      <div
        className={`modal fade ${show ? "show d-block" : "d-none"}`}
        style={{ zIndex: 1045 }}
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Are You Sure?</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => !loading && isClose()}
                disabled={loading}
              />
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleDelete();
              }}
            >
              <div className="modal-body">
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                Are you sure you want to delete{" "}
                <strong>{selectedUser?.name}</strong>? This action cannot be
                undone.
              </div>

              <div className="modal-footer d-flex justify-content-between">
                <Link
                  href={"/help"}
                  onClick={() => {
                    isClose();
                  }}
                >
                  <div className="btn border-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <path d="M12 17h.01" />
                    </svg>
                  </div>
                </Link>
                <div className="d-flex gap-2">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => !loading && isClose()}
                    disabled={loading}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="btn btn-danger"
                    disabled={loading}
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
                      "Yes, Delete"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
