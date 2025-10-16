"use client";

import { useState } from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

export default function CreateNewFile() {
    const [step, setStep] = useState(1);
    const [info, setInfo] = useState({
        name: "",
        gender: "",
        martialStatus: "",
        birthDate: "",
        occupation: "",
        address: "",
        phone: "",
        physicianName: "",
        physicianPhone: "",
        lastVisit: "",
        reasonForVisit: "",
        chiefComplaint: "",
        onset: "",
        course: "",
        severity: "",
        distribution: "",
        precipitatingFactors: "",
        relievingFactors: "",
        locationAndRadiation: "",
        associatedSymptoms: "",
        previousTreatment: "",
        medicalHistory: {
            heartProblems: false,
            diabetes: false,
            liverProblems: false,
            kidneyProblems: false,
            lungProblems: false,
            thyroidProblems: false,
            pregnancy: false,
            medications: false,
            surgeries: false,
            fainted: false,
            prolongedBleeding: false,
            allergies: false,
            other: {
                found: false,
                details: ""
            },
            familyAndSocialHistory: {
                diseases: "",
                person: ""
            }
        },
        dentalHistory: {
            senstivity: false,
            chewingDifficulty: false,
            bleedingGums: false,
            mouthUlcers: false,
            foodCatch: false,
            headaches: false,
            jawPain: false,
            teethGrinding: false,
            teethBreaking: false,
            mobileTeeth: false,
            badBreath: false,
            dryMouth: false,
            oralHistory: {
                extractedTeeth: false,
                bridge: false,
                denture: false,
                braces: false,
                problems: false,
            },
            lastDentalAppointment: "",
            lastDentalAppointmentOperation: "",
            lastDentalXray: "",
            smoking: {
                isSmoking: false,
                sinceWhen: "",
                howManyPerDay: ""
            },
            comments: ""
        }
    });

    function handleSave() {
        console.log(info);
    }

    return (
        <div className="bg-white rounded shadow p-3">
            <h1 className="fw-bold text-center text-primary">Department of Oral Medicine, Periodontology and Diagnosis</h1>
            <p className="text-center">Faculty of Dentistry</p>
            <hr />
            {step === 1 ? (
                <FirstPage info={info} setInfo={setInfo} />
            ) : step === 2 ? (
                <SecondPage info={info} setInfo={setInfo} />
            ) : (
                ""
            )
            }

            <div className="d-flex justify-content-end mt-4">
                {step > 1 ? (
                    <button className="btn btn-secondary me-3" onClick={() => { setStep(step - 1) }}>Previous</button>
                ) : (
                    <button className="btn btn-secondary me-3">Cancel</button>
                )}
                {step === 4 ? (
                    <button className="btn btn-primary" onClick={() => { handleSave() }}>Save</button>
                ) : (
                    <button className="btn btn-primary" onClick={() => { setStep(step + 1) }}>Next</button>
                )}
            </div>
        </div >
    );
}