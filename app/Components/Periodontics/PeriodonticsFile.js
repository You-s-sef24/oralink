"use client";

import { useContext, useState } from "react";
import { StatesContext } from "../../Contexts/StatesContext";
import { PatientInfoContext } from "../../Contexts/PatientInfoContext";
import PeriodonticsPage1 from "./PeriodonticsPage1";
import PeriodonticsPage2 from "./PeriodonticsPage2";
import PeriodonticsPage4 from "./PeriodonticsPage4";
import PeriodonticsPage3 from "./PeriodonticsPage3";
import PeriodonticsPage5 from "./PeriodonticsPage5";

export default function PeriodonticsFile() {
    const [step, setStep] = useState(1);
    const { periodonticsData, setPeriodonticsData, generalData, setGeneralData, handleSave, isLoading, setIsLoading } = useContext(PatientInfoContext);
    const { state, setState } = useContext(StatesContext);
    const [error, setError] = useState();

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

    function handleSaveWithValidation() {
        const procedures = generalData.treatmentProcedures;
        const step1 = procedures?.[0];

        if (!step1?.title?.trim() || !step1?.desc?.trim() || !step1?.date) {
            setError("Please fill in all Treatment Procedure fields before saving.");
            return;
        }

        handleSave('periodontics');
    }

    return (
        <div className="bg-white rounded shadow p-3">
            <h1 className="fw-bold text-center text-primary">Department of Oral Medicine, Periodontology and Diagnosis</h1>
            <p className="text-center">Faculty of Dentistry</p>
            {error && <div
                className="alert alert-danger alert-dismissible fade show"
                role="alert"
            >
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    onClick={() => { setError() }}
                ></button>

                <strong>Please fill in all Treatment Procedure fields before saving.</strong>
            </div>
            }
            <hr />
            {step === 1 ? (
                <PeriodonticsPage1 info={periodonticsData} setInfo={setPeriodonticsData} />
            ) : step === 2 ? (
                <PeriodonticsPage2 info={periodonticsData} setInfo={setPeriodonticsData} />
            ) : step === 3 ? (
                <PeriodonticsPage3 />
            ) : step === 4 ? (
                <PeriodonticsPage4 info={periodonticsData} setInfo={setPeriodonticsData} />
            ) : (
                <PeriodonticsPage5 info={generalData} setInfo={setGeneralData} />
            )
            }

            <div className="d-flex justify-content-between align-items-center gap-2">
                <button className="d-flex align-items-center gap-1 btn btn-secondary my-3" onClick={handleBack}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className="lucide lucide-chevron-left w-4 h-4" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg>
                    Back
                </button>

                <p className="m-0">Page {step} / 5</p>

                {step === 5 ? (
                    <button className="btn btn-primary my-3" disabled={isLoading} onClick={() => {
                        handleSaveWithValidation('periodontics');
                    }}>
                        {isLoading ? (<div className="d-flex align-items-center gap-1">
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Saving...
                        </div>
                        ) : (<div className="d-flex align-items-center gap-1">
                            <i className="bi bi-floppy"></i>
                            Save Full Patient File
                        </div>)}
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