"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";
import { UsersContext } from "./UsersContext";
import axios from "axios";

export const PatientInfoContext = createContext();

export default function PatientInfoProvider({ children }) {
    const { currentUser, setCurrentUser, users, setUsers, token } = useContext(UsersContext);
    const router = useRouter();
    const [formErrors, setFormErrors] = useState({});

    function validateFile(file) {
        const newErrors = {};

        if (!file.patientName?.trim())
            newErrors.patientName = "Name is required";

        if (!file.gender)
            newErrors.gender = "Gender is required";

        if (!file.birthDate)
            newErrors.birthDate = "Birth date is required";

        if (!file.address?.trim())
            newErrors.address = "Address is required";

        if (!file.phone?.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\+?[\d\s\-()]{7,15}$/.test(file.phone.trim())) {
            newErrors.phone = "Please enter a valid phone number";
        }

        if (file.physicianPhone?.trim() &&
            !/^\+?[\d\s\-()]{7,15}$/.test(file.physicianPhone.trim())) {
            newErrors.physicianPhone = "Please enter a valid Egyptian phone number";
        }

        if (!file.occupation?.trim())
            newErrors.occupation = "Occupation is required";

        return newErrors;
    }

    const [generalData, setGeneralData] = useState({
        patientName: "",
        gender: "Male",
        maritalStatus: "Single",
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
            hba1c: "",
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
        treatmentProcedures: [],
        prePatientImage: null,
        postPatientImage: null,
        xRay: null,
    });

    const [file, setFile] = useState({
        patientName: "",
        gender: "",
        maritalStatus: "",
        birthDate: "",
        address: "",
        phone: "",
        occupation: "",
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
                disease: "",
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
        prePatientImage: ""
    });

    const [isEditing, setIsEditing] = useState(false);
    const [submitModal, setSubmitModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

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
            patientName: "",
            gender: "Male",
            maritalStatus: "Single",
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
                hba1c: "",
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
            treatmentProcedures: [],
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

    async function handleSave(dept) {
        setIsLoading(true);

        try {
            if (!currentUser?.id) {
                alert("User not authenticated");
                return;
            }

            const formData = new FormData();

            const payload = {
                patientName: generalData.patientName ?? "",
                gender: generalData.gender ?? "Male",
                maritalStatus: generalData.maritalStatus ?? "Single",
                birthDate: generalData.birthDate ?? "",
                occupation: generalData.occupation ?? "",
                address: generalData.address ?? "",
                department: dept === "periodontics" ? "Periodontics" : "Endodontics",
                phone: generalData.phone ?? "",
                physicianName: generalData.physicianName ?? "",
                physicianPhone: generalData.physicianPhone ?? "",
                lastVisit: generalData.lastVisit ?? "",
                reasonForVisit: generalData.reasonForVisit ?? "",
                chiefComplaint: generalData.chiefComplaint ?? "",
                onset: generalData.onset ?? "",
                course: generalData.course ?? "",
                severity: generalData.severity ?? "",
                distribution: generalData.distribution ?? "",
                precipitatingFactors: generalData.precipitatingFactors ?? "",
                relievingFactors: generalData.relievingFactors ?? "",
                locationAndRadiation: generalData.locationAndRadiation ?? "",
                associatedSymptoms: generalData.associatedSymptoms ?? "",
                previousTreatment: generalData.previousTreatment ?? "",
                departmentData:
                    dept === "periodontics"
                        ? periodonticsData ?? {}
                        : endodonticsData ?? {},
                medicalHistory: generalData.medicalHistory ?? {},
                dentalHistory: generalData.dentalHistory ?? {},
                treatmentProcedures: generalData.treatmentProcedures ?? [],
            };

            Object.entries(payload).forEach(([key, value]) => {
                if (typeof value === "object" && value !== null) {
                    formData.append(key, JSON.stringify(value));
                } else {
                    formData.append(key, value ?? "");
                }
            });

            if (generalData.prePatientImage instanceof File) {
                formData.append("PrePatientImage", generalData.prePatientImage);
            }
            if (generalData.postPatientImage instanceof File) {
                formData.append("PostPatientImage", generalData.postPatientImage);
            }
            if (generalData.xRay instanceof File) {
                formData.append("XRay", generalData.xRay);
            }

            // 🔎 Debug — confirm all keys
            console.log("------ FORM DATA START ------");
            for (let pair of formData.entries()) {
                console.log(pair[0], pair[1]);
                if (pair[1] instanceof File) {
                    console.log("File name:", pair[1].name);
                    console.log("File size:", pair[1].size);
                    console.log("File type:", pair[1].type);
                }
            }
            console.log("------ FORM DATA END ------");

            await axios.post(
                "https://oralink.runasp.net/api/patient-files/create-patient-file",
                formData,
                {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                }
            );
            resetInfo();
            router.replace("/my-files");
        } catch (err) {
            console.error(err.response?.data || err);
            console.error("Status:", err.response?.status);
            console.error("Data:", JSON.stringify(err.response?.data, null, 2));
            console.error("Headers:", err.response?.headers);
            alert(err.response?.data?.Message || "Failed to create file");
        }
        setIsLoading(false);
    }

    return (
        <PatientInfoContext.Provider value={{
            generalData, setGeneralData,
            endodonticsData, setEndodonticsData,
            periodonticsData, setPeriodonticsData,
            handleSave,
            isEditing, setIsEditing,
            file, setFile,
            submitModal, setSubmitModal,
            isLoading, setIsLoading,
            formErrors, setFormErrors, validateFile  // add this
        }}>
            {children}
        </PatientInfoContext.Provider>
    );
}