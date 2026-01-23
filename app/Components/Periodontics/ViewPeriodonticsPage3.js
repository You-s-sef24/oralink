"use client";

import { useContext } from "react";
import ViewPeriodontalChart from "./ViewPeriodontalChart";
import { PatientInfoContext } from "@/app/Contexts/PatientInfoContext";
import PeriodontalChart from "./PeriodontalChart";

export default function ViewPeriodonticsPage3() {
    const { file, setFile, isEditing } = useContext(PatientInfoContext);
    return (
        isEditing ?
            <PeriodontalChart file={file} setFile={setFile} />
            :
            <ViewPeriodontalChart file={file} />
    );
}