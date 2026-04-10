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
import { UsersContext } from "@/app/Contexts/UsersContext";
import { useRouter } from "next/navigation";
import ViewProcedures from "./ViewProcedures";

export default function SupervisorViewFile({ fileId }) {
  const { state, setState } = useContext(StatesContext);
  const { currentUser } = useContext(UsersContext);

  const { file, setFile } = useContext(PatientInfoContext);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (!fileId) return;

    const fetchFile = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://oralink.runasp.net/api/supervisor/students/file/${fileId}`,
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
          treatmentProcedures: data.treatmentSteps ?? [],
          grade:
            data.doctorGrade !== null && data.doctorGrade !== undefined
              ? Number(data.doctorGrade)
              : 0,
          feedback: data.feedBack ?? "",
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

  const ReadOnlyTextField = ({ label, value }) => (
    <div className="mb-2">
      <label className="form-label fw-semibold">{label}</label>
      <p
        className="border rounded px-2 py-2 bg-light"
        style={{
          minHeight: "75px",
          whiteSpace: "pre-wrap",
          marginBottom: 0,
        }}
      >
        {value || "-"}
      </p>
    </div>
  );

  return (
    <div className="row">
      <h4 className="d-block d-md-none text-center text-primary mt-2">
        Student Name: {file?.student?.name}
      </h4>
      <div className="col">
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
            <ViewProcedures />
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
                className="btn btn-primary"
                onClick={() => setState(state - 1)}
              >
                Back
              </button>
            )}
            {((file.department === "Periodontics" && state < 6) ||
              (file.department === "Endodontics" && state < 2)) && (
              <button
                className="btn btn-primary"
                onClick={() => setState(state + 1)}
              >
                Next
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
