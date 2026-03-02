"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UsersModal({ show, isClose, refreshUsers }) {
  const [userData, setUserData] = useState({
    name: "",
    role: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const emptyFields = Object.values(userData).some(
    (value) => value.trim() === "",
  );

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
      await axios.post("https://oralink.runasp.net/api/admin/create", userData);

      setUserData({
        name: "",
        role: "",
        email: "",
        password: "",
      });

      if (refreshUsers) {
        refreshUsers();
      }

      isClose();
    } catch (err) {
      console.error("Error creating user:", err);
      setError(
        err.response?.data?.message ||
          err.response?.data?.error ||
          "Failed to create user.",
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
          onClick={isClose}
        />
      )}

      <div
        className={`modal fade ${show ? "show d-block" : "d-none"}`}
        style={{ zIndex: 1045 }}
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add New User</h5>
              <button
                type="button"
                className="btn-close"
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
                {error && <div className="alert alert-danger">{error}</div>}

                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={userData.name}
                    onChange={(e) =>
                      setUserData({ ...userData, name: e.target.value })
                    }
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Role</label>
                  <select
                    className="form-select"
                    value={userData.role}
                    onChange={(e) =>
                      setUserData({ ...userData, role: e.target.value })
                    }
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

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={userData.email}
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      value={userData.password}
                      onChange={(e) =>
                        setUserData({ ...userData, password: e.target.value })
                      }
                      placeholder="Enter password"
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
                      <span className="spinner-border spinner-border-sm me-2" />
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
