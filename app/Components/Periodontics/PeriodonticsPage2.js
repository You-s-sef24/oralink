import ImageUploadBox from "../ImageUploadBox";
import PapillaryBleeding from "./PapillaryBleeding";
import TableIndicators from "./TableIndicators";

export default function PeriodonticsPage2({ info, setInfo }) {
    return (
        <div className="p-3">
            <div className="position-relative border border-primary rounded-3 p-4 mt-4 bg-white">
                <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                    Periodontal Examination
                </span>

                <div>

                    <div>
                        <h5 className="fw-semibold text-decoration-underline">Hygiene</h5>
                        <label className="form-label fw-semibold">Deposits - Plaqe</label>
                        <select className="form-select mb-3" value={info.periodontalExamination.hygiene.depositsPlaque} onChange={(e) => setInfo({ ...info, periodontalExamination: { ...info.periodontalExamination, hygiene: { ...info.periodontalExamination.hygiene, depositsPlaque: e.target.value } } })}>
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
                                <select className="form-select mb-3" value={info.periodontalExamination.calculus.supragingival} onChange={(e) => setInfo({ ...info, periodontalExamination: { ...info.periodontalExamination, calculus: { ...info.periodontalExamination.calculus, supragingival: e.target.value } } })}>
                                    <option value="Heavy">Heavy</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Light">Light</option>
                                </select>
                            </div>
                            <div className="w-50">
                                <label className="form-label fw-semibold">Subgingival</label>
                                <select className="form-select mb-3" value={info.periodontalExamination.calculus.subgingival} onChange={(e) => setInfo({ ...info, periodontalExamination: { ...info.periodontalExamination, calculus: { ...info.periodontalExamination.calculus, subgingival: e.target.value } } })}>
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
                            <input type="text" className="form-control mb-3" value={info.periodontalExamination.gingiva.color} onChange={(e) => setInfo({ ...info, periodontalExamination: { ...info.periodontalExamination, gingiva: { ...info.periodontalExamination.gingiva, color: e.target.value } } })} />
                        </div>

                        <div className="col-12 col-sm-6 d-flex flex-column">
                            <label className="form-label fw-semibold">Size</label>
                            <input type="text" className="form-control mb-3" value={info.periodontalExamination.gingiva.size} onChange={(e) => setInfo({ ...info, periodontalExamination: { ...info.periodontalExamination, gingiva: { ...info.periodontalExamination.gingiva, size: e.target.value } } })} />
                        </div>

                        <div className="col-12 col-sm-6 d-flex flex-column">
                            <label className="form-label fw-semibold">Shape</label>
                            <input type="text" className="form-control mb-3" value={info.periodontalExamination.gingiva.shape} onChange={(e) => setInfo({ ...info, periodontalExamination: { ...info.periodontalExamination, gingiva: { ...info.periodontalExamination.gingiva, shape: e.target.value } } })} />
                        </div>

                        <div className="col-12 col-sm-6 d-flex flex-column">
                            <label className="form-label fw-semibold">Consistency</label>
                            <input type="text" className="form-control mb-3" value={info.periodontalExamination.gingiva.consistency} onChange={(e) => setInfo({ ...info, periodontalExamination: { ...info.periodontalExamination, gingiva: { ...info.periodontalExamination.gingiva, consistency: e.target.value } } })} />
                        </div>

                        <div className="col-12 col-sm-6 d-flex flex-column">
                            <label className="form-label fw-semibold">Texture</label>
                            <input type="text" className="form-control mb-3" value={info.periodontalExamination.gingiva.texture} onChange={(e) => setInfo({ ...info, periodontalExamination: { ...info.periodontalExamination, gingiva: { ...info.periodontalExamination.gingiva, texture: e.target.value } } })} />
                        </div>

                        <div className="col-12 col-sm-6 d-flex flex-column">
                            <label className="form-label fw-semibold">Recession</label>
                            <input type="text" className="form-control mb-3" value={info.periodontalExamination.gingiva.recession} onChange={(e) => setInfo({ ...info, periodontalExamination: { ...info.periodontalExamination, gingiva: { ...info.periodontalExamination.gingiva, recession: e.target.value } } })} />
                        </div>

                        <div className="col-12 col-sm-6 d-flex flex-column">
                            <label className="form-label fw-semibold">Bleeding on Probing</label>
                            <input type="text" className="form-control mb-3" value={info.periodontalExamination.gingiva.bleedingOnProbing} onChange={(e) => setInfo({ ...info, periodontalExamination: { ...info.periodontalExamination, gingiva: { ...info.periodontalExamination.gingiva, bleedingOnProbing: e.target.value } } })} />
                        </div>

                        <div className="col-12 col-sm-6 d-flex flex-column">
                            <label className="form-label fw-semibold">Suppuration/Exudates</label>
                            <input type="text" className="form-control mb-3" value={info.periodontalExamination.gingiva.exudate} onChange={(e) => setInfo({ ...info, periodontalExamination: { ...info.periodontalExamination, gingiva: { ...info.periodontalExamination.gingiva, exudate: e.target.value } } })} />
                        </div>

                        <div className="col-12 col-sm-6 d-flex flex-column">
                            <label className="form-label fw-semibold">Furcation Involvment</label>
                            <input type="text" className="form-control mb-3" value={info.periodontalExamination.gingiva.functionInvolvment} onChange={(e) => setInfo({ ...info, periodontalExamination: { ...info.periodontalExamination, gingiva: { ...info.periodontalExamination.gingiva, functionInvolvment: e.target.value } } })} />
                        </div>

                        <div className="col-12 col-sm-6 d-flex flex-column">
                            <label className="form-label fw-semibold">Mucogingival Problems</label>
                            <input type="text" className="form-control mb-3" value={info.periodontalExamination.gingiva.mucogingivalProblems} onChange={(e) => setInfo({ ...info, periodontalExamination: { ...info.periodontalExamination, gingiva: { ...info.periodontalExamination.gingiva, mucogingivalProblems: e.target.value } } })} />
                        </div>

                        <div className="col-12 col-sm-6 d-flex flex-column">
                            <label className="form-label fw-semibold">Occlusal Relationship</label>
                            <input type="text" className="form-control mb-3" value={info.periodontalExamination.gingiva.occlusalRelationship} onChange={(e) => setInfo({ ...info, periodontalExamination: { ...info.periodontalExamination, gingiva: { ...info.periodontalExamination.gingiva, occlusalRelationship: e.target.value } } })} />
                        </div>

                        <div className="col-12 col-sm-6 d-flex flex-column">
                            <label className="form-label fw-semibold">Fremitus</label>
                            <input type="text" className="form-control mb-3" value={info.periodontalExamination.gingiva.fremitus} onChange={(e) => setInfo({ ...info, periodontalExamination: { ...info.periodontalExamination, gingiva: { ...info.periodontalExamination.gingiva, fremitus: e.target.value } } })} />
                        </div>

                    </div>

                    <hr />

                    <PapillaryBleeding />
                    <TableIndicators />

                    <ImageUploadBox type={'xray'} />
                </div>
            </div>
        </div>
    )
}