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
                style={{
                    minHeight: "75px",
                    whiteSpace: "pre-wrap",
                    marginBottom: 0
                }}
            >
                {value || "-"}
            </p>
        </div>
    );

    return (
        isEditing ?
            <div className="position-relative border border-primary rounded-3 p-4 mt-4 bg-white">
                <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                    Clinical Examination
                </span>

                <div>
                    <div className="row g-3">
                        <div className="col-12 col-sm-6">
                            <label className="form-label fw-semibold">Patient appraisal and general health</label>
                            <textarea
                                className="form-control"
                                rows="3"
                                value={file.clinicalExamination?.patientAppraisal || ""}
                                onChange={(e) => setFile({ ...file, clinicalExamination: { ...file.clinicalExamination, patientAppraisal: e.target.value } })}
                            ></textarea>
                        </div>

                        <div className="col-12 col-sm-6">
                            <label className="form-label fw-semibold">Vital signs</label>
                            <textarea
                                className="form-control"
                                rows="3"
                                value={file.clinicalExamination?.vitalSigns || ""}
                                onChange={(e) => setFile({ ...file, clinicalExamination: { ...file.clinicalExamination, vitalSigns: e.target.value } })}
                            ></textarea>
                        </div>

                        <hr />

                        <div className="col-12">
                            <h4 className="fw-semibold text-decoration-underline">Extra-oral examination</h4>
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-4">
                                    <label className="form-label fw-semibold">Skull</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        value={file.clinicalExamination?.skull || ""}
                                        onChange={(e) => setFile({ ...file, clinicalExamination: { ...file.clinicalExamination, skull: e.target.value } })}
                                    ></textarea>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4">
                                    <label className="form-label fw-semibold">Face</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        value={file.clinicalExamination?.face || ""}
                                        onChange={(e) => setFile({ ...file, clinicalExamination: { ...file.clinicalExamination, face: e.target.value } })}
                                    ></textarea>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4">
                                    <label className="form-label fw-semibold">Eyes,Ears & Nose</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        value={file.clinicalExamination?.eyesEarsNose || ""}
                                        onChange={(e) => setFile({ ...file, clinicalExamination: { ...file.clinicalExamination, eyesEarsNose: e.target.value } })}
                                    ></textarea>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4">
                                    <label className="form-label fw-semibold">Skin & Hair</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        value={file.clinicalExamination?.skinHair || ""}
                                        onChange={(e) => setFile({ ...file, clinicalExamination: { ...file.clinicalExamination, skinHair: e.target.value } })}
                                    ></textarea>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4">
                                    <label className="form-label fw-semibold">Hand & Nails</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        value={file.clinicalExamination?.handNails || ""}
                                        onChange={(e) => setFile({ ...file, clinicalExamination: { ...file.clinicalExamination, handNails: e.target.value } })}
                                    ></textarea>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4">
                                    <label className="form-label fw-semibold">TMJ</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        value={file.clinicalExamination?.tmj || ""}
                                        onChange={(e) => setFile({ ...file, clinicalExamination: { ...file.clinicalExamination, tmj: e.target.value } })}
                                    ></textarea>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4">
                                    <label className="form-label fw-semibold">Neck</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        value={file.clinicalExamination?.neck || ""}
                                        onChange={(e) => setFile({ ...file, clinicalExamination: { ...file.clinicalExamination, neck: e.target.value } })}
                                    ></textarea>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4">
                                    <label className="form-label fw-semibold">Salivary glands</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        value={file.clinicalExamination?.salivaryGlands || ""}
                                        onChange={(e) => setFile({ ...file, clinicalExamination: { ...file.clinicalExamination, salivaryGlands: e.target.value } })}
                                    ></textarea>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4">
                                    <label className="form-label fw-semibold">Lymph nodes</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        value={file.clinicalExamination?.lymphNodes || ""}
                                        onChange={(e) => setFile({ ...file, clinicalExamination: { ...file.clinicalExamination, lymphNodes: e.target.value } })}
                                    ></textarea>
                                </div>
                            </div>

                        </div>

                        <hr />

                        <div className="col-12">
                            <h4 className="fw-semibold text-decoration-underline">Intra-oral examination</h4>
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-4">
                                    <label className="form-label fw-semibold">Labial mucosa</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        value={file.clinicalExamination?.labialMucosa || ""}
                                        onChange={(e) => setFile({ ...file, clinicalExamination: { ...file.clinicalExamination, labialMucosa: e.target.value } })}
                                    ></textarea>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4">
                                    <label className="form-label fw-semibold">Buccal mucosa</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        value={file.clinicalExamination?.buccalMucosa || ""}
                                        onChange={(e) => setFile({ ...file, clinicalExamination: { ...file.clinicalExamination, buccalMucosa: e.target.value } })}
                                    ></textarea>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4">
                                    <label className="form-label fw-semibold">Gingiva</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        value={file.clinicalExamination?.gingiva || ""}
                                        onChange={(e) => setFile({ ...file, clinicalExamination: { ...file.clinicalExamination, gingiva: e.target.value } })}
                                    ></textarea>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4">
                                    <label className="form-label fw-semibold">Alveolar ridge</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        value={file.clinicalExamination?.alveolarRidge || ""}
                                        onChange={(e) => setFile({ ...file, clinicalExamination: { ...file.clinicalExamination, alveolarRidge: e.target.value } })}
                                    ></textarea>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4">
                                    <label className="form-label fw-semibold">Vestibule</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        value={file.clinicalExamination?.vestibule || ""}
                                        onChange={(e) => setFile({ ...file, clinicalExamination: { ...file.clinicalExamination, vestibule: e.target.value } })}
                                    ></textarea>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4">
                                    <label className="form-label fw-semibold">Tongue</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        value={file.clinicalExamination?.tongue || ""}
                                        onChange={(e) => setFile({ ...file, clinicalExamination: { ...file.clinicalExamination, tongue: e.target.value } })}
                                    ></textarea>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4">
                                    <label className="form-label fw-semibold">Floor of the mouth</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        value={file.clinicalExamination?.floorOfMouth || ""}
                                        onChange={(e) => setFile({ ...file, clinicalExamination: { ...file.clinicalExamination, floorOfMouth: e.target.value } })}
                                    ></textarea>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4">
                                    <label className="form-label fw-semibold">Hard palate</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        value={file.clinicalExamination?.hardPalate || ""}
                                        onChange={(e) => setFile({ ...file, clinicalExamination: { ...file.clinicalExamination, hardPalate: e.target.value } })}
                                    ></textarea>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4">
                                    <label className="form-label fw-semibold">Soft palate and uvula & oropharynx</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        value={file.clinicalExamination?.softPalateUvulaOropharynx || ""}
                                        onChange={(e) => setFile({ ...file, clinicalExamination: { ...file.clinicalExamination, softPalateUvulaOropharynx: e.target.value } })}
                                    ></textarea>
                                </div>
                            </div>

                            <hr />

                            <div className="row mt-3">
                                <h4 className="fw-semibold text-decoration-underline">Teeth</h4>

                                <div className="col-12 col-sm-6 col-md-4">
                                    <label className="form-label fw-semibold">Missed/Extracted</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        value={file.clinicalExamination?.missedExtracted || ""}
                                        onChange={(e) => setFile({ ...file, clinicalExamination: { ...file.clinicalExamination, missedExtracted: e.target.value } })}
                                    ></textarea>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4">
                                    <label className="form-label fw-semibold">Filled</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        value={file.clinicalExamination?.filled || ""}
                                        onChange={(e) => setFile({ ...file, clinicalExamination: { ...file.clinicalExamination, filled: e.target.value } })}
                                    ></textarea>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4">
                                    <label className="form-label fw-semibold">Decayed</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        value={file.clinicalExamination?.decayed || ""}
                                        onChange={(e) => setFile({ ...file, clinicalExamination: { ...file.clinicalExamination, decayed: e.target.value } })}
                                    ></textarea>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4">
                                    <label className="form-label fw-semibold">Discolored</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        value={file.clinicalExamination?.discolored || ""}
                                        onChange={(e) => setFile({ ...file, clinicalExamination: { ...file.clinicalExamination, discolored: e.target.value } })}
                                    ></textarea>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4">
                                    <label className="form-label fw-semibold">Malposed</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        value={file.clinicalExamination?.malposed || ""}
                                        onChange={(e) => setFile({ ...file, clinicalExamination: { ...file.clinicalExamination, malposed: e.target.value } })}
                                    ></textarea>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4">
                                    <label className="form-label fw-semibold">Wasting Disease</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        value={file.clinicalExamination?.wastingDisease || ""}
                                        onChange={(e) => setFile({ ...file, clinicalExamination: { ...file.clinicalExamination, wastingDisease: e.target.value } })}
                                    ></textarea>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            :
            <div className="position-relative border border-primary rounded-3 p-4 mt-4 bg-white">
                <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                    Clinical Examination
                </span>

                <div className="row g-3">

                    {/* General */}
                    <div className="col-12 col-sm-6">
                        <ReadOnlyTextField
                            label="Patient appraisal and general health"
                            value={file.departmentData.clinicalExamination.patientAppraisal}
                        />
                    </div>

                    <div className="col-12 col-sm-6">
                        <ReadOnlyTextField
                            label="Vital signs"
                            value={file.departmentData.clinicalExamination.vitalSigns}
                        />
                    </div>

                    <hr />

                    {/* Extra-oral */}
                    <div className="col-12">
                        <h4 className="fw-semibold text-decoration-underline">Extra-oral examination</h4>
                        <div className="row">
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Skull" value={file.departmentData.clinicalExamination.skull} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Face" value={file.departmentData.clinicalExamination.face} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Eyes, Ears & Nose" value={file.departmentData.clinicalExamination.eyesEarsNose} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Skin & Hair" value={file.departmentData.clinicalExamination.skinHair} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Hand & Nails" value={file.departmentData.clinicalExamination.handNails} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="TMJ" value={file.departmentData.clinicalExamination.tmj} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Neck" value={file.departmentData.clinicalExamination.neck} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Salivary glands" value={file.departmentData.clinicalExamination.salivaryGlands} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Lymph nodes" value={file.departmentData.clinicalExamination.lymphNodes} /></div>
                        </div>
                    </div>

                    <hr />

                    {/* Intra-oral */}
                    <div className="col-12">
                        <h4 className="fw-semibold text-decoration-underline">Intra-oral examination</h4>
                        <div className="row">
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Labial mucosa" value={file.departmentData.clinicalExamination.labialMucosa} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Buccal mucosa" value={file.departmentData.clinicalExamination.buccalMucosa} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Gingiva" value={file.departmentData.clinicalExamination.gingiva} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Alveolar ridge" value={file.departmentData.clinicalExamination.alveolarRidge} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Vestibule" value={file.departmentData.clinicalExamination.vestibule} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Tongue" value={file.departmentData.clinicalExamination.tongue} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Floor of the mouth" value={file.departmentData.clinicalExamination.floorOfMouth} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Hard palate" value={file.departmentData.clinicalExamination.hardPalate} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Soft palate, uvula & oropharynx" value={file.departmentData.clinicalExamination.softPalateUvulaOropharynx} /></div>
                        </div>

                        <hr />

                        {/* Teeth */}
                        <h4 className="fw-semibold text-decoration-underline">Teeth</h4>
                        <div className="row">
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Missed / Extracted" value={file.departmentData.clinicalExamination.missedExtracted} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Filled" value={file.departmentData.clinicalExamination.filled} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Decayed" value={file.departmentData.clinicalExamination.decayed} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Discolored" value={file.departmentData.clinicalExamination.discolored} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Malposed" value={file.departmentData.clinicalExamination.malposed} /></div>
                            <div className="col-sm-6 col-md-4"><ReadOnlyTextField label="Wasting Disease" value={file.departmentData.clinicalExamination.wastingDisease} /></div>
                        </div>
                    </div>

                </div>
            </div>
    );
}