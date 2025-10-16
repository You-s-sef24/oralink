export default function SecondPage({ info, setInfo }) {
    return (
        <div className="p-3">

            <div className="position-relative border border-primary rounded-3 p-4 mt-4 bg-white">
                <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                    Dental History
                </span>

                <div className="d-flex flex-column">
                    <div>
                        <input className="form-check-input me-2" type="checkbox" checked={info.medicalHistory.heartProblems} onChange={(e) => { setInfo({ ...info, medicalHistory: { ...info.medicalHistory, heartProblems: e.target.checked } }) }} />
                        <label className="form-check-label">Have you had heart problems? Or hypertensions?</label>
                    </div>
                    <div>
                        <input className="form-check-input me-2" type="checkbox" checked={info.medicalHistory.diabetes} onChange={(e) => { setInfo({ ...info, medicalHistory: { ...info.medicalHistory, diabetes: e.target.checked } }) }} />
                        <label className="form-check-label">Are you diabetic?</label>
                    </div>
                    <div>
                        <input className="form-check-input me-2" type="checkbox" checked={info.medicalHistory.liverProblems} onChange={(e) => { setInfo({ ...info, medicalHistory: { ...info.medicalHistory, liverProblems: e.target.checked } }) }} />
                        <label className="form-check-label">Have you had any liver problems?</label>
                    </div>
                    <div>
                        <input className="form-check-input me-2" type="checkbox" checked={info.medicalHistory.kidneyProblems} onChange={(e) => { setInfo({ ...info, medicalHistory: { ...info.medicalHistory, kidneyProblems: e.target.checked } }) }} />
                        <label className="form-check-label">Have you had any kidney problems?</label>
                    </div>
                    <div>
                        <input className="form-check-input me-2" type="checkbox" checked={info.medicalHistory.lungProblems} onChange={(e) => { setInfo({ ...info, medicalHistory: { ...info.medicalHistory, lungProblems: e.target.checked } }) }} />
                        <label className="form-check-label">Have you had any lungs problems?</label>
                    </div>
                    <div>
                        <input className="form-check-input me-2" type="checkbox" checked={info.medicalHistory.thyroidProblems} onChange={(e) => { setInfo({ ...info, medicalHistory: { ...info.medicalHistory, thyroidProblems: e.target.checked } }) }} />
                        <label className="form-check-label">Have you had any thyroid problems?</label>
                    </div>
                    <div>
                        <input className="form-check-input me-2" type="checkbox" checked={info.medicalHistory.pregnancy} onChange={(e) => { setInfo({ ...info, medicalHistory: { ...info.medicalHistory, pregnancy: e.target.checked } }) }} />
                        <label className="form-check-label">If female, are you pregnant?</label>
                    </div>
                    <div>
                        <input className="form-check-input me-2" type="checkbox" checked={info.medicalHistory.medications} onChange={(e) => { setInfo({ ...info, medicalHistory: { ...info.medicalHistory, medications: e.target.checked } }) }} />
                        <label className="form-check-label">Are you taking any medications? Which ones?</label>
                    </div>
                    <div>
                        <input className="form-check-input me-2" type="checkbox" checked={info.medicalHistory.surgeries} onChange={(e) => { setInfo({ ...info, medicalHistory: { ...info.medicalHistory, surgeries: e.target.checked } }) }} />
                        <label className="form-check-label">Have you had any previous surgeries or hospitalization?</label>
                    </div>
                    <div>
                        <input className="form-check-input me-2" type="checkbox" checked={info.medicalHistory.fainted} onChange={(e) => { setInfo({ ...info, medicalHistory: { ...info.medicalHistory, fainted: e.target.checked } }) }} />
                        <label className="form-check-label">Have you ever fainted in dental office?</label>
                    </div>
                    <div>
                        <input className="form-check-input me-2" type="checkbox" checked={info.medicalHistory.prolongedBleeding} onChange={(e) => { setInfo({ ...info, medicalHistory: { ...info.medicalHistory, prolongedBleeding: e.target.checked } }) }} />
                        <label className="form-check-label">Have you had prolonged bleeding from acute tooth extraction or other injury?</label>
                    </div>
                    <div>
                        <input className="form-check-input me-2" type="checkbox" checked={info.medicalHistory.allergies} onChange={(e) => { setInfo({ ...info, medicalHistory: { ...info.medicalHistory, allergies: e.target.checked } }) }} />
                        <label className="form-check-label">Are you allergic to anesthetics, antibiotics, other drugs?</label>
                    </div>
                    <div>
                        <input className="form-check-input me-2" type="checkbox" checked={info.medicalHistory.other.found} onChange={(e) => { setInfo({ ...info, medicalHistory: { ...info.medicalHistory, other: { ...info.medicalHistory.other, found: e.target.checked } } }) }} />
                        <label className="form-check-label">Do you have any disease or condition not listed above?</label>
                        <input type="text" className="form-control mt-2" value={info.medicalHistory.other.details} onChange={(e) => { setInfo({ ...info, medicalHistory: { ...info.medicalHistory, other: { ...info.medicalHistory.other, details: e.target.value } } }) }} disabled={!info.medicalHistory.other.found} placeholder="If yes, please specify" />
                    </div>
                    <div className="mt-3">
                        <label className="form-check-label fw-bold">Family & Social History</label>
                        <div className="d-flex gap-2">
                            <input type="text" className="form-control mt-2" value={info.medicalHistory.familyAndSocialHistory.disease} onChange={(e) => { setInfo({ ...info, medicalHistory: { ...info.medicalHistory, familyAndSocialHistory: { ...info.medicalHistory.familyAndSocialHistory, disease: e.target.value } } }) }} placeholder="Diabetes" />
                            <input type="text" className="form-control mt-2" value={info.medicalHistory.familyAndSocialHistory.person} onChange={(e) => { setInfo({ ...info, medicalHistory: { ...info.medicalHistory, familyAndSocialHistory: { ...info.medicalHistory.familyAndSocialHistory, person: e.target.value } } }) }} placeholder="Father" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}