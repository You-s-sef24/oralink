import React from "react";

export default function Accounts() {
  const accounts = [
    { role: "Admin", email: "admin@123", pass: "01115658096" },
    { role: "Student", email: "202205658@o6u.edu.eg", pass: "12345678" },
    { role: "Supervisor", email: "supervisor@o6u.edu.eg", pass: "12345678" },
    { role: "Doctor", email: "Doctor@123", pass: "12345678" },
    { role: "Head of Department", email: "hod@123", pass: "12345678" },
  ];

  return (
    <div className="card shadow-sm border bg-light p-2 mx-auto" style={{ maxWidth: "480px" }}>
      <div className="card-body p-2">
        <small className="fw-bold text-uppercase text-secondary d-block mb-2" style={{ fontSize: "11px" }}>
          Demo Credentials
        </small>

        <div className="d-flex flex-column gap-1">
          {accounts.map((acc, i) => (
            <div
              key={i}
              className="d-flex justify-content-between align-items-center p-2 rounded bg-white border"
              style={{ fontSize: "12px" }}
            >
              <div className="d-flex align-items-center gap-2 text-truncate">
                <span
                  className="badge bg-primary-subtle text-primary border border-primary-subtle"
                  style={{ fontSize: "10px", minWidth: "65px" }}
                >
                  {acc.role}
                </span>
                <code className="text-dark fw-medium text-truncate">{acc.email}</code>
              </div>

              <div className="ms-2">
                <code className="text-muted" style={{ fontSize: "11px" }}>
                  {acc.pass}
                </code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}