"use client";

import { createContext, useState } from "react";

export const PatientInfoContext = createContext();

export default function PatientInfoProvider({ children }) {
    const [generalData, setGeneralData] = useState({
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
        prePatientImage: null,
        postPatientImage: null,
        xRay: null,
        creationDate: new Date().toLocaleDateString("en-US"),
    });

    const [periodonticsData, setPeriodonticsData] = useState({
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
    });
    
    const [endodonticsData, setEndodonticsData] = useState({
        subjectives: {
            natureOfPain: "",
            onset: "",
            location: "",
            radiatingTo: "",
            duration: "",
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
                facialSwelling: "",
                lymphNodes: "",
                swollen: "",
            },
            intraoral: {
                swelling: "",
                sinusTract: "",
                softTissues: "",
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
                pulpal: "",
                periapical: "",
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
            prognosis: "",
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
            prePatientImage: null,
            postPatientImage: null,
            creationDate: new Date().toLocaleDateString("en-US"),
        });

        setEndodonticsData({
            subjectives: {
                natureOfPain: "",
                onset: "",
                location: "",
                radiatingTo: "",
                duration: "",
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
                    facialSwelling: "",
                    lymphNodes: "",
                    swollen: "",
                },
                intraoral: {
                    swelling: "",
                    sinusTract: "",
                    softTissues: "",
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
                    pulpal: "",
                    periapical: "",
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
                prognosis: "",
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
        });
    }

    return (
        <PatientInfoContext.Provider value={{ generalData, setGeneralData, endodonticsData, setEndodonticsData, periodonticsData, setPeriodonticsData, resetInfo }}>
            {children}
        </PatientInfoContext.Provider>
    );
}