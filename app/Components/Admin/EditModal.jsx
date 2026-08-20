"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function EditModal({
  show,
  isClose,
  selectedUser,
  setSelectedUser,
  refreshUsers,
}) {
  const [userData, setUserData] = useState({
    name: "",
    role: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedUser) {
      setUserData({
        name: selectedUser.name || "",
        role: selectedUser.role || "",
        email: selectedUser.email || "",
        password: "",
      });
      setError("");
    }
  }, [selectedUser]);

  const emptyFields = !userData.name || !userData.role || !userData.email;

  async function handleSave() {
    setError("This is just a Demo u can't edit user's data :)");
    return;

    if (emptyFields) {
      setError("Please fill in all required fields.");
      return;
    }

    if (userData.password && userData.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    const payload = {
      name: userData.name,
      role: userData.role,
      email: userData.email,
      ...(userData.password && { password: userData.password }),
    };

    setLoading(true);
    setError("");

    try {
      await axios.put(
        `https://oralink.runasp.net/api/admin/update-user/${selectedUser.id}`,
        payload,
      );

      setSelectedUser(null);
      if (refreshUsers) refreshUsers();

      isClose();
    } catch (err) {
      console.error("Error updating user:", err);
      setError(
        err.response?.data?.message ||
          err.response?.data?.error ||
          "An error occurred while updating the user.",
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
              <h5 className="modal-title">Edit User</h5>
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
                handleSave();
              }}
            >
              <div className="modal-body">
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}

                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter name"
                    value={userData.name}
                    onChange={(e) =>
                      setUserData({ ...userData, name: e.target.value })
                    }
                    required
                  />
                </div>
                {selectedUser.role !== "Head of Department" ? (
                  <div className="mb-3">
                    <label htmlFor="role" className="form-label">
                      Role
                    </label>
                    <select
                      className="form-select"
                      id="role"
                      value={userData.role}
                      onChange={(e) =>
                        setUserData({ ...userData, role: e.target.value })
                      }
                      required
                    >
                      <option value="">Select role</option>
                      <option value="Student">Student</option>
                      <option value="Supervisor">Supervisor</option>
                      <option value="Doctor">Doctor</option>
                    </select>
                  </div>
                ) : (
                  ""
                )}

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    value={userData.email}
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password{" "}
                    <span className="text-muted small">
                      (leave blank to keep current)
                    </span>
                  </label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      id="password"
                      placeholder="Enter new password"
                      value={userData.password}
                      onChange={(e) =>
                        setUserData({ ...userData, password: e.target.value })
                      }
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => setShowPassword(!showPassword)}
                      tabIndex={-1}
                    >
                      {showPassword ? (
                        <i className="bi bi-eye-slash-fill"></i>
                      ) : (
                        <i className="bi bi-eye-fill"></i>
                      )}
                    </button>
                  </div>
                </div>
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
                    className="btn btn-primary"
                    disabled={emptyFields || loading}
                  >
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        />
                        Saving...
                      </>
                    ) : (
                      "Save"
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
