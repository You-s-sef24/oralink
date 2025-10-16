"use client";

export default function FirstPage({ info, setInfo }) {
    return (
        <div className="p-3">

            <div className="position-relative border border-primary rounded-3 p-4 mt-4 bg-white">
                <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                    Patient Identification Data
                </span>

                <div>
                    <div className="row g-2 mb-3">
                        <div className="col-md-6">
                            <label className="form-label">Name:</label>
                            <input type="text" className="form-control" value={info.name} onChange={(e) => { setInfo({ ...info, name: e.target.value }) }} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Gender:</label>
                            <div className="d-flex gap-2 pt-2">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gender" value={"Male"} checked={info.gender === "Male"} onChange={(e) => { setInfo({ ...info, gender: e.target.value }) }} />
                                    <label className="form-check-label">Male</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gender" value={"Female"} checked={info.gender === "Female"} onChange={(e) => { setInfo({ ...info, gender: e.target.value }) }} />
                                    <label className="form-check-label">Female</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <label className="form-label">Martial Status:</label>
                            <select className="form-select" value={info.martialStatus} onChange={(e) => { setInfo({ ...info, martialStatus: e.target.value }) }}>
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                                <option value="divorced">Divorced</option>
                                <option value="widowed">Widowed</option>
                            </select>
                        </div>
                        <div className="col-6">
                            <label className="form-label">Birth Date:</label>
                            <input type="date" className="form-control" value={info.birthDate} onChange={(e) => { setInfo({ ...info, birthDate: e.target.value }) }} />
                        </div>
                        <div className="col-12">
                            <label className="form-label">Address:</label>
                            <input type="text" className="form-control" value={info.address} onChange={(e) => { setInfo({ ...info, address: e.target.value }) }} />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Phone Number:</label>
                            <input type="tel" className="form-control" value={info.phone} onChange={(e) => { setInfo({ ...info, phone: e.target.value }) }} />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Occupation:</label>
                            <input type="text" className="form-control" value={info.occupation} onChange={(e) => { setInfo({ ...info, occupation: e.target.value }) }} />
                        </div>
                        <div className="col-md-8">
                            <label className="form-label">Physican&apos;s Name:</label>
                            <input type="text" className="form-control" value={info.physicianName} onChange={(e) => { setInfo({ ...info, physicianName: e.target.value }) }} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label text-truncate">Physican&apos;s Phone No:</label>
                            <input type="tel" className="form-control" value={info.physicianPhone} onChange={(e) => { setInfo({ ...info, physicianPhone: e.target.value }) }} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Date of Last Visit:</label>
                            <input type="date" className="form-control" value={info.lastVisit} onChange={(e) => { setInfo({ ...info, lastVisit: e.target.value }) }} />
                        </div>
                        <div className="col-md-8">
                            <label className="form-label">Reason of Last Visit to Physican:</label>
                            <input type="text" className="form-control" value={info.reasonForVisit} onChange={(e) => { setInfo({ ...info, reasonForVisit: e.target.value }) }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="position-relative border border-primary rounded-3 p-4 mt-4 bg-white">
                <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                    History of Chief Complaint
                </span>

                <div>
                    <div className="row g-2 mb-3">
                        <div className="col-12">
                            <label className="form-label">Chief Complaint:</label>
                            <input type="text" className="form-control" value={info.chiefComplaint} onChange={(e) => { setInfo({ ...info, chiefComplaint: e.target.value }) }} />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Onset:</label>
                            <input type="month" className="form-control" value={info.onset} onChange={(e) => { setInfo({ ...info, onset: e.target.value }) }} />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Course:</label>
                            <input type="text" className="form-control" value={info.course} onChange={(e) => { setInfo({ ...info, course: e.target.value }) }} />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Severity:</label>
                            <input type="text" className="form-control" value={info.severity} onChange={(e) => { setInfo({ ...info, severity: e.target.value }) }} />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Distibution:</label>
                            <input type="text" className="form-control" value={info.distribution} onChange={(e) => { setInfo({ ...info, distribution: e.target.value }) }} />
                        </div>
                        <div className="col-12">
                            <label className="form-label">Precipitating factors:</label>
                            <input type="text" className="form-control" value={info.precipitatingFactors} onChange={(e) => { setInfo({ ...info, precipitatingFactors: e.target.value }) }} />
                        </div>
                        <div className="col-12">
                            <label className="form-label">Relieving factors:</label>
                            <input type="text" className="form-control" value={info.relievingFactors} onChange={(e) => { setInfo({ ...info, relievingFactors: e.target.value }) }} />
                        </div>
                        <div className="col-12">
                            <label className="form-label">Location and radiation:</label>
                            <input type="text" className="form-control" value={info.locationAndRadiation} onChange={(e) => { setInfo({ ...info, locationAndRadiation: e.target.value }) }} />
                        </div>
                        <div className="col-12">
                            <label className="form-label">Associated sympotoms:</label>
                            <input type="text" className="form-control" value={info.associatedSymptoms} onChange={(e) => { setInfo({ ...info, associatedSymptoms: e.target.value }) }} />
                        </div>
                        <div className="col-12">
                            <label className="form-label">Any previous self-treatment or prescribed treatment:</label>
                            <input type="text" className="form-control" value={info.previousTreatment} onChange={(e) => { setInfo({ ...info, previousTreatment: e.target.value }) }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="position-relative border border-primary rounded-3 p-4 mt-4 bg-white">
                <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                    Medical History
                </span>

                <div className="d-flex flex-column">
                    <div className="d-flex">
                        <input className="form-check-input me-2" type="checkbox" checked={info.medicalHistory.heartProblems} onChange={(e) => { setInfo({ ...info, medicalHistory: { ...info.medicalHistory, heartProblems: e.target.checked } }) }} />
                        <label className="form-check-label">Have you had heart problems? Or hypertensions?</label>
                    </div>
                    <div className="d-flex">
                        <input className="form-check-input me-2" type="checkbox" checked={info.medicalHistory.diabetes} onChange={(e) => { setInfo({ ...info, medicalHistory: { ...info.medicalHistory, diabetes: e.target.checked } }) }} />
                        <label className="form-check-label">Are you diabetic?</label>
                    </div>
                    <div className="d-flex">
                        <input className="form-check-input me-2" type="checkbox" checked={info.medicalHistory.liverProblems} onChange={(e) => { setInfo({ ...info, medicalHistory: { ...info.medicalHistory, liverProblems: e.target.checked } }) }} />
                        <label className="form-check-label">Have you had any liver problems?</label>
                    </div>
                    <div className="d-flex">
                        <input className="form-check-input me-2" type="checkbox" checked={info.medicalHistory.kidneyProblems} onChange={(e) => { setInfo({ ...info, medicalHistory: { ...info.medicalHistory, kidneyProblems: e.target.checked } }) }} />
                        <label className="form-check-label">Have you had any kidney problems?</label>
                    </div>
                    <div className="d-flex">
                        <input className="form-check-input me-2" type="checkbox" checked={info.medicalHistory.lungProblems} onChange={(e) => { setInfo({ ...info, medicalHistory: { ...info.medicalHistory, lungProblems: e.target.checked } }) }} />
                        <label className="form-check-label">Have you had any lungs problems?</label>
                    </div>
                    <div className="d-flex">
                        <input className="form-check-input me-2" type="checkbox" checked={info.medicalHistory.thyroidProblems} onChange={(e) => { setInfo({ ...info, medicalHistory: { ...info.medicalHistory, thyroidProblems: e.target.checked } }) }} />
                        <label className="form-check-label">Have you had any thyroid problems?</label>
                    </div>
                    <div className="d-flex">
                        <input className="form-check-input me-2" type="checkbox" checked={info.medicalHistory.pregnancy} onChange={(e) => { setInfo({ ...info, medicalHistory: { ...info.medicalHistory, pregnancy: e.target.checked } }) }} />
                        <label className="form-check-label">If female, are you pregnant?</label>
                    </div>
                    <div className="d-flex">
                        <input className="form-check-input me-2" type="checkbox" checked={info.medicalHistory.medications} onChange={(e) => { setInfo({ ...info, medicalHistory: { ...info.medicalHistory, medications: e.target.checked } }) }} />
                        <label className="form-check-label">Are you taking any medications? Which ones?</label>
                    </div>
                    <div className="d-flex">
                        <input className="form-check-input me-2" type="checkbox" checked={info.medicalHistory.surgeries} onChange={(e) => { setInfo({ ...info, medicalHistory: { ...info.medicalHistory, surgeries: e.target.checked } }) }} />
                        <label className="form-check-label">Have you had any previous surgeries or hospitalization?</label>
                    </div>
                    <div className="d-flex">
                        <input className="form-check-input me-2" type="checkbox" checked={info.medicalHistory.fainted} onChange={(e) => { setInfo({ ...info, medicalHistory: { ...info.medicalHistory, fainted: e.target.checked } }) }} />
                        <label className="form-check-label">Have you ever fainted in dental office?</label>
                    </div>
                    <div className="d-flex">
                        <input className="form-check-input me-2" type="checkbox" checked={info.medicalHistory.prolongedBleeding} onChange={(e) => { setInfo({ ...info, medicalHistory: { ...info.medicalHistory, prolongedBleeding: e.target.checked } }) }} />
                        <label className="form-check-label">Have you had prolonged bleeding from acute tooth extraction or other injury?</label>
                    </div>
                    <div className="d-flex">
                        <input className="form-check-input me-2" type="checkbox" checked={info.medicalHistory.allergies} onChange={(e) => { setInfo({ ...info, medicalHistory: { ...info.medicalHistory, allergies: e.target.checked } }) }} />
                        <label className="form-check-label">Are you allergic to anesthetics, antibiotics, other drugs?</label>
                    </div>
                    <div>
                        <div className="d-flex">
                            <input className="form-check-input me-2" type="checkbox" checked={info.medicalHistory.other.found} onChange={(e) => { setInfo({ ...info, medicalHistory: { ...info.medicalHistory, other: { ...info.medicalHistory.other, found: e.target.checked } } }) }} />
                            <label className="form-check-label">Do you have any disease or condition not listed above?</label>
                        </div>
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