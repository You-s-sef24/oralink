import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ViewStudentFiles({ id }) {
  //   const [files, setFiles] = useState([]);
  const files = [
    {
      fileId: 1, // changed from id to fileId
      patientName: "sdsds",
      creationDate: "2024-01-01",
      graded: true, // add this to test both states
    },
    {
      fileId: 2,
      patientName: "test patient",
      creationDate: "2024-02-01",
      graded: false,
    },
  ];
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //   useEffect(() => {
  //     if (!id) return;

  //     const fetchFiles = async () => {
  //       try {
  //         setLoading(true);

  //         const response = await axios.get(
  //           `https://oralink.runasp.net/api/students/${id}/files`,
  //         );

  //         setFiles(response.data);
  //         console.log(response.data);
  //       } catch (err) {
  //         console.error(err);
  //         setError("Failed to load files");
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchFiles();
  //   }, [id]);

  //   if (loading) {
  //     return (
  //       <div className="d-flex justify-content-center align-items-center">
  //         <div
  //           className="spinner-border text-primary spinner-border-sm"
  //           role="status"
  //         >
  //           <span className="visually-hidden">Loading...</span>
  //         </div>
  //       </div>
  //     );
  //   }

  if (error) {
    return <div className="text-danger text-center py-4">{error}</div>;
  }

  if (files.length === 0) {
    return (
      <div className="text-center py-4">
        <p className="mb-1">No files submitted yet</p>
        <small className="text-muted">
          This student hasn&apos;t submitted any patient files
        </small>
      </div>
    );
  }

  return (
    <div className="shadow border rounded bg-white p-4 my-4">
      <div className="table-responsive">
        <table className="table table-hover align-middle mb-0">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Patient Name</th>
              <th>Created Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{file.patientName}</td>
                <td>{file.creationDate}</td>
                <td>
                  <Link
                    href={`/view-students/${id}/files/${file.fileId}`}
                    className="d-inline-flex align-items-center btn btn-sm btn-primary gap-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    Open
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
