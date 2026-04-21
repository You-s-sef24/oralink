"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ViewPatientCases() {
  const [search, setSearch] = useState("");
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get(
          "https://oralink.runasp.net/api/supervisor/all-files-with-last-procedure",
        );
        setFiles(
          response.data.sort((a, b) =>
            a.patientName.localeCompare(b.patientName),
          ),
        );
      } catch (err) {
        console.error(err);
        setError("Failed to load files");
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  const filtered = files.filter(
    (f) =>
      f.patientName.toLowerCase().includes(search.toLowerCase()) ||
      f.studentName.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="border rounded p-3 mt-3">
      <div className="input-group my-3">
        <div className="input-group-prepend">
          <label
            className="input-group-text text-secondary bg-white border-end-0 p-3"
            htmlFor="search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m21 21-4.34-4.34"></path>
              <circle cx="11" cy="11" r="8"></circle>
            </svg>
          </label>
        </div>
        <input
          type="search"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-start-0 form-control p-3"
          placeholder="Search by patient name or student name"
          aria-label="Search"
          aria-describedby="Search"
        />
      </div>

      <div className="card border shadow-sm">
        <div className="card-body">
          {error && (
            <div className="alert alert-danger">
              <i className="bi bi-exclamation-circle me-2"></i>
              {error}
            </div>
          )}

          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status" />
              <p className="text-muted mt-2 mb-0">Loading...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-5">
              <i className="bi bi-search fs-1 text-muted"></i>
              <p className="text-muted mt-2 mb-0">No results found.</p>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover align-middle rounded">
                <thead className="table-light text-center rounded">
                  <tr>
                    <th>#</th>
                    <th>Patient Name</th>
                    <th>Student Name</th>
                    <th>Procedure</th>
                    <th>Step Number</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody className="text-center">
                  {filtered.map((f, i) => (
                    <tr key={f.fileId}>
                      <td className="text-muted">{i + 1}</td>
                      <td className="fw-semibold">{f.patientName}</td>
                      <td className="text-muted">
                        <Link
                          href={`/view-students/${f.studentId}`}
                          className="text-decoration-none text-primary"
                        >
                          {f.studentName}
                        </Link>
                      </td>
                      <td className="text-muted">
                        {f.lastProcedureName || "-"}
                      </td>
                      <td className="text-muted">Step {f.totalStepsCount}</td>
                      <td>
                        <Link
                          href={`/view-students/${f.studentId}/files/${f.fileId}`}
                          className="btn btn-primary btn-sm"
                        >
                          Review Step
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
