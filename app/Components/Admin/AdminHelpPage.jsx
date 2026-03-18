export default function AdminHelpPage() {
  return (
    <div className="container-fluid">
      <section className="p-4">
        <h5 className="fw-bold text-primary mb-3">
          <i className="bi bi-speedometer2 me-2"></i>
          Dashboard & Analytics
        </h5>
        <div className="card border-start border-4 border-primary shadow-sm">
          <div className="card-body">
            <h6 className="fw-semibold d-flex align-items-center gap-2">
              <span className="badge rounded-pill bg-primary">1</span>
              Viewing System Statistics
            </h6>
            <p className="text-muted small mb-0">
              The dashboard shows live stats including Total Users, Students,
              Supervisors, Doctors, and Heads of Department. Numbers update
              automatically every 5 seconds — no need to refresh the page.
            </p>
          </div>
        </div>
      </section>

      <section className="p-4">
        <h5 className="fw-bold mb-3" style={{ color: "#0d6efd" }}>
          <i className="bi bi-people-fill me-2"></i>
          Managing Users
        </h5>
        <div className="d-flex flex-column gap-3">
          <div
            className="card shadow-sm"
            style={{ borderLeft: "4px solid #0d6efd" }}
          >
            <div className="card-body">
              <h6 className="fw-semibold d-flex align-items-center gap-2">
                <span
                  className="badge rounded-pill"
                  style={{ background: "#0d6efd" }}
                >
                  1
                </span>
                Adding a Single User
              </h6>
              <p className="text-muted small mb-0">
                Click the &apos;Add User&apos; button. Fill in the name, role
                (Student / Supervisor / Doctor), email (must end with
                @o6u.edu.eg), and a password of at least 8 characters. Click
                Save.
              </p>
            </div>
          </div>

          <div
            className="card shadow-sm"
            style={{ borderLeft: "4px solid #0d6efd" }}
          >
            <div className="card-body">
              <h6 className="fw-semibold d-flex align-items-center gap-2">
                <span
                  className="badge rounded-pill"
                  style={{ background: "#0d6efd" }}
                >
                  2
                </span>
                Importing Users via Excel
              </h6>
              <p className="text-muted small mb-3">
                Click &apos;Import Excel Sheet&apos;. Select the role that
                applies to all users in the file, then upload an .xlsx or .xls
                file. The file must have columns: name, email, password. All
                emails must end with @o6u.edu.eg and passwords must be at least
                8 characters. A preview of the first 5 rows will appear before
                confirming.
              </p>
              <div
                className="border rounded overflow-hidden"
                style={{ maxWidth: "460px" }}
              >
                <div
                  className="px-3 py-2 small fw-semibold text-white"
                  style={{ background: "#198754" }}
                >
                  <i className="bi bi-file-earmark-excel-fill me-1"></i>
                  Required Excel Format
                </div>
                <table className="table table-bordered table-sm mb-0">
                  <thead className="table-success">
                    <tr>
                      <th className="small">name</th>
                      <th className="small">email</th>
                      <th className="small">password</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="small text-muted">Youssef</td>
                      <td className="small text-muted">youssef@o6u.edu.eg</td>
                      <td className="small text-muted">pass1234</td>
                    </tr>
                    <tr>
                      <td className="small text-muted">Mohamed</td>
                      <td className="small text-muted">mohamed@o6u.edu.eg</td>
                      <td className="small text-muted">mypassword</td>
                    </tr>
                    <tr>
                      <td className="small text-muted">Ahmed</td>
                      <td className="small text-muted">ahmed@o6u.edu.eg</td>
                      <td className="small text-muted">secure123</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {[
            {
              title: "Editing a User",
              desc: "Click the pencil icon next to any user. You can update their name, email, role, or password. Leave the password field blank to keep it unchanged. Head of Department role cannot be changed.",
            },
            {
              title: "Deleting a User",
              desc: "Click the trash icon next to any user. A confirmation dialog will appear. Head of Department accounts cannot be deleted — the delete button won't appear for them.",
            },
            {
              title: "Searching Users",
              desc: "Use the search bar to filter users by name or email in real time. Users are sorted by role (Head of Department → Doctor → Supervisor → Student) then alphabetically by name.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="card shadow-sm"
              style={{ borderLeft: "4px solid #0d6efd" }}
            >
              <div className="card-body">
                <h6 className="fw-semibold d-flex align-items-center gap-2">
                  <span
                    className="badge rounded-pill"
                    style={{ background: "#0d6efd" }}
                  >
                    {i + 3}
                  </span>
                  {step.title}
                </h6>
                <p className="text-muted small mb-0">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="p-4">
        <h5 className="fw-bold text-success mb-3">
          <i className="bi bi-person-circle me-2"></i>
          Your Admin Profile
        </h5>
        <div className="card border-start border-4 border-success shadow-sm">
          <div className="card-body">
            <h6 className="fw-semibold d-flex align-items-center gap-2">
              <span className="badge rounded-pill bg-success">1</span>
              Editing Your Profile
            </h6>
            <p className="text-muted small mb-0">
              Click &apos;Edit Profile&apos; in the header. You can update your
              name, email, and password. Password must be at least 8 characters
              if changed. Leave the password field blank to keep your current
              one.
            </p>
          </div>
        </div>
      </section>

      <section className="p-4">
        <h5 className="fw-bold text-warning mb-3">
          <i className="bi bi-shield-check me-2"></i>
          Roles & Permissions
        </h5>
        <div className="row g-3">
          {[
            {
              role: "Head of Department",
              icon: "bi-briefcase-fill",
              desc: "Has full visibility over all students, files, grades, and procedures. Cannot be deleted or have their role changed by admin.",
            },
            {
              role: "Doctor",
              icon: "bi-heart-pulse-fill",
              desc: "Can view and grade student patient files.",
            },
            {
              role: "Supervisor",
              icon: "bi-person-check-fill",
              desc: "Reviews and approves or rejects student treatment procedure steps. Can provide written feedback on rejections.",
            },
            {
              role: "Student",
              icon: "bi-mortarboard-fill",
              desc: "Creates and submits patient files. Can add treatment procedure steps one at a time, pending supervisor approval before proceeding.",
            },
          ].map((item, i) => (
            <div key={i} className="col-12 col-md-6">
              <div className="card border-start border-4 border-warning shadow-sm h-100">
                <div className="card-body">
                  <h6 className="fw-semibold d-flex align-items-center gap-2">
                    <i className={`bi ${item.icon} text-warning`}></i>
                    {item.role}
                  </h6>
                  <p className="text-muted small mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="p-4">
        <h5 className="fw-bold text-danger mb-3">
          <i className="bi bi-lightbulb-fill me-2"></i>
          Tips & Notes
        </h5>
        <div className="d-flex flex-column gap-3">
          {[
            {
              title: "Email Format",
              desc: "All user emails must end with @o6u.edu.eg. The system will reject any other email format during creation or import.",
            },
            {
              title: "Excel Import Validation",
              desc: "The system checks for duplicate emails, short passwords, and invalid email formats before importing. Any rows with errors will be listed so you can fix them.",
            },
            {
              title: "Password Policy",
              desc: "All passwords must be at least 8 characters long. This applies to both manual creation and Excel imports.",
            },
            {
              title: "Live Statistics",
              desc: "Dashboard statistics refresh every 5 seconds automatically to reflect the latest user counts.",
            },
          ].map((tip, i) => (
            <div
              key={i}
              className="card border-start border-4 border-danger shadow-sm"
            >
              <div className="card-body">
                <h6 className="fw-semibold d-flex align-items-center gap-2">
                  <span className="badge rounded-pill bg-danger">{i + 1}</span>
                  {tip.title}
                </h6>
                <p className="text-muted small mb-0">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
