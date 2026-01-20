export default function PeriodonticsPage4({ info, setInfo }) {
    return (
        <div className="p-3">

            <div className="position-relative border border-primary rounded-3 p-4 mt-4 bg-white">
                <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                    Radiographic Interpretation
                </span>

                <div>
                    <div>
                        <label className="form-label fw-semibold">Horizontal bone loss</label>
                        <input type="text" className="form-control" value={info.radiographicInterpretation.horizontalBoneLoss} onChange={(e) => setInfo({ ...info, radiographicInterpretation: { ...info.radiographicInterpretation, horizontalBoneLoss: e.target.value } })} />
                    </div>
                    <div>
                        <label className="form-label fw-semibold">Vertical bone loss</label>
                        <input type="text" className="form-control" value={info.radiographicInterpretation.verticalBoneLoss} onChange={(e) => setInfo({ ...info, radiographicInterpretation: { ...info.radiographicInterpretation, verticalBoneLoss: e.target.value } })} />
                    </div>
                    <div>
                        <label className="form-label fw-semibold">Radiographic Evidence of Furcation involvement</label>
                        <input type="text" className="form-control" value={info.radiographicInterpretation.furcationInvolvement} onChange={(e) => setInfo({ ...info, radiographicInterpretation: { ...info.radiographicInterpretation, furcationInvolvement: e.target.value } })} />
                    </div>
                    <div>
                        <label className="form-label fw-semibold">Other findings</label>
                        <input type="text" className="form-control" value={info.radiographicInterpretation.otherFindings} onChange={(e) => setInfo({ ...info, radiographicInterpretation: { ...info.radiographicInterpretation, otherFindings: e.target.value } })} />
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
                            <textarea className="form-control" rows={4} value={info.diagnosis} onChange={(e) => setInfo({ ...info, diagnosis: e.target.value })} />
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="position-relative border border-primary rounded-3 p-4 mt-4 bg-white">
                        <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                            Prognosis
                        </span>
                        <div>
                            <textarea className="form-control" rows={4} value={info.prognosis} onChange={(e) => setInfo({ ...info, prognosis: e.target.value })} />
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
                        <textarea className="form-control" rows={4} value={info.treatmentPlan.systemicPhase} onChange={(e) => setInfo({ ...info, treatmentPlan: { ...info.treatmentPlan, systemicPhase: e.target.value } })} ></textarea>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label fw-semibold">Acute Phase:</label>
                        <textarea className="form-control" rows={4} value={info.treatmentPlan.acutePhase} onChange={(e) => setInfo({ ...info, treatmentPlan: { ...info.treatmentPlan, acutePhase: e.target.value } })} ></textarea>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label fw-semibold">Disease Control Phase:</label>
                        <textarea className="form-control" rows={4} value={info.treatmentPlan.diseaseControlPhase} onChange={(e) => setInfo({ ...info, treatmentPlan: { ...info.treatmentPlan, diseaseControlPhase: e.target.value } })} ></textarea>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label fw-semibold">Definitive Phase:</label>
                        <textarea className="form-control" rows={4} value={info.treatmentPlan.definitivePhase} onChange={(e) => setInfo({ ...info, treatmentPlan: { ...info.treatmentPlan, definitivePhase: e.target.value } })} ></textarea>
                    </div>

                    <div className="mt-4">
                        <label className="form-label fw-semibold">Maintenance Phase:</label>
                        <textarea className="form-control" rows={4} value={info.treatmentPlan.maintenancePhase} onChange={(e) => setInfo({ ...info, treatmentPlan: { ...info.treatmentPlan, maintenancePhase: e.target.value } })} ></textarea>
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
    )
}