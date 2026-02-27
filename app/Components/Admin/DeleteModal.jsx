"use client";

import axios from "axios";
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

              <div className="modal-footer">
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
