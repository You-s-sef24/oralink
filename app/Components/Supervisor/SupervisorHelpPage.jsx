export default function SupervisorHelpPage() {
  return (
    <>
      <section className="p-4">
        <h5 className="fw-bold text-primary mb-3">
          <i className="bi bi-house-fill me-2"></i>
          Getting Started
        </h5>
        <div className="d-flex flex-column gap-3">
          {[
            {
              title: "Your Home Page",
              desc: "After logging in you'll see three quick actions: Review Pending Procedure Steps, View All Students, and View All Patient Cases. Use these to navigate to the main features quickly.",
            },
            {
              title: "Your Role",
              desc: "As a supervisor your main responsibility is to review treatment procedure steps submitted by students. You approve or reject each step with written feedback before the student can proceed to the next one.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="card border-start border-4 border-primary shadow-sm"
            >
              <div className="card-body">
                <h6 className="fw-semibold d-flex align-items-center gap-2">
                  <span className="badge rounded-pill bg-primary">{i + 1}</span>
                  {step.title}
                </h6>
                <p className="text-muted small mb-0">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="p-4">
        <h5 className="fw-bold mb-3" style={{ color: "#7C3AED" }}>
          <i className="bi bi-clipboard-check-fill me-2"></i>
          Reviewing Pending Procedures
        </h5>
        <div className="d-flex flex-column gap-3">
          {[
            {
              title: "Pending Procedures Page",
              desc: "Go to 'Review Pending Procedure Steps' from the home page or sidebar. This page lists all procedure steps submitted by students that are waiting for your approval, sorted by submission date (oldest first).",
            },
            {
              title: "Opening a File for Review",
              desc: "Click 'Review Step' next to any pending procedure. This opens the full patient file so you can review all the student's work in context before making a decision.",
            },
            {
              title: "Navigating the File",
              desc: "The file opens in multi-page view. Use the Next and Back buttons to move through the pages. The treatment procedures are on the last page.",
            },
            {
              title: "Approving a Step",
              desc: "On the Treatment Procedures page, the last step will show an Approve button if it is pending. Click Approve to confirm the step. The student will then be able to add their next procedure step.",
            },
            {
              title: "Rejecting a Step",
              desc: "Click the Reject button on the last pending step. A text area will appear asking you to provide feedback explaining what needs to be corrected. The Confirm Reject button stays disabled until you write something. Click Cancel to go back without rejecting.",
            },
            {
              title: "Feedback on Rejection",
              desc: "Your written feedback is shown to the student in red inside their file. They will need to correct and resubmit the step before you can review it again. Always be specific about what needs to change.",
            },
            {
              title: "Step Status Indicators",
              desc: "Each procedure step shows a colored badge: Pending (yellow, awaiting your review), Approved (green, confirmed), or Rejected (red, needs correction). Only the last step can be approved or rejected.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="card shadow-sm"
              style={{ borderLeft: "4px solid #7C3AED" }}
            >
              <div className="card-body">
                <h6 className="fw-semibold d-flex align-items-center gap-2">
                  <span
                    className="badge rounded-pill"
                    style={{ background: "#7C3AED" }}
                  >
                    {i + 1}
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
          <i className="bi bi-people-fill me-2"></i>
          Viewing Students
        </h5>
        <div className="d-flex flex-column gap-3">
          {[
            {
              title: "View All Students Page",
              desc: "Go to 'View All Students' to see a list of all students sorted alphabetically. The table shows each student's name, email, and number of files submitted.",
            },
            {
              title: "Student Profile",
              desc: "Click 'View' next to any student to open their profile. You'll see their name, email, total files count, and pending files count, followed by a list of all their patient files.",
            },
            {
              title: "Student Files List",
              desc: "Each file in the student profile shows the patient name, creation date. Click 'Open' to view the full patient file.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="card border-start border-4 border-success shadow-sm"
            >
              <div className="card-body">
                <h6 className="fw-semibold d-flex align-items-center gap-2">
                  <span className="badge rounded-pill bg-success">{i + 1}</span>
                  {step.title}
                </h6>
                <p className="text-muted small mb-0">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="p-4">
        <h5 className="fw-bold text-warning mb-3">
          <i className="bi bi-folder2-open me-2"></i>
          Viewing All Patient Cases
        </h5>
        <div className="d-flex flex-column gap-3">
          {[
            {
              title: "All Patient Cases Page",
              desc: "Go to 'View All Patient Cases' to see every patient file across all students. The table shows the patient name, student name, last procedure title, and step number. Files are sorted alphabetically by patient name.",
            },
            {
              title: "Searching Cases",
              desc: "Use the search bar to filter cases by patient name or student name in real time.",
            },
            {
              title: "Opening a Case",
              desc: "Click 'Review Step' next to any case to open the full patient file for that student. You can navigate all pages and review all procedure steps.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="card border-start border-4 border-warning shadow-sm"
            >
              <div className="card-body">
                <h6 className="fw-semibold d-flex align-items-center gap-2">
                  <span className="badge rounded-pill bg-warning">{i + 1}</span>
                  {step.title}
                </h6>
                <p className="text-muted small mb-0">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="p-4">
        <h5 className="fw-bold mb-3" style={{ color: "#0891b2" }}>
          <i className="bi bi-lightbulb-fill me-2"></i>
          Tips & Notes
        </h5>
        <div className="d-flex flex-column gap-3">
          {[
            {
              title: "Only the Last Step is Actionable",
              desc: "You can only approve or reject the most recent procedure step. Previous steps that are already approved or rejected cannot be changed.",
            },
            {
              title: "Feedback is Required for Rejection",
              desc: "You cannot confirm a rejection without writing feedback. The Confirm Reject button stays disabled until you type something.",
            },
            {
              title: "Students Are Blocked Until You Review",
              desc: "A student cannot add their next procedure step until you approve their current pending one. Try to review pending steps promptly.",
            },
            {
              title: "Pending Procedures Are Sorted by Date",
              desc: "The pending procedures page shows oldest submissions first so you can prioritize students who have been waiting the longest.",
            },
          ].map((tip, i) => (
            <div
              key={i}
              className="card shadow-sm"
              style={{ borderLeft: "4px solid #0891b2" }}
            >
              <div className="card-body">
                <h6 className="fw-semibold d-flex align-items-center gap-2">
                  <span
                    className="badge rounded-pill"
                    style={{ background: "#0891b2" }}
                  >
                    {i + 1}
                  </span>
                  {tip.title}
                </h6>
                <p className="text-muted small mb-0">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
