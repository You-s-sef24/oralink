export default function SecondPage({ info, setInfo }) {
    return (
        <div className="p-3">

            <div className="position-relative border border-primary rounded-3 p-4 mt-4 bg-white">
                <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                    Dental History
                </span>

                <div className="d-flex flex-column">
                    <div>
                        <input className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.senstivity} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, senstivity: e.target.checked } }) }} />
                        <label className="form-check-label">Senstivity (hot/cold/sweet)</label>
                    </div>
                    <div>
                        <input className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.chewingDifficulty} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, chewingDifficulty: e.target.checked } }) }} />
                        <label className="form-check-label">Tooth pain or discomfort with cheewing</label>
                    </div>
                    <div>
                        <input className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.bleedingGums} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, bleedingGums: e.target.checked } }) }} />
                        <label className="form-check-label">Bleeding, swollen or irritated gums</label>
                    </div>
                    <div>
                        <input className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.mouthUlcers} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, mouthUlcers: e.target.checked } }) }} />
                        <label className="form-check-label">Ulcers or sores</label>
                    </div>
                    <div>
                        <input className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.foodCatch} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, foodCatch: e.target.checked } }) }} />
                        <label className="form-check-label">Food catch between your teeth</label>
                    </div>
                    <div>
                        <input className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.headaches} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, headaches: e.target.checked } }) }} />
                        <label className="form-check-label">Headaches, earaches or neck pains</label>
                    </div>
                    <div>
                        <input className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.jawPain} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, jawPain: e.target.checked } }) }} />
                        <label className="form-check-label">Jaw joint pain, noise</label>
                    </div>
                    <div>
                        <input className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.teethGrinding} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, teethGrinding: e.target.checked } }) }} />
                        <label className="form-check-label">Grinding or clenching teeth</label>
                    </div>
                    <div>
                        <input className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.teethBreaking} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, teethBreaking: e.target.checked } }) }} />
                        <label className="form-check-label">Teeth or fillings breaking</label>
                    </div>
                    <div>
                        <input className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.mobileTeeth} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, mobileTeeth: e.target.checked } }) }} />
                        <label className="form-check-label">Mobile teeth</label>
                    </div>
                    <div>
                        <input className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.badBreath} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, badBreath: e.target.checked } }) }} />
                        <label className="form-check-label">Bad breath or bad taste in mouth</label>
                    </div>
                    <div>
                        <input className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.dryMouth} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, dryMouth: e.target.checked } }) }} />
                        <label className="form-check-label">Dry mouth</label>
                    </div>
                    <hr />
                    <div>
                        <label className="form-label fw-semibold">Do you have or have you had any of the following:</label>
                        <div>
                            <input className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.oralHistory.extractedTeeth} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, oralHistory: { ...info.dentalHistory.oralHistory, extractedTeeth: e.target.checked } } }) }} />
                            <label className="form-check-label">Extracted teeth/why?</label>
                        </div>
                        <div>
                            <input className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.oralHistory.bridge} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, oralHistory: { ...info.dentalHistory.oralHistory, bridge: e.target.checked } } }) }} />
                            <label className="form-check-label">Bridge/Filling</label>
                        </div>
                        <div>
                            <input className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.oralHistory.denture} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, oralHistory: { ...info.dentalHistory.oralHistory, denture: e.target.checked } } }) }} />
                            <label className="form-check-label">Partial dentures/Full dentures</label>
                        </div>
                        <div>
                            <input className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.oralHistory.braces} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, oralHistory: { ...info.dentalHistory.oralHistory, braces: e.target.checked } } }) }} />
                            <label className="form-check-label">Braces</label>
                        </div>
                        <div>
                            <input className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.oralHistory.problems} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, oralHistory: { ...info.dentalHistory.oralHistory, problems: e.target.checked } } }) }} />
                            <label className="form-check-label">Problems associated with previous dental treatment</label>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <label className="form-label fw-semibold">When was your last dental appointment (approx. date)?</label>
                        <input type="date" className="form-control" value={info.dentalHistory.lastDentalAppointment} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, lastDentalAppointment: e.target.value } }) }} />
                    </div>
                    <div className="mt-3">
                        <label className="form-label fw-semibold">What was done at that time?</label>
                        <input type="text" className="form-control" value={info.dentalHistory.lastDentalAppointmentOperation} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, lastDentalAppointmentOperation: e.target.value } }) }} placeholder="e.g. Extraction" />
                    </div>
                    <div className="mt-3">
                        <label className="form-label fw-semibold">When did you last have dental x-ray taken (approx. date):</label>
                        <input type="date" className="form-control" value={info.dentalHistory.lastDentalXray} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, lastDentalXray: e.target.value } }) }} />
                    </div>
                    <div className="mt-3">
                        <input className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.smoking.isSmoking} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, smoking: { ...info.dentalHistory.smoking, isSmoking: e.target.checked } } }) }} />
                        <label className="form-check-label fw-semibold">Do you smoke or chew tobacco?</label>
                        {info.dentalHistory.smoking.isSmoking ? (
                            <div className="d-flex gap-2 mt-2">
                                <div>
                                    <label className="form-label">and since when?</label>
                                    <input type="text" className="form-control" value={info.dentalHistory.smoking.sinceWhen} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, smoking: { ...info.dentalHistory.smoking, sinceWhen: e.target.value } } }) }} />
                                </div>
                                <div>
                                    <label className="form-label">How much/many per day?</label>
                                    <input type="text" className="form-control" value={info.dentalHistory.smoking.howManyPerDay} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, smoking: { ...info.dentalHistory.smoking, howManyPerDay: e.target.value } } }) }} />
                                </div>
                            </div>
                        ) : ("")}
                    </div>
                    <div className="mt-3">
                        <label className="form-label">Comments:</label>
                        <textarea className="form-control" rows="3" value={info.dentalHistory.comments} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, comments: e.target.value } }) }}></textarea>
                    </div>
                </div>
            </div>

        </div>
    );
}