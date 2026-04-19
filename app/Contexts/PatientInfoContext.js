"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { UsersContext } from "./UsersContext";
import axios from "axios";

export const PatientInfoContext = createContext();

const createTooth = (toothNumber) => ({
    tooth: toothNumber,
    mobility: "",
    furcation: "",
    probing: { mb: "", b: "", db: "", ml: "", l: "", dl: "" },
    recession: { mb: "", b: "", db: "", ml: "", l: "", dl: "" },
    bop: { mb: "", b: "", db: "", ml: "", l: "", dl: "" },
    pi: { mb: "", b: "", db: "", ml: "", l: "", dl: "" },
});

const teethNumbers = [
    18, 17, 16, 15, 14, 13, 12, 11,
    21, 22, 23, 24, 25, 26, 27, 28,
    48, 47, 46, 45, 44, 43, 42, 41,
    31, 32, 33, 34, 35, 36, 37, 38
];

const mkField = (extraKeys = {}) => ({ checked: false, details: "", ...extraKeys });

const initialGeneralData = {
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
        heartProblems:     mkField(),
        diabetes:          { checked: false, hba1c: "" },
        liverProblems:     mkField(),
        kidneyProblems:    mkField(),
        lungProblems:      mkField(),
        thyroidProblems:   mkField(),
        pregnancy:         mkField(),
        medications:       mkField({ details: "" }),
        surgeries:         mkField(),
        fainted:           mkField(),
        prolongedBleeding: mkField(),
        allergies:         mkField({ details: "" }),
        other:             { found: false, details: "" },
        familyAndSocialHistory: { diseases: "", person: "" },
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
        smoking: { isSmoking: false, sinceWhen: "", howManyPerDay: "" },
        comments: "",
    },
    isSubmitted: false,
    gradedBy: null,
    firstStep: { title: "", desc: "", date: "" },
    prePatientImage: [],
    postPatientImage: [],
    xRay: null,
};

const initialFileMedicalHistory = {
    heartProblems:     mkField(),
    diabetes:          { checked: false, hba1c: "" },
    liverProblems:     mkField(),
    kidneyProblems:    mkField(),
    lungProblems:      mkField(),
    thyroidProblems:   mkField(),
    pregnancy:         mkField(),
    medications:       mkField(),
    surgeries:         mkField(),
    fainted:           mkField(),
    prolongedBleeding: mkField(),
    allergies:         mkField(),
    other:             { found: false, details: "" },
    familyAndSocialHistory: { diseases: "", person: "" },
};

const initialPeriodonticsData = {
    clinicalExamination: {
        patientAppraisal: "", vitalSigns: "", skull: "", face: "",
        eyesEarsNose: "", skinHair: "", handNails: "", neck: "",
        salivaryGlands: "", lymphNodes: "", labialMucosa: "", buccalMucosa: "",
        gingiva: "", alveolarRidge: "", vestibule: "", tongue: "",
        floorOfMouth: "", hardPalate: "", softPalateUvulaOropharynx: "",
        tmj: "", missedExtracted: "", filled: "", decayed: "",
        discolored: "", malposed: "", wastingDisease: ""
    },
    radiographicInterpretation: {
        horizontalBoneLoss: "", verticalBoneLoss: "",
        furcationInvolvement: "", otherFindings: ""
    },
    diagnosis: "",
    prognosis: "",
    periodontalChart: teethNumbers.map(createTooth),
    treatmentPlan: {
        systemicPhase: "", acutePhase: "", diseaseControlPhase: "",
        definitivePhase: "", maintenancePhase: "",
    },
    periodontalExamination: {
        hygiene: { depositsPlaque: "Heavy" },
        calculus: { supragingival: "Heavy", subgingival: "Heavy" },
        gingiva: {
            color: "", size: "", shape: "", consistency: "", texture: "",
            recession: "", bleedingOnProbing: "", exudate: "",
            functionInvolvment: "", mucogingivalProblems: "",
            occlusalRelationship: "", fremitus: "",
        },
        teeth: [
            { tooth: 7, top: 0, bottom: 0 }, { tooth: 6, top: 0, bottom: 0 },
            { tooth: 5, top: 0, bottom: 0 }, { tooth: 4, top: 0, bottom: 0 },
            { tooth: 3, top: 0, bottom: 0 }, { tooth: 2, top: 0, bottom: 0 },
            { tooth: 1, top: 0, bottom: 0 }, { tooth: 1, top: 0, bottom: 0 },
            { tooth: 2, top: 0, bottom: 0 }, { tooth: 3, top: 0, bottom: 0 },
            { tooth: 4, top: 0, bottom: 0 }, { tooth: 5, top: 0, bottom: 0 },
            { tooth: 6, top: 0, bottom: 0 }, { tooth: 7, top: 0, bottom: 0 },
        ]
    },
};

const initialEndodonticsData = {
    subjectives: {
        natureOfPain: "None", onset: "Dull", location: "Localized",
        radiatingTo: "", duration: "Seconds",
        intiatedByCold: "", intiatedByHeat: "", intiatedBySweets: "",
        intiatedBySpontaneousPain: "", intiatedByPalpation: "",
        intiatedByMastication: "", intiatedBySupination: "",
        relievedByCold: "", relievedByHeat: "", relievedByOTCMeds: "", relievedByNareMeds: "",
    },
    objectives: {
        extraoral: { facialSwelling: "Yes", lymphNodes: "Yes", swollen: "Yes" },
        intraoral: {
            swelling: "Yes (WNL)", sinusTract: "Yes", softTissues: "Yes",
            clinicalCrown: { restoration: "", caries: "", fracture: "", exposure: "", discoloration: "" }
        }
    },
    radiographic: {
        crown: { wnl: false, caries: false, restoration: false, crown: false, denseInDente: false },
        pulpChamber: { wnl: false, pulpStone: false, exposure: false, resorption: false, perforation: false },
        alveolarBone: { wnl: false, apicalRadiolucency: false, lateralRadiolucency: false, apLatOpacity: false, crestalBoneLoss: false },
        roots: { wnl: false, curvature: false, dilaceration: false, resorption: false, fracture: false, perforation: false, openApex: false, sinus: false },
        rootCanal: { wnl: false, calcification: false, bifurcated: false, resorption: false, perforation: false, furcation: false, priorRCT: false },
        laminaDura: { wnl: false, obscure: false, broken: false, widened: false },
        tracesTo: ''
    },
    assessment: {
        diagnosis: { pulpal: "WNL", periapical: "WNL" },
        etiology: { caries: false, restoration: false, priorRCT: false, iatrogenic: false, coronalLeakage: false, trauma: false, perio: false },
        prognosis: "Good",
    },
    treatmentPlan: {
        endodontic: { rct: false, retreatment: false, incisionDrainage: false, apexificationVPT: false, apicoectomy: false, perforationResorptionRepair: false },
        periodontal: { scaling: false, curettage: false, crownLengthening: false, rootAmputation: false, hemisection: false, extraction: false },
        restorative: { temporary: false, postCore: false, composite: false, onlayCrown: false, bleaching: false },
    },
};

function flattenMedicalHistory(mh) {
    const SIMPLE_FIELDS = [
        "heartProblems", "liverProblems", "kidneyProblems", "lungProblems",
        "thyroidProblems", "pregnancy", "medications", "surgeries",
        "fainted", "prolongedBleeding", "allergies",
    ];
    const flat = {};
    SIMPLE_FIELDS.forEach((f) => {
        flat[f] = mh[f]?.checked ?? false;
        if (mh[f]?.details) flat[`${f}Details`] = mh[f].details;
    });
    flat.diabetes = mh.diabetes?.checked ?? false;
    flat.hba1c = mh.diabetes?.hba1c ?? "";
    flat.other = mh.other ?? { found: false, details: "" };
    flat.familyAndSocialHistory = mh.familyAndSocialHistory ?? { diseases: "", person: "" };
    return flat;
}

export default function PatientInfoProvider({ children }) {
    const { currentUser, token } = useContext(UsersContext);
    const router = useRouter();

    const [generalData, setGeneralData] = useState(initialGeneralData);
    const [periodonticsData, setPeriodonticsData] = useState(initialPeriodonticsData);
    const [endodonticsData, setEndodonticsData] = useState(initialEndodonticsData);
    const [isInitialized, setIsInitialized] = useState(false);

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
        medicalHistory: initialFileMedicalHistory,
        dentalHistory: {
            senstivity: false, chewingDifficulty: false, bleedingGums: false,
            mouthUlcers: false, foodCatch: false, headaches: false,
            jawPain: false, teethGrinding: false, teethBreaking: false,
            mobileTeeth: false, badBreath: false, dryMouth: false,
            oralHistory: { extractedTeeth: false, bridge: false, denture: false, braces: false, problems: false },
            lastDentalAppointment: "", lastDentalAppointmentOperation: "",
            lastDentalXray: "",
            smoking: { isSmoking: false, sinceWhen: "", howManyPerDay: "" },
            comments: ""
        },
        steps: [],
        prePatientImage: [],
        postPatientImage: [],
    });

    const [isEditing, setIsEditing] = useState(false);
    const [submitModal, setSubmitModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isDirty, setIsDirty] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    function resetInfo() {
        setGeneralData(initialGeneralData);
        setEndodonticsData(initialEndodonticsData);
        setPeriodonticsData(initialPeriodonticsData);
    }

    function validateFile(file) {
        const newErrors = {};
        if (!file.patientName?.trim()) newErrors.patientName = "Name is required";
        if (!file.gender) newErrors.gender = "Gender is required";
        if (!file.birthDate) newErrors.birthDate = "Birth date is required";
        if (!file.address?.trim()) newErrors.address = "Address is required";
        if (!file.phone?.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\+?[\d\s\-()]{7,15}$/.test(file.phone.trim())) {
            newErrors.phone = "Please enter a valid phone number";
        }
        if (file.physicianPhone?.trim() && !/^\+?[\d\s\-()]{7,15}$/.test(file.physicianPhone.trim())) {
            newErrors.physicianPhone = "Please enter a valid Egyptian phone number";
        }
        if (!file.occupation?.trim()) newErrors.occupation = "Occupation is required";
        return newErrors;
    }

    async function handleSave(dept) {
        setIsLoading(true);
        try {
            if (!currentUser?.id) { alert("User not authenticated"); return; }

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
                departmentData: dept === "periodontics" ? periodonticsData ?? {} : endodonticsData ?? {},
                medicalHistory: flattenMedicalHistory(generalData.medicalHistory),
                dentalHistory: generalData.dentalHistory ?? {},
            };

            Object.entries(payload).forEach(([key, value]) => {
                if (typeof value === "object" && value !== null) {
                    formData.append(key, JSON.stringify(value));
                } else {
                    formData.append(key, value ?? "");
                }
            });
            formData.append("TreatmentStep.title", generalData.firstStep?.title ?? "");
            formData.append("TreatmentStep.description", generalData.firstStep?.desc ?? "");
            formData.append("TreatmentStep.date", generalData.firstStep?.date ?? "");

            const preImages = Array.isArray(generalData.prePatientImage)
                ? generalData.prePatientImage
                : generalData.prePatientImage ? [generalData.prePatientImage] : [];
            preImages.forEach((img) => { if (img instanceof File) formData.append("PrePatientImages", img); });

            const postImages = Array.isArray(generalData.postPatientImage)
                ? generalData.postPatientImage
                : generalData.postPatientImage ? [generalData.postPatientImage] : [];
            postImages.forEach((img) => { if (img instanceof File) formData.append("PostPatientImages", img); });

            if (generalData.xRay instanceof File) formData.append("XRay", generalData.xRay);

            await axios.post(
                "https://oralink.runasp.net/api/patient-files/create-patient-file",
                formData,
                { headers: { "Authorization": `Bearer ${token}` } }
            );

            resetInfo();
            setIsDirty(false);
            localStorage.removeItem("formDraft");
            router.replace("/my-files");
        } catch (err) {
            const serverData = err.response?.data;
            console.error("Status:", err.response?.status);
            console.error("Server response:", JSON.stringify(serverData, null, 2));
            const msg =
                serverData?.Message || serverData?.message || serverData?.title ||
                (typeof serverData === "string" ? serverData : null) || "Failed to create file";
            const validationErrors = serverData?.errors;
            const validationMsg = validationErrors
                ? "\n\nValidation errors:\n" + Object.entries(validationErrors)
                    .map(([field, msgs]) => `\u2022 ${field}: ${Array.isArray(msgs) ? msgs.join(", ") : msgs}`)
                    .join("\n")
                : "";
            alert(msg + validationMsg);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === "hidden" && isDirty) {
                localStorage.setItem("formDraft", JSON.stringify({
                    generalData: { ...generalData, prePatientImage: null, postPatientImage: null, xRay: null },
                    periodonticsData,
                    endodonticsData,
                }));
            }
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
    }, [isDirty, generalData, periodonticsData, endodonticsData]);

    useEffect(() => {
        if (!isInitialized) { setIsInitialized(true); return; }
        setIsDirty(true);
    }, [generalData]);

    return (
        <PatientInfoContext.Provider value={{
            isDirty, setIsDirty,
            generalData, setGeneralData,
            endodonticsData, setEndodonticsData,
            periodonticsData, setPeriodonticsData,
            handleSave,
            isEditing, setIsEditing,
            file, setFile,
            submitModal, setSubmitModal,
            isLoading, setIsLoading,
            formErrors, setFormErrors, validateFile,
        }}>
            {children}
        </PatientInfoContext.Provider>
    );
}