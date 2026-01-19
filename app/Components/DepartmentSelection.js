"use client";

import { useContext } from "react";
import { StatesContext } from "../Contexts/StatesContext";
import { PatientInfoContext } from "../Contexts/PatientInfoContext";

export default function DepartmentSelection() {
    const { generalData, setGeneralData } = useContext(PatientInfoContext);
    const { state, setState } = useContext(StatesContext);

    return (
        <div>
            <h3>Select Department</h3>
            <p>Choose the department for this patient&apos;s treatment</p>
            <div className="row g-3">
                <div className="col-12 col-sm-6 col-lg-4">
                    <button className="d-flex flex-column bg-white rounded shadow action w-100 p-3" onClick={() => {
                        setGeneralData({ ...generalData, department: 'Periodontics' });
                        setState(state + 1)
                    }}>
                        <span className="w-25 mb-3 text-center bg-danger text-white rounded p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart w-7 h-7 text-white" aria-hidden="true"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
                        </span>
                        <p className="text-start mb-2">Periodontics</p>
                        <p className="text-start m-0 text-muted">Gum disease treatment and prevention</p>
                    </button>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                    <button className="d-flex flex-column bg-white rounded shadow action w-100 p-3" onClick={() => {
                        setGeneralData({ ...generalData, department: 'Restorations & Prosthodontics' });
                        setState(state + 1)
                    }}>
                        <span className="w-25 mb-3 text-center bg-primary text-white rounded p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className="lucide lucide-wrench w-7 h-7 text-white" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
                        </span>
                        <p className="text-start mb-2">Restorations & Prosthodontics</p>
                        <p className="text-start m-0 text-muted">Fillings, crowns, bridges, and dentures</p>
                    </button>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                    <button
                        className="d-flex flex-column bg-white rounded shadow action w-100 p-3"
                        onClick={() => {
                            setGeneralData({ ...generalData, department: 'Endodontics' });
                            setState(state + 1);
                        }}
                    >
                        <span className="w-25 mb-3 text-center bg-warning text-white rounded p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tooth w-7 h-7 text-white" aria-hidden="true">                                <path d="M12 5.5c1.5-1.5 4.5-1.5 6 0s1.5 4.5 0 6l-1.5 6.5c-.3 1.2-2.2 1.2-2.5 0L12 14l-2 4c-.3 1.2-2.2 1.2-2.5 0L6 11.5c-1.5-1.5-1.5-4.5 0-6s4.5-1.5 6 0Z" />                                <path d="M12 14v-4" /></svg>
                        </span>

                        <p className="text-start mb-2">Endodontics</p>
                        <p className="text-start m-0 text-muted">
                            Root canal treatment and management of tooth pulp infections
                        </p>
                    </button>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                    <button className="d-flex flex-column bg-white rounded shadow action w-100 p-3" onClick={() => {
                        setGeneralData({ ...generalData, department: 'Cleaning / Prophylaxis' });
                        setState(state + 1)
                    }}>
                        <span className="w-25 mb-3 text-center bg-success text-white rounded p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className="lucide lucide-sparkles w-7 h-7 text-white" aria-hidden="true"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                        </span>
                        <p className="text-start mb-2">Cleaning / Prophylaxis</p>
                        <p className="text-start m-0 text-muted">Professional dental cleaning and maintenance</p>
                    </button>
                </div>
            </div>
        </div>
    );
}