"use client";

import { useState } from "react";
import * as XLSX from "xlsx";
import axios from "axios";

export default function ExcelModal({ onClose = () => {}, refreshUsers }) {
  const [loading, setLoading] = useState(false);
  const [previewData, setPreviewData] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");
  const [error, setError] = useState("");

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data);

      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      const jsonData = XLSX.utils.sheet_to_json(sheet);

      const formattedData = jsonData.map((row) => ({
        name: row.name?.toString().trim() || "",
        email: row.email?.toString().trim() || "",
        password: row.password?.toString().trim() || "",
      }));

      setPreviewData(formattedData);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Invalid Excel file format.");
    }
  };

  const handleSubmit = async () => {
    if (!selectedRole) {
      setError("Please select a role.");
      return;
    }

    if (previewData.length === 0) {
      setError("No data to import. Please upload a valid Excel file.");
      return;
    }

    const emailSet = new Set();
    const duplicatesSet = new Set();
    const errorsList = [];

    previewData.forEach((user, index) => {
      const rowNum = index + 2;
      const { email, password, name } = user;
      const userErrors = [];

      if (!password || password.length < 8) {
        userErrors.push("Password too short (< 8 characters)");
      }

      if (!email || !email.endsWith("@o6u.edu.eg")) {
        userErrors.push("Email must end with @o6u.edu.eg");
      }

      if (emailSet.has(email)) {
        duplicatesSet.add(email);
        userErrors.push("Duplicate email in file");
      } else {
        emailSet.add(email);
      }

      if (userErrors.length > 0) {
        errorsList.push({
          row: rowNum,
          name,
          email,
          issues: userErrors,
        });
      }
    });

    if (errorsList.length > 0) {
      const msg = errorsList
        .map(
          (err) =>
            `Row ${err.row} (${err.name} / ${err.email}): ${err.issues.join(
              ", ",
            )}`,
        )
        .join("\n");

      setError(msg);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const payload = {
        role: selectedRole,
        users: previewData,
      };

      await axios.post(
        "https://oralink.runasp.net/api/admin/upload-users-excel",
        payload,
        { headers: { "Content-Type": "application/json" } },
      );

      alert("Users imported successfully ✅");
      refreshUsers();
      onClose();
    } catch (err) {
      console.error("Upload error:", err.response?.data || err.message);
      setError(
        err.response?.data?.message || "Something went wrong while importing.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal d-block bg-dark bg-opacity-50" onClick={onClose}>
      <div
        className="modal-dialog modal-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content p-4">
          <h4 className="mb-3">Import Users From Excel</h4>

          <div className="mb-3">
            <label className="form-label">Select Role For All Users</label>
            <select
              className="form-select"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              required
            >
              <option value="">Choose Role</option>
              <option value="Student">Student</option>
              <option value="Supervisor">Supervisor</option>
              <option value="Doctor">Doctor</option>
              <option value="Head of Department">Head of Department</option>
            </select>
          </div>

          <input
            type="file"
            accept=".xlsx, .xls"
            className="form-control mb-3"
            onChange={handleFileUpload}
          />

          {error && (
            <div
              className="alert alert-danger py-2"
              style={{ whiteSpace: "pre-line" }}
            >
              {error}
            </div>
          )}

          {previewData.length > 0 && (
            <div
              className="border rounded p-2 mb-3"
              style={{ maxHeight: "200px", overflowY: "auto" }}
            >
              <table className="table table-sm table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                  </tr>
                </thead>
                <tbody>
                  {previewData.slice(0, 5).map((user, index) => (
                    <tr key={index}>
                      <td className="text-truncate">{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.password}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <small className="text-muted">
                Showing first 5 rows ({previewData.length} total users)
              </small>
            </div>
          )}

          <div className="d-flex justify-content-end gap-2">
            <button
              className="btn btn-secondary"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </button>

            <button
              className="btn btn-success"
              onClick={handleSubmit}
              disabled={loading || previewData.length === 0}
            >
              {loading ? "Importing..." : "Import Users"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
