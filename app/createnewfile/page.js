"use client";

import { useContext } from "react";
import GeneralForm from "../Components/GeneralForm";
import Header from "../Components/Header";
import './style.css';
import DepartmentSelection from "../Components/DepartmentSelection";
import PeriodonticsFile from "../Components/Periodontics/PeriodonticsFile";
import { StatesContext } from "../Contexts/StatesContext";
import { PatientInfoContext } from "../Contexts/PatientInfoContext";
import EndodonticsFile from "../Components/Endodontics/EndodonticsFile";

export default function CreateNewFilePage() {
    const { generalData } = useContext(PatientInfoContext);
    const { state, setState } = useContext(StatesContext);

    return (
        <div className="container-fluid pt-5">
            <Header title={'Create New Patient File'} desc={'Complete all required forms to register a new patient'} />

            <hr className="m-0" />

            <div className="row justify-content-between align-items-center mt-3">
                <div className="col d-flex flex-column text-center">
                    <span className={`d-inline-flex justify-content-center align-items-center rounded-circle ${state === 1 ? 'bg-primary text-white' : 'bg-gray text-dark'} p-2 mx-auto`} style={{ width: "40px", height: "40px" }}>1</span>
                    <label>General Information</label>
                </div>
                <div className="col d-flex flex-column text-center">
                    <span className={`d-inline-flex justify-content-center align-items-center rounded-circle ${state === 2 ? 'bg-primary text-white' : 'bg-gray text-dark'} p-2 mx-auto`} style={{ width: "40px", height: "40px" }}>2</span>
                    <label>Select Department</label>
                </div>
                <div className="col d-flex flex-column text-center">
                    <span className={`d-inline-flex justify-content-center align-items-center rounded-circle ${state === 3 ? 'bg-primary text-white' : 'bg-gray text-dark'} p-2 mx-auto`} style={{ width: "40px", height: "40px" }}>3</span>
                    <label>Department Details</label>
                </div>
            </div>

            <hr />

            {state === 1 ? (
                <GeneralForm />
            ) : state === 2 ? (
                <>
                    <DepartmentSelection />
                    <button className="d-flex align-items-center gap-1 btn btn-secondary my-3" onClick={() => { setState(state - 1) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className="lucide lucide-chevron-left w-4 h-4" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg>
                        Back to General Form
                    </button>
                </>
            ) : (
                <>
                    {generalData.department === 'Periodontics' ?
                        (
                            <PeriodonticsFile />
                        )
                        : generalData.department === 'Restorations & Prosthodontics' ? (
                            <></>
                        ) : generalData.department === 'Endodontics' ? (
                            <EndodonticsFile />
                        ) : (
                            <></>
                        )
                    }
                </>
            )
            }
        </div>
    );
}