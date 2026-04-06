"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function UngradedFiles() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUngradedFiles = async () => {
      try {
        const response = await axios.get(
          "https://oralink.runasp.net/api/files/not-graded",
        );
        setFiles(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load ungraded files");
      } finally {
        setLoading(false);
      }
    };

    fetchUngradedFiles();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-danger text-center py-5">{error}</div>;
  }

  if (files.length === 0) {
    return (
      <div className="text-center py-5">
        <p className="mb-1">No ungraded files</p>
        <small className="text-muted">All files have been graded</small>
      </div>
    );
  }

  return (
    <div className="shadow border rounded bg-white p-4 my-4">
      <div className="table-responsive">
        <table className="table table-hover align-middle mb-0 text-center">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Student Name</th>
              <th>Patient Name</th>
              <th>Creation Date</th>
              <th>Submission Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, i) => (
              <tr key={file.fileId}>
                <td>{i + 1}</td>
                <td>
                  <Link
                    href={`/students/${file.studentId}`}
                    className="text-decoration-none text-primary"
                  >
                    {file.studentName}
                  </Link>
                </td>
                <td>{file.patientName}</td>
                <td>{file.creationDate}</td>
                <td>{file.submittedDate}</td>
                <td>
                  <Link
                    href={`/students/${file.studentId}/files/${file.fileId}`}
                    className="d-inline-flex align-items-center btn btn-sm btn-primary gap-1"
                  >
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
                      aria-hidden="true"
                    >
                      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
