export default function PeriodonticsPage1({ info, setInfo }) {
    return (
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
                            value={info.clinicalExamination?.patientAppraisal || ""}
                            onChange={(e) => setInfo({ ...info, clinicalExamination: { ...info.clinicalExamination, patientAppraisal: e.target.value } })}
                        ></textarea>
                    </div>

                    <div className="col-12 col-sm-6">
                        <label className="form-label fw-semibold">Vital signs</label>
                        <textarea
                            className="form-control"
                            rows="3"
                            value={info.clinicalExamination?.vitalSigns || ""}
                            onChange={(e) => setInfo({ ...info, clinicalExamination: { ...info.clinicalExamination, vitalSigns: e.target.value } })}
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
                                    value={info.clinicalExamination?.skull || ""}
                                    onChange={(e) => setInfo({ ...info, clinicalExamination: { ...info.clinicalExamination, skull: e.target.value } })}
                                ></textarea>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Face</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={info.clinicalExamination?.face || ""}
                                    onChange={(e) => setInfo({ ...info, clinicalExamination: { ...info.clinicalExamination, face: e.target.value } })}
                                ></textarea>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Eyes,Ears & Nose</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={info.clinicalExamination?.eyesEarsNose || ""}
                                    onChange={(e) => setInfo({ ...info, clinicalExamination: { ...info.clinicalExamination, eyesEarsNose: e.target.value } })}
                                ></textarea>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Skin & Hair</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={info.clinicalExamination?.skinHair || ""}
                                    onChange={(e) => setInfo({ ...info, clinicalExamination: { ...info.clinicalExamination, skinHair: e.target.value } })}
                                ></textarea>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Hand & Nails</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={info.clinicalExamination?.handNails || ""}
                                    onChange={(e) => setInfo({ ...info, clinicalExamination: { ...info.clinicalExamination, handNails: e.target.value } })}
                                ></textarea>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">TMJ</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={info.clinicalExamination?.tmj || ""}
                                    onChange={(e) => setInfo({ ...info, clinicalExamination: { ...info.clinicalExamination, tmj: e.target.value } })}
                                ></textarea>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Neck</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={info.clinicalExamination?.neck || ""}
                                    onChange={(e) => setInfo({ ...info, clinicalExamination: { ...info.clinicalExamination, neck: e.target.value } })}
                                ></textarea>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Salivary glands</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={info.clinicalExamination?.salivaryGlands || ""}
                                    onChange={(e) => setInfo({ ...info, clinicalExamination: { ...info.clinicalExamination, salivaryGlands: e.target.value } })}
                                ></textarea>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Lymph nodes</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={info.clinicalExamination?.lymphNodes || ""}
                                    onChange={(e) => setInfo({ ...info, clinicalExamination: { ...info.clinicalExamination, lymphNodes: e.target.value } })}
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
                                    value={info.clinicalExamination?.labialMucosa || ""}
                                    onChange={(e) => setInfo({ ...info, clinicalExamination: { ...info.clinicalExamination, labialMucosa: e.target.value } })}
                                ></textarea>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Buccal mucosa</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={info.clinicalExamination?.buccalMucosa || ""}
                                    onChange={(e) => setInfo({ ...info, clinicalExamination: { ...info.clinicalExamination, buccalMucosa: e.target.value } })}
                                ></textarea>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Gingiva</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={info.clinicalExamination?.gingiva || ""}
                                    onChange={(e) => setInfo({ ...info, clinicalExamination: { ...info.clinicalExamination, gingiva: e.target.value } })}
                                ></textarea>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Alveolar ridge</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={info.clinicalExamination?.alveolarRidge || ""}
                                    onChange={(e) => setInfo({ ...info, clinicalExamination: { ...info.clinicalExamination, alveolarRidge: e.target.value } })}
                                ></textarea>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Vestibule</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={info.clinicalExamination?.vestibule || ""}
                                    onChange={(e) => setInfo({ ...info, clinicalExamination: { ...info.clinicalExamination, vestibule: e.target.value } })}
                                ></textarea>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Tongue</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={info.clinicalExamination?.tongue || ""}
                                    onChange={(e) => setInfo({ ...info, clinicalExamination: { ...info.clinicalExamination, tongue: e.target.value } })}
                                ></textarea>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Floor of the mouth</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={info.clinicalExamination?.floorOfMouth || ""}
                                    onChange={(e) => setInfo({ ...info, clinicalExamination: { ...info.clinicalExamination, floorOfMouth: e.target.value } })}
                                ></textarea>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Hard palate</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={info.clinicalExamination?.hardPalate || ""}
                                    onChange={(e) => setInfo({ ...info, clinicalExamination: { ...info.clinicalExamination, hardPalate: e.target.value } })}
                                ></textarea>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Soft palate and uvula & oropharynx</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={info.clinicalExamination?.softPalateUvulaOropharynx || ""}
                                    onChange={(e) => setInfo({ ...info, clinicalExamination: { ...info.clinicalExamination, softPalateUvulaOropharynx: e.target.value } })}
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
                                    value={info.clinicalExamination?.missedExtracted || ""}
                                    onChange={(e) => setInfo({ ...info, clinicalExamination: { ...info.clinicalExamination, missedExtracted: e.target.value } })}
                                ></textarea>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Filled</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={info.clinicalExamination?.filled || ""}
                                    onChange={(e) => setInfo({ ...info, clinicalExamination: { ...info.clinicalExamination, filled: e.target.value } })}
                                ></textarea>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Decayed</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={info.clinicalExamination?.decayed || ""}
                                    onChange={(e) => setInfo({ ...info, clinicalExamination: { ...info.clinicalExamination, decayed: e.target.value } })}
                                ></textarea>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Discolored</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={info.clinicalExamination?.discolored || ""}
                                    onChange={(e) => setInfo({ ...info, clinicalExamination: { ...info.clinicalExamination, discolored: e.target.value } })}
                                ></textarea>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Malposed</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={info.clinicalExamination?.malposed || ""}
                                    onChange={(e) => setInfo({ ...info, clinicalExamination: { ...info.clinicalExamination, malposed: e.target.value } })}
                                ></textarea>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4">
                                <label className="form-label fw-semibold">Wasting Disease</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={info.clinicalExamination?.wastingDisease || ""}
                                    onChange={(e) => setInfo({ ...info, clinicalExamination: { ...info.clinicalExamination, wastingDisease: e.target.value } })}
                                ></textarea>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}