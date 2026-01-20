"use client";

import { useContext } from "react";
import { PatientInfoContext } from "../Contexts/PatientInfoContext";
import ImageUploadBox from "./ImageUploadBox";

export default function ViewGeneralForm() {
    const { isEditing, file, setFile } = useContext(PatientInfoContext);

    function handleSubmit(e) {
        e.preventDefault();
    }

    const ReadOnlyField = ({ label, value }) => (
        <div className="mb-2">
            <label className="form-label fw-semibold">{label}</label>
            <p className="form-control-plaintext border rounded px-2 py-1 bg-light">
                {value || "-"}
            </p>
        </div>
    );

    return (
        isEditing ?
            <form className="p-4" onSubmit={(e) => { handleSubmit(e) }}>
                <div className="row align-items-start d-flex g-3">
                    <div className="col-12 col-md-6">
                        <div className="position-relative border border-primary rounded-3 p-4  bg-white">
                            <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                                General Patient Information
                            </span>

                            <div>
                                <div className="row g-2 mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="name" className="form-label">Name:</label>
                                        <input type="text" id="name" className="form-control" value={file.patientName} onChange={(e) => { setFile({ ...file, patientName: e.target.value }) }} required />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Gender:</label>
                                        <div className="d-flex gap-2 pt-2">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" id="genderMale" value={"Male"} checked={file.gender === "Male"} onChange={(e) => { setFile({ ...file, gender: e.target.value }) }} />
                                                <label htmlFor="genderMale" className="form-check-label">Male</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" id="genderFemale" value={"Female"} checked={file.gender === "Female"} onChange={(e) => { setFile({ ...file, gender: e.target.value }) }} />
                                                <label htmlFor="genderFemale" className="form-check-label">Female</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <label className="form-label">Martial Status:</label>
                                        <select className="form-select" value={file.martialStatus} onChange={(e) => { setFile({ ...file, martialStatus: e.target.value }) }}>
                                            <option value="single">Single</option>
                                            <option value="married">Married</option>
                                            <option value="divorced">Divorced</option>
                                            <option value="widowed">Widowed</option>
                                        </select>
                                    </div>
                                    <div className="col-6">
                                        <label className="form-label">Birth Date:</label>
                                        <input type="date" className="form-control" value={file.birthDate} onChange={(e) => { setFile({ ...file, birthDate: e.target.value }) }} required />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label">Address:</label>
                                        <input type="text" className="form-control" value={file.address} onChange={(e) => { setFile({ ...file, address: e.target.value }) }} required />
                                    </div>
                                    <div className="col-6">
                                        <label className="form-label">Phone Number:</label>
                                        <input type="tel" className="form-control" value={file.phone} onChange={(e) => { setFile({ ...file, phone: e.target.value }) }} required />
                                    </div>
                                    <div className="col-6">
                                        <label className="form-label">Occupation:</label>
                                        <input type="text" className="form-control" value={file.occupation} onChange={(e) => { setFile({ ...file, occupation: e.target.value }) }} required />
                                    </div>
                                    <div className="col-6 col-md-6">
                                        <label className="form-label">Physican&apos;s Name:</label>
                                        <input type="text" className="form-control" value={file.physicianName} onChange={(e) => { setFile({ ...file, physicianName: e.target.value }) }} />
                                    </div>
                                    <div className="col-6 col-md-6">
                                        <label className="form-label">Physican&apos;s Phone No:</label>
                                        <input type="tel" className="form-control" value={file.physicianPhone} onChange={(e) => { setFile({ ...file, physicianPhone: e.target.value }) }} />
                                    </div>
                                    <div className="col-6 col-md-4">
                                        <label className="form-label">Date of Last Visit:</label>
                                        <input type="date" className="form-control" value={file.lastVisit} onChange={(e) => { setFile({ ...file, lastVisit: e.target.value }) }} />
                                    </div>
                                    <div className="col-6 col-md-8">
                                        <label className="form-label">Reason of Last Visit:</label>
                                        <input type="text" className="form-control" value={file.reasonForVisit} onChange={(e) => { setFile({ ...file, reasonForVisit: e.target.value }) }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="position-relative border border-primary rounded-3 p-4  bg-white">
                            <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                                History of Chief Complaint
                            </span>

                            <div>
                                <div className="row g-2 mb-3">
                                    <div className="col-12">
                                        <label className="form-label">Chief Complaint:</label>
                                        <input type="text" className="form-control" value={file.chiefComplaint} onChange={(e) => { setFile({ ...file, chiefComplaint: e.target.value }) }} />
                                    </div>
                                    <div className="col-6">
                                        <label className="form-label">Onset:</label>
                                        <input type="month" className="form-control" value={file.onset} onChange={(e) => { setFile({ ...file, onset: e.target.value }) }} />
                                    </div>
                                    <div className="col-6">
                                        <label className="form-label">Course:</label>
                                        <input type="text" className="form-control" value={file.course} onChange={(e) => { setFile({ ...file, course: e.target.value }) }} />
                                    </div>
                                    <div className="col-6">
                                        <label className="form-label">Severity:</label>
                                        <input type="text" className="form-control" value={file.severity} onChange={(e) => { setFile({ ...file, severity: e.target.value }) }} />
                                    </div>
                                    <div className="col-6">
                                        <label className="form-label">Distibution:</label>
                                        <input type="text" className="form-control" value={file.distribution} onChange={(e) => { setFile({ ...file, distribution: e.target.value }) }} />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label className="form-label">Precipitating factors:</label>
                                        <input type="text" className="form-control" value={file.precipitatingFactors} onChange={(e) => { setFile({ ...file, precipitatingFactors: e.target.value }) }} />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label className="form-label">Relieving factors:</label>
                                        <input type="text" className="form-control" value={file.relievingFactors} onChange={(e) => { setFile({ ...file, relievingFactors: e.target.value }) }} />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label className="form-label">Location and radiation:</label>
                                        <input type="text" className="form-control" value={file.locationAndRadiation} onChange={(e) => { setFile({ ...file, locationAndRadiation: e.target.value }) }} />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label className="form-label">Associated sympotoms:</label>
                                        <input type="text" className="form-control" value={file.associatedSymptoms} onChange={(e) => { setFile({ ...file, associatedSymptoms: e.target.value }) }} />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label">Any previous self-treatment or prescribed treatment:</label>
                                        <input type="text" className="form-control" value={file.previousTreatment} onChange={(e) => { setFile({ ...file, previousTreatment: e.target.value }) }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="position-relative border border-primary rounded-3 p-4 bg-white">
                            <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                                Medical History
                            </span>

                            <div className="d-flex flex-column">

                                <div className="d-flex">
                                    <input id="mh-heartProblems" className="form-check-input me-2" type="checkbox"
                                        checked={file.medicalHistory.heartProblems}
                                        onChange={(e) =>
                                            setFile({
                                                ...file,
                                                medicalHistory: { ...file.medicalHistory, heartProblems: e.target.checked }
                                            })
                                        }
                                    />
                                    <label htmlFor="mh-heartProblems" className="form-check-label">
                                        Have you had heart problems? Or hypertensions?
                                    </label>
                                </div>

                                <div className="d-flex">
                                    <input id="mh-diabetes" className="form-check-input me-2" type="checkbox"
                                        checked={file.medicalHistory.diabetes}
                                        onChange={(e) =>
                                            setFile({
                                                ...file,
                                                medicalHistory: { ...file.medicalHistory, diabetes: e.target.checked }
                                            })
                                        }
                                    />
                                    <label htmlFor="mh-diabetes" className="form-check-label">Are you diabetic?</label>
                                </div>

                                <div className="d-flex">
                                    <input id="mh-liverProblems" className="form-check-input me-2" type="checkbox"
                                        checked={file.medicalHistory.liverProblems}
                                        onChange={(e) =>
                                            setFile({
                                                ...file,
                                                medicalHistory: { ...file.medicalHistory, liverProblems: e.target.checked }
                                            })
                                        }
                                    />
                                    <label htmlFor="mh-liverProblems" className="form-check-label">Have you had any liver problems?</label>
                                </div>

                                <div className="d-flex">
                                    <input id="mh-kidneyProblems" className="form-check-input me-2" type="checkbox"
                                        checked={file.medicalHistory.kidneyProblems}
                                        onChange={(e) =>
                                            setFile({
                                                ...file,
                                                medicalHistory: { ...file.medicalHistory, kidneyProblems: e.target.checked }
                                            })
                                        }
                                    />
                                    <label htmlFor="mh-kidneyProblems" className="form-check-label">Have you had any kidney problems?</label>
                                </div>

                                <div className="d-flex">
                                    <input id="mh-lungProblems" className="form-check-input me-2" type="checkbox"
                                        checked={file.medicalHistory.lungProblems}
                                        onChange={(e) =>
                                            setFile({
                                                ...file,
                                                medicalHistory: { ...file.medicalHistory, lungProblems: e.target.checked }
                                            })
                                        }
                                    />
                                    <label htmlFor="mh-lungProblems" className="form-check-label">Have you had any lungs problems?</label>
                                </div>

                                <div className="d-flex">
                                    <input id="mh-thyroidProblems" className="form-check-input me-2" type="checkbox"
                                        checked={file.medicalHistory.thyroidProblems}
                                        onChange={(e) =>
                                            setFile({
                                                ...file,
                                                medicalHistory: { ...file.medicalHistory, thyroidProblems: e.target.checked }
                                            })
                                        }
                                    />
                                    <label htmlFor="mh-thyroidProblems" className="form-check-label">Have you had any thyroid problems?</label>
                                </div>

                                <div className="d-flex">
                                    <input id="mh-pregnancy" className="form-check-input me-2" type="checkbox"
                                        checked={file.medicalHistory.pregnancy}
                                        onChange={(e) =>
                                            setFile({
                                                ...file,
                                                medicalHistory: { ...file.medicalHistory, pregnancy: e.target.checked }
                                            })
                                        }
                                    />
                                    <label htmlFor="mh-pregnancy" className="form-check-label">If female, are you pregnant?</label>
                                </div>

                                <div className="d-flex">
                                    <input id="mh-medications" className="form-check-input me-2" type="checkbox"
                                        checked={file.medicalHistory.medications}
                                        onChange={(e) =>
                                            setFile({
                                                ...file,
                                                medicalHistory: { ...file.medicalHistory, medications: e.target.checked }
                                            })
                                        }
                                    />
                                    <label htmlFor="mh-medications" className="form-check-label">
                                        Are you taking any medications? Which ones?
                                    </label>
                                </div>

                                <div className="d-flex">
                                    <input id="mh-surgeries" className="form-check-input me-2" type="checkbox"
                                        checked={file.medicalHistory.surgeries}
                                        onChange={(e) =>
                                            setFile({
                                                ...file,
                                                medicalHistory: { ...file.medicalHistory, surgeries: e.target.checked }
                                            })
                                        }
                                    />
                                    <label htmlFor="mh-surgeries" className="form-check-label">
                                        Have you had any previous surgeries or hospitalization?
                                    </label>
                                </div>

                                <div className="d-flex">
                                    <input id="mh-fainted" className="form-check-input me-2" type="checkbox"
                                        checked={file.medicalHistory.fainted}
                                        onChange={(e) =>
                                            setFile({
                                                ...file,
                                                medicalHistory: { ...file.medicalHistory, fainted: e.target.checked }
                                            })
                                        }
                                    />
                                    <label htmlFor="mh-fainted" className="form-check-label">
                                        Have you ever fainted in dental office?
                                    </label>
                                </div>

                                <div className="d-flex">
                                    <input id="mh-prolongedBleeding" className="form-check-input me-2" type="checkbox"
                                        checked={file.medicalHistory.prolongedBleeding}
                                        onChange={(e) =>
                                            setFile({
                                                ...file,
                                                medicalHistory: { ...file.medicalHistory, prolongedBleeding: e.target.checked }
                                            })
                                        }
                                    />
                                    <label htmlFor="mh-prolongedBleeding" className="form-check-label">
                                        Have you had prolonged bleeding from acute tooth extraction or other injury?
                                    </label>
                                </div>

                                <div className="d-flex">
                                    <input id="mh-allergies" className="form-check-input me-2" type="checkbox"
                                        checked={file.medicalHistory.allergies}
                                        onChange={(e) =>
                                            setFile({
                                                ...file,
                                                medicalHistory: { ...file.medicalHistory, allergies: e.target.checked }
                                            })
                                        }
                                    />
                                    <label htmlFor="mh-allergies" className="form-check-label">
                                        Are you allergic to anesthetics, antibiotics, other drugs?
                                    </label>
                                </div>

                                <div>
                                    <div className="d-flex">
                                        <input id="mh-other" className="form-check-input me-2" type="checkbox"
                                            checked={file.medicalHistory.other.found}
                                            onChange={(e) =>
                                                setFile({
                                                    ...file,
                                                    medicalHistory: {
                                                        ...file.medicalHistory,
                                                        other: { ...file.medicalHistory.other, found: e.target.checked }
                                                    }
                                                })
                                            }
                                        />
                                        <label htmlFor="mh-other" className="form-check-label">
                                            Do you have any disease or condition not listed above?
                                        </label>
                                    </div>

                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        value={file.medicalHistory.other.details}
                                        onChange={(e) =>
                                            setFile({
                                                ...file,
                                                medicalHistory: {
                                                    ...file.medicalHistory,
                                                    other: { ...file.medicalHistory.other, details: e.target.value }
                                                }
                                            })
                                        }
                                        disabled={!file.medicalHistory.other.found}
                                        placeholder="If yes, please specify"
                                    />
                                </div>

                                <div className="mt-3">
                                    <label className="form-check-label fw-bold">Family & Social History</label>
                                    <div className="d-flex gap-2">
                                        <input
                                            type="text"
                                            className="form-control mt-2"
                                            value={file.medicalHistory.familyAndSocialHistory.disease}
                                            onChange={(e) =>
                                                setFile({
                                                    ...file,
                                                    medicalHistory: {
                                                        ...file.medicalHistory,
                                                        familyAndSocialHistory: {
                                                            ...file.medicalHistory.familyAndSocialHistory,
                                                            disease: e.target.value
                                                        }
                                                    }
                                                })
                                            }
                                            placeholder="Diabetes"
                                        />
                                        <input
                                            type="text"
                                            className="form-control mt-2"
                                            value={file.medicalHistory.familyAndSocialHistory.person}
                                            onChange={(e) =>
                                                setFile({
                                                    ...file,
                                                    medicalHistory: {
                                                        ...file.medicalHistory,
                                                        familyAndSocialHistory: {
                                                            ...file.medicalHistory.familyAndSocialHistory,
                                                            person: e.target.value
                                                        }
                                                    }
                                                })
                                            }
                                            placeholder="Father"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="position-relative border border-primary rounded-3 p-4 bg-white">
                            <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                                Dental History
                            </span>

                            <div className="row g-1">
                                <div className="col-sm-6 d-flex">
                                    <input id="senstivity" className="form-check-input me-2" type="checkbox" checked={file.dentalHistory.senstivity} onChange={(e) => { setFile({ ...file, dentalHistory: { ...file.dentalHistory, senstivity: e.target.checked } }) }} />
                                    <label htmlFor="senstivity" className="form-check-label">Senstivity (hot/cold/sweet)</label>
                                </div>

                                <div className="col-sm-6 d-flex">
                                    <input id="chewingDifficulty" className="form-check-input me-2" type="checkbox" checked={file.dentalHistory.chewingDifficulty} onChange={(e) => { setFile({ ...file, dentalHistory: { ...file.dentalHistory, chewingDifficulty: e.target.checked } }) }} />
                                    <label htmlFor="chewingDifficulty" className="form-check-label">Tooth pain or discomfort with cheewing</label>
                                </div>

                                <div className="col-sm-6 d-flex">
                                    <input id="bleedingGums" className="form-check-input me-2" type="checkbox" checked={file.dentalHistory.bleedingGums} onChange={(e) => { setFile({ ...file, dentalHistory: { ...file.dentalHistory, bleedingGums: e.target.checked } }) }} />
                                    <label htmlFor="bleedingGums" className="form-check-label">Bleeding, swollen or irritated gums</label>
                                </div>

                                <div className="col-sm-6 d-flex">
                                    <input id="mouthUlcers" className="form-check-input me-2" type="checkbox" checked={file.dentalHistory.mouthUlcers} onChange={(e) => { setFile({ ...file, dentalHistory: { ...file.dentalHistory, mouthUlcers: e.target.checked } }) }} />
                                    <label htmlFor="mouthUlcers" className="form-check-label">Ulcers or sores</label>
                                </div>

                                <div className="col-sm-6 d-flex">
                                    <input id="foodCatch" className="form-check-input me-2" type="checkbox" checked={file.dentalHistory.foodCatch} onChange={(e) => { setFile({ ...file, dentalHistory: { ...file.dentalHistory, foodCatch: e.target.checked } }) }} />
                                    <label htmlFor="foodCatch" className="form-check-label">Food catch between your teeth</label>
                                </div>

                                <div className="col-sm-6 d-flex">
                                    <input id="headaches" className="form-check-input me-2" type="checkbox" checked={file.dentalHistory.headaches} onChange={(e) => { setFile({ ...file, dentalHistory: { ...file.dentalHistory, headaches: e.target.checked } }) }} />
                                    <label htmlFor="headaches" className="form-check-label">Headaches, earaches or neck pains</label>
                                </div>

                                <div className="col-sm-6 d-flex">
                                    <input id="jawPain" className="form-check-input me-2" type="checkbox" checked={file.dentalHistory.jawPain} onChange={(e) => { setFile({ ...file, dentalHistory: { ...file.dentalHistory, jawPain: e.target.checked } }) }} />
                                    <label htmlFor="jawPain" className="form-check-label">Jaw joint pain, noise</label>
                                </div>

                                <div className="col-sm-6 d-flex">
                                    <input id="teethGrinding" className="form-check-input me-2" type="checkbox" checked={file.dentalHistory.teethGrinding} onChange={(e) => { setFile({ ...file, dentalHistory: { ...file.dentalHistory, teethGrinding: e.target.checked } }) }} />
                                    <label htmlFor="teethGrinding" className="form-check-label">Grinding or clenching teeth</label>
                                </div>

                                <div className="col-sm-6 d-flex">
                                    <input id="teethBreaking" className="form-check-input me-2" type="checkbox" checked={file.dentalHistory.teethBreaking} onChange={(e) => { setFile({ ...file, dentalHistory: { ...file.dentalHistory, teethBreaking: e.target.checked } }) }} />
                                    <label htmlFor="teethBreaking" className="form-check-label">Teeth or fillings breaking</label>
                                </div>

                                <div className="col-sm-6 d-flex">
                                    <input id="mobileTeeth" className="form-check-input me-2" type="checkbox" checked={file.dentalHistory.mobileTeeth} onChange={(e) => { setFile({ ...file, dentalHistory: { ...file.dentalHistory, mobileTeeth: e.target.checked } }) }} />
                                    <label htmlFor="mobileTeeth" className="form-check-label">Mobile teeth</label>
                                </div>

                                <div className="col-sm-6 d-flex">
                                    <input id="badBreath" className="form-check-input me-2" type="checkbox" checked={file.dentalHistory.badBreath} onChange={(e) => { setFile({ ...file, dentalHistory: { ...file.dentalHistory, badBreath: e.target.checked } }) }} />
                                    <label htmlFor="badBreath" className="form-check-label">Bad breath or bad taste in mouth</label>
                                </div>

                                <div className="col-sm-6 d-flex mb-3">
                                    <input id="dryMouth" className="form-check-input me-2" type="checkbox" checked={file.dentalHistory.dryMouth} onChange={(e) => { setFile({ ...file, dentalHistory: { ...file.dentalHistory, dryMouth: e.target.checked } }) }} />
                                    <label htmlFor="dryMouth" className="form-check-label">Dry mouth</label>
                                </div>

                                <hr />

                                <div className="d-flex flex-column gap-1">
                                    <label className="form-label fw-semibold">Do you have or have you had any of the following:</label>

                                    <div className="d-flex">
                                        <input id="extractedTeeth" className="form-check-input me-2" type="checkbox" checked={file.dentalHistory.oralHistory.extractedTeeth} onChange={(e) => { setFile({ ...file, dentalHistory: { ...file.dentalHistory, oralHistory: { ...file.dentalHistory.oralHistory, extractedTeeth: e.target.checked } } }) }} />
                                        <label htmlFor="extractedTeeth" className="form-check-label">Extracted teeth/why?</label>
                                    </div>

                                    <div className="d-flex">
                                        <input id="bridge" className="form-check-input me-2" type="checkbox" checked={file.dentalHistory.oralHistory.bridge} onChange={(e) => { setFile({ ...file, dentalHistory: { ...file.dentalHistory, oralHistory: { ...file.dentalHistory.oralHistory, bridge: e.target.checked } } }) }} />
                                        <label htmlFor="bridge" className="form-check-label">Bridge/Filling</label>
                                    </div>

                                    <div className="d-flex">
                                        <input id="denture" className="form-check-input me-2" type="checkbox" checked={file.dentalHistory.oralHistory.denture} onChange={(e) => { setFile({ ...file, dentalHistory: { ...file.dentalHistory, oralHistory: { ...file.dentalHistory.oralHistory, denture: e.target.checked } } }) }} />
                                        <label htmlFor="denture" className="form-check-label">Partial dentures/Full dentures</label>
                                    </div>

                                    <div className="d-flex">
                                        <input id="braces" className="form-check-input me-2" type="checkbox" checked={file.dentalHistory.oralHistory.braces} onChange={(e) => { setFile({ ...file, dentalHistory: { ...file.dentalHistory, oralHistory: { ...file.dentalHistory.oralHistory, braces: e.target.checked } } }) }} />
                                        <label htmlFor="braces" className="form-check-label">Braces</label>
                                    </div>

                                    <div className="d-flex">
                                        <input id="problems" className="form-check-input me-2" type="checkbox" checked={file.dentalHistory.oralHistory.problems} onChange={(e) => { setFile({ ...file, dentalHistory: { ...file.dentalHistory, oralHistory: { ...file.dentalHistory.oralHistory, problems: e.target.checked } } }) }} />
                                        <label htmlFor="problems" className="form-check-label">Problems associated with previous dental treatment</label>
                                    </div>
                                </div>

                                <hr />

                                <div className="row">
                                    <div className="col-12 col-sm-7">
                                        <label htmlFor="lastDentalAppointment" className="form-label fw-semibold">When was your last dental appointment ?</label>
                                        <input id="lastDentalAppointment" type="month" className="form-control" value={file.dentalHistory.lastDentalAppointment} onChange={(e) => { setFile({ ...file, dentalHistory: { ...file.dentalHistory, lastDentalAppointment: e.target.value } }) }} />
                                    </div>

                                    <div className="col-12 col-sm-5">
                                        <label htmlFor="lastDentalAppointmentOperation" className="form-label fw-semibold">What was done at that time?</label>
                                        <input id="lastDentalAppointmentOperation" type="text" className="form-control" value={file.dentalHistory.lastDentalAppointmentOperation} onChange={(e) => { setFile({ ...file, dentalHistory: { ...file.dentalHistory, lastDentalAppointmentOperation: e.target.value } }) }} placeholder="e.g. Extraction" />
                                    </div>

                                    <div className="mt-3">
                                        <label htmlFor="lastDentalXray" className="form-label fw-semibold">When did you last have dental x-ray taken (approx. date):</label>
                                        <input id="lastDentalXray" type="month" className="form-control" value={file.dentalHistory.lastDentalXray} onChange={(e) => { setFile({ ...file, dentalHistory: { ...file.dentalHistory, lastDentalXray: e.target.value } }) }} />
                                    </div>

                                    <div className="mt-3">
                                        <div className="d-flex">
                                            <input id="isSmoking" className="form-check-input me-2" type="checkbox" checked={file.dentalHistory.smoking.isSmoking} onChange={(e) => { setFile({ ...file, dentalHistory: { ...file.dentalHistory, smoking: { ...file.dentalHistory.smoking, isSmoking: e.target.checked } } }) }} />
                                            <label htmlFor="isSmoking" className="form-check-label fw-semibold">Do you smoke or chew tobacco?</label>
                                        </div>

                                        {file.dentalHistory.smoking.isSmoking ? (
                                            <div className="row d-flex mt-2">
                                                <div className="col-sm-6">
                                                    <label htmlFor="sinceWhen" className="form-label">and since when?</label>
                                                    <input id="sinceWhen" type="text" className="form-control" value={file.dentalHistory.smoking.sinceWhen} onChange={(e) => { setFile({ ...file, dentalHistory: { ...file.dentalHistory, smoking: { ...file.dentalHistory.smoking, sinceWhen: e.target.value } } }) }} />
                                                </div>

                                                <div className="col-sm-6">
                                                    <label htmlFor="howManyPerDay" className="form-label">How much/many per day?</label>
                                                    <input id="howManyPerDay" type="text" className="form-control" value={file.dentalHistory.smoking.howManyPerDay} onChange={(e) => { setFile({ ...file, dentalHistory: { ...file.dentalHistory, smoking: { ...file.dentalHistory.smoking, howManyPerDay: e.target.value } } }) }} />
                                                </div>
                                            </div>
                                        ) : ("")}
                                    </div>

                                    <div className="mt-3">
                                        <label htmlFor="comments" className="form-label">Comments:</label>
                                        <textarea id="comments" className="form-control" rows="3" value={file.dentalHistory.comments} onChange={(e) => { setFile({ ...file, dentalHistory: { ...file.dentalHistory, comments: e.target.value } }) }}></textarea>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6">
                        <img src={file.prePatientImage} alt="Pre dental image" className="img-fluid" />
                    </div>

                    <div className="col-12 col-sm-6">
                        <ImageUploadBox time={'post'} type={''} fileData={file} setFileData={setFile} />
                    </div>
                </div>

                <div className="d-flex justify-content-end my-3">
                    <button type="submit" className="btn btn-primary">Next</button>
                </div>

            </form >
            :
            <div className="p-4">
                <div className="row align-items-start g-3">
                    <div className="col-12 col-md-6">
                        <div className="position-relative border border-primary rounded-3 p-4 bg-white">
                            <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                                General Patient Information
                            </span>
                            <div className="row">
                                <ReadOnlyField label="Name:" value={file.patientName} />
                                <ReadOnlyField label="Gender:" value={file.gender} />
                                <div className="col-6">
                                    <ReadOnlyField label="Marital Status:" value={file.martialStatus} />
                                </div>
                                <div className="col-6">
                                    <ReadOnlyField label="Birth Date:" value={file.birthDate} />
                                </div>
                                <ReadOnlyField label="Address:" value={file.address} />
                                <div className="col-6">
                                    <ReadOnlyField label="Phone Number:" value={file.phone} />
                                </div>
                                <div className="col-6">
                                    <ReadOnlyField label="Occupation:" value={file.occupation} />
                                </div>
                                <div className="col-6">
                                    <ReadOnlyField label="Physician Name:" value={file.physicianName} />
                                </div>
                                <div className="col-6">
                                    <ReadOnlyField label="Physician Phone:" value={file.physicianPhone} />
                                </div>
                                <div className="col-6">
                                    <ReadOnlyField label="Last Visit Date:" value={file.lastVisit} />
                                </div>
                                <div className="col-6">
                                    <ReadOnlyField label="Reason of Last Visit:" value={file.reasonForVisit} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ========= History of Chief Complaint ========= */}
                    <div className="col-12 col-md-6">
                        <div className="position-relative border border-primary rounded-3 p-4 bg-white">
                            <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                                History of Chief Complaint
                            </span>
                            <div className="row">
                                <ReadOnlyField label="Chief Complaint:" value={file.chiefComplaint} />
                                <div className="col-6">
                                    <ReadOnlyField label="Onset:" value={file.onset} />
                                </div>
                                <div className="col-6">
                                    <ReadOnlyField label="Course:" value={file.course} />
                                </div>
                                <div className="col-6">
                                    <ReadOnlyField label="Severity:" value={file.severity} />
                                </div>
                                <div className="col-6">
                                    <ReadOnlyField label="Distribution:" value={file.distribution} />
                                </div>
                                <ReadOnlyField label="Precipitating Factors:" value={file.precipitatingFactors} />
                                <ReadOnlyField label="Relieving Factors:" value={file.relievingFactors} />
                                <ReadOnlyField label="Location & Radiation:" value={file.locationAndRadiation} />
                                <ReadOnlyField label="Associated Symptoms:" value={file.associatedSymptoms} />
                                <ReadOnlyField label="Previous Treatment:" value={file.previousTreatment} />
                            </div>
                        </div>
                    </div>

                    {/* ========= Medical History ========= */}
                    <div className="col-12 col-md-6">
                        <div className="position-relative border border-primary rounded-3 p-4 bg-white">
                            <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                                Medical History
                            </span>

                            <div className="row">
                                <div className="col-sm-6 col-md-4">
                                    <ReadOnlyField label="Heart Problems:" value={file.medicalHistory.heartProblems ? "Yes" : "No"} />
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <ReadOnlyField label="Diabetes:" value={file.medicalHistory.diabetes ? "Yes" : "No"} />
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <ReadOnlyField label="Liver Problems:" value={file.medicalHistory.liverProblems ? "Yes" : "No"} />
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <ReadOnlyField label="Kidney Problems:" value={file.medicalHistory.kidneyProblems ? "Yes" : "No"} />
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <ReadOnlyField label="Lung Problems:" value={file.medicalHistory.lungProblems ? "Yes" : "No"} />
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <ReadOnlyField label="Thyroid Problems:" value={file.medicalHistory.thyroidProblems ? "Yes" : "No"} />
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <ReadOnlyField label="Pregnant:" value={file.medicalHistory.pregnancy ? "Yes" : "No"} />
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <ReadOnlyField label="Medications:" value={file.medicalHistory.medications ? "Yes" : "No"} />
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <ReadOnlyField label="Surgeries:" value={file.medicalHistory.surgeries ? "Yes" : "No"} />
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <ReadOnlyField label="Fainted in Dental Office:" value={file.medicalHistory.fainted ? "Yes" : "No"} />
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <ReadOnlyField label="Prolonged Bleeding:" value={file.medicalHistory.prolongedBleeding ? "Yes" : "No"} />
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <ReadOnlyField label="Allergies:" value={file.medicalHistory.allergies ? "Yes" : "No"} />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyField
                                        label="Other Medical Condition:"
                                        value={file.medicalHistory.other.found ? file.medicalHistory.other.details : "No"}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyField
                                        label="Family & Social History:"
                                        value={`${file.medicalHistory.familyAndSocialHistory.disease || "-"} (${file.medicalHistory.familyAndSocialHistory.person || "-"})`}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ========= Dental History ========= */}
                    <div className="col-12 col-md-6">
                        <div className="position-relative border border-primary rounded-3 p-4 bg-white">
                            <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                                Dental History
                            </span>
                            <div className="row">
                                <div className="col-sm-6 col-md-4">
                                    <ReadOnlyField label="Sensitivity:" value={file.dentalHistory.senstivity ? "Yes" : "No"} />
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <ReadOnlyField label="Chewing Difficulty:" value={file.dentalHistory.chewingDifficulty ? "Yes" : "No"} />
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <ReadOnlyField label="Bleeding Gums:" value={file.dentalHistory.bleedingGums ? "Yes" : "No"} />
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <ReadOnlyField label="Mouth Ulcers:" value={file.dentalHistory.mouthUlcers ? "Yes" : "No"} />
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <ReadOnlyField label="Food Catch:" value={file.dentalHistory.foodCatch ? "Yes" : "No"} />
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <ReadOnlyField label="Headaches:" value={file.dentalHistory.headaches ? "Yes" : "No"} />
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <ReadOnlyField label="Jaw Pain:" value={file.dentalHistory.jawPain ? "Yes" : "No"} />
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <ReadOnlyField label="Teeth Grinding:" value={file.dentalHistory.teethGrinding ? "Yes" : "No"} />
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <ReadOnlyField label="Teeth Breaking:" value={file.dentalHistory.teethBreaking ? "Yes" : "No"} />
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <ReadOnlyField label="Mobile Teeth:" value={file.dentalHistory.mobileTeeth ? "Yes" : "No"} />
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <ReadOnlyField label="Bad Breath:" value={file.dentalHistory.badBreath ? "Yes" : "No"} />
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <ReadOnlyField label="Dry Mouth:" value={file.dentalHistory.dryMouth ? "Yes" : "No"} />
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <ReadOnlyField label="Last Dental Appointment:" value={file.dentalHistory.lastDentalAppointment} />
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <ReadOnlyField label="Procedure Done:" value={file.dentalHistory.lastDentalAppointmentOperation} />
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <ReadOnlyField label="Last Dental X-ray:" value={file.dentalHistory.lastDentalXray} />
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <ReadOnlyField
                                        label="Smoking:"
                                        value={file.dentalHistory.smoking.isSmoking ? "Yes" : "No"}
                                    />
                                </div>

                                {file.dentalHistory.smoking.isSmoking && (
                                    <div className="col-sm-6 col-md-8">
                                        <ReadOnlyField label="Since When(Per Day):" value={`${file.dentalHistory.smoking.sinceWhen} (${file.dentalHistory.smoking.howManyPerDay})`} />
                                    </div>
                                )}
                                <div className="col-sm-6 col-md-12">
                                    <ReadOnlyField label="Comments:" value={file.dentalHistory.comments} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ========= Images ========= */}
                    <div className="col-12 col-sm-6">
                        <img src={file.prePatientImage} alt="Pre dental image" className="img-fluid" />
                    </div>

                    {file.postPatientImage ?
                        <div className="col-12 col-sm-6">
                            <img src={file.postPatientImage} alt="Post dental image" className="img-fluid" />
                        </div> : <></>
                    }
                </div>
            </div>
    );
}