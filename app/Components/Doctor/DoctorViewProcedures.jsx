"use client";

import { useState, useContext, useEffect } from "react";
import { PatientInfoContext } from "@/app/Contexts/PatientInfoContext";

export default function DoctorViewProcedures() {
  const { file } = useContext(PatientInfoContext);

  const [steps, setSteps] = useState(file?.treatmentSteps || []);

  useEffect(() => {
    setSteps(file?.treatmentSteps || []);
  }, [file]);

  const statusColor = {
    pending: "warning",
    approved: "success",
    rejected: "danger",
  };

  const statusIcon = {
    pending: "bi-hourglass-split",
    approved: "bi-check-circle-fill",
    rejected: "bi-x-circle-fill",
  };

  const formatStatus = (s) =>
    !s ? "Pending" : s.charAt(0).toUpperCase() + s.slice(1);

  const getStatusColor = (s) => statusColor[s] || "secondary";
  const getStatusIcon = (s) => statusIcon[s] || "bi-question-circle";

  return (
    <div className="p-3">
      <div className="position-relative border border-primary rounded-3 p-4 mt-4 bg-white">
        <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
          Treatment Procedures
        </span>

        {steps.length === 0 && (
          <p className="text-muted mb-0">No procedures added yet.</p>
        )}

        <div className="d-flex flex-column gap-3">
          {steps.map((step, index) => (
            <div
              key={step.id ?? index}
              className={`card border-${getStatusColor(step.status)}`}
            >
              <div className="card-header d-flex justify-content-between align-items-center">
                <span className="fw-bold">
                  Step {step.stepNumber ?? index + 1}:{" "}
                  {step.title || "Untitled"}
                </span>

                <span className={`badge bg-${getStatusColor(step.status)}`}>
                  <i className={`bi ${getStatusIcon(step.status)} me-1`} />
                  {formatStatus(step.status)}
                </span>
              </div>

              <div className="card-body">
                <div className="row g-2 mb-2">
                  <div className="col-12 col-md-4">
                    <p className="mb-0 small text-muted">Title</p>
                    <p className="mb-0 fw-medium">{step.title || "-"}</p>
                  </div>

                  <div className="col-12 col-md-4">
                    <p className="mb-0 small text-muted">Date</p>
                    <p className="mb-0 fw-medium">{step.date || "-"}</p>
                  </div>

                  <div className="col-12 col-md-4">
                    <p className="mb-0 small text-muted">Description</p>
                    <p className="mb-0 fw-medium">{step.description || "-"}</p>
                  </div>
                </div>

                {step.status === "rejected" && step.rejectionReason && (
                  <div className="alert alert-danger mt-2 py-2 small">
                    <i className="bi bi-chat-left-text me-2"></i>
                    <strong>
                      Rejected by Dr. {step.supervisorName || "-"}
                    </strong>
                    <br />
                    {step.rejectionReason}
                  </div>
                )}

                {step.status === "approved" && step.supervisorName && (
                  <div className="alert alert-success mt-2 py-2 small d-flex align-items-center">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Approved by{" "}
                    <strong className="ms-1">Dr. {step.supervisorName}</strong>
                  </div>
                )}

                {step.status === "pending" && (
                  <div className="alert alert-warning mt-2 py-2 small d-flex align-items-center">
                    <i className="bi bi-hourglass-split me-2"></i>
                    Waiting for supervisor approval
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
