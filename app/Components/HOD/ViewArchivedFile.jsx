"use client";

import { useEffect, useState, useContext } from "react";
import axios from "axios";
import ViewGeneralForm from "../ViewGeneralForm";
import ViewPeriodonticsPage1 from "../Periodontics/ViewPeriodonticsPage1";
import ViewPeriodonticsPage2 from "../Periodontics/ViewPeriodonticsPage2";
import ViewPeriodonticsPage3 from "../Periodontics/ViewPeriodonticsPage3";
import ViewPeriodonticsPage4 from "../Periodontics/ViewPeriodonticsPage4";
import ViewEndodonticsFile from "../Endodontics/ViewEndodonticsFile";
import { StatesContext } from "../../Contexts/StatesContext";
import { PatientInfoContext } from "../../Contexts/PatientInfoContext";
import DoctorViewProcedures from "../Doctor/DoctorViewProcedures";

export default function ViewArchivedFile({ fileId }) {
  const { state, setState } = useContext(StatesContext);
  const { file, setFile } = useContext(PatientInfoContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!fileId) return;

    const fetchFile = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://oralink.runasp.net/api/archive/${fileId}`,
        );
        const data = response.data;

        const parsedFile = {
          ...data,
          prePatientImage: data.prePatientImages ?? [],
          postPatientImage: data.postPatientImages ?? [],
          departmentData: data.departmentData
            ? JSON.parse(data.departmentData)
            : null,
          medicalHistory: data.medicalHistory
            ? JSON.parse(data.medicalHistory)
            : null,
          dentalHistory: data.dentalHistory
            ? JSON.parse(data.dentalHistory)
            : null,
          treatmentProcedures: data.treatmentProcedures
            ? JSON.parse(data.treatmentProcedures)
            : [],
          grade:
            data.doctorGrade !== null && data.doctorGrade !== undefined
              ? Number(data.doctorGrade)
              : null,
          feedback: data.feedBack ?? "",
          gradedBy: data.gradedBy ?? "",
        };

        setFile(parsedFile);
      } catch (error) {
        console.error("Error fetching file:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFile();
  }, [fileId, setFile]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center py-5">
        <div className="spinner-border text-primary"></div>
      </div>
    );
  }

  if (!file) {
    return <div className="text-center py-5">File not found</div>;
  }

  return (
    <div className="row">
      <div className="col-md-8">
        {file?.department === "Periodontics" ? (
          state === 1 ? (
            <ViewGeneralForm />
          ) : state === 2 ? (
            <ViewPeriodonticsPage1 />
          ) : state === 3 ? (
            <ViewPeriodonticsPage2 />
          ) : state === 4 ? (
            <ViewPeriodonticsPage3 />
          ) : state === 5 ? (
            <ViewPeriodonticsPage4 />
          ) : (
            <DoctorViewProcedures />
          )
        ) : file?.department === "Endodontics" ? (
          state === 1 ? (
            <ViewGeneralForm />
          ) : (
            <ViewEndodonticsFile />
          )
        ) : (
          <></>
        )}

        {(file?.department === "Periodontics" ||
          file?.department === "Endodontics") && (
          <div className="d-flex justify-content-between m-3">
            {state === 1 ? (
              <div></div>
            ) : (
              <button
                className="btn btn-outline-primary"
                onClick={() => setState(state - 1)}
              >
                ← Back
              </button>
            )}

            {((file.department === "Periodontics" && state < 6) ||
              (file.department === "Endodontics" && state < 2)) && (
              <button
                className="btn btn-primary"
                onClick={() => setState(state + 1)}
              >
                Next →
              </button>
            )}
          </div>
        )}
      </div>

      <div className="col-md-4 d-lg-block">
        <div className="position-sticky top-0 bg-white border-0 rounded-4 shadow-sm p-4 my-4">
          <div className="d-flex align-items-center gap-2 mb-3">
            <div className="bg-secondary bg-opacity-10 p-2 rounded-3">
              <i className="bi bi-archive text-secondary"></i>
            </div>
            <div>
              <h6 className="mb-0 fw-bold">Archived File</h6>
              <small className="text-muted">Read-only information</small>
            </div>
          </div>

          <hr />

          <div className="mb-3">
            <small className="text-muted">Student</small>
            <div className="fw-semibold">{file?.student?.name || "-"}</div>
          </div>

          <div className="mb-3">
            <small className="text-muted">Department</small>
            <div className="fw-semibold">{file?.department || "-"}</div>
          </div>

          <div className="mb-3">
            <small className="text-muted">Graded By</small>
            <div className="fw-semibold">{file?.gradedBy || "-"}</div>
          </div>

          <div className="text-center my-4">
            <div className="display-5 fw-bold text-primary">
              {file?.doctorGrade !== null && file?.doctorGrade !== undefined
                ? `${file.doctorGrade}/10`
                : "-"}
            </div>
            <small className="text-muted">Final Score</small>
          </div>

          <div>
            <small className="text-muted">Feedback</small>
            <div
              className="bg-light p-3 rounded mt-1"
              style={{ whiteSpace: "pre-wrap" }}
            >
              {file?.feedBack || "No feedback provided."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
