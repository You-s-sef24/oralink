"use client";

import { useContext, useState } from "react";
import { PatientInfoContext } from "../Contexts/PatientInfoContext";
import ImageUploadBox from "./ImageUploadBox";
import ImageLightbox from "./General/ImageLightBox";

// ── Shared helper ─────────────────────────────────────────────────────────────
function getUrl(img) {
    if (!img) return null;
    if (img instanceof File) return URL.createObjectURL(img);
    if (typeof img === "string") return img;
    return null;
}

// ── Gallery shown in read-only mode ──────────────────────────────────────────
function ImageGallery({ value, label }) {
    const [lightbox, setLightbox] = useState(null); // index or null

    const images = Array.isArray(value)
        ? value.filter(Boolean)
        : value ? [value] : [];

    if (images.length === 0) return null;

    return (
        <>
            <p className="fw-semibold mb-2">{label}</p>
            <div className="row g-2">
                {images.map((img, idx) => (
                    <div key={idx} className="col-6 col-sm-4 col-md-3">
                        <div
                            className="position-relative"
                            style={{ cursor: "zoom-in" }}
                            onClick={() => setLightbox(idx)}
                        >
                            <img
                                src={getUrl(img)}
                                alt={`${label} ${idx + 1}`}
                                className="w-100 rounded border"
                                style={{ height: 140, objectFit: "cover", transition: "opacity 0.15s" }}
                                onMouseEnter={e => e.currentTarget.style.opacity = "0.82"}
                                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                            />
                            {/* Zoom icon overlay */}
                            <div style={{
                                position: "absolute", inset: 0, display: "flex", alignItems: "center",
                                justifyContent: "center", opacity: 0, transition: "opacity 0.15s",
                                background: "rgba(0,0,0,0.25)", borderRadius: 6,
                            }}
                                onMouseEnter={e => e.currentTarget.style.opacity = "1"}
                                onMouseLeave={e => e.currentTarget.style.opacity = "0"}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                                    <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                                </svg>
                            </div>

                            {images.length > 1 && (
                                <span className="position-absolute bottom-0 start-0 m-1 badge bg-dark bg-opacity-75" style={{ fontSize: 10 }}>
                                    {idx + 1}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {lightbox !== null && (
                <ImageLightbox
                    images={images}
                    startIndex={lightbox}
                    onClose={() => setLightbox(null)}
                />
            )}
        </>
    );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function ViewGeneralForm() {
    const { isEditing, file, setFile, formErrors: errors } = useContext(PatientInfoContext);



    const ReadOnlyField = ({ label, value }) => (
        <div className="mb-2">
            <label className="form-label fw-semibold">{label}</label>
            <p className="form-control-plaintext border rounded px-2 py-1 bg-light">
                {value || "-"}
            </p>
        </div>
    );

    return (
        isEditing ? (
            <form className="p-4">
                <div className="row align-items-start d-flex g-3">
                    <div className="col-12 col-md-6">
                        <div className="position-relative border border-primary rounded-3 p-4 bg-white">
                            <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                                General Patient Information
                            </span>
                            <div className="row g-2 mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="name" className="form-label">Name:</label>
                                    <input type="text" id="name"
                                        className={`form-control ${errors.patientName ? "is-invalid" : ""}`}
                                        value={file.patientName}
                                        onChange={(e) => setFile({ ...file, patientName: e.target.value })}
                                    />
                                    {errors.patientName && <div className="invalid-feedback">{errors.patientName}</div>}
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Gender:</label>
                                    <div className="d-flex gap-2 pt-2">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" id="genderMale" value="Male" checked={file.gender === "Male"} onChange={(e) => setFile({ ...file, gender: e.target.value })} />
                                            <label htmlFor="genderMale" className="form-check-label">Male</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" id="genderFemale" value="Female" checked={file.gender === "Female"} onChange={(e) => setFile({ ...file, gender: e.target.value })} />
                                            <label htmlFor="genderFemale" className="form-check-label">Female</label>
                                        </div>
                                    </div>
                                    {errors.gender && <div className="text-danger small mt-1">{errors.gender}</div>}
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Marital Status:</label>
                                    <select className="form-select" value={file.maritalStatus} onChange={(e) => setFile({ ...file, maritalStatus: e.target.value })}>
                                        <option value="Single">Single</option>
                                        <option value="Married">Married</option>
                                        <option value="Divorced">Divorced</option>
                                        <option value="Widowed">Widowed</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Birth Date:</label>
                                    <input type="date" className={`form-control ${errors.birthDate ? "is-invalid" : ""}`} value={file.birthDate} onChange={(e) => setFile({ ...file, birthDate: e.target.value })} />
                                    {errors.birthDate && <div className="invalid-feedback">{errors.birthDate}</div>}
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Address:</label>
                                    <input type="text" className={`form-control ${errors.address ? "is-invalid" : ""}`} value={file.address} onChange={(e) => setFile({ ...file, address: e.target.value })} />
                                    {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Phone Number:</label>
                                    <input type="tel" className={`form-control ${errors.phone ? "is-invalid" : ""}`} value={file.phone} onChange={(e) => setFile({ ...file, phone: e.target.value })} />
                                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Occupation:</label>
                                    <input type="text" className={`form-control ${errors.occupation ? "is-invalid" : ""}`} value={file.occupation} onChange={(e) => setFile({ ...file, occupation: e.target.value })} />
                                    {errors.occupation && <div className="invalid-feedback">{errors.occupation}</div>}
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Physician&apos;s Name:</label>
                                    <input type="text" className="form-control" value={file.physicianName} onChange={(e) => setFile({ ...file, physicianName: e.target.value })} />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Physician&apos;s Phone No:</label>
                                    <input type="tel" className={`form-control ${errors.physicianPhone ? "is-invalid" : ""}`} value={file.physicianPhone} onChange={(e) => setFile({ ...file, physicianPhone: e.target.value })} />
                                    {errors.physicianPhone && <div className="invalid-feedback">{errors.physicianPhone}</div>}
                                </div>
                                <div className="col-6 col-md-4">
                                    <label className="form-label">Date of Last Visit:</label>
                                    <input type="date" className="form-control" value={file.lastVisit || ""} onChange={(e) => setFile({ ...file, lastVisit: e.target.value })} />
                                </div>
                                <div className="col-6 col-md-8">
                                    <label className="form-label">Reason of Last Visit:</label>
                                    <input type="text" className="form-control" value={file.reasonForVisit} onChange={(e) => setFile({ ...file, reasonForVisit: e.target.value })} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="position-relative border border-primary rounded-3 p-4 bg-white">
                            <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                                History of Chief Complaint
                            </span>
                            <div className="row g-2 mb-3">
                                <div className="col-12">
                                    <label className="form-label">Chief Complaint:</label>
                                    <input type="text" className="form-control" value={file.chiefComplaint} onChange={(e) => setFile({ ...file, chiefComplaint: e.target.value })} />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Onset:</label>
                                    <input type="month" className="form-control" value={file.onset} onChange={(e) => setFile({ ...file, onset: e.target.value })} />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Course:</label>
                                    <input type="text" className="form-control" value={file.course} onChange={(e) => setFile({ ...file, course: e.target.value })} />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Severity:</label>
                                    <input type="text" className="form-control" value={file.severity} onChange={(e) => setFile({ ...file, severity: e.target.value })} />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Distribution:</label>
                                    <input type="text" className="form-control" value={file.distribution} onChange={(e) => setFile({ ...file, distribution: e.target.value })} />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label">Precipitating factors:</label>
                                    <input type="text" className="form-control" value={file.precipitatingFactors} onChange={(e) => setFile({ ...file, precipitatingFactors: e.target.value })} />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label">Relieving factors:</label>
                                    <input type="text" className="form-control" value={file.relievingFactors} onChange={(e) => setFile({ ...file, relievingFactors: e.target.value })} />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label">Location and radiation:</label>
                                    <input type="text" className="form-control" value={file.locationAndRadiation} onChange={(e) => setFile({ ...file, locationAndRadiation: e.target.value })} />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label">Associated symptoms:</label>
                                    <input type="text" className="form-control" value={file.associatedSymptoms} onChange={(e) => setFile({ ...file, associatedSymptoms: e.target.value })} />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Any previous self-treatment or prescribed treatment:</label>
                                    <input type="text" className="form-control" value={file.previousTreatment} onChange={(e) => setFile({ ...file, previousTreatment: e.target.value })} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="position-relative border border-primary rounded-3 p-4 bg-white">
                            <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                                Medical History
                            </span>
                            <div className="d-flex flex-column gap-1">
                                {[
                                    { id: "mh-heartProblems", field: "heartProblems", label: "Have you had heart problems? Or hypertensions?" },
                                    { id: "mh-diabetes", field: "diabetes", label: "Are you diabetic?" },
                                    { id: "mh-liverProblems", field: "liverProblems", label: "Have you had any liver problems?" },
                                    { id: "mh-kidneyProblems", field: "kidneyProblems", label: "Have you had any kidney problems?" },
                                    { id: "mh-lungProblems", field: "lungProblems", label: "Have you had any lungs problems?" },
                                    { id: "mh-thyroidProblems", field: "thyroidProblems", label: "Have you had any thyroid problems?" },
                                    { id: "mh-pregnancy", field: "pregnancy", label: "If female, are you pregnant?" },
                                    { id: "mh-medications", field: "medications", label: "Are you taking any medications? Which ones?" },
                                    { id: "mh-surgeries", field: "surgeries", label: "Have you had any previous surgeries or hospitalization?" },
                                    { id: "mh-fainted", field: "fainted", label: "Have you ever fainted in dental office?" },
                                    { id: "mh-prolongedBleeding", field: "prolongedBleeding", label: "Have you had prolonged bleeding from acute tooth extraction?" },
                                    { id: "mh-allergies", field: "allergies", label: "Are you allergic to anesthetics, antibiotics, other drugs?" },
                                ].map(({ id, field, label }) => (
                                    <div key={id} className="d-flex">
                                        <input id={id} className="form-check-input me-2" type="checkbox"
                                            checked={file.medicalHistory[field]}
                                            onChange={(e) => setFile({ ...file, medicalHistory: { ...file.medicalHistory, [field]: e.target.checked } })}
                                        />
                                        <label htmlFor={id} className="form-check-label">{label}</label>
                                    </div>
                                ))}

                                <div>
                                    <div className="d-flex">
                                        <input id="mh-other" className="form-check-input me-2" type="checkbox"
                                            checked={file.medicalHistory.other.found}
                                            onChange={(e) => setFile({ ...file, medicalHistory: { ...file.medicalHistory, other: { ...file.medicalHistory.other, found: e.target.checked } } })}
                                        />
                                        <label htmlFor="mh-other" className="form-check-label">Do you have any disease or condition not listed above?</label>
                                    </div>
                                    <input type="text" className="form-control mt-2"
                                        value={file.medicalHistory.other.details}
                                        onChange={(e) => setFile({ ...file, medicalHistory: { ...file.medicalHistory, other: { ...file.medicalHistory.other, details: e.target.value } } })}
                                        disabled={!file.medicalHistory.other.found}
                                        placeholder="If yes, please specify"
                                    />
                                </div>

                                <div className="mt-3">
                                    <label className="form-check-label fw-bold">Family &amp; Social History</label>
                                    <div className="d-flex gap-2">
                                        <input type="text" className="form-control mt-2" value={file.medicalHistory.familyAndSocialHistory.diseases}
                                            onChange={(e) => setFile({ ...file, medicalHistory: { ...file.medicalHistory, familyAndSocialHistory: { ...file.medicalHistory.familyAndSocialHistory, diseases: e.target.value } } })}
                                            placeholder="Diabetes"
                                        />
                                        <input type="text" className="form-control mt-2" value={file.medicalHistory.familyAndSocialHistory.person}
                                            onChange={(e) => setFile({ ...file, medicalHistory: { ...file.medicalHistory, familyAndSocialHistory: { ...file.medicalHistory.familyAndSocialHistory, person: e.target.value } } })}
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
                                {[
                                    { id: "senstivity", field: "senstivity", label: "Sensitivity (hot/cold/sweet)" },
                                    { id: "chewingDifficulty", field: "chewingDifficulty", label: "Tooth pain or discomfort with chewing" },
                                    { id: "bleedingGums", field: "bleedingGums", label: "Bleeding, swollen or irritated gums" },
                                    { id: "mouthUlcers", field: "mouthUlcers", label: "Ulcers or sores" },
                                    { id: "foodCatch", field: "foodCatch", label: "Food catch between your teeth" },
                                    { id: "headaches", field: "headaches", label: "Headaches, earaches or neck pains" },
                                    { id: "jawPain", field: "jawPain", label: "Jaw joint pain, noise" },
                                    { id: "teethGrinding", field: "teethGrinding", label: "Grinding or clenching teeth" },
                                    { id: "teethBreaking", field: "teethBreaking", label: "Teeth or fillings breaking" },
                                    { id: "mobileTeeth", field: "mobileTeeth", label: "Mobile teeth" },
                                    { id: "badBreath", field: "badBreath", label: "Bad breath or bad taste in mouth" },
                                    { id: "dryMouth", field: "dryMouth", label: "Dry mouth" },
                                ].map(({ id, field, label }) => (
                                    <div key={id} className="col-sm-6 d-flex">
                                        <input id={id} className="form-check-input me-2" type="checkbox"
                                            checked={file.dentalHistory[field]}
                                            onChange={(e) => setFile({ ...file, dentalHistory: { ...file.dentalHistory, [field]: e.target.checked } })}
                                        />
                                        <label htmlFor={id} className="form-check-label">{label}</label>
                                    </div>
                                ))}

                                <hr />

                                <div className="d-flex flex-column gap-1">
                                    <label className="form-label fw-semibold">Do you have or have you had any of the following:</label>
                                    {[
                                        { id: "extractedTeeth", field: "extractedTeeth", label: "Extracted teeth/why?" },
                                        { id: "bridge", field: "bridge", label: "Bridge/Filling" },
                                        { id: "denture", field: "denture", label: "Partial dentures/Full dentures" },
                                        { id: "braces", field: "braces", label: "Braces" },
                                        { id: "problems", field: "problems", label: "Problems associated with previous dental treatment" },
                                    ].map(({ id, field, label }) => (
                                        <div key={id} className="d-flex">
                                            <input id={id} className="form-check-input me-2" type="checkbox"
                                                checked={file.dentalHistory.oralHistory[field]}
                                                onChange={(e) => setFile({ ...file, dentalHistory: { ...file.dentalHistory, oralHistory: { ...file.dentalHistory.oralHistory, [field]: e.target.checked } } })}
                                            />
                                            <label htmlFor={id} className="form-check-label">{label}</label>
                                        </div>
                                    ))}
                                </div>

                                <hr />

                                <div className="row">
                                    <div className="col-12 col-sm-7">
                                        <label className="form-label fw-semibold">When was your last dental appointment?</label>
                                        <input type="month" className="form-control" value={file.dentalHistory.lastDentalAppointment} onChange={(e) => setFile({ ...file, dentalHistory: { ...file.dentalHistory, lastDentalAppointment: e.target.value } })} />
                                    </div>
                                    <div className="col-12 col-sm-5">
                                        <label className="form-label fw-semibold">What was done at that time?</label>
                                        <input type="text" className="form-control" value={file.dentalHistory.lastDentalAppointmentOperation} onChange={(e) => setFile({ ...file, dentalHistory: { ...file.dentalHistory, lastDentalAppointmentOperation: e.target.value } })} placeholder="e.g. Extraction" />
                                    </div>
                                    <div className="mt-3">
                                        <label className="form-label fw-semibold">When did you last have dental x-ray taken?</label>
                                        <input type="month" className="form-control" value={file.dentalHistory.lastDentalXray} onChange={(e) => setFile({ ...file, dentalHistory: { ...file.dentalHistory, lastDentalXray: e.target.value } })} />
                                    </div>
                                    <div className="mt-3">
                                        <div className="d-flex">
                                            <input id="isSmoking" className="form-check-input me-2" type="checkbox"
                                                checked={file.dentalHistory.smoking.isSmoking}
                                                onChange={(e) => setFile({ ...file, dentalHistory: { ...file.dentalHistory, smoking: { ...file.dentalHistory.smoking, isSmoking: e.target.checked } } })}
                                            />
                                            <label htmlFor="isSmoking" className="form-check-label fw-semibold">Do you smoke or chew tobacco?</label>
                                        </div>
                                        {file.dentalHistory.smoking.isSmoking && (
                                            <div className="row mt-2">
                                                <div className="col-sm-6">
                                                    <label className="form-label">Since when?</label>
                                                    <input type="text" className="form-control" value={file.dentalHistory.smoking.sinceWhen} onChange={(e) => setFile({ ...file, dentalHistory: { ...file.dentalHistory, smoking: { ...file.dentalHistory.smoking, sinceWhen: e.target.value } } })} />
                                                </div>
                                                <div className="col-sm-6">
                                                    <label className="form-label">How much/many per day?</label>
                                                    <input type="text" className="form-control" value={file.dentalHistory.smoking.howManyPerDay} onChange={(e) => setFile({ ...file, dentalHistory: { ...file.dentalHistory, smoking: { ...file.dentalHistory.smoking, howManyPerDay: e.target.value } } })} />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="mt-3">
                                        <label className="form-label">Comments:</label>
                                        <textarea className="form-control" rows="3" value={file.dentalHistory.comments} onChange={(e) => setFile({ ...file, dentalHistory: { ...file.dentalHistory, comments: e.target.value } })} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Images (edit mode) */}
                    <div className="col-12 col-sm-6">
                        <ImageUploadBox time="pre" type="" fileData={file} setFileData={setFile} readOnly={true} />
                    </div>
                    <div className="col-12 col-sm-6">
                        <ImageUploadBox time="post" type="" fileData={file} setFileData={setFile} />
                    </div>
                </div>
            </form>
        ) : (
            // ── READ-ONLY VIEW ────────────────────────────────────────────────
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
                                <div className="col-6"><ReadOnlyField label="Marital Status:" value={file.maritalStatus} /></div>
                                <div className="col-6"><ReadOnlyField label="Birth Date:" value={file.birthDate} /></div>
                                <ReadOnlyField label="Address:" value={file.address} />
                                <div className="col-6"><ReadOnlyField label="Phone Number:" value={file.phone} /></div>
                                <div className="col-6"><ReadOnlyField label="Occupation:" value={file.occupation} /></div>
                                <div className="col-6"><ReadOnlyField label="Physician Name:" value={file.physicianName} /></div>
                                <div className="col-6"><ReadOnlyField label="Physician Phone:" value={file.physicianPhone} /></div>
                                <div className="col-6"><ReadOnlyField label="Last Visit Date:" value={file.lastVisit} /></div>
                                <div className="col-6"><ReadOnlyField label="Reason of Last Visit:" value={file.reasonForVisit} /></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="position-relative border border-primary rounded-3 p-4 bg-white">
                            <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                                History of Chief Complaint
                            </span>
                            <div className="row">
                                <ReadOnlyField label="Chief Complaint:" value={file.chiefComplaint} />
                                <div className="col-6"><ReadOnlyField label="Onset:" value={file.onset} /></div>
                                <div className="col-6"><ReadOnlyField label="Course:" value={file.course} /></div>
                                <div className="col-6"><ReadOnlyField label="Severity:" value={file.severity} /></div>
                                <div className="col-6"><ReadOnlyField label="Distribution:" value={file.distribution} /></div>
                                <ReadOnlyField label="Precipitating Factors:" value={file.precipitatingFactors} />
                                <ReadOnlyField label="Relieving Factors:" value={file.relievingFactors} />
                                <ReadOnlyField label="Location & Radiation:" value={file.locationAndRadiation} />
                                <ReadOnlyField label="Associated Symptoms:" value={file.associatedSymptoms} />
                                <ReadOnlyField label="Previous Treatment:" value={file.previousTreatment} />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="position-relative border border-primary rounded-3 p-4 bg-white">
                            <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                                Medical History
                            </span>
                            <div className="row">
                                {[
                                    ["Heart Problems", file.medicalHistory?.heartProblems],
                                    ["Diabetes", file.medicalHistory?.diabetes],
                                    ["Liver Problems", file.medicalHistory?.liverProblems],
                                    ["Kidney Problems", file.medicalHistory?.kidneyProblems],
                                    ["Lung Problems", file.medicalHistory?.lungProblems],
                                    ["Thyroid Problems", file.medicalHistory?.thyroidProblems],
                                    ["Pregnant", file.medicalHistory?.pregnancy],
                                    ["Medications", file.medicalHistory?.medications],
                                    ["Surgeries", file.medicalHistory?.surgeries],
                                    ["Fainted in Dental Office", file.medicalHistory?.fainted],
                                    ["Prolonged Bleeding", file.medicalHistory?.prolongedBleeding],
                                    ["Allergies", file.medicalHistory?.allergies],
                                ].map(([label, val]) => (
                                    <div key={label} className="col-sm-6 col-md-4">
                                        <ReadOnlyField label={`${label}:`} value={val ? "Yes" : "No"} />
                                    </div>
                                ))}
                                <div className="col-sm-6">
                                    <ReadOnlyField label="Other Medical Condition:" value={file.medicalHistory?.other?.found ? file.medicalHistory.other.details : "No"} />
                                </div>
                                <div className="col-sm-6">
                                    <ReadOnlyField label="Family & Social History:" value={`${file.medicalHistory?.familyAndSocialHistory?.diseases || "-"} (${file.medicalHistory?.familyAndSocialHistory?.person || "-"})`} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="position-relative border border-primary rounded-3 p-4 bg-white">
                            <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                                Dental History
                            </span>
                            <div className="row">
                                {[
                                    ["Sensitivity", file.dentalHistory?.senstivity],
                                    ["Chewing Difficulty", file.dentalHistory?.chewingDifficulty],
                                    ["Bleeding Gums", file.dentalHistory?.bleedingGums],
                                    ["Mouth Ulcers", file.dentalHistory?.mouthUlcers],
                                    ["Food Catch", file.dentalHistory?.foodCatch],
                                    ["Headaches", file.dentalHistory?.headaches],
                                    ["Jaw Pain", file.dentalHistory?.jawPain],
                                    ["Teeth Grinding", file.dentalHistory?.teethGrinding],
                                    ["Teeth Breaking", file.dentalHistory?.teethBreaking],
                                    ["Mobile Teeth", file.dentalHistory?.mobileTeeth],
                                    ["Bad Breath", file.dentalHistory?.badBreath],
                                    ["Dry Mouth", file.dentalHistory?.dryMouth],
                                ].map(([label, val]) => (
                                    <div key={label} className="col-sm-6 col-md-4">
                                        <ReadOnlyField label={`${label}:`} value={val ? "Yes" : "No"} />
                                    </div>
                                ))}
                                <div className="col-sm-6 col-md-4"><ReadOnlyField label="Last Dental Appointment:" value={file.dentalHistory?.lastDentalAppointment} /></div>
                                <div className="col-sm-6 col-md-4"><ReadOnlyField label="Procedure Done:" value={file.dentalHistory?.lastDentalAppointmentOperation} /></div>
                                <div className="col-sm-6 col-md-4"><ReadOnlyField label="Last Dental X-ray:" value={file.dentalHistory?.lastDentalXray} /></div>
                                <div className="col-sm-6 col-md-4"><ReadOnlyField label="Smoking:" value={file.dentalHistory?.smoking?.isSmoking ? "Yes" : "No"} /></div>
                                {file.dentalHistory?.smoking?.isSmoking && (
                                    <div className="col-sm-6 col-md-8">
                                        <ReadOnlyField label="Since When (Per Day):" value={`${file.dentalHistory.smoking.sinceWhen} (${file.dentalHistory.smoking.howManyPerDay})`} />
                                    </div>
                                )}
                                <div className="col-12"><ReadOnlyField label="Comments:" value={file.dentalHistory?.comments} /></div>
                            </div>
                        </div>
                    </div>

                    {/* Pre-patient images */}
                    {file.prePatientImage?.length > 0 && (
                        <div className="col-12 col-sm-6">
                            <div className="position-relative border border-primary rounded-3 p-4 bg-white">
                                <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                                    Pre-Patient Images
                                </span>
                                <ImageGallery value={file.prePatientImage} label="Pre-Patient Image" />
                            </div>
                        </div>
                    )}

                    {/* Post-patient images */}
                    {file.postPatientImage?.length > 0 && (
                        <div className="col-12 col-sm-6">
                            <div className="position-relative border border-primary rounded-3 p-4 bg-white">
                                <span className="position-absolute top-0 start-0 translate-middle-y ms-4 px-2 bg-white text-primary fw-semibold">
                                    Post-Patient Images
                                </span>
                                <ImageGallery value={file.postPatientImage} label="Post-Patient Image" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    );
}