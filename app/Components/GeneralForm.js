"use client";

import { useContext } from "react";
import { StatesContext } from "../Contexts/StatesContext";
import { PatientInfoContext } from "../Contexts/PatientInfoContext";
import ImageUploadBox from "./ImageUploadBox";

export default function GeneralForm() {
    const { generalData, setGeneralData } = useContext(PatientInfoContext);
    const { state, setState } = useContext(StatesContext);

    function handleSubmit(e) {
        e.preventDefault();
        setState(state + 1)
    }

    return (
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
                                    <input type="text" id="name" className="form-control" value={generalData.patientName} onChange={(e) => { setGeneralData({ ...generalData, patientName: e.target.value }) }} required />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Gender:</label>
                                    <div className="d-flex gap-2 pt-2">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" id="genderMale" value={"Male"} checked={generalData.gender === "Male"} onChange={(e) => { setGeneralData({ ...generalData, gender: e.target.value }) }} />
                                            <label htmlFor="genderMale" className="form-check-label">Male</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" id="genderFemale" value={"Female"} checked={generalData.gender === "Female"} onChange={(e) => { setGeneralData({ ...generalData, gender: e.target.value }) }} />
                                            <label htmlFor="genderFemale" className="form-check-label">Female</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Marital Status:</label>
                                    <select className="form-select" value={generalData.maritalStatus} onChange={(e) => { setGeneralData({ ...generalData, maritalStatus: e.target.value }) }}>
                                        <option value="Single">Single</option>
                                        <option value="Married">Married</option>
                                        <option value="Divorced">Divorced</option>
                                        <option value="Widowed">Widowed</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Birth Date:</label>
                                    <input type="date" className="form-control" value={generalData.birthDate} onChange={(e) => { setGeneralData({ ...generalData, birthDate: e.target.value }) }} required />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Address:</label>
                                    <input type="text" className="form-control" value={generalData.address} onChange={(e) => { setGeneralData({ ...generalData, address: e.target.value }) }} required />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Phone Number:</label>
                                    <input type="tel" className="form-control" value={generalData.phone} onChange={(e) => { setGeneralData({ ...generalData, phone: e.target.value }) }} required />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Occupation:</label>
                                    <input type="text" className="form-control" value={generalData.occupation} onChange={(e) => { setGeneralData({ ...generalData, occupation: e.target.value }) }} required />
                                </div>
                                <div className="col-6 col-md-6">
                                    <label className="form-label">Physican&apos;s Name:</label>
                                    <input type="text" className="form-control" value={generalData.physicianName} onChange={(e) => { setGeneralData({ ...generalData, physicianName: e.target.value }) }} />
                                </div>
                                <div className="col-6 col-md-6">
                                    <label className="form-label">Physican&apos;s Phone No:</label>
                                    <input type="tel" className="form-control" value={generalData.physicianPhone} onChange={(e) => { setGeneralData({ ...generalData, physicianPhone: e.target.value }) }} />
                                </div>
                                <div className="col-6 col-md-4">
                                    <label className="form-label">Date of Last Visit:</label>
                                    <input type="date" className="form-control" value={generalData.lastVisit} onChange={(e) => { setGeneralData({ ...generalData, lastVisit: e.target.value }) }} />
                                </div>
                                <div className="col-6 col-md-8">
                                    <label className="form-label">Reason of Last Visit to Physican:</label>
                                    <input type="text" className="form-control" value={generalData.reasonForVisit} onChange={(e) => { setGeneralData({ ...generalData, reasonForVisit: e.target.value }) }} />
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
                                    <input type="text" className="form-control" value={generalData.chiefComplaint} onChange={(e) => { setGeneralData({ ...generalData, chiefComplaint: e.target.value }) }} />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Onset:</label>
                                    <input type="month" className="form-control" value={generalData.onset} onChange={(e) => { setGeneralData({ ...generalData, onset: e.target.value }) }} />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Course:</label>
                                    <input type="text" className="form-control" value={generalData.course} onChange={(e) => { setGeneralData({ ...generalData, course: e.target.value }) }} />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Severity:</label>
                                    <input type="text" className="form-control" value={generalData.severity} onChange={(e) => { setGeneralData({ ...generalData, severity: e.target.value }) }} />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Distibution:</label>
                                    <input type="text" className="form-control" value={generalData.distribution} onChange={(e) => { setGeneralData({ ...generalData, distribution: e.target.value }) }} />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label">Precipitating factors:</label>
                                    <input type="text" className="form-control" value={generalData.precipitatingFactors} onChange={(e) => { setGeneralData({ ...generalData, precipitatingFactors: e.target.value }) }} />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label">Relieving factors:</label>
                                    <input type="text" className="form-control" value={generalData.relievingFactors} onChange={(e) => { setGeneralData({ ...generalData, relievingFactors: e.target.value }) }} />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label">Location and radiation:</label>
                                    <input type="text" className="form-control" value={generalData.locationAndRadiation} onChange={(e) => { setGeneralData({ ...generalData, locationAndRadiation: e.target.value }) }} />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label">Associated sympotoms:</label>
                                    <input type="text" className="form-control" value={generalData.associatedSymptoms} onChange={(e) => { setGeneralData({ ...generalData, associatedSymptoms: e.target.value }) }} />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Any previous self-treatment or prescribed treatment:</label>
                                    <input type="text" className="form-control" value={generalData.previousTreatment} onChange={(e) => { setGeneralData({ ...generalData, previousTreatment: e.target.value }) }} />
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
                                    checked={generalData.medicalHistory.heartProblems}
                                    onChange={(e) =>
                                        setGeneralData({
                                            ...generalData,
                                            medicalHistory: { ...generalData.medicalHistory, heartProblems: e.target.checked }
                                        })
                                    }
                                />
                                <label htmlFor="mh-heartProblems" className="form-check-label">
                                    Have you had heart problems? Or hypertensions?
                                </label>
                            </div>

                            <div className="d-flex">
                                <input id="mh-liverProblems" className="form-check-input me-2" type="checkbox"
                                    checked={generalData.medicalHistory.liverProblems}
                                    onChange={(e) =>
                                        setGeneralData({
                                            ...generalData,
                                            medicalHistory: { ...generalData.medicalHistory, liverProblems: e.target.checked }
                                        })
                                    }
                                />
                                <label htmlFor="mh-liverProblems" className="form-check-label">Have you had any liver problems?</label>
                            </div>

                            <div className="d-flex">
                                <input id="mh-kidneyProblems" className="form-check-input me-2" type="checkbox"
                                    checked={generalData.medicalHistory.kidneyProblems}
                                    onChange={(e) =>
                                        setGeneralData({
                                            ...generalData,
                                            medicalHistory: { ...generalData.medicalHistory, kidneyProblems: e.target.checked }
                                        })
                                    }
                                />
                                <label htmlFor="mh-kidneyProblems" className="form-check-label">Have you had any kidney problems?</label>
                            </div>

                            <div className="d-flex">
                                <input id="mh-lungProblems" className="form-check-input me-2" type="checkbox"
                                    checked={generalData.medicalHistory.lungProblems}
                                    onChange={(e) =>
                                        setGeneralData({
                                            ...generalData,
                                            medicalHistory: { ...generalData.medicalHistory, lungProblems: e.target.checked }
                                        })
                                    }
                                />
                                <label htmlFor="mh-lungProblems" className="form-check-label">Have you had any lungs problems?</label>
                            </div>

                            <div className="d-flex">
                                <input id="mh-thyroidProblems" className="form-check-input me-2" type="checkbox"
                                    checked={generalData.medicalHistory.thyroidProblems}
                                    onChange={(e) =>
                                        setGeneralData({
                                            ...generalData,
                                            medicalHistory: { ...generalData.medicalHistory, thyroidProblems: e.target.checked }
                                        })
                                    }
                                />
                                <label htmlFor="mh-thyroidProblems" className="form-check-label">Have you had any thyroid problems?</label>
                            </div>

                            <div className="d-flex">
                                <input id="mh-pregnancy" className="form-check-input me-2" type="checkbox"
                                    checked={generalData.medicalHistory.pregnancy}
                                    onChange={(e) =>
                                        setGeneralData({
                                            ...generalData,
                                            medicalHistory: { ...generalData.medicalHistory, pregnancy: e.target.checked }
                                        })
                                    }
                                />
                                <label htmlFor="mh-pregnancy" className="form-check-label">If female, are you pregnant?</label>
                            </div>

                            <div className="d-flex">
                                <input id="mh-medications" className="form-check-input me-2" type="checkbox"
                                    checked={generalData.medicalHistory.medications}
                                    onChange={(e) =>
                                        setGeneralData({
                                            ...generalData,
                                            medicalHistory: { ...generalData.medicalHistory, medications: e.target.checked }
                                        })
                                    }
                                />
                                <label htmlFor="mh-medications" className="form-check-label">
                                    Are you taking any medications? Which ones?
                                </label>
                            </div>

                            <div className="d-flex">
                                <input id="mh-surgeries" className="form-check-input me-2" type="checkbox"
                                    checked={generalData.medicalHistory.surgeries}
                                    onChange={(e) =>
                                        setGeneralData({
                                            ...generalData,
                                            medicalHistory: { ...generalData.medicalHistory, surgeries: e.target.checked }
                                        })
                                    }
                                />
                                <label htmlFor="mh-surgeries" className="form-check-label">
                                    Have you had any previous surgeries or hospitalization?
                                </label>
                            </div>

                            <div className="d-flex">
                                <input id="mh-fainted" className="form-check-input me-2" type="checkbox"
                                    checked={generalData.medicalHistory.fainted}
                                    onChange={(e) =>
                                        setGeneralData({
                                            ...generalData,
                                            medicalHistory: { ...generalData.medicalHistory, fainted: e.target.checked }
                                        })
                                    }
                                />
                                <label htmlFor="mh-fainted" className="form-check-label">
                                    Have you ever fainted in dental office?
                                </label>
                            </div>

                            <div className="d-flex">
                                <input id="mh-prolongedBleeding" className="form-check-input me-2" type="checkbox"
                                    checked={generalData.medicalHistory.prolongedBleeding}
                                    onChange={(e) =>
                                        setGeneralData({
                                            ...generalData,
                                            medicalHistory: { ...generalData.medicalHistory, prolongedBleeding: e.target.checked }
                                        })
                                    }
                                />
                                <label htmlFor="mh-prolongedBleeding" className="form-check-label">
                                    Have you had prolonged bleeding from acute tooth extraction or other injury?
                                </label>
                            </div>

                            <div className="d-flex">
                                <input id="mh-allergies" className="form-check-input me-2" type="checkbox"
                                    checked={generalData.medicalHistory.allergies}
                                    onChange={(e) =>
                                        setGeneralData({
                                            ...generalData,
                                            medicalHistory: { ...generalData.medicalHistory, allergies: e.target.checked }
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
                                        checked={generalData.medicalHistory.other.found}
                                        onChange={(e) =>
                                            setGeneralData({
                                                ...generalData,
                                                medicalHistory: {
                                                    ...generalData.medicalHistory,
                                                    other: { ...generalData.medicalHistory.other, found: e.target.checked }
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
                                    value={generalData.medicalHistory.other.found ? generalData.medicalHistory.other.details : ""}
                                    onChange={(e) =>
                                        setGeneralData({
                                            ...generalData,
                                            medicalHistory: {
                                                ...generalData.medicalHistory,
                                                other: { ...generalData.medicalHistory.other, details: e.target.value }
                                            }
                                        })
                                    }
                                    disabled={!generalData.medicalHistory.other.found}
                                    placeholder="If yes, please specify"
                                />
                            </div>

                            <div className="mt-2">
                                <div className="d-flex">
                                    <input id="mh-diabetes" className="form-check-input me-2" type="checkbox"
                                        checked={generalData.medicalHistory.diabetes}
                                        onChange={(e) =>
                                            setGeneralData({
                                                ...generalData,
                                                medicalHistory: { ...generalData.medicalHistory, diabetes: e.target.checked }
                                            })
                                        }
                                    />
                                    <label htmlFor="mh-diabetes" className="form-check-label">Are you diabetic?</label>
                                </div>
                                <div>
                                    <input type="number"
                                        className="form-control mt-2"
                                        placeholder="HbA1c" disabled={!generalData.medicalHistory.diabetes}
                                        value={generalData.medicalHistory.diabetes ? generalData.medicalHistory.hba1c : ""}
                                        onChange={(e) => {
                                            if (e.target.value >= 0) {
                                                setGeneralData({ ...generalData, medicalHistory: { ...generalData.medicalHistory, hba1c: e.target.value } })
                                            }
                                        }} />
                                </div>
                            </div>


                            <div className="mt-3">
                                <label className="form-check-label fw-bold">Family & Social History</label>
                                <div className="d-flex gap-2">
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        value={generalData.medicalHistory.familyAndSocialHistory.disease}
                                        onChange={(e) =>
                                            setGeneralData({
                                                ...generalData,
                                                medicalHistory: {
                                                    ...generalData.medicalHistory,
                                                    familyAndSocialHistory: {
                                                        ...generalData.medicalHistory.familyAndSocialHistory,
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
                                        value={generalData.medicalHistory.familyAndSocialHistory.person}
                                        onChange={(e) =>
                                            setGeneralData({
                                                ...generalData,
                                                medicalHistory: {
                                                    ...generalData.medicalHistory,
                                                    familyAndSocialHistory: {
                                                        ...generalData.medicalHistory.familyAndSocialHistory,
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
                                <input id="senstivity" className="form-check-input me-2" type="checkbox" checked={generalData.dentalHistory.senstivity} onChange={(e) => { setGeneralData({ ...generalData, dentalHistory: { ...generalData.dentalHistory, senstivity: e.target.checked } }) }} />
                                <label htmlFor="senstivity" className="form-check-label">Senstivity (hot/cold/sweet)</label>
                            </div>

                            <div className="col-sm-6 d-flex">
                                <input id="chewingDifficulty" className="form-check-input me-2" type="checkbox" checked={generalData.dentalHistory.chewingDifficulty} onChange={(e) => { setGeneralData({ ...generalData, dentalHistory: { ...generalData.dentalHistory, chewingDifficulty: e.target.checked } }) }} />
                                <label htmlFor="chewingDifficulty" className="form-check-label">Tooth pain or discomfort with cheewing</label>
                            </div>

                            <div className="col-sm-6 d-flex">
                                <input id="bleedingGums" className="form-check-input me-2" type="checkbox" checked={generalData.dentalHistory.bleedingGums} onChange={(e) => { setGeneralData({ ...generalData, dentalHistory: { ...generalData.dentalHistory, bleedingGums: e.target.checked } }) }} />
                                <label htmlFor="bleedingGums" className="form-check-label">Bleeding, swollen or irritated gums</label>
                            </div>

                            <div className="col-sm-6 d-flex">
                                <input id="mouthUlcers" className="form-check-input me-2" type="checkbox" checked={generalData.dentalHistory.mouthUlcers} onChange={(e) => { setGeneralData({ ...generalData, dentalHistory: { ...generalData.dentalHistory, mouthUlcers: e.target.checked } }) }} />
                                <label htmlFor="mouthUlcers" className="form-check-label">Ulcers or sores</label>
                            </div>

                            <div className="col-sm-6 d-flex">
                                <input id="foodCatch" className="form-check-input me-2" type="checkbox" checked={generalData.dentalHistory.foodCatch} onChange={(e) => { setGeneralData({ ...generalData, dentalHistory: { ...generalData.dentalHistory, foodCatch: e.target.checked } }) }} />
                                <label htmlFor="foodCatch" className="form-check-label">Food catch between your teeth</label>
                            </div>

                            <div className="col-sm-6 d-flex">
                                <input id="headaches" className="form-check-input me-2" type="checkbox" checked={generalData.dentalHistory.headaches} onChange={(e) => { setGeneralData({ ...generalData, dentalHistory: { ...generalData.dentalHistory, headaches: e.target.checked } }) }} />
                                <label htmlFor="headaches" className="form-check-label">Headaches, earaches or neck pains</label>
                            </div>

                            <div className="col-sm-6 d-flex">
                                <input id="jawPain" className="form-check-input me-2" type="checkbox" checked={generalData.dentalHistory.jawPain} onChange={(e) => { setGeneralData({ ...generalData, dentalHistory: { ...generalData.dentalHistory, jawPain: e.target.checked } }) }} />
                                <label htmlFor="jawPain" className="form-check-label">Jaw joint pain, noise</label>
                            </div>

                            <div className="col-sm-6 d-flex">
                                <input id="teethGrinding" className="form-check-input me-2" type="checkbox" checked={generalData.dentalHistory.teethGrinding} onChange={(e) => { setGeneralData({ ...generalData, dentalHistory: { ...generalData.dentalHistory, teethGrinding: e.target.checked } }) }} />
                                <label htmlFor="teethGrinding" className="form-check-label">Grinding or clenching teeth</label>
                            </div>

                            <div className="col-sm-6 d-flex">
                                <input id="teethBreaking" className="form-check-input me-2" type="checkbox" checked={generalData.dentalHistory.teethBreaking} onChange={(e) => { setGeneralData({ ...generalData, dentalHistory: { ...generalData.dentalHistory, teethBreaking: e.target.checked } }) }} />
                                <label htmlFor="teethBreaking" className="form-check-label">Teeth or fillings breaking</label>
                            </div>

                            <div className="col-sm-6 d-flex">
                                <input id="mobileTeeth" className="form-check-input me-2" type="checkbox" checked={generalData.dentalHistory.mobileTeeth} onChange={(e) => { setGeneralData({ ...generalData, dentalHistory: { ...generalData.dentalHistory, mobileTeeth: e.target.checked } }) }} />
                                <label htmlFor="mobileTeeth" className="form-check-label">Mobile teeth</label>
                            </div>

                            <div className="col-sm-6 d-flex">
                                <input id="badBreath" className="form-check-input me-2" type="checkbox" checked={generalData.dentalHistory.badBreath} onChange={(e) => { setGeneralData({ ...generalData, dentalHistory: { ...generalData.dentalHistory, badBreath: e.target.checked } }) }} />
                                <label htmlFor="badBreath" className="form-check-label">Bad breath or bad taste in mouth</label>
                            </div>

                            <div className="col-sm-6 d-flex mb-3">
                                <input id="dryMouth" className="form-check-input me-2" type="checkbox" checked={generalData.dentalHistory.dryMouth} onChange={(e) => { setGeneralData({ ...generalData, dentalHistory: { ...generalData.dentalHistory, dryMouth: e.target.checked } }) }} />
                                <label htmlFor="dryMouth" className="form-check-label">Dry mouth</label>
                            </div>

                            <hr />

                            <div className="d-flex flex-column gap-1">
                                <label className="form-label fw-semibold">Do you have or have you had any of the following:</label>

                                <div className="d-flex">
                                    <input id="extractedTeeth" className="form-check-input me-2" type="checkbox" checked={generalData.dentalHistory.oralHistory.extractedTeeth} onChange={(e) => { setGeneralData({ ...generalData, dentalHistory: { ...generalData.dentalHistory, oralHistory: { ...generalData.dentalHistory.oralHistory, extractedTeeth: e.target.checked } } }) }} />
                                    <label htmlFor="extractedTeeth" className="form-check-label">Extracted teeth/why?</label>
                                </div>

                                <div className="d-flex">
                                    <input id="bridge" className="form-check-input me-2" type="checkbox" checked={generalData.dentalHistory.oralHistory.bridge} onChange={(e) => { setGeneralData({ ...generalData, dentalHistory: { ...generalData.dentalHistory, oralHistory: { ...generalData.dentalHistory.oralHistory, bridge: e.target.checked } } }) }} />
                                    <label htmlFor="bridge" className="form-check-label">Bridge/Filling</label>
                                </div>

                                <div className="d-flex">
                                    <input id="denture" className="form-check-input me-2" type="checkbox" checked={generalData.dentalHistory.oralHistory.denture} onChange={(e) => { setGeneralData({ ...generalData, dentalHistory: { ...generalData.dentalHistory, oralHistory: { ...generalData.dentalHistory.oralHistory, denture: e.target.checked } } }) }} />
                                    <label htmlFor="denture" className="form-check-label">Partial dentures/Full dentures</label>
                                </div>

                                <div className="d-flex">
                                    <input id="braces" className="form-check-input me-2" type="checkbox" checked={generalData.dentalHistory.oralHistory.braces} onChange={(e) => { setGeneralData({ ...generalData, dentalHistory: { ...generalData.dentalHistory, oralHistory: { ...generalData.dentalHistory.oralHistory, braces: e.target.checked } } }) }} />
                                    <label htmlFor="braces" className="form-check-label">Braces</label>
                                </div>

                                <div className="d-flex">
                                    <input id="problems" className="form-check-input me-2" type="checkbox" checked={generalData.dentalHistory.oralHistory.problems} onChange={(e) => { setGeneralData({ ...generalData, dentalHistory: { ...generalData.dentalHistory, oralHistory: { ...generalData.dentalHistory.oralHistory, problems: e.target.checked } } }) }} />
                                    <label htmlFor="problems" className="form-check-label">Problems associated with previous dental treatment</label>
                                </div>
                            </div>

                            <hr />

                            <div className="row">
                                <div className="col-12 col-sm-7">
                                    <label htmlFor="lastDentalAppointment" className="form-label fw-semibold">When was your last dental appointment ?</label>
                                    <input id="lastDentalAppointment" type="month" className="form-control" value={generalData.dentalHistory.lastDentalAppointment} onChange={(e) => { setGeneralData({ ...generalData, dentalHistory: { ...generalData.dentalHistory, lastDentalAppointment: e.target.value } }) }} />
                                </div>

                                <div className="col-12 col-sm-5">
                                    <label htmlFor="lastDentalAppointmentOperation" className="form-label fw-semibold">What was done at that time?</label>
                                    <input id="lastDentalAppointmentOperation" type="text" className="form-control" value={generalData.dentalHistory.lastDentalAppointmentOperation} onChange={(e) => { setGeneralData({ ...generalData, dentalHistory: { ...generalData.dentalHistory, lastDentalAppointmentOperation: e.target.value } }) }} placeholder="e.g. Extraction" />
                                </div>

                                <div className="mt-3">
                                    <label htmlFor="lastDentalXray" className="form-label fw-semibold">When did you last have dental x-ray taken (approx. date):</label>
                                    <input id="lastDentalXray" type="month" className="form-control" value={generalData.dentalHistory.lastDentalXray} onChange={(e) => { setGeneralData({ ...generalData, dentalHistory: { ...generalData.dentalHistory, lastDentalXray: e.target.value } }) }} />
                                </div>

                                <div className="mt-3">
                                    <div className="d-flex">
                                        <input id="isSmoking" className="form-check-input me-2" type="checkbox" checked={generalData.dentalHistory.smoking.isSmoking} onChange={(e) => { setGeneralData({ ...generalData, dentalHistory: { ...generalData.dentalHistory, smoking: { ...generalData.dentalHistory.smoking, isSmoking: e.target.checked } } }) }} />
                                        <label htmlFor="isSmoking" className="form-check-label fw-semibold">Do you smoke or chew tobacco?</label>
                                    </div>

                                    {generalData.dentalHistory.smoking.isSmoking ? (
                                        <div className="row d-flex mt-2">
                                            <div className="col-sm-6">
                                                <label htmlFor="sinceWhen" className="form-label">and since when?</label>
                                                <input id="sinceWhen" type="text" className="form-control" value={generalData.dentalHistory.smoking.sinceWhen} onChange={(e) => { setGeneralData({ ...generalData, dentalHistory: { ...generalData.dentalHistory, smoking: { ...generalData.dentalHistory.smoking, sinceWhen: e.target.value } } }) }} />
                                            </div>

                                            <div className="col-sm-6">
                                                <label htmlFor="howManyPerDay" className="form-label">How much/many per day?</label>
                                                <input id="howManyPerDay" type="number" className="form-control" value={generalData.dentalHistory.smoking.howManyPerDay} onChange={(e) => { setGeneralData({ ...generalData, dentalHistory: { ...generalData.dentalHistory, smoking: { ...generalData.dentalHistory.smoking, howManyPerDay: e.target.value } } }) }} />
                                            </div>
                                        </div>
                                    ) : ("")}
                                </div>

                                <div className="mt-3">
                                    <label htmlFor="comments" className="form-label">Comments:</label>
                                    <textarea id="comments" className="form-control" rows="3" value={generalData.dentalHistory.comments} onChange={(e) => { setGeneralData({ ...generalData, dentalHistory: { ...generalData.dentalHistory, comments: e.target.value } }) }}></textarea>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col">
                    <ImageUploadBox time={'pre'} type={''} />
                </div>
            </div>

            <div className="d-flex justify-content-end my-3">
                <button type="submit" className="btn btn-primary">Continue to Department Selection</button>
            </div>

        </form >
    );
}