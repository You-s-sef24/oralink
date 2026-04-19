"use client";

export default function ViewPapillaryBleeding({ file }) {
    const teeth = file.departmentData.periodontalExamination.teeth || [];

    const total = teeth.reduce((s, t) => s + t.top + t.bottom, 0);
    const pbi = (total / 32).toFixed(1);

    return (
        <div className="container mt-4">

            <h5 className="fw-bold">Papillary Bleeding Index = {pbi}</h5>

            <div className="d-flex align-items-center justify-content-center gap-3 mt-3 flex-wrap">

                {teeth.map((t, i) => (
                    <div
                        key={i}
                        className="d-flex flex-column align-items-center"
                    >
                        <div
                            className="form-control form-control-sm text-center text-primary mb-1"
                            style={{ width: "42px", backgroundColor: "#e9ecef" }}
                        >
                            {t.top}
                        </div>

                        <div className="fw-bold">{t.tooth}</div>

                        <div
                            className="form-control form-control-sm text-center text-primary mt-1"
                            style={{ width: "42px", backgroundColor: "#e9ecef" }}
                        >
                            {t.bottom}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}
