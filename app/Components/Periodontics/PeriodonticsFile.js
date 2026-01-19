"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { UsersContext } from "../../Contexts/UsersContext";
import { StatesContext } from "../../Contexts/StatesContext";
import { PatientInfoContext } from "../../Contexts/PatientInfoContext";
import PeriodonticsPage2 from "./PeriodonticsPage2";
import PeriodonticsPage3 from "./PeriodonticsPage3";

export default function PeriodonticsFile() {
    const { info, setInfo, resetInfo } = useContext(PatientInfoContext);
    const [step, setStep] = useState(1);
    const { state, setState } = useContext(StatesContext);
    const { currentUser, setCurrentUser } = useContext(UsersContext);
    const router = useRouter();

    function handleSave() {
        const newPatientsFiles = [...currentUser.files, info];
        setCurrentUser({ ...currentUser, files: newPatientsFiles });
        resetInfo();
        router.push('/dashboard');
    }

    function handleBack() {
        if (step === 1) {
            setState(state - 1);
            return;
        }
        if (step >= 2) {
            setStep(step - 1);
            return;
        }
    }

    function handleNext() {
        setStep(step + 1);
        return;
    }

    return (
        <div className="bg-white rounded shadow p-3">
            <h1 className="fw-bold text-center text-primary">Department of Oral Medicine, Periodontology and Diagnosis</h1>
            <p className="text-center">Faculty of Dentistry</p>
            <hr />
            {step === 1 ? (
                <></>
            ) : step === 2 ? (
                <PeriodonticsPage2 info={info} setInfo={setInfo} />
            ) : step === 3 ? (
                <PeriodonticsPage3 info={info} setInfo={setInfo} />
            ) : (
                <></>
            )
            }

            <div className="d-flex justify-content-between gap-2">
                <button className="d-flex align-items-center gap-1 btn btn-secondary my-3" onClick={handleBack}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className="lucide lucide-chevron-left w-4 h-4" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg>
                    Back
                </button>
                {step === 4 ? (
                    <button className="btn btn-primary my-3" onClick={handleSave}>
                        Save Full Patient File
                    </button>
                ) : (
                    <button className="btn btn-primary my-3" onClick={handleNext}>
                        Next
                    </button>
                )
                }
            </div>
        </div >
    );
}