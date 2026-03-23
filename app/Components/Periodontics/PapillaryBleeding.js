"use client";
import { PatientInfoContext } from "@/app/Contexts/PatientInfoContext";
import { useContext, useState } from "react";

export default function PapillaryBleeding({ file, setFile }) {
    const { isEditing, file: contextFile } = useContext(PatientInfoContext);

    // Initialize from file.departmentData if available (edit mode), else fall back to periodonticsData
    const initialTeeth =
        contextFile?.departmentData?.periodontalExamination?.teeth ??
        file?.departmentData?.periodontalExamination?.teeth ??
        [];

    const [teeth, setTeeth] = useState(initialTeeth);

    const update = (i, field, value) => {
        const num = Number(value);
        if (num < 0 || num > 4) return;

        // Immutable update — never mutate objects in the array
        const updatedTeeth = teeth.map((t, index) =>
            index === i ? { ...t, [field]: num } : t
        );

        setTeeth(updatedTeeth);

        if (isEditing) {
            setFile((prev) => ({
                ...prev,
                departmentData: {
                    ...prev.departmentData,
                    periodontalExamination: {
                        ...prev.departmentData.periodontalExamination,
                        teeth: updatedTeeth,
                    },
                },
            }));
        }
    };

    const total = teeth.reduce((s, t) => s + (t.top || 0) + (t.bottom || 0), 0);
    const pbi = teeth.length > 0 ? (total / 32).toFixed(1) : "0.0";

    return (
        <div className="container mt-4">
            <h5 className="fw-bold">
                Papillary Bleeding Index = {pbi}
            </h5>

            <div className="d-flex align-items-center justify-content-center gap-3 mt-3 flex-wrap">
                <div className="border fw-bold px-3 py-2">25</div>

                {teeth.map((t, i) => (
                    <div key={i} className="d-flex flex-column align-items-center">
                        <input
                            type="number"
                            min="0"
                            max="4"
                            value={t.top}
                            onChange={(e) => update(i, "top", e.target.value)}
                            className="form-control form-control-sm text-center text-primary"
                            style={{ width: "42px" }}
                        />
                        <div className="fw-bold">{t.tooth}</div>
                        <input
                            type="number"
                            min="0"
                            max="4"
                            value={t.bottom}
                            onChange={(e) => update(i, "bottom", e.target.value)}
                            className="form-control form-control-sm text-center text-primary"
                            style={{ width: "42px" }}
                        />
                    </div>
                ))}

                <div className="border fw-bold px-3 py-2">32</div>
            </div>
        </div>
    );
}