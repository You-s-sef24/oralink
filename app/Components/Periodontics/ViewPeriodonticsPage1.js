"use client";

import { PatientInfoContext } from "@/app/Contexts/PatientInfoContext";
import { useContext } from "react";

export default function ViewPeriodonticsPage1() {
    const { isEditing, file, setFile } = useContext(PatientInfoContext);

    const ReadOnlyTextField = ({ label, value }) => (
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

    const ce = file.departmentData.clinicalExamination;

    const updateCE = (field, value) =>
        setFile((prev) => ({
            ...prev,
            departmentData: {
                ...prev.departmentData,
                clinicalExamination: {
                    ...prev.departmentData.clinicalExamination,
                    [field]: value,
                },
            },
        }));

    return (
        isEditing ? (
            <div className="position-relative border border-primary rounded-3 p-4 mt-4 bg-white">
                <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                    Clinical Examination
                </span>

                <div className="row g-3">
                    <div className="col-12 col-sm-6">
                        <label className="form-label fw-semibold">Patient appraisal and general health</label>
                        <textarea className="form-control" rows="3" value={ce?.patientAppraisal || ""} onChange={(e) => updateCE("patientAppraisal", e.target.value)} />
                    </div>
                    <div className="col-12 col-sm-6">
                        <label className="form-label fw-semibold">Vital signs</label>
                        <textarea className="form-control" rows="3" value={ce?.vitalSigns || ""} onChange={(e) => updateCE("vitalSigns", e.target.value)} />
                    </div>

                    <hr />

                    <div className="col-12">
                        <h4 className="fw-semibold text-decoration-underline">Extra-oral examination</h4>
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Skull</label>
                                <textarea className="form-control" rows="3" value={ce?.skull || ""} onChange={(e) => updateCE("skull", e.target.value)} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Face</label>
                                <textarea className="form-control" rows="3" value={ce?.face || ""} onChange={(e) => updateCE("face", e.target.value)} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Eyes, Ears & Nose</label>
                                <textarea className="form-control" rows="3" value={ce?.eyesEarsNose || ""} onChange={(e) => updateCE("eyesEarsNose", e.target.value)} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Skin & Hair</label>
                                <textarea className="form-control" rows="3" value={ce?.skinHair || ""} onChange={(e) => updateCE("skinHair", e.target.value)} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Hand & Nails</label>
                                <textarea className="form-control" rows="3" value={ce?.handNails || ""} onChange={(e) => updateCE("handNails", e.target.value)} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">TMJ</label>
                                <textarea className="form-control" rows="3" value={ce?.tmj || ""} onChange={(e) => updateCE("tmj", e.target.value)} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Neck</label>
                                <textarea className="form-control" rows="3" value={ce?.neck || ""} onChange={(e) => updateCE("neck", e.target.value)} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Salivary glands</label>
                                <textarea className="form-control" rows="3" value={ce?.salivaryGlands || ""} onChange={(e) => updateCE("salivaryGlands", e.target.value)} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Lymph nodes</label>
                                <textarea className="form-control" rows="3" value={ce?.lymphNodes || ""} onChange={(e) => updateCE("lymphNodes", e.target.value)} />
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="col-12">
                        <h4 className="fw-semibold text-decoration-underline">Intra-oral examination</h4>
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Labial mucosa</label>
                                <textarea className="form-control" rows="3" value={ce?.labialMucosa || ""} onChange={(e) => updateCE("labialMucosa", e.target.value)} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Buccal mucosa</label>
                                <textarea className="form-control" rows="3" value={ce?.buccalMucosa || ""} onChange={(e) => updateCE("buccalMucosa", e.target.value)} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Gingiva</label>
                                <textarea className="form-control" rows="3" value={ce?.gingiva || ""} onChange={(e) => updateCE("gingiva", e.target.value)} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Alveolar ridge</label>
                                <textarea className="form-control" rows="3" value={ce?.alveolarRidge || ""} onChange={(e) => updateCE("alveolarRidge", e.target.value)} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Vestibule</label>
                                <textarea className="form-control" rows="3" value={ce?.vestibule || ""} onChange={(e) => updateCE("vestibule", e.target.value)} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Tongue</label>
                                <textarea className="form-control" rows="3" value={ce?.tongue || ""} onChange={(e) => updateCE("tongue", e.target.value)} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Floor of the mouth</label>
                                <textarea className="form-control" rows="3" value={ce?.floorOfMouth || ""} onChange={(e) => updateCE("floorOfMouth", e.target.value)} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Hard palate</label>
                                <textarea className="form-control" rows="3" value={ce?.hardPalate || ""} onChange={(e) => updateCE("hardPalate", e.target.value)} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Soft palate, uvula & oropharynx</label>
                                <textarea className="form-control" rows="3" value={ce?.softPalateUvulaOropharynx || ""} onChange={(e) => updateCE("softPalateUvulaOropharynx", e.target.value)} />
                            </div>
                        </div>

                        <hr />

                        <div className="row mt-3">
                            <h4 className="fw-semibold text-decoration-underline">Teeth</h4>
                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Missed/Extracted</label>
                                <textarea className="form-control" rows="3" value={ce?.missedExtracted || ""} onChange={(e) => updateCE("missedExtracted", e.target.value)} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Filled</label>
                                <textarea className="form-control" rows="3" value={ce?.filled || ""} onChange={(e) => updateCE("filled", e.target.value)} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Decayed</label>
                                <textarea className="form-control" rows="3" value={ce?.decayed || ""} onChange={(e) => updateCE("decayed", e.target.value)} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Discolored</label>
                                <textarea className="form-control" rows="3" value={ce?.discolored || ""} onChange={(e) => updateCE("discolored", e.target.value)} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Malposed</label>
                                <textarea className="form-control" rows="3" value={ce?.malposed || ""} onChange={(e) => updateCE("malposed", e.target.value)} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Wasting Disease</label>
                                <textarea className="form-control" rows="3" value={ce?.wastingDisease || ""} onChange={(e) => updateCE("wastingDisease", e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className="position-relative border border-primary rounded-3 p-4 mt-4 bg-white">
                <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                    Clinical Examination
                </span>

                <div className="row g-3">
                    <div className="col-12 col-sm-6">
                        <ReadOnlyTextField label="Patient appraisal and general health" value={ce.patientAppraisal} />
                    </div>
                    <div className="col-12 col-sm-6">
                        <ReadOnlyTextField label="Vital signs" value={ce.vitalSigns} />
                    </div>

                    <hr />

                    <div className="col-12">
                        <h4 className="fw-semibold text-decoration-underline">Extra-oral examination</h4>
                        <div className="row">
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Skull" value={ce.skull} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Face" value={ce.face} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Eyes, Ears & Nose" value={ce.eyesEarsNose} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Skin & Hair" value={ce.skinHair} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Hand & Nails" value={ce.handNails} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="TMJ" value={ce.tmj} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Neck" value={ce.neck} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Salivary glands" value={ce.salivaryGlands} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Lymph nodes" value={ce.lymphNodes} /></div>
                        </div>
                    </div>

                    <hr />

                    <div className="col-12">
                        <h4 className="fw-semibold text-decoration-underline">Intra-oral examination</h4>
                        <div className="row">
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Labial mucosa" value={ce.labialMucosa} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Buccal mucosa" value={ce.buccalMucosa} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Gingiva" value={ce.gingiva} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Alveolar ridge" value={ce.alveolarRidge} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Vestibule" value={ce.vestibule} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Tongue" value={ce.tongue} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Floor of the mouth" value={ce.floorOfMouth} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Hard palate" value={ce.hardPalate} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Soft palate, uvula & oropharynx" value={ce.softPalateUvulaOropharynx} /></div>
                        </div>

                        <hr />

                        <h4 className="fw-semibold text-decoration-underline">Teeth</h4>
                        <div className="row">
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Missed / Extracted" value={ce.missedExtracted} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Filled" value={ce.filled} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Decayed" value={ce.decayed} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Discolored" value={ce.discolored} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Malposed" value={ce.malposed} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Wasting Disease" value={ce.wastingDisease} /></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}