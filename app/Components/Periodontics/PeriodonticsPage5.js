"use client";

export default function PeriodonticsPage5({ info, setInfo }) {
    const step = info.treatmentProcedures?.[0] || { title: "", desc: "", date: "" };

    function handleChange(field, value) {
        setInfo((prev) => ({
            ...prev,
            treatmentProcedures: [{ ...step, [field]: value }],
        }));
    }

    return (
        <div className="p-3">
            <div className="position-relative border border-primary rounded-3 p-4 mt-4 bg-white">
                <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                    Treatment Procedures
                </span>

                <p className="fw-semibold text-primary mb-3">Step 1</p>

                <div className="row g-3">
                    <div className="col-12 col-md-4">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="e.g. Scaling - Upper Right"
                            value={step.title}
                            onChange={(e) => handleChange("title", e.target.value)}
                        />
                    </div>
                    <div className="col-12 col-md-4">
                        <label className="form-label">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Describe what was done..."
                            value={step.desc}
                            onChange={(e) => handleChange("desc", e.target.value)}
                        />
                    </div>
                    <div className="col-12 col-md-4">
                        <label className="form-label">Date Performed</label>
                        <input
                            type="date"
                            className="form-control"
                            value={step.date}
                            onChange={(e) => handleChange("date", e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}