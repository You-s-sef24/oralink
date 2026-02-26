"use client";

import axios from "axios";
import { useState } from "react";

export default function UsersModal({ show, isClose }) {
  const [userData, setUserData] = useState({
    name: "",
    role: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const emptyFields = Object.values(userData).some((value) => value === "");

  async function handleSave() {
    if (emptyFields) {
      setError("Please fill in all fields.");
      return;
    }

    if (userData.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post("/api/users", userData);

      isClose();
    } catch (err) {
      console.error("Error creating user:", err);
      setError(err.response?.data?.message || "Failed to create user.");
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
          onClick={isClose}
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
              <h5 className="modal-title">Add New User</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={isClose}
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
                <div>
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="name"
                    placeholder="Enter name"
                    value={userData.name}
                    onChange={(e) =>
                      setUserData({ ...userData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label htmlFor="role" className="form-label">
                    Role
                  </label>
                  <select
                    className="form-select mb-3"
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
                    <option value="Head of Department">
                      Head of Department
                    </option>
                  </select>
                </div>
                <div>
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control mb-3"
                    id="email"
                    placeholder="Enter email"
                    value={userData.email}
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control mb-3"
                    id="password"
                    placeholder="Enter password"
                    value={userData.password}
                    onChange={(e) =>
                      setUserData({ ...userData, password: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={isClose}
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
