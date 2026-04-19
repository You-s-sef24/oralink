"use client";

import { PatientInfoContext } from "@/app/Contexts/PatientInfoContext";
import { useContext } from "react";
import PapillaryBleeding from "./PapillaryBleeding";
import TableIndicators from "./TableIndicators";
import ImageUploadBox from "../ImageUploadBox";
import ViewPapillaryBleeding from "./ViewPapillaryBleeding";

export default function ViewPeriodonticsPage2() {
    const { isEditing, file, setFile } = useContext(PatientInfoContext);

    const ReadOnlyField = ({ label, value }) => (
        <div className="mb-2">
            <label className="form-label fw-semibold">{label}</label>
            <p
                className="border rounded px-2 py-2 bg-light"
                style={{ minHeight: "75px", whiteSpace: "pre-wrap", marginBottom: 0 }}
            >
                {value || "-"}
            </p>
        </div>
    );

    const pe = file.departmentData.periodontalExamination;

    const updatePE = (path, value) => {
        setFile((prev) => {
            const section = path[0];
            const field = path[1];
            return {
                ...prev,
                departmentData: {
                    ...prev.departmentData,
                    periodontalExamination: {
                        ...prev.departmentData.periodontalExamination,
                        [section]: {
                            ...prev.departmentData.periodontalExamination[section],
                            [field]: value,
                        },
                    },
                },
            };
        });
    };

    return (
        isEditing ? (
            <div className="position-relative border border-primary rounded-3 p-4 mt-4 bg-white">
                <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                    Periodontal Examination
                </span>

                <div>
                    <div>
                        <h5 className="fw-semibold text-decoration-underline">Hygiene</h5>
                        <label className="form-label fw-semibold">Deposits - Plaque</label>
                        <select className="form-select mb-3" value={pe.hygiene.depositsPlaque} onChange={(e) => updatePE(["hygiene", "depositsPlaque"], e.target.value)}>
                            <option value="Heavy">Heavy</option>
                            <option value="Medium">Medium</option>
                            <option value="Light">Light</option>
                        </select>
                    </div>

                    <hr />

                    <div>
                        <h5 className="fw-semibold text-decoration-underline">Calculus</h5>
                        <div className="d-flex gap-3">
                            <div className="w-50">
                                <label className="form-label fw-semibold">Supragingival</label>
                                <select className="form-select mb-3" value={pe.calculus.supragingival} onChange={(e) => updatePE(["calculus", "supragingival"], e.target.value)}>
                                    <option value="Heavy">Heavy</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Light">Light</option>
                                </select>
                            </div>
                            <div className="w-50">
                                <label className="form-label fw-semibold">Subgingival</label>
                                <select className="form-select mb-3" value={pe.calculus.subgingival} onChange={(e) => updatePE(["calculus", "subgingival"], e.target.value)}>
                                    <option value="Heavy">Heavy</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Light">Light</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="row d-flex">
                        <div className="col-12">
                            <h5 className="fw-semibold text-decoration-underline">Gingiva</h5>
                        </div>
                        {[
                            ["Color", "color"],
                            ["Size", "size"],
                            ["Shape", "shape"],
                            ["Consistency", "consistency"],
                            ["Texture", "texture"],
                            ["Recession", "recession"],
                            ["Bleeding on Probing", "bleedingOnProbing"],
                            ["Suppuration/Exudates", "exudate"],
                            ["Function Involvment", "functionInvolvment"],
                            ["Mucogingival Problems", "mucogingivalProblems"],
                            ["Occlusal Relationship", "occlusalRelationship"],
                            ["Fremitus", "fremitus"],
                        ].map(([label, field]) => (
                            <div key={field} className="col-12 col-sm-6 d-flex flex-column">
                                <label className="form-label fw-semibold">{label}</label>
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    value={pe.gingiva[field]}
                                    onChange={(e) => updatePE(["gingiva", field], e.target.value)}
                                />
                            </div>
                        ))}
                    </div>

                    <hr />

                    <PapillaryBleeding file={file} setFile={setFile} />
                    <TableIndicators />
                </div>
            </div>
        ) : (
            <div className="position-relative border border-primary rounded-3 p-4 mt-4 bg-white">
                <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                    Periodontal Examination
                </span>

                <div className="mt-3">
                    <h5 className="fw-semibold text-decoration-underline">Hygiene</h5>
                    <ReadOnlyField label="Deposits - Plaque" value={pe.hygiene.depositsPlaque} />

                    <hr />

                    <h5 className="fw-semibold text-decoration-underline">Calculus</h5>
                    <div className="row">
                        <div className="col-sm-6"><ReadOnlyField label="Supragingival" value={pe.calculus.supragingival} /></div>
                        <div className="col-sm-6"><ReadOnlyField label="Subgingival" value={pe.calculus.subgingival} /></div>
                    </div>

                    <hr />

                    <h5 className="fw-semibold text-decoration-underline">Gingiva</h5>
                    <div className="row">
                        <div className="col-sm-6"><ReadOnlyField label="Color" value={pe.gingiva.color} /></div>
                        <div className="col-sm-6"><ReadOnlyField label="Size" value={pe.gingiva.size} /></div>
                        <div className="col-sm-6"><ReadOnlyField label="Shape" value={pe.gingiva.shape} /></div>
                        <div className="col-sm-6"><ReadOnlyField label="Consistency" value={pe.gingiva.consistency} /></div>
                        <div className="col-sm-6"><ReadOnlyField label="Texture" value={pe.gingiva.texture} /></div>
                        <div className="col-sm-6"><ReadOnlyField label="Recession" value={pe.gingiva.recession} /></div>
                        <div className="col-sm-6"><ReadOnlyField label="Bleeding on Probing" value={pe.gingiva.bleedingOnProbing} /></div>
                        <div className="col-sm-6"><ReadOnlyField label="Suppuration / Exudates" value={pe.gingiva.exudate} /></div>
                        <div className="col-sm-6"><ReadOnlyField label="Furcation Involvement" value={pe.gingiva.functionInvolvment} /></div>
                        <div className="col-sm-6"><ReadOnlyField label="Mucogingival Problems" value={pe.gingiva.mucogingivalProblems} /></div>
                        <div className="col-sm-6"><ReadOnlyField label="Occlusal Relationship" value={pe.gingiva.occlusalRelationship} /></div>
                        <div className="col-sm-6"><ReadOnlyField label="Fremitus" value={pe.gingiva.fremitus} /></div>
                    </div>

                    <hr />

                    <ViewPapillaryBleeding file={file} />
                    <TableIndicators />
                </div>
            </div>
        )
    );
}