"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";
import { UsersContext } from "./UsersContext";

export const PatientInfoContext = createContext();

export default function PatientInfoProvider({ children }) {
    const { currentUser, setCurrentUser, users, setUsers } = useContext(UsersContext);
    const router = useRouter();

    const [generalData, setGeneralData] = useState({
        fileId: Date.now(),
        patientName: "",
        gender: "Male",
        martialStatus: "Single",
        birthDate: "",
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
        prePatientImage: null,
        postPatientImage: null,
        xRay: null,
    });

    const [file, setFile] = useState(null);

    const [isEditing, setIsEditing] = useState(false);

    const createTooth = (toothNumber) => ({
        tooth: toothNumber,

        mobility: "",
        furcation: "",

        probing: {
            mb: "",
            b: "",
            db: "",
            ml: "",
            l: "",
            dl: "",
        },

        recession: {
            mb: "",
            b: "",
            db: "",
            ml: "",
            l: "",
            dl: "",
        },

        bop: {
            mb: "",
            b: "",
            db: "",
            ml: "",
            l: "",
            dl: "",
        },

        pi: {
            mb: "",
            b: "",
            db: "",
            ml: "",
            l: "",
            dl: "",
        },
    });

    const teethNumbers = [
        18, 17, 16, 15, 14, 13, 12, 11,
        21, 22, 23, 24, 25, 26, 27, 28,
        48, 47, 46, 45, 44, 43, 42, 41,
        31, 32, 33, 34, 35, 36, 37, 38
    ];

    const [periodonticsData, setPeriodonticsData] = useState({
        clinicalExamination: {
            patientAppraisal: "",
            vitalSigns: "",
            skull: "",
            face: "",
            eyesEarsNose: "",
            skinHair: "",
            handNails: "",
            neck: "",
            salivaryGlands: "",
            lymphNodes: "",
            labialMucosa: "",
            buccalMucosa: "",
            gingiva: "",
            alveolarRidge: "",
            vestibule: "",
            tongue: "",
            floorOfMouth: "",
            hardPalate: "",
            softPalateUvulaOropharynx: "",
            tmj: "",
            missedExtracted: "",
            filled: "",
            decayed: "",
            discolored: "",
            malposed: "",
            wastingDisease: ""
        },
        radiographicInterpretation: {
            horizontalBoneLoss: "",
            verticalBoneLoss: "",
            furcationInvolvement: "",
            otherFindings: ""
        },
        diagnosis: "",
        prognosis: "",
        periodontalChart: teethNumbers.map(createTooth),
        treatmentPlan: {
            systemicPhase: "",
            acutePhase: "",
            diseaseControlPhase: "",
            definitivePhase: "",
            maintenancePhase: "",
        },
        periodontalExamination: {
            hygiene: {
                depositsPlaque: "Heavy",
            },
            calculus: {
                supragingival: "Heavy",
                subgingival: "Heavy",
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
            teeth: [
                { tooth: 7, top: 0, bottom: 0 },
                { tooth: 6, top: 0, bottom: 0 },
                { tooth: 5, top: 0, bottom: 0 },
                { tooth: 4, top: 0, bottom: 0 },
                { tooth: 3, top: 0, bottom: 0 },
                { tooth: 2, top: 0, bottom: 0 },
                { tooth: 1, top: 0, bottom: 0 },
                { tooth: 1, top: 0, bottom: 0 },
                { tooth: 2, top: 0, bottom: 0 },
                { tooth: 3, top: 0, bottom: 0 },
                { tooth: 4, top: 0, bottom: 0 },
                { tooth: 5, top: 0, bottom: 0 },
                { tooth: 6, top: 0, bottom: 0 },
                { tooth: 7, top: 0, bottom: 0 },
            ]
        },
    });

    const [endodonticsData, setEndodonticsData] = useState({
        subjectives: {
            natureOfPain: "None",
            onset: "Dull",
            location: "Localized",
            radiatingTo: "",
            duration: "Seconds",
            intiatedByCold: "",
            intiatedByHeat: "",
            intiatedBySweets: "",
            intiatedBySpontaneousPain: "",
            intiatedByPalpation: "",
            intiatedByMastication: "",
            intiatedBySupination: "",
            relievedByCold: "",
            relievedByHeat: "",
            relievedByOTCMeds: "",
            relievedByNareMeds: "",
        },
        objectives: {
            extraoral: {
                facialSwelling: "Yes",
                lymphNodes: "Yes",
                swollen: "Yes",
            },
            intraoral: {
                swelling: "Yes (WNL)",
                sinusTract: "Yes",
                softTissues: "Yes",
                clinicalCrown: {
                    restoration: "",
                    caries: "",
                    fracture: "",
                    exposure: "",
                    discoloration: "",
                }
            }
        },
        radiographic: {
            crown: {
                wnl: false,
                caries: false,
                restoration: false,
                crown: false,
                denseInDente: false,
            },
            pulpChamber: {
                wnl: false,
                pulpStone: false,
                exposure: false,
                resorption: false,
                perforation: false,
            },
            alveolarBone: {
                wnl: false,
                apicalRadiolucency: false,
                lateralRadiolucency: false,
                apLatOpacity: false,
                crestalBoneLoss: false,
            },
            roots: {
                wnl: false,
                curvature: false,
                dilaceration: false,
                resorption: false,
                fracture: false,
                perforation: false,
                openApex: false,
                sinus: false,
            },
            rootCanal: {
                wnl: false,
                calcification: false,
                bifurcated: false,
                resorption: false,
                perforation: false,
                furcation: false,
                priorRCT: false,
            },
            laminaDura: {
                wnl: false,
                obscure: false,
                broken: false,
                widened: false,
            },
            tracesTo: ''
        },
        assessment: {
            diagnosis: {
                pulpal: "WNL",
                periapical: "WNL",
            },
            etiology: {
                caries: false,
                restoration: false,
                priorRCT: false,
                iatrogenic: false,
                coronalLeakage: false,
                trauma: false,
                perio: false,
            },
            prognosis: "Good",
        },
        treatmentPlan: {
            endodontic: {
                rct: false,
                retreatment: false,
                incisionDrainage: false,
                apexificationVPT: false,
                apicoectomy: false,
                perforationResorptionRepair: false,
            },
            periodontal: {
                scaling: false,
                curettage: false,
                crownLengthening: false,
                rootAmputation: false,
                hemisection: false,
                extraction: false,
            },
            restorative: {
                temporary: false,
                postCore: false,
                composite: false,
                onlayCrown: false,
                bleaching: false,
            },
        },
    });

    function resetInfo() {
        setGeneralData({
            fileId: Date.now(),
            patientName: "",
            gender: "Male",
            martialStatus: "Single",
            birthDate: "",
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
            prePatientImage: null,
            postPatientImage: null,
            xRay: null,
        });

        setEndodonticsData({
            subjectives: {
                natureOfPain: "None",
                onset: "Dull",
                location: "Localized",
                radiatingTo: "",
                duration: "Seconds",
                intiatedByCold: "",
                intiatedByHeat: "",
                intiatedBySweets: "",
                intiatedBySpontaneousPain: "",
                intiatedByPalpation: "",
                intiatedByMastication: "",
                intiatedBySupination: "",
                relievedByCold: "",
                relievedByHeat: "",
                relievedByOTCMeds: "",
                relievedByNareMeds: "",
            },
            objectives: {
                extraoral: {
                    facialSwelling: "Yes",
                    lymphNodes: "Yes",
                    swollen: "Yes",
                },
                intraoral: {
                    swelling: "Yes (WNL)",
                    sinusTract: "Yes",
                    softTissues: "Yes",
                    clinicalCrown: {
                        restoration: "",
                        caries: "",
                        fracture: "",
                        exposure: "",
                        discoloration: "",
                    }
                }
            },
            radiographic: {
                crown: {
                    wnl: false,
                    caries: false,
                    restoration: false,
                    crown: false,
                    denseInDente: false,
                },
                pulpChamber: {
                    wnl: false,
                    pulpStone: false,
                    exposure: false,
                    resorption: false,
                    perforation: false,
                },
                alveolarBone: {
                    wnl: false,
                    apicalRadiolucency: false,
                    lateralRadiolucency: false,
                    apLatOpacity: false,
                    crestalBoneLoss: false,
                },
                roots: {
                    wnl: false,
                    curvature: false,
                    dilaceration: false,
                    resorption: false,
                    fracture: false,
                    perforation: false,
                    openApex: false,
                    sinus: false,
                },
                rootCanal: {
                    wnl: false,
                    calcification: false,
                    bifurcated: false,
                    resorption: false,
                    perforation: false,
                    furcation: false,
                    priorRCT: false,
                },
                laminaDura: {
                    wnl: false,
                    obscure: false,
                    broken: false,
                    widened: false,
                },
                tracesTo: ''
            },
            assessment: {
                diagnosis: {
                    pulpal: "WNL",
                    periapical: "WNL",
                },
                etiology: {
                    caries: false,
                    restoration: false,
                    priorRCT: false,
                    iatrogenic: false,
                    coronalLeakage: false,
                    trauma: false,
                    perio: false,
                },
                prognosis: "Good",
            },
            treatmentPlan: {
                endodontic: {
                    rct: false,
                    retreatment: false,
                    incisionDrainage: false,
                    apexificationVPT: false,
                    apicoectomy: false,
                    perforationResorptionRepair: false,
                },
                periodontal: {
                    scaling: false,
                    curettage: false,
                    crownLengthening: false,
                    rootAmputation: false,
                    hemisection: false,
                    extraction: false,
                },
                restorative: {
                    temporary: false,
                    postCore: false,
                    composite: false,
                    onlayCrown: false,
                    bleaching: false,
                },
            },
        });

        setPeriodonticsData({
            clinicalExamination: {
                patientAppraisal: "",
                vitalSigns: "",
                skull: "",
                face: "",
                eyesEarsNose: "",
                skinHair: "",
                handNails: "",
                neck: "",
                salivaryGlands: "",
                lymphNodes: "",
                labialMucosa: "",
                buccalMucosa: "",
                gingiva: "",
                alveolarRidge: "",
                vestibule: "",
                tongue: "",
                floorOfMouth: "",
                hardPalate: "",
                softPalateUvulaOropharynx: "",
                tmj: "",
                missedExtracted: "",
                filled: "",
                decayed: "",
                discolored: "",
                malposed: "",
                wastingDisease: ""
            },
            radiographicInterpretation: {
                horizontalBoneLoss: "",
                verticalBoneLoss: "",
                furcationInvolvement: "",
                otherFindings: ""
            },
            diagnosis: "",
            prognosis: "",
            periodontalChart: teethNumbers.map(createTooth),
            treatmentPlan: {
                systemicPhase: "",
                acutePhase: "",
                diseaseControlPhase: "",
                definitivePhase: "",
                maintenancePhase: "",
            },
            periodontalExamination: {
                hygiene: {
                    depositsPlaque: "Heavy",
                },
                calculus: {
                    supragingival: "Heavy",
                    subgingival: "Heavy",
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
                teeth: [
                    { tooth: 7, top: 0, bottom: 0 },
                    { tooth: 6, top: 0, bottom: 0 },
                    { tooth: 5, top: 0, bottom: 0 },
                    { tooth: 4, top: 0, bottom: 0 },
                    { tooth: 3, top: 0, bottom: 0 },
                    { tooth: 2, top: 0, bottom: 0 },
                    { tooth: 1, top: 0, bottom: 0 },
                    { tooth: 1, top: 0, bottom: 0 },
                    { tooth: 2, top: 0, bottom: 0 },
                    { tooth: 3, top: 0, bottom: 0 },
                    { tooth: 4, top: 0, bottom: 0 },
                    { tooth: 5, top: 0, bottom: 0 },
                    { tooth: 6, top: 0, bottom: 0 },
                    { tooth: 7, top: 0, bottom: 0 },
                ]
            },
        });
    }

    function handleSave(dept) {
        const patientFile = {
            ...generalData,
            grade: 0,
            gradeAI: 0,
            feedback: "",
            studentId: currentUser?.id,
            creationDate: new Date().toLocaleDateString("en-US"),
            departmentData: dept === "periodontics" ? periodonticsData : endodonticsData,
        };
        const updatedUser = {
            ...currentUser,
            files: [...(currentUser.files || []), patientFile],
        };
        setCurrentUser(updatedUser);

        const updatedUsers = users.map(user =>
            user.id === updatedUser.id ? updatedUser : user
        );
        setUsers(updatedUsers);
        resetInfo();
        router.push('/dashboard');
    }

    return (
        <PatientInfoContext.Provider value={{ generalData, setGeneralData, endodonticsData, setEndodonticsData, periodonticsData, setPeriodonticsData, handleSave, isEditing, setIsEditing, file, setFile }}>
            {children}
        </PatientInfoContext.Provider>
    );
}