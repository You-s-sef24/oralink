"use client";

import { createContext, useEffect, useMemo, useState } from "react";

export const UsersContext = createContext();

export default function UsersProvider({ children }) {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Reham Hussien",
            role: "Head of department",
            email: "hod@123",
            password: "123",
        },
        {
            id: 2,
            name: "Amr Diab",
            role: "Supervisor",
            department: "Periodontics",
            email: "admin@123",
            password: "123",
        },
        {
            id: 202205658,
            name: "Youssef Mahmoud",
            role: "Student",
            email: "202205658@o6u.edu.eg",
            password: "123",
            files: [
                {
                    fileId: 1769536928879,
                    patientName: "يوسف احمد يوسف محمد علي",
                    gender: "Male",
                    martialStatus: "divorced",
                    birthDate: "2025-12-30",
                    occupation: "فلاح",
                    address: "El Mokatam",
                    department: "Periodontics",
                    phone: "01115658096",
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
                            problems: false
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

                    prePatientImage: {},
                    postPatientImage: null,
                    xRay: null,

                    grade: 40,
                    gradeAI: 0,
                    feedback: "",
                    studentId: 202205658,
                    creationDate: "1/27/2026",

                    departmentData: {
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

                        periodontalChart: [
                            ...[
                                18, 17, 16, 15, 14, 13, 12, 11,
                                21, 22, 23, 24, 25, 26, 27, 28,
                                48, 47, 46, 45, 44, 43, 42, 41,
                                31, 32, 33, 34, 35, 36, 37, 38
                            ].map(tooth => ({
                                tooth,
                                mobility: "",
                                furcation: "",
                                probing: { mb: "", b: "", db: "", ml: "", l: "", dl: "" },
                                recession: { mb: "", b: "", db: "", ml: "", l: "", dl: "" },
                                bop: { mb: "", b: "", db: "", ml: "", l: "", dl: "" },
                                pi: { mb: "", b: "", db: "", ml: "", l: "", dl: "" }
                            }))
                        ],

                        treatmentPlan: {
                            systemicPhase: "",
                            acutePhase: "",
                            diseaseControlPhase: "",
                            definitivePhase: "",
                            maintenancePhase: ""
                        },

                        periodontalExamination: {
                            hygiene: {
                                depositsPlaque: "Heavy"
                            },
                            calculus: {
                                supragingival: "Heavy",
                                subgingival: "Heavy"
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
                                fremitus: ""
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
                                { tooth: 7, top: 0, bottom: 0 }
                            ]
                        }
                    }
                },
                {
                    fileId: 1769536390159,
                    patientName: "يوسف محمود فوزي فضل بيصار",
                    gender: "Male",
                    martialStatus: "Single",
                    birthDate: "2025-12-29",
                    occupation: "Developer",
                    address: "Shabramant - Abo El Nomros",
                    department: "Endodontics",
                    phone: "01115658096",
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
                            problems: false
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

                    prePatientImage: {},
                    postPatientImage: null,
                    xRay: null,

                    studentId: 202205658,
                    grade: 48,
                    gradeAI: 0,
                    feedBack: "",
                    creationDate: "1/27/2026",

                    departmentData: {
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
                            relievedByNareMeds: ""
                        },

                        objectives: {
                            extraoral: {
                                facialSwelling: "Yes",
                                lymphNodes: "Yes",
                                swollen: "Yes"
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
                                    discoloration: ""
                                }
                            }
                        },

                        radiographic: {
                            crown: {
                                wnl: false,
                                caries: false,
                                restoration: false,
                                crown: false,
                                denseInDente: false
                            },
                            pulpChamber: {
                                wnl: false,
                                pulpStone: false,
                                exposure: false,
                                resorption: false,
                                perforation: false
                            },
                            alveolarBone: {
                                wnl: false,
                                apicalRadiolucency: false,
                                lateralRadiolucency: false,
                                apLatOpacity: false,
                                crestalBoneLoss: false
                            },
                            roots: {
                                wnl: false,
                                curvature: false,
                                dilaceration: false,
                                resorption: false,
                                fracture: false,
                                perforation: false,
                                openApex: false,
                                sinus: false
                            },
                            rootCanal: {
                                wnl: false,
                                calcification: false,
                                bifurcated: false,
                                resorption: false,
                                perforation: false,
                                furcation: false,
                                priorRCT: false
                            },
                            laminaDura: {
                                wnl: false,
                                obscure: false,
                                broken: false,
                                widened: false
                            },
                            tracesTo: ""
                        },

                        assessment: {
                            diagnosis: {
                                pulpal: "WNL",
                                periapical: "WNL"
                            },
                            etiology: {
                                caries: false,
                                restoration: false,
                                priorRCT: false,
                                iatrogenic: false,
                                coronalLeakage: false,
                                trauma: false,
                                perio: false
                            },
                            prognosis: "Good"
                        },

                        treatmentPlan: {
                            endodontic: {
                                rct: false,
                                retreatment: false,
                                incisionDrainage: false,
                                apexificationVPT: false,
                                apicoectomy: false,
                                perforationResorptionRepair: false
                            },
                            periodontal: {
                                scaling: false,
                                curettage: false,
                                crownLengthening: false,
                                rootAmputation: false,
                                hemisection: false,
                                extraction: false
                            },
                            restorative: {
                                temporary: false,
                                postCore: false,
                                composite: false,
                                onlayCrown: false,
                                bleaching: false
                            }
                        }
                    },
                },
            ],
        },
        {
            id: 2022056534,
            name: "Youssef Sawy",
            role: "Student",
            email: "2022056534@o6u.edu.eg",
            password: "123",
            files: [
                {
                    fileId: 1769536390156,
                    patientName: "محمد رجب سعد رجب",
                    gender: "Male",
                    martialStatus: "Single",
                    birthDate: "2025-12-29",
                    occupation: "Developer",
                    address: "Shabramant - Abo El Nomros",
                    department: "Endodontics",
                    phone: "01112343243",
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
                            problems: false
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

                    prePatientImage: {},
                    postPatientImage: null,
                    xRay: null,

                    studentId: 202205658,
                    grade: 80,
                    gradeAI: 0,
                    feedBack: "",
                    creationDate: "1/30/2026",

                    departmentData: {
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
                            relievedByNareMeds: ""
                        },

                        objectives: {
                            extraoral: {
                                facialSwelling: "Yes",
                                lymphNodes: "Yes",
                                swollen: "Yes"
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
                                    discoloration: ""
                                }
                            }
                        },

                        radiographic: {
                            crown: {
                                wnl: false,
                                caries: false,
                                restoration: false,
                                crown: false,
                                denseInDente: false
                            },
                            pulpChamber: {
                                wnl: false,
                                pulpStone: false,
                                exposure: false,
                                resorption: false,
                                perforation: false
                            },
                            alveolarBone: {
                                wnl: false,
                                apicalRadiolucency: false,
                                lateralRadiolucency: false,
                                apLatOpacity: false,
                                crestalBoneLoss: false
                            },
                            roots: {
                                wnl: false,
                                curvature: false,
                                dilaceration: false,
                                resorption: false,
                                fracture: false,
                                perforation: false,
                                openApex: false,
                                sinus: false
                            },
                            rootCanal: {
                                wnl: false,
                                calcification: false,
                                bifurcated: false,
                                resorption: false,
                                perforation: false,
                                furcation: false,
                                priorRCT: false
                            },
                            laminaDura: {
                                wnl: false,
                                obscure: false,
                                broken: false,
                                widened: false
                            },
                            tracesTo: ""
                        },

                        assessment: {
                            diagnosis: {
                                pulpal: "WNL",
                                periapical: "WNL"
                            },
                            etiology: {
                                caries: false,
                                restoration: false,
                                priorRCT: false,
                                iatrogenic: false,
                                coronalLeakage: false,
                                trauma: false,
                                perio: false
                            },
                            prognosis: "Good"
                        },

                        treatmentPlan: {
                            endodontic: {
                                rct: false,
                                retreatment: false,
                                incisionDrainage: false,
                                apexificationVPT: false,
                                apicoectomy: false,
                                perforationResorptionRepair: false
                            },
                            periodontal: {
                                scaling: false,
                                curettage: false,
                                crownLengthening: false,
                                rootAmputation: false,
                                hemisection: false,
                                extraction: false
                            },
                            restorative: {
                                temporary: false,
                                postCore: false,
                                composite: false,
                                onlayCrown: false,
                                bleaching: false
                            }
                        }
                    },
                }
            ],
        },
        {
            id: 2022056523,
            name: "Mohamed Mahmoud",
            role: "Student",
            email: "2022056523@o6u.edu.eg",
            password: "123",
            files: [
                {
                    fileId: 1769536390156,
                    patientName: "محمد رجب سعد رجب",
                    gender: "Male",
                    martialStatus: "Single",
                    birthDate: "2025-12-29",
                    occupation: "Developer",
                    address: "Shabramant - Abo El Nomros",
                    department: "Endodontics",
                    phone: "01112343243",
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
                            problems: false
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

                    prePatientImage: {},
                    postPatientImage: null,
                    xRay: null,

                    studentId: 202205658,
                    grade: 85,
                    gradeAI: 0,
                    feedBack: "",
                    creationDate: "1/30/2026",

                    departmentData: {
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
                            relievedByNareMeds: ""
                        },

                        objectives: {
                            extraoral: {
                                facialSwelling: "Yes",
                                lymphNodes: "Yes",
                                swollen: "Yes"
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
                                    discoloration: ""
                                }
                            }
                        },

                        radiographic: {
                            crown: {
                                wnl: false,
                                caries: false,
                                restoration: false,
                                crown: false,
                                denseInDente: false
                            },
                            pulpChamber: {
                                wnl: false,
                                pulpStone: false,
                                exposure: false,
                                resorption: false,
                                perforation: false
                            },
                            alveolarBone: {
                                wnl: false,
                                apicalRadiolucency: false,
                                lateralRadiolucency: false,
                                apLatOpacity: false,
                                crestalBoneLoss: false
                            },
                            roots: {
                                wnl: false,
                                curvature: false,
                                dilaceration: false,
                                resorption: false,
                                fracture: false,
                                perforation: false,
                                openApex: false,
                                sinus: false
                            },
                            rootCanal: {
                                wnl: false,
                                calcification: false,
                                bifurcated: false,
                                resorption: false,
                                perforation: false,
                                furcation: false,
                                priorRCT: false
                            },
                            laminaDura: {
                                wnl: false,
                                obscure: false,
                                broken: false,
                                widened: false
                            },
                            tracesTo: ""
                        },

                        assessment: {
                            diagnosis: {
                                pulpal: "WNL",
                                periapical: "WNL"
                            },
                            etiology: {
                                caries: false,
                                restoration: false,
                                priorRCT: false,
                                iatrogenic: false,
                                coronalLeakage: false,
                                trauma: false,
                                perio: false
                            },
                            prognosis: "Good"
                        },

                        treatmentPlan: {
                            endodontic: {
                                rct: false,
                                retreatment: false,
                                incisionDrainage: false,
                                apexificationVPT: false,
                                apicoectomy: false,
                                perforationResorptionRepair: false
                            },
                            periodontal: {
                                scaling: false,
                                curettage: false,
                                crownLengthening: false,
                                rootAmputation: false,
                                hemisection: false,
                                extraction: false
                            },
                            restorative: {
                                temporary: false,
                                postCore: false,
                                composite: false,
                                onlayCrown: false,
                                bleaching: false
                            }
                        }
                    },
                }
            ],
        },
        {
            id: 202205234,
            name: "Ahmed Wagih",
            role: "Student",
            email: "202205234@o6u.edu.eg",
            password: "123",
            files: [
                {
                    fileId: 1769536928879,
                    patientName: "يوسف محمد شريف",
                    gender: "Male",
                    martialStatus: "divorced",
                    birthDate: "2025-12-30",
                    occupation: "فلاح",
                    address: "El Mokatam",
                    department: "Periodontics",
                    phone: "01115658096",
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
                            problems: false
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

                    prePatientImage: {},
                    postPatientImage: null,
                    xRay: null,

                    grade: 88,
                    gradeAI: 0,
                    feedback: "",
                    studentId: 202205658,
                    creationDate: "1/27/2026",

                    departmentData: {
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

                        periodontalChart: [
                            ...[
                                18, 17, 16, 15, 14, 13, 12, 11,
                                21, 22, 23, 24, 25, 26, 27, 28,
                                48, 47, 46, 45, 44, 43, 42, 41,
                                31, 32, 33, 34, 35, 36, 37, 38
                            ].map(tooth => ({
                                tooth,
                                mobility: "",
                                furcation: "",
                                probing: { mb: "", b: "", db: "", ml: "", l: "", dl: "" },
                                recession: { mb: "", b: "", db: "", ml: "", l: "", dl: "" },
                                bop: { mb: "", b: "", db: "", ml: "", l: "", dl: "" },
                                pi: { mb: "", b: "", db: "", ml: "", l: "", dl: "" }
                            }))
                        ],

                        treatmentPlan: {
                            systemicPhase: "",
                            acutePhase: "",
                            diseaseControlPhase: "",
                            definitivePhase: "",
                            maintenancePhase: ""
                        },

                        periodontalExamination: {
                            hygiene: {
                                depositsPlaque: "Heavy"
                            },
                            calculus: {
                                supragingival: "Heavy",
                                subgingival: "Heavy"
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
                                fremitus: ""
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
                                { tooth: 7, top: 0, bottom: 0 }
                            ]
                        }
                    }
                },
            ],
        }
    ]);
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    const updateFile = (updatedFile) => {
        setUsers(prevUsers =>
            prevUsers.map(user => {
                if (user.id !== currentUser.id) return user;

                return {
                    ...user,
                    files: user.files.map(file =>
                        file.id === updatedFile.id ? updatedFile : file
                    )
                };
            })
        );

        setCurrentUser(prev => ({
            ...prev,
            files: prev.files.map(file =>
                file.id === updatedFile.id ? updatedFile : file
            )
        }));
    };

    const stats = useMemo(() => {
        const students = users.filter(u => u.role === "Student");
        const supervisors = users.filter(u => u.role === "Supervisor");

        const allFiles = students.flatMap(s => s.files || []);

        // ---- Files per department
        const filesPerDepartment = {};
        allFiles.forEach(f => {
            filesPerDepartment[f.department] =
                (filesPerDepartment[f.department] || 0) + 1;
        });

        // ---- Students per department
        const studentsPerDepartment = {};
        students.forEach(s => {
            const deps = new Set((s.files || []).map(f => f.department));
            deps.forEach(dep => {
                studentsPerDepartment[dep] =
                    (studentsPerDepartment[dep] || 0) + 1;
            });
        });

        // ---- Grades
        const gradedFilesList = allFiles.filter(f => f.grade > 0);
        const gradedAIList = allFiles.filter(f => f.gradeAI > 0);

        const avgGrade = gradedFilesList.length
            ? gradedFilesList.reduce((sum, f) => sum + f.grade, 0) / gradedFilesList.length
            : 0;

        const avgGradeAI = gradedAIList.length
            ? gradedAIList.reduce((sum, f) => sum + f.gradeAI, 0) / gradedAIList.length
            : 0;

        // ---- Files this month
        const now = new Date();
        const filesThisMonth = allFiles.filter(f => {
            const d = new Date(f.creationDate);
            return d.getMonth() === now.getMonth() &&
                d.getFullYear() === now.getFullYear();
        }).length;

        // ---- Students with no files
        const studentsWithNoFiles =
            students.filter(s => !s.files || s.files.length === 0).length;

        // ---- Top students
        const topStudents = students
            .map(s => {
                const sFiles = s.files || [];
                const graded = sFiles.filter(f => f.grade > 0);
                const avg =
                    graded.length
                        ? graded.reduce((sum, f) => sum + f.grade, 0) / graded.length
                        : 0;

                return {
                    id: s.id,
                    name: s.name,
                    avgGrade: avg,
                    totalFiles: sFiles.length
                };
            })
            .filter(s => s.totalFiles > 0)
            .sort((a, b) => b.avgGrade - a.avgGrade)
            .slice(0, 5);

        // ---- Lowest students
        const lowestStudents = students
            .map(s => {
                const sFiles = s.files || [];
                const graded = sFiles.filter(f => f.grade > 0);
                const avg =
                    graded.length
                        ? graded.reduce((sum, f) => sum + f.grade, 0) / graded.length
                        : 0;

                return {
                    id: s.id,
                    name: s.name,
                    avgGrade: avg,
                    totalFiles: sFiles.length
                };
            })
            .filter(s => s.totalFiles > 0)
            .sort((a, b) => a.avgGrade - b.avgGrade) // ascending
            .slice(0, 5);

        // ---- Pass / Fail count
        let passCount = 0;
        let failCount = 0;

        students.forEach(s => {
            const graded = (s.files || []).filter(f => f.grade > 0);
            if (graded.length === 0) return;

            const avg =
                graded.reduce((sum, f) => sum + f.grade, 0) / graded.length;

            if (avg >= 60) passCount++;
            else failCount++;
        });

        // ---- Department quality comparison
        const departmentQuality = {};

        allFiles.forEach(f => {
            if (!departmentQuality[f.department]) {
                departmentQuality[f.department] = {
                    totalFiles: 0,
                    gradedFiles: 0,
                    gradeSum: 0,
                    pass: 0,
                    fail: 0,
                };
            }

            const dep = departmentQuality[f.department];
            dep.totalFiles++;

            if (f.grade > 0) {
                dep.gradedFiles++;
                dep.gradeSum += f.grade;

                if (f.grade >= 60) dep.pass++;
                else dep.fail++;
            }
        });

        // finalize calculations
        Object.keys(departmentQuality).forEach(dep => {
            const d = departmentQuality[dep];

            d.avgGrade = d.gradedFiles
                ? (d.gradeSum / d.gradedFiles).toFixed(2)
                : 0;

            d.completionRate = d.totalFiles
                ? ((d.gradedFiles / d.totalFiles) * 100).toFixed(1)
                : 0;
        });

        const gradeDistribution = {
            '90-100': 0, // A
            '80-89': 0,  // B
            '70-79': 0,  // C
            '60-69': 0,  // D
            '0-59': 0    // F
        };
        allFiles.forEach(f => {
            if (f.grade > 0) {
                if (f.grade >= 90) gradeDistribution['90-100']++;
                else if (f.grade >= 80) gradeDistribution['80-89']++;
                else if (f.grade >= 70) gradeDistribution['70-79']++;
                else if (f.grade >= 60) gradeDistribution['60-69']++;
                else gradeDistribution['0-59']++;
            }
        });

        return {
            totalStudents: students.length,
            totalSupervisors: supervisors.length,
            totalFiles: allFiles.length,
            gradedFiles: gradedFilesList.length,
            ungradedFiles: allFiles.length - gradedFilesList.length,
            avgGrade,
            avgGradeAI,
            filesThisMonth,
            studentsWithNoFiles,
            filesPerDepartment,
            studentsPerDepartment,
            topStudents,
            lowestStudents,
            departmentQuality,
            passCount,
            failCount,
            gradeDistribution
        };
    }, [users]);


    useEffect(() => {
        const storedUser = localStorage.getItem("currentUser");
        const storedLoginStatus = localStorage.getItem("isLoggedIn");
        const storedUsers = localStorage.getItem("users");

        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        }
        if (storedUser !== null && storedUser !== "null") {
            setCurrentUser(JSON.parse(storedUser));
        }
        if (storedLoginStatus === "true") {
            setIsLoggedIn(true);
        }
        setLoading(false);
    }, []);


    useEffect(() => {
        if (loading) return;

        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        localStorage.setItem("isLoggedIn", isLoggedIn.toString());

    }, [users, currentUser, isLoggedIn, loading]);


    return (
        <UsersContext.Provider value={{ users, setUsers, currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn, stats, updateFile }}>
            {children}
        </UsersContext.Provider>
    );
}