export default function PeriodonticsPage1({ info, setInfo }) {
    return (
        <div className="p-3">

            <div className="position-relative border border-primary rounded-3 p-4 mt-4 bg-white">
                <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                    Dental History
                </span>

                <div className="d-flex flex-column gap-1">
                    <div className="d-flex">
                        <input id="senstivity" className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.senstivity} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, senstivity: e.target.checked } }) }} />
                        <label htmlFor="senstivity" className="form-check-label">Senstivity (hot/cold/sweet)</label>
                    </div>

                    <div className="d-flex">
                        <input id="chewingDifficulty" className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.chewingDifficulty} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, chewingDifficulty: e.target.checked } }) }} />
                        <label htmlFor="chewingDifficulty" className="form-check-label">Tooth pain or discomfort with cheewing</label>
                    </div>

                    <div className="d-flex">
                        <input id="bleedingGums" className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.bleedingGums} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, bleedingGums: e.target.checked } }) }} />
                        <label htmlFor="bleedingGums" className="form-check-label">Bleeding, swollen or irritated gums</label>
                    </div>

                    <div className="d-flex">
                        <input id="mouthUlcers" className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.mouthUlcers} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, mouthUlcers: e.target.checked } }) }} />
                        <label htmlFor="mouthUlcers" className="form-check-label">Ulcers or sores</label>
                    </div>

                    <div className="d-flex">
                        <input id="foodCatch" className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.foodCatch} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, foodCatch: e.target.checked } }) }} />
                        <label htmlFor="foodCatch" className="form-check-label">Food catch between your teeth</label>
                    </div>

                    <div className="d-flex">
                        <input id="headaches" className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.headaches} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, headaches: e.target.checked } }) }} />
                        <label htmlFor="headaches" className="form-check-label">Headaches, earaches or neck pains</label>
                    </div>

                    <div className="d-flex">
                        <input id="jawPain" className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.jawPain} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, jawPain: e.target.checked } }) }} />
                        <label htmlFor="jawPain" className="form-check-label">Jaw joint pain, noise</label>
                    </div>

                    <div className="d-flex">
                        <input id="teethGrinding" className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.teethGrinding} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, teethGrinding: e.target.checked } }) }} />
                        <label htmlFor="teethGrinding" className="form-check-label">Grinding or clenching teeth</label>
                    </div>

                    <div className="d-flex">
                        <input id="teethBreaking" className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.teethBreaking} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, teethBreaking: e.target.checked } }) }} />
                        <label htmlFor="teethBreaking" className="form-check-label">Teeth or fillings breaking</label>
                    </div>

                    <div className="d-flex">
                        <input id="mobileTeeth" className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.mobileTeeth} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, mobileTeeth: e.target.checked } }) }} />
                        <label htmlFor="mobileTeeth" className="form-check-label">Mobile teeth</label>
                    </div>

                    <div className="d-flex">
                        <input id="badBreath" className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.badBreath} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, badBreath: e.target.checked } }) }} />
                        <label htmlFor="badBreath" className="form-check-label">Bad breath or bad taste in mouth</label>
                    </div>

                    <div className="d-flex">
                        <input id="dryMouth" className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.dryMouth} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, dryMouth: e.target.checked } }) }} />
                        <label htmlFor="dryMouth" className="form-check-label">Dry mouth</label>
                    </div>

                    <hr />

                    {/* ORAL HISTORY */}
                    <div className="d-flex flex-column gap-1">
                        <label className="form-label fw-semibold">Do you have or have you had any of the following:</label>

                        <div className="d-flex">
                            <input id="extractedTeeth" className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.oralHistory.extractedTeeth} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, oralHistory: { ...info.dentalHistory.oralHistory, extractedTeeth: e.target.checked } } }) }} />
                            <label htmlFor="extractedTeeth" className="form-check-label">Extracted teeth/why?</label>
                        </div>

                        <div className="d-flex">
                            <input id="bridge" className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.oralHistory.bridge} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, oralHistory: { ...info.dentalHistory.oralHistory, bridge: e.target.checked } } }) }} />
                            <label htmlFor="bridge" className="form-check-label">Bridge/Filling</label>
                        </div>

                        <div className="d-flex">
                            <input id="denture" className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.oralHistory.denture} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, oralHistory: { ...info.dentalHistory.oralHistory, denture: e.target.checked } } }) }} />
                            <label htmlFor="denture" className="form-check-label">Partial dentures/Full dentures</label>
                        </div>

                        <div className="d-flex">
                            <input id="braces" className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.oralHistory.braces} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, oralHistory: { ...info.dentalHistory.oralHistory, braces: e.target.checked } } }) }} />
                            <label htmlFor="braces" className="form-check-label">Braces</label>
                        </div>

                        <div className="d-flex">
                            <input id="problems" className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.oralHistory.problems} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, oralHistory: { ...info.dentalHistory.oralHistory, problems: e.target.checked } } }) }} />
                            <label htmlFor="problems" className="form-check-label">Problems associated with previous dental treatment</label>
                        </div>
                    </div>

                    <hr />

                    <div>
                        <label htmlFor="lastDentalAppointment" className="form-label fw-semibold">When was your last dental appointment (approx. date)?</label>
                        <input id="lastDentalAppointment" type="date" className="form-control" value={info.dentalHistory.lastDentalAppointment} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, lastDentalAppointment: e.target.value } }) }} />
                    </div>

                    <div className="mt-3">
                        <label htmlFor="lastDentalAppointmentOperation" className="form-label fw-semibold">What was done at that time?</label>
                        <input id="lastDentalAppointmentOperation" type="text" className="form-control" value={info.dentalHistory.lastDentalAppointmentOperation} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, lastDentalAppointmentOperation: e.target.value } }) }} placeholder="e.g. Extraction" />
                    </div>

                    <div className="mt-3">
                        <label htmlFor="lastDentalXray" className="form-label fw-semibold">When did you last have dental x-ray taken (approx. date):</label>
                        <input id="lastDentalXray" type="date" className="form-control" value={info.dentalHistory.lastDentalXray} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, lastDentalXray: e.target.value } }) }} />
                    </div>

                    <div className="mt-3">
                        <div className="d-flex">
                            <input id="isSmoking" className="form-check-input me-2" type="checkbox" checked={info.dentalHistory.smoking.isSmoking} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, smoking: { ...info.dentalHistory.smoking, isSmoking: e.target.checked } } }) }} />
                            <label htmlFor="isSmoking" className="form-check-label fw-semibold">Do you smoke or chew tobacco?</label>
                        </div>

                        {info.dentalHistory.smoking.isSmoking ? (
                            <div className="row d-flex mt-2">
                                <div className="col-sm-6">
                                    <label htmlFor="sinceWhen" className="form-label">and since when?</label>
                                    <input id="sinceWhen" type="text" className="form-control" value={info.dentalHistory.smoking.sinceWhen} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, smoking: { ...info.dentalHistory.smoking, sinceWhen: e.target.value } } }) }} />
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="howManyPerDay" className="form-label">How much/many per day?</label>
                                    <input id="howManyPerDay" type="text" className="form-control" value={info.dentalHistory.smoking.howManyPerDay} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, smoking: { ...info.dentalHistory.smoking, howManyPerDay: e.target.value } } }) }} />
                                </div>
                            </div>
                        ) : ("")}
                    </div>

                    <div className="mt-3">
                        <label htmlFor="comments" className="form-label">Comments:</label>
                        <textarea id="comments" className="form-control" rows="3" value={info.dentalHistory.comments} onChange={(e) => { setInfo({ ...info, dentalHistory: { ...info.dentalHistory, comments: e.target.value } }) }}></textarea>
                    </div>

                </div>
            </div>
        </div>
    );
}
