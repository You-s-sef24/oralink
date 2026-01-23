"use client";
import { PatientInfoContext } from "@/app/Contexts/PatientInfoContext";
import { useContext, useState } from "react";

export default function PapillaryBleeding({ file, setFile }) {
    const { periodonticsData, isEditing } = useContext(PatientInfoContext);
    const teethData = periodonticsData.periodontalExamination.teeth;
    const [teeth, setTeeth] = useState(teethData);

    const update = (i, field, value) => {
        if (value < 0 || value > 4) return;
        if (isEditing) {
            const updatedTeeth = [...teeth];
            updatedTeeth[i][field] = value;
            setTeeth(updatedTeeth);
            setFile({
                ...file,
                departmentData: {
                    ...file.departmentData,
                    periodontalExamination: {
                        ...file.departmentData.periodontalExamination,
                        teeth: teeth.map((t, index) => index === i ? { ...t, [field]: value } : t)
                    }
                }
            });
            return;
        }
        const copy = [...teeth];
        copy[i][field] = value;
        setTeeth(copy);
    };

    const total = teeth.reduce((s, t) => s + t.top + t.bottom, 0);
    const pbi = (total / 32).toFixed(1);

    return (
        <div className="container mt-4">

            <h5 className="fw-bold">
                Papillary Bleeding Index = {pbi}
            </h5>

            <div className="d-flex align-items-center justify-content-center gap-3 mt-3 flex-wrap">

                <div className="border fw-bold px-3 py-2">25</div>

                {teeth.map((t, i) => (
                    <div
                        key={i}
                        className="d-flex flex-column align-items-center"
                    >
                        <input
                            type="number"
                            min="0"
                            max="4"
                            value={t.top}
                            onChange={(e) => update(i, "top", +e.target.value)}
                            className="form-control form-control-sm text-center text-primary"
                            style={{ width: "42px" }}
                        />

                        <div className="fw-bold">{t.tooth}</div>

                        <input
                            type="number"
                            min="0"
                            max="4"
                            value={t.bottom}
                            onChange={(e) => update(i, "bottom", +e.target.value)}
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
