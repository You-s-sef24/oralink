"use client";

import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../Contexts/UsersContext";
import Link from "next/link";
import axios from "axios";

export default function DSSFiles() {
  const [search, setSearch] = useState("");
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useContext(UsersContext);

  useEffect(() => {
    async function fetchPatients() {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(
          "https://oralink.runasp.net/api/patient-files/my-files",
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        setFiles(res.data);
      } catch (err) {
        console.error(err);
        setFiles([]);
      } finally {
        setLoading(false);
      }
    }

    fetchPatients();
  }, [token]);

  const filteredFiles = files.filter((file) =>
    file?.patientName?.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading patients...</p>
      </div>
    );
  }

  if (files.length === 0) {
    return (
      <div className="text-center my-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-muted mb-3"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="12" y1="18" x2="12" y2="12"></line>
          <line x1="9" y1="15" x2="15" y2="15"></line>
        </svg>
        <h5 className="text-muted mb-3">No Patient Files Yet</h5>
        <p className="text-muted mb-4">
          Get started by creating your first patient file.
        </p>
        <Link href="/createnewfile" className="btn btn-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="me-2"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Create New File
        </Link>
      </div>
    );
  }

  return (
    <div className="border rounded p-3 mt-5">
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
          placeholder="Search by patient name"
          aria-label="Search"
        />
      </div>

      <div className="card border shadow-sm">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light text-center">
                <tr>
                  <th>#</th>
                  <th>Patient Name</th>
                  <th>Phone</th>
                  <th>Creation Date</th>
                  <th>Submission Date</th>
                  <th>Grade</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody className="text-center">
                {filteredFiles.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-4 text-muted">
                      No patients found.
                    </td>
                  </tr>
                ) : (
                  filteredFiles.map((file, i) => (
                    <tr key={file.fileId}>
                      <td className="text-muted">{i + 1}</td>
                      <td className="fw-bold">{file.patientName}</td>
                      <td className="text-muted">{file.phone}</td>
                      <td className="text-muted">
                        {file.creationDate?.split("T")[0]}
                      </td>
                      <td className="text-muted">
                        {file.submittedDate?.split("T")[0] || "-"}
                      </td>
                      <td className="text-muted">
                        {file.doctorGrade || "-"}/100
                      </td>
                      <td>
                        <Link
                          href={`dss-report/${file.fileId}`}
                          className="btn btn-sm btn-primary d-inline-flex align-items-center gap-1"
                        >
                          Generate
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
