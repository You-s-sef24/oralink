export default function HodHelpPage() {
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
                            desc: "After logging in you'll see a live overview of total students, files, graded files, and average grade. Below that are three quick actions: View All Students, View All Patient Files, and Grading Panel. You can also access the full dashboard from the 'View Full Dashboard' link."
                        },
                        {
                            title: "Your Role",
                            desc: "As Head of Department you have full visibility over all students, files, and grades. You can grade ungraded files and also edit grades that have already been assigned by doctors."
                        }
                    ].map((step, i) => (
                        <div key={i} className="card border-start border-4 border-primary shadow-sm">
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

            {/* Dashboard */}
            <section className="p-4">
                <h5 className="fw-bold mb-3" style={{ color: "#7C3AED" }}>
                    <i className="bi bi-speedometer2 me-2"></i>
                    Analytics Dashboard
                </h5>
                <div className="d-flex flex-column gap-3">
                    {[
                        {
                            title: "Overview Stats",
                            desc: "The dashboard shows key numbers: total students, total files, graded files, and average grade across all students."
                        },
                        {
                            title: "Student Performance",
                            desc: "Two tables show the top performing students and the lowest performing students based on their grades, giving you a quick view of who may need attention."
                        },
                        {
                            title: "Pass / Fail Chart",
                            desc: "A chart showing the ratio of passing versus failing students based on submitted and graded files."
                        },
                        {
                            title: "Grade Distribution Chart",
                            desc: "A chart breaking down grades into ranges (e.g. 90–100, 75–89, 60–74, below 60) so you can see how grades are distributed across all students."
                        }
                    ].map((step, i) => (
                        <div key={i} className="card shadow-sm" style={{ borderLeft: "4px solid #7C3AED" }}>
                            <div className="card-body">
                                <h6 className="fw-semibold d-flex align-items-center gap-2">
                                    <span className="badge rounded-pill" style={{ background: "#7C3AED" }}>{i + 1}</span>
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
                <h5 className="fw-bold text-success mb-3">
                    <i className="bi bi-people-fill me-2"></i>
                    Viewing Students
                </h5>
                <div className="d-flex flex-column gap-3">
                    {[
                        {
                            title: "Students List",
                            desc: "Go to 'View All Students' to see a table of all registered students sorted alphabetically. You can search by name or email."
                        },
                        {
                            title: "Student Profile",
                            desc: "Click 'View' next to any student to open their profile showing their details and all their patient files with grades."
                        },
                        {
                            title: "Opening a File",
                            desc: "Click 'Open' next to any file to view the full patient file with the grading panel on the right."
                        }
                    ].map((step, i) => (
                        <div key={i} className="card border-start border-4 border-success shadow-sm">
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

            {/* Patient Files */}
            <section className="p-4">
                <h5 className="fw-bold text-warning mb-3">
                    <i className="bi bi-folder2-open me-2"></i>
                    Viewing All Patient Files
                </h5>
                <div className="d-flex flex-column gap-3">
                    {[
                        {
                            title: "All Patient Files Page",
                            desc: "Go to 'View All Patient Files' to see every submitted file across all students. Files are sorted by submission date. The table shows student name, patient name, dates, and grade."
                        },
                        {
                            title: "Searching & Filtering",
                            desc: "Use the search bar to filter by patient name or student name. Use the status dropdown to show only Graded or Not Graded files."
                        },
                        {
                            title: "Grade Color Coding",
                            desc: "Grades are color coded: green (90–100), blue (75–89), yellow (60–74), red (below 60). Ungraded files show a grey badge."
                        }
                    ].map((step, i) => (
                        <div key={i} className="card border-start border-4 border-warning shadow-sm">
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

            {/* Grading */}
            <section className="p-4">
                <h5 className="fw-bold text-danger mb-3">
                    <i className="bi bi-award-fill me-2"></i>
                    Grading & Editing Grades
                </h5>
                <div className="d-flex flex-column gap-3">
                    {[
                        {
                            title: "Grading Panel Page",
                            desc: "Go to 'Grading Panel' to see two tabs: Ungraded Files and Graded Files with counts. Start with Ungraded Files to find submissions awaiting review."
                        },
                        {
                            title: "Assigning a Grade",
                            desc: "Open any ungraded file. The grading panel appears on the right. Enter a score between 0 and 100, write feedback, then click Save Grade."
                        },
                        {
                            title: "Editing an Existing Grade",
                            desc: "Unlike doctors, you can edit grades that have already been saved. Open any graded file — the grading panel will be editable with the current score and feedback pre-filled. Update the values and click Save Grade to overwrite."
                        },
                        {
                            title: "After Saving",
                            desc: "After saving a grade you will be taken back to the previous page. The student will see their updated grade and feedback in their file."
                        }
                    ].map((step, i) => (
                        <div key={i} className="card border-start border-4 border-danger shadow-sm">
                            <div className="card-body">
                                <h6 className="fw-semibold d-flex align-items-center gap-2">
                                    <span className="badge rounded-pill bg-danger">{i + 1}</span>
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
                            title: "You Can Edit Any Grade",
                            desc: "As Head of Department you have full edit access to all grades including those saved by doctors. Use this to correct mistakes or update scores after review."
                        },
                        {
                            title: "Only Submitted Files Appear in Grading",
                            desc: "Only files submitted by students are visible in the grading panel. Draft files are not shown."
                        },
                        {
                            title: "Use the Dashboard for Monitoring",
                            desc: "Check the analytics dashboard regularly to monitor overall student performance, identify struggling students, and track grade distribution trends."
                        },
                        {
                            title: "Feedback is Visible to Students",
                            desc: "Your written feedback is shown directly to the student inside their file. Be specific and constructive."
                        }
                    ].map((tip, i) => (
                        <div key={i} className="card shadow-sm" style={{ borderLeft: "4px solid #0891b2" }}>
                            <div className="card-body">
                                <h6 className="fw-semibold d-flex align-items-center gap-2">
                                    <span className="badge rounded-pill" style={{ background: "#0891b2" }}>{i + 1}</span>
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