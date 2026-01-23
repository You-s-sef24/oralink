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
                    Periodontal Examination
                </span>

                <div>

                    <div>
                        <h5 className="fw-semibold text-decoration-underline">Hygiene</h5>
                        <label className="form-label fw-semibold">Deposits - Plaqe</label>
                        <select className="form-select mb-3" value={file.departmentData.periodontalExamination.hygiene.depositsPlaque} onChange={(e) => setFile({ ...file, departmentData: { ...file.departmentData, periodontalExamination: { ...file.departmentData.periodontalExamination, hygiene: { ...file.departmentData.periodontalExamination.hygiene, depositsPlaque: e.target.value } } } })}>
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
                                <select className="form-select mb-3" value={file.departmentData.periodontalExamination.calculus.supragingival} onChange={(e) => setFile({ ...file, departmentData: { ...file.departmentData, periodontalExamination: { ...file.departmentData.periodontalExamination, calculus: { ...file.departmentData.periodontalExamination.calculus, supragingival: e.target.value } } } })}>
                                    <option value="Heavy">Heavy</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Light">Light</option>
                                </select>
                            </div>
                            <div className="w-50">
                                <label className="form-label fw-semibold">Subgingival</label>
                                <select className="form-select mb-3" value={file.departmentData.periodontalExamination.calculus.subgingival} onChange={(e) => setFile({ ...file, departmentData: { ...file.departmentData, periodontalExamination: { ...file.departmentData.periodontalExamination, calculus: { ...file.departmentData.periodontalExamination.calculus, subgingival: e.target.value } } } })}>
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

                        <div className="col-12 col-sm-6 d-flex flex-column">
                            <label className="form-label fw-semibold">Color</label>
                            <input type="text" className="form-control mb-3" value={file.departmentData.periodontalExamination.gingiva.color} onChange={(e) => setFile({ ...file, departmentData: { ...file.departmentData, periodontalExamination: { ...file.departmentData.periodontalExamination, gingiva: { ...file.departmentData.periodontalExamination.gingiva, color: e.target.value } } } })} />
                        </div>

                        <div className="col-12 col-sm-6 d-flex flex-column">
                            <label className="form-label fw-semibold">Size</label>
                            <input type="text" className="form-control mb-3" value={file.departmentData.periodontalExamination.gingiva.size} onChange={(e) => setFile({ ...file, departmentData: { ...file.departmentData, periodontalExamination: { ...file.departmentData.periodontalExamination, gingiva: { ...file.departmentData.periodontalExamination.gingiva, size: e.target.value } } } })} />
                        </div>

                        <div className="col-12 col-sm-6 d-flex flex-column">
                            <label className="form-label fw-semibold">Shape</label>
                            <input type="text" className="form-control mb-3" value={file.departmentData.periodontalExamination.gingiva.shape} onChange={(e) => setFile({ ...file, departmentData: { ...file.departmentData, periodontalExamination: { ...file.departmentData.periodontalExamination, gingiva: { ...file.departmentData.periodontalExamination.gingiva, shape: e.target.value } } } })} />
                        </div>

                        <div className="col-12 col-sm-6 d-flex flex-column">
                            <label className="form-label fw-semibold">Consistency</label>
                            <input type="text" className="form-control mb-3" value={file.departmentData.periodontalExamination.gingiva.consistency} onChange={(e) => setFile({ ...file, departmentData: { ...file.departmentData, periodontalExamination: { ...file.departmentData.periodontalExamination, gingiva: { ...file.departmentData.periodontalExamination.gingiva, consistency: e.target.value } } } })} />
                        </div>

                        <div className="col-12 col-sm-6 d-flex flex-column">
                            <label className="form-label fw-semibold">Texture</label>
                            <input type="text" className="form-control mb-3" value={file.departmentData.periodontalExamination.gingiva.texture} onChange={(e) => setFile({ ...file, departmentData: { ...file.departmentData, periodontalExamination: { ...file.departmentData.periodontalExamination, gingiva: { ...file.departmentData.periodontalExamination.gingiva, texture: e.target.value } } } })} />
                        </div>

                        <div className="col-12 col-sm-6 d-flex flex-column">
                            <label className="form-label fw-semibold">Recession</label>
                            <input type="text" className="form-control mb-3" value={file.departmentData.periodontalExamination.gingiva.recession} onChange={(e) => setFile({ ...file, departmentData: { ...file.departmentData, periodontalExamination: { ...file.departmentData.periodontalExamination, gingiva: { ...file.departmentData.periodontalExamination.gingiva, recession: e.target.value } } } })} />
                        </div>

                        <div className="col-12 col-sm-6 d-flex flex-column">
                            <label className="form-label fw-semibold">Bleeding on Probing</label>
                            <input type="text" className="form-control mb-3" value={file.departmentData.periodontalExamination.gingiva.bleedingOnProbing} onChange={(e) => setFile({ ...file, departmentData: { ...file.departmentData, periodontalExamination: { ...file.departmentData.periodontalExamination, gingiva: { ...file.departmentData.periodontalExamination.gingiva, bleedingOnProbing: e.target.value } } } })} />
                        </div>

                        <div className="col-12 col-sm-6 d-flex flex-column">
                            <label className="form-label fw-semibold">Suppuration/Exudates</label>
                            <input type="text" className="form-control mb-3" value={file.departmentData.periodontalExamination.gingiva.exudate} onChange={(e) => setFile({ ...file, departmentData: { ...file.departmentData, periodontalExamination: { ...file.departmentData.periodontalExamination, gingiva: { ...file.departmentData.periodontalExamination.gingiva, exudate: e.target.value } } } })} />
                        </div>

                        <div className="col-12 col-sm-6 d-flex flex-column">
                            <label className="form-label fw-semibold">Function Involvment</label>
                            <input type="text" className="form-control mb-3" value={file.departmentData.periodontalExamination.gingiva.functionInvolvment} onChange={(e) => setFile({ ...file, departmentData: { ...file.departmentData, periodontalExamination: { ...file.departmentData.periodontalExamination, gingiva: { ...file.departmentData.periodontalExamination.gingiva, functionInvolvment: e.target.value } } } })} />
                        </div>

                        <div className="col-12 col-sm-6 d-flex flex-column">
                            <label className="form-label fw-semibold">Mucogingival Problems</label>
                            <input type="text" className="form-control mb-3" value={file.departmentData.periodontalExamination.gingiva.mucogingivalProblems} onChange={(e) => setFile({ ...file, departmentData: { ...file.departmentData, periodontalExamination: { ...file.departmentData.periodontalExamination, gingiva: { ...file.departmentData.periodontalExamination.gingiva, mucogingivalProblems: e.target.value } } } })} />
                        </div>

                        <div className="col-12 col-sm-6 d-flex flex-column">
                            <label className="form-label fw-semibold">Occlusal Relationship</label>
                            <input type="text" className="form-control mb-3" value={file.departmentData.periodontalExamination.gingiva.occlusalRelationship} onChange={(e) => setFile({ ...file, departmentData: { ...file.departmentData, periodontalExamination: { ...file.departmentData.periodontalExamination, gingiva: { ...file.departmentData.periodontalExamination.gingiva, occlusalRelationship: e.target.value } } } })} />
                        </div>

                        <div className="col-12 col-sm-6 d-flex flex-column">
                            <label className="form-label fw-semibold">Fremitus</label>
                            <input type="text" className="form-control mb-3" value={file.departmentData.periodontalExamination.gingiva.fremitus} onChange={(e) => setFile({ ...file, departmentData: { ...file.departmentData, periodontalExamination: { ...file.departmentData.periodontalExamination, gingiva: { ...file.departmentData.periodontalExamination.gingiva, fremitus: e.target.value } } } })} />
                        </div>

                    </div>

                    <hr />

                    <PapillaryBleeding file={file} setFile={setFile} />
                    <TableIndicators />

                    <ImageUploadBox type={'xray'} />
                </div>
            </div>
            :
            <div className="position-relative border border-primary rounded-3 p-4 mt-4 bg-white">
                <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                    Periodontal Examination
                </span>

                <div className="mt-3">

                    {/* Hygiene */}
                    <h5 className="fw-semibold text-decoration-underline">Hygiene</h5>
                    <ReadOnlyField label="Deposits - Plaque" value={file.departmentData.periodontalExamination.hygiene.depositsPlaque} />

                    <hr />

                    {/* Calculus */}
                    <h5 className="fw-semibold text-decoration-underline">Calculus</h5>
                    <div className="row">
                        <div className="col-sm-6">
                            <ReadOnlyField label="Supragingival" value={file.departmentData.periodontalExamination.calculus.supragingival} />
                        </div>
                        <div className="col-sm-6">
                            <ReadOnlyField label="Subgingival" value={file.departmentData.periodontalExamination.calculus.subgingival} />
                        </div>
                    </div>

                    <hr />

                    {/* Gingiva */}
                    <h5 className="fw-semibold text-decoration-underline">Gingiva</h5>
                    <div className="row">
                        <div className="col-sm-6"><ReadOnlyField label="Color" value={file.departmentData.periodontalExamination.gingiva.color} /></div>
                        <div className="col-sm-6"><ReadOnlyField label="Size" value={file.departmentData.periodontalExamination.gingiva.size} /></div>
                        <div className="col-sm-6"><ReadOnlyField label="Shape" value={file.departmentData.periodontalExamination.gingiva.shape} /></div>
                        <div className="col-sm-6"><ReadOnlyField label="Consistency" value={file.departmentData.periodontalExamination.gingiva.consistency} /></div>
                        <div className="col-sm-6"><ReadOnlyField label="Texture" value={file.departmentData.periodontalExamination.gingiva.texture} /></div>
                        <div className="col-sm-6"><ReadOnlyField label="Recession" value={file.departmentData.periodontalExamination.gingiva.recession} /></div>
                        <div className="col-sm-6"><ReadOnlyField label="Bleeding on Probing" value={file.departmentData.periodontalExamination.gingiva.bleedingOnProbing} /></div>
                        <div className="col-sm-6"><ReadOnlyField label="Suppuration / Exudates" value={file.departmentData.periodontalExamination.gingiva.exudate} /></div>
                        <div className="col-sm-6"><ReadOnlyField label="Function Involvement" value={file.departmentData.periodontalExamination.gingiva.functionInvolvment} /></div>
                        <div className="col-sm-6"><ReadOnlyField label="Mucogingival Problems" value={file.departmentData.periodontalExamination.gingiva.mucogingivalProblems} /></div>
                        <div className="col-sm-6"><ReadOnlyField label="Occlusal Relationship" value={file.departmentData.periodontalExamination.gingiva.occlusalRelationship} /></div>
                        <div className="col-sm-6"><ReadOnlyField label="Fremitus" value={file.departmentData.periodontalExamination.gingiva.fremitus} /></div>
                    </div>

                    <hr />

                    <ViewPapillaryBleeding file={file} />
                    <TableIndicators />
                    <img className="img-fluid" src={file.xRay} alt="X-ray" />
                </div>
            </div>
    )
}