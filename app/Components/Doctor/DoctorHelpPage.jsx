export default function DoctorHelpPage() {
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
              desc: "After logging in you'll see three quick actions: View All Students, View All Patient Files, and Grading Panel. Use these to navigate to the main features quickly.",
            },
            {
              title: "Your Role",
              desc: "As a doctor your main responsibility is to review submitted patient files and assign grades with written feedback. You can view all students and their files, and access the grading panel to manage ungraded submissions.",
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

      {/* Viewing Students */}
      <section className="p-4">
        <h5 className="fw-bold mb-3" style={{ color: "#7C3AED" }}>
          <i className="bi bi-people-fill me-2"></i>
          Viewing Students
        </h5>
        <div className="d-flex flex-column gap-3">
          {[
            {
              title: "Students List",
              desc: "Go to 'View All Students' to see a table of all registered students sorted alphabetically. You can search by name or email.",
            },
            {
              title: "Student Profile",
              desc: "Click 'View' next to any student to open their profile. You'll see their details and a list of all their patient files with creation date, graded status, and grade out of 100.",
            },
            {
              title: "Opening a File from Student Profile",
              desc: "Click 'Open' next to any file in the student profile to view the full patient file. The grading panel will appear on the right side of the screen.",
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

      {/* Viewing Patient Files */}
      <section className="p-4">
        <h5 className="fw-bold text-success mb-3">
          <i className="bi bi-folder2-open me-2"></i>
          Viewing All Patient Files
        </h5>
        <div className="d-flex flex-column gap-3">
          {[
            {
              title: "All Patient Files Page",
              desc: "Go to 'View All Patient Files' to see every submitted patient file across all students. Files are sorted by submission date. The table shows student name, patient name, creation date, submission date, and grade.",
            },
            {
              title: "Searching & Filtering",
              desc: "Use the search bar to filter by patient name or student name. Use the status dropdown to filter by Graded or Not Graded.",
            },
            {
              title: "Grade Color Coding",
              desc: "Grades are color coded: green (90–100), blue (75–89), yellow (60–74), red (below 60). Ungraded files show a grey badge.",
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

      {/* Grading */}
      <section className="p-4">
        <h5 className="fw-bold text-warning mb-3">
          <i className="bi bi-award-fill me-2"></i>
          Grading Files
        </h5>
        <div className="d-flex flex-column gap-3">
          {[
            {
              title: "Grading Panel Page",
              desc: "Go to 'Grading Panel' to see two tabs: Ungraded Files and Graded Files, each showing the count. Start with Ungraded Files to find submissions awaiting your review.",
            },
            {
              title: "Opening a File to Grade",
              desc: "Click 'View' on any file from the grading panel or patient files list. The file opens in a multi-page view. Navigate using Next and Back buttons to review all sections.",
            },
            {
              title: "Assigning a Grade",
              desc: "The grading panel appears on the right side of the file. Enter a score between 0 and 100, write your feedback and comments, then click Save Grade. You will be taken back to the previous page after saving.",
            },
            {
              title: "Once a File is Graded",
              desc: "Graded files move to the Graded Files tab in the grading panel. The student will be able to see their grade and your feedback inside their file.",
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

      {/* Tips */}
      <section className="p-4">
        <h5 className="fw-bold mb-3" style={{ color: "#0891b2" }}>
          <i className="bi bi-lightbulb-fill me-2"></i>
          Tips & Notes
        </h5>
        <div className="d-flex flex-column gap-3">
          {[
            {
              title: "Only Submitted Files Can Be Graded",
              desc: "Only files that have been submitted by students appear in the grading panel. Draft files are not visible to you.",
            },
            {
              title: "You Cannot Edit a Grade Once Saved",
              desc: "Once you save a grade, only the Head of Department can edit it. Make sure your score and feedback are correct before saving.",
            },
            {
              title: "Feedback is Important",
              desc: "Students read your feedback to understand their performance. Be specific and constructive in your comments.",
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
