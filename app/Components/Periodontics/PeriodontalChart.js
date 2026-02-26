"use client";
import { PatientInfoContext } from "@/app/Contexts/PatientInfoContext";
import { useContext } from "react";

const SITES_BUCCAL = ["mb", "b", "db"];
const SITES_LINGUAL = ["ml", "l", "dl"];

export default function PeriodontalChart({ file, setFile }) {
    const { periodonticsData, setPeriodonticsData, isEditing } = useContext(PatientInfoContext);

    const teeth = isEditing
        ? file?.departmentData?.periodontalChart ?? []
        : periodonticsData?.periodontalChart || [];
    const upperTeeth = teeth.slice(0, 16);
    const lowerTeeth = teeth.slice(16, 32);

    if (!teeth.length) return <p>Loading periodontal chart...</p>;

    const parseNumber = (value) =>
        value === "" ? "" : Number(value);

    const updateSite = (i, field, site, value) => {
        const updatedTeeth = teeth.map((tooth, idx) =>
            idx === i
                ? {
                    ...tooth,
                    [field]: {
                        ...tooth[field],
                        [site]: value
                    }
                }
                : tooth
        );

        if (isEditing) {
            setFile(prev => ({
                ...prev,
                departmentData: {
                    ...prev.departmentData,
                    periodontalChart: updatedTeeth
                }
            }));
        } else {
            setPeriodonticsData(prev => ({
                ...prev,
                periodontalChart: updatedTeeth
            }));
        }
    };


    const updateSimple = (i, field, value) => {
        const updatedTeeth = [...teeth];
        updatedTeeth[i][field] = value;
        isEditing ? setFile(prev => ({
            ...prev,
            departmentData: {
                ...prev.departmentData,
                periodontalChart: updatedTeeth
            }
        })) : setPeriodonticsData(prev => ({ ...prev, periodontalChart: updatedTeeth }));
    };


    const renderTable = (label, archTeeth, startIndex) => (
        <div className="w-100 mt-4">
            <h6 className="fw-bold">{label}</h6>
            <div style={{ overflowX: "auto" }}>
                <table
                    className="table table-bordered text-center align-middle periodontal-table"
                    style={{ minWidth: "1000px" }}
                >
                    <tbody>
                        <tr>
                            <th>Mobility</th>
                            {archTeeth.map((t, i) => {
                                const globalIndex = startIndex + i;
                                return (
                                    <td key={i}>
                                        <input
                                            type="number"
                                            className="form-control text-center"
                                            value={t.mobility}
                                            onChange={e => updateSimple(globalIndex, "mobility", parseNumber(e.target.value))}
                                        />
                                    </td>
                                );
                            })}
                        </tr>

                        <tr>
                            <th>Furcation</th>
                            {archTeeth.map((t, i) => {
                                const globalIndex = startIndex + i;
                                return (
                                    <td key={i}>
                                        <input
                                            type="number"
                                            className="form-control text-center"
                                            value={t.furcation}
                                            onChange={e => updateSimple(globalIndex, "furcation", parseNumber(e.target.value))}
                                        />
                                    </td>
                                );
                            })}
                        </tr>

                        <tr>
                            <th>Probing (Buccal)</th>
                            {archTeeth.map((t, i) => {
                                const globalIndex = startIndex + i;
                                return (
                                    <td key={i}>
                                        <div className="d-flex gap-1">
                                            {SITES_BUCCAL.map(site => (
                                                <input
                                                    key={site}
                                                    type="number"
                                                    className="form-control text-center"
                                                    value={t.probing[site]}
                                                    onChange={e =>
                                                        updateSite(globalIndex, "probing", site, parseNumber(e.target.value))
                                                    }
                                                />
                                            ))}
                                        </div>
                                    </td>
                                );
                            })}
                        </tr>

                        <tr className="fw-bold">
                            <th></th>
                            {archTeeth.map(t => (
                                <td key={t.tooth}>{t.tooth}</td>
                            ))}
                        </tr>

                        <tr>
                            <th>Probing (Lingual)</th>
                            {archTeeth.map((t, i) => {
                                const globalIndex = startIndex + i;
                                return (
                                    <td key={i}>
                                        <div className="d-flex gap-1">
                                            {SITES_LINGUAL.map(site => (
                                                <input
                                                    key={site}
                                                    type="number"
                                                    className="form-control text-center"
                                                    value={t.probing[site]}
                                                    onChange={e =>
                                                        updateSite(globalIndex, "probing", site, parseNumber(e.target.value))
                                                    }
                                                />
                                            ))}
                                        </div>
                                    </td>
                                );
                            })}
                        </tr>

                        <tr>
                            <th>Recession</th>
                            {archTeeth.map((t, i) => {
                                const globalIndex = startIndex + i;
                                return (
                                    <td key={i}>
                                        <div className="d-flex gap-1">
                                            {SITES_BUCCAL.concat(SITES_LINGUAL).map(site => (
                                                <input
                                                    key={site}
                                                    type="number"
                                                    className="form-control text-center"
                                                    value={t.recession[site]}
                                                    onChange={e =>
                                                        updateSite(globalIndex, "recession", site, parseNumber(e.target.value))
                                                    }
                                                />
                                            ))}
                                        </div>
                                    </td>
                                );
                            })}
                        </tr>

                        <tr>
                            <th>BOP</th>
                            {archTeeth.map((t, i) => {
                                const globalIndex = startIndex + i;
                                return (
                                    <td key={i}>
                                        <div className="d-flex gap-1">
                                            {SITES_BUCCAL.concat(SITES_LINGUAL).map(site => (
                                                <input
                                                    key={site}
                                                    type="number"
                                                    className="form-control text-center"
                                                    value={t.bop[site]}
                                                    onChange={e =>
                                                        updateSite(globalIndex, "bop", site, parseNumber(e.target.value))
                                                    }
                                                />
                                            ))}
                                        </div>
                                    </td>
                                );
                            })}
                        </tr>

                        <tr>
                            <th>PI</th>
                            {archTeeth.map((t, i) => {
                                const globalIndex = startIndex + i;
                                return (
                                    <td key={i}>
                                        <div className="d-flex gap-1">
                                            {SITES_BUCCAL.concat(SITES_LINGUAL).map(site => (
                                                <input
                                                    key={site}
                                                    type="number"
                                                    className="form-control text-center"
                                                    value={t.pi[site]}
                                                    onChange={e =>
                                                        updateSite(globalIndex, "pi", site, parseNumber(e.target.value))
                                                    }
                                                />
                                            ))}
                                        </div>
                                    </td>
                                );
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <div className="w-100 mt-4">
            <h4 className="fw-bold mb-3">PERIODONTAL CHART</h4>
            {renderTable("UPPER ARCH", upperTeeth, 0)}
            {renderTable("LOWER ARCH", lowerTeeth, 16)}
        </div>
    );
}
