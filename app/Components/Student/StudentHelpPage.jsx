export default function StudentHelpPage() {
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
                            desc: "After logging in you'll see three quick actions: Create New Patient File, Search Existing Patient File, and Upload X-ray for AI Diagnosis. Use these to navigate to the main features quickly."
                        },
                        {
                            title: "My Files Page",
                            desc: "Visit 'My Files' to see all your patient files in a table. You can search by patient name, and see each file's creation date, submission date, and grade. Click 'View' to open any file."
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

            {/* Creating a Patient File */}
            <section className="p-4">
                <h5 className="fw-bold mb-3" style={{ color: "#7C3AED" }}>
                    <i className="bi bi-file-earmark-plus-fill me-2"></i>
                    Creating a Patient File
                </h5>
                <div className="d-flex flex-column gap-3">

                    {/* Step 1 */}
                    <div className="card shadow-sm" style={{ borderLeft: "4px solid #7C3AED" }}>
                        <div className="card-body">
                            <h6 className="fw-semibold d-flex align-items-center gap-2">
                                <span className="badge rounded-pill" style={{ background: "#7C3AED" }}>1</span>
                                Step 1 — General Information
                            </h6>
                            <p className="text-muted small mb-2">
                                Fill in the patient&apos;s general info, medical history, dental history, and chief complaint. Required fields are marked — you cannot proceed without them. You must also upload a Pre-Patient Image.
                            </p>
                            <div className="border rounded overflow-hidden" style={{ maxWidth: "500px" }}>
                                <div className="px-3 py-2 small fw-semibold text-white bg-primary">
                                    <i className="bi bi-exclamation-circle-fill me-1"></i>
                                    Required Fields
                                </div>
                                <table className="table table-bordered table-sm mb-0">
                                    <thead className="table-primary">
                                        <tr>
                                            <th className="small">Field</th>
                                            <th className="small">Note</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            ["Patient Name", "Full name required"],
                                            ["Gender", "Male or Female"],
                                            ["Birth Date", "Required"],
                                            ["Address", "Required"],
                                            ["Phone Number", "Valid format required"],
                                            ["Occupation", "Required"],
                                            ["Pre-Patient Image", "Photo upload required"],
                                        ].map(([field, note], i) => (
                                            <tr key={i}>
                                                <td className="small text-muted">{field}</td>
                                                <td className="small text-muted">{note}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Steps 2-5 */}
                    {[
                        {
                            title: "Step 2 — Select Department",
                            desc: "Choose the department for this patient file (e.g. Periodontics or Endodontics). Click 'Back' to return to General Information if needed."
                        },
                        {
                            title: "Step 3 — Department Details",
                            desc: "Fill in the department-specific forms. For Periodontics this is 5 pages — navigate using Next and Back buttons. The last page is the Treatment Procedures step."
                        },
                        {
                            title: "Treatment Procedures",
                            desc: "On the last page, add your first treatment procedure step (title, description, and date performed). All three fields are required. This step will be sent to your supervisor for approval before you can add the next one."
                        },
                        {
                            title: "Saving the File",
                            desc: "On the last page click 'Save Full Patient File'. The file will be saved as a draft. You can come back later to edit and submit it."
                        },
                        {
                            title: "Draft Recovery",
                            desc: "If you accidentally close the page while filling the form, the system may detect an unsaved draft and ask if you want to restore it when you return."
                        }
                    ].map((step, i) => (
                        <div key={i} className="card shadow-sm" style={{ borderLeft: "4px solid #7C3AED" }}>
                            <div className="card-body">
                                <h6 className="fw-semibold d-flex align-items-center gap-2">
                                    <span className="badge rounded-pill" style={{ background: "#7C3AED" }}>{i + 2}</span>
                                    {step.title}
                                </h6>
                                <p className="text-muted small mb-0">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Viewing & Editing a File */}
            <section className="p-4">
                <h5 className="fw-bold text-success mb-3">
                    <i className="bi bi-pencil-square me-2"></i>
                    Viewing & Editing a File
                </h5>
                <div className="d-flex flex-column gap-3">
                    {[
                        {
                            title: "Opening a File",
                            desc: "Go to 'My Files', find the patient in the table, and click 'View'. The file opens in read-only mode by default."
                        },
                        {
                            title: "Editing a File",
                            desc: "Click 'Edit File' in the top right corner to enable editing. Make your changes then click 'Save Changes'. You cannot edit a file after it has been submitted."
                        },
                        {
                            title: "Adding a New Procedure Step",
                            desc: "While editing, go to the last page (Treatment Procedures). If your last step was approved by your supervisor, a new step form will appear. Fill in the title, description, and date, then save."
                        },
                        {
                            title: "Resubmitting a Rejected Step",
                            desc: "If your supervisor rejected a step, you will see their feedback in red. While editing, the form will appear again so you can correct and resubmit it."
                        },
                        {
                            title: "Procedure Step Statuses",
                            desc: "Each step shows a status badge: Pending (awaiting supervisor review), Approved (you can add the next step), or Rejected (needs correction with supervisor feedback shown)."
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

            {/* Submitting a File */}
            <section className="p-4">
                <h5 className="fw-bold text-warning mb-3">
                    <i className="bi bi-upload me-2"></i>
                    Submitting a File
                </h5>
                <div className="d-flex flex-column gap-3">
                    {[
                        {
                            title: "When to Submit",
                            desc: "Only submit your file when all treatment procedures are complete and approved by your supervisor. Once submitted, the file cannot be edited."
                        },
                        {
                            title: "How to Submit",
                            desc: "Open the file, make sure you are not in edit mode, then click 'Submit File' in the top right corner. A confirmation dialog will appear before the file is submitted."
                        },
                        {
                            title: "After Submission",
                            desc: "The file will be sent to your doctor for grading. You will be able to see your grade and feedback once the doctor reviews it. The grade appears at the bottom of the file."
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

            {/* X-ray AI Diagnosis */}
            <section className="p-4">
                <h5 className="fw-bold text-danger mb-3">
                    <i className="bi bi-cpu-fill me-2"></i>
                    X-ray AI Diagnosis
                </h5>
                <div className="d-flex flex-column gap-3">
                    {[
                        {
                            title: "Uploading an X-ray",
                            desc: "Go to 'Upload X-ray for AI Diagnosis' from the home page. Upload a dental X-ray image and the system will run an automated AI analysis on it."
                        },
                        {
                            title: "Viewing Results",
                            desc: "After the analysis is complete, the AI diagnosis results will be displayed on the same page. This is a diagnostic aid — always consult your supervisor for clinical decisions."
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
                            title: "You Cannot Edit Submitted Files",
                            desc: "Once you click Submit, the file is locked. Make sure all procedures are approved and all information is correct before submitting."
                        },
                        {
                            title: "Procedure Steps Must Be Approved One at a Time",
                            desc: "You can only add the next treatment step after your supervisor approves the current one. The form will be locked while a step is pending review."
                        },
                        {
                            title: "Required Fields Block Progress",
                            desc: "You cannot move from Step 1 to Step 2 unless all required fields are filled. Errors will be highlighted in red directly on the field."
                        },
                        {
                            title: "Grade Visibility",
                            desc: "Your grade and doctor feedback appear at the bottom of the file page after the doctor reviews it. Check your submitted files regularly."
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