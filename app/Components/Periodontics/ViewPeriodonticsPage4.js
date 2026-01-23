"use client";

import { PatientInfoContext } from "@/app/Contexts/PatientInfoContext";
import { useContext } from "react";

export default function ViewPeriodonticsPage4() {
    const { file, setFile, isEditing } = useContext(PatientInfoContext);

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
            <div className="p-3">
                <div className="position-relative border border-primary rounded-3 p-4 mt-4 bg-white">
                    <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                        Radiographic Interpretation
                    </span>

                    <div>
                        <div>
                            <label className="form-label fw-semibold">Horizontal bone loss</label>
                            <input type="text" className="form-control" value={file.departmentData.radiographicInterpretation.horizontalBoneLoss} onChange={(e) => setFile({ ...file, departmentData: { ...file.departmentData, radiographicInterpretation: { ...file.departmentData.radiographicInterpretation, horizontalBoneLoss: e.target.value } } })} />
                        </div>
                        <div>
                            <label className="form-label fw-semibold">Vertical bone loss</label>
                            <input type="text" className="form-control" value={file.departmentData.radiographicInterpretation.verticalBoneLoss} onChange={(e) => setFile({ ...file, departmentData: { ...file.departmentData, radiographicInterpretation: { ...file.departmentData.radiographicInterpretation, verticalBoneLoss: e.target.value } } })} />
                        </div>
                        <div>
                            <label className="form-label fw-semibold">Radiographic Evidence of Furcation involvement</label>
                            <input type="text" className="form-control" value={file.departmentData.radiographicInterpretation.furcationInvolvement} onChange={(e) => setFile({ ...file, departmentData: { ...file.departmentData, radiographicInterpretation: { ...file.departmentData.radiographicInterpretation, furcationInvolvement: e.target.value } } })} />
                        </div>
                        <div>
                            <label className="form-label fw-semibold">Other findings</label>
                            <input type="text" className="form-control" value={file.departmentData.radiographicInterpretation.otherFindings} onChange={(e) => setFile({ ...file, departmentData: { ...file.departmentData, radiographicInterpretation: { ...file.departmentData.radiographicInterpretation, otherFindings: e.target.value } } })} />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="position-relative border border-primary rounded-3 p-4 mt-4 bg-white">
                            <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                                Diagnosis
                            </span>
                            <div>
                                <textarea className="form-control" rows={4} value={file.departmentData.diagnosis} onChange={(e) => setFile({ ...file, departmentData: { ...file.departmentData, diagnosis: e.target.value } })} />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="position-relative border border-primary rounded-3 p-4 mt-4 bg-white">
                            <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                                Prognosis
                            </span>
                            <div>
                                <textarea className="form-control" rows={4} value={file.departmentData.prognosis} onChange={(e) => setFile({ ...file, departmentData: { ...file.departmentData, prognosis: e.target.value } })} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="position-relative border border-primary rounded-3 p-4 mt-4 bg-white">
                    <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                        Treatment Plan
                    </span>

                    <div className="row">
                        <div className="col-md-6">
                            <label className="form-label fw-semibold">Systemic Phase:</label>
                            <textarea className="form-control" rows={4} value={file.departmentData.treatmentPlan.systemicPhase} onChange={(e) => setFile({ ...file, departmentData: { ...file.departmentData, treatmentPlan: { ...file.departmentData.treatmentPlan, systemicPhase: e.target.value } } })} ></textarea>
                        </div>

                        <div className="col-md-6">
                            <label className="form-label fw-semibold">Acute Phase:</label>
                            <textarea className="form-control" rows={4} value={file.departmentData.treatmentPlan.acutePhase} onChange={(e) => setFile({ ...file, departmentData: { ...file.departmentData, treatmentPlan: { ...file.departmentData.treatmentPlan, acutePhase: e.target.value } } })} ></textarea>
                        </div>

                        <div className="col-md-6">
                            <label className="form-label fw-semibold">Disease Control Phase:</label>
                            <textarea className="form-control" rows={4} value={file.departmentData.treatmentPlan.diseaseControlPhase} onChange={(e) => setFile({ ...file, departmentData: { ...file.departmentData, treatmentPlan: { ...file.departmentData.treatmentPlan, diseaseControlPhase: e.target.value } } })} ></textarea>
                        </div>

                        <div className="col-md-6">
                            <label className="form-label fw-semibold">Definitive Phase:</label>
                            <textarea className="form-control" rows={4} value={file.departmentData.treatmentPlan.definitivePhase} onChange={(e) => setFile({ ...file, departmentData: { ...file.departmentData, treatmentPlan: { ...file.departmentData.treatmentPlan, definitivePhase: e.target.value } } })} ></textarea>
                        </div>

                        <div className="mt-4">
                            <label className="form-label fw-semibold">Maintenance Phase:</label>
                            <textarea className="form-control" rows={4} value={file.departmentData.treatmentPlan.maintenancePhase} onChange={(e) => setFile({ ...file, departmentData: { ...file.departmentData, treatmentPlan: { ...file.departmentData.treatmentPlan, maintenancePhase: e.target.value } } })} ></textarea>
                        </div>

                        {/* <div className="mt-4">
                    <label className="form-label fw-semibold">Treatment Record Table:</label>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Procedure</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="date" className="form-control" />
                                </td>
                                <td>
                                    <input type="text" className="form-control" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="date" className="form-control" />
                                </td>
                                <td>
                                    <input type="text" className="form-control" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="date" className="form-control" />
                                </td>
                                <td>
                                    <input type="text" className="form-control" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="date" className="form-control" />
                                </td>
                                <td>
                                    <input type="text" className="form-control" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div> */}
                    </div>
                </div>

            </div>
            :
            <div className="p-3">
                {/* Radiographic Interpretation */}
                <div className="position-relative border border-primary rounded-3 p-4 mt-4 bg-white">
                    <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                        Radiographic Interpretation
                    </span>

                    <ReadOnlyField
                        label="Horizontal bone loss"
                        value={file.departmentData.radiographicInterpretation.horizontalBoneLoss}
                    />
                    <ReadOnlyField
                        label="Vertical bone loss"
                        value={file.departmentData.radiographicInterpretation.verticalBoneLoss}
                    />
                    <ReadOnlyField
                        label="Furcation involvement"
                        value={file.departmentData.radiographicInterpretation.furcationInvolvement}
                    />
                    <ReadOnlyField
                        label="Other findings"
                        value={file.departmentData.radiographicInterpretation.otherFindings}
                    />
                </div>

                {/* Diagnosis & Prognosis */}
                <div className="row">
                    <div className="col-md-6">
                        <div className="position-relative border border-primary rounded-3 p-4 mt-4 bg-white">
                            <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                                Diagnosis
                            </span>
                            <ReadOnlyField label="Diagnosis" value={file.departmentData.diagnosis} />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="position-relative border border-primary rounded-3 p-4 mt-4 bg-white">
                            <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                                Prognosis
                            </span>
                            <ReadOnlyField label="Prognosis" value={file.departmentData.prognosis} />
                        </div>
                    </div>
                </div>

                {/* Treatment Plan */}
                <div className="position-relative border border-primary rounded-3 p-4 mt-4 bg-white">
                    <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                        Treatment Plan
                    </span>
                    <div className="row">
                        <div className="col-md-6">
                            <ReadOnlyField
                                label="Systemic Phase"
                                value={file.departmentData.treatmentPlan.systemicPhase}
                            />
                        </div>
                        <div className="col-md-6">
                            <ReadOnlyField
                                label="Acute Phase"
                                value={file.departmentData.treatmentPlan.acutePhase}
                            />
                        </div>
                        <div className="col-md-6">
                            <ReadOnlyField
                                label="Disease Control Phase"
                                value={file.departmentData.treatmentPlan.diseaseControlPhase}
                            />
                        </div>
                        <div className="col-md-6">
                            <ReadOnlyField
                                label="Definitive Phase"
                                value={file.departmentData.treatmentPlan.definitivePhase}
                            />
                        </div>
                    </div>
                    <ReadOnlyField
                        label="Maintenance Phase"
                        value={file.departmentData.treatmentPlan.maintenancePhase}
                    />
                </div>
            </div>

    )
}