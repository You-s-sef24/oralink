"use client";

import { createContext, useState } from "react";

export const PatientInfoContext = createContext();

export default function PatientInfoProvider({ children }) {
    const [info, setInfo] = useState({
        fileId: Date.now(),
        patientName: "",
        gender: "Male",
        martialStatus: "",
        age: "",
        occupation: "",
        address: "",
        department: "",
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
        },
        radiographicInterpretation: {
            horizontalBoneLoss: "",
            verticalBoneLoss: "",
            furcationInvolvement: "",
            otherFindings: ""
        },
        diagnosis: "",
        prognosis: "",
        treatmentPlan: "",
        maintenancePhase: "",
        periodontalExamination: {
            hygiene: {
                depositsPlaque: "",
            },
            calculus: {
                supragingival: "",
                subgingival: "",
            },
            gingiva: {
                color: "",
                size: "",
                shape: "",
                consistency: "",
                texture: "",
                recession: "",
                bleedingOnProbing: "",
                exudate: "",
                functionInvolvment: "",
                mucogingivalProblems: "",
                occlusalRelationship: "",
                fremitus: "",
            },
        },
        creationDate: new Date().toLocaleDateString("en-US"),
    });

    function resetInfo() {
        setInfo({
            fileId: Date.now(),
            patientName: "",
            gender: "Male",
            martialStatus: "",
            age: "",
            occupation: "",
            address: "",
            department: "",
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
            },
            radiographicInterpretation: {
                horizontalBoneLoss: "",
                verticalBoneLoss: "",
                furcationInvolvement: "",
                otherFindings: ""
            },
            diagnosis: "",
            prognosis: "",
            treatmentPlan: "",
            maintenancePhase: "",
            periodontalExamination: {
                hygiene: {
                    depositsPlaque: "",
                },
                calculus: {
                    supragingival: "",
                    subgingival: "",
                },
                gingiva: {
                    color: "",
                    size: "",
                    shape: "",
                    consistency: "",
                    texture: "",
                    recession: "",
                    bleedingOnProbing: "",
                    exudate: "",
                    functionInvolvment: "",
                    mucogingivalProblems: "",
                    occlusalRelationship: "",
                    fremitus: "",
                },
            },
            creationDate: new Date().toLocaleDateString("en-US"),
        });
    }

    return (
        <PatientInfoContext.Provider value={{ info, setInfo, resetInfo }}>
            {children}
        </PatientInfoContext.Provider>
    );
}