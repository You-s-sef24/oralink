"use client";

import Header from "@/app/Components/Header";
import { UsersContext } from "@/app/Contexts/UsersContext";
import { useContext, useEffect } from "react";
import ViewGeneralForm from "./ViewGeneralForm";
import { PatientInfoContext } from "../Contexts/PatientInfoContext";
import { StatesContext } from "../Contexts/StatesContext";
import ViewPeriodonticsPage1 from "./Periodontics/ViewPeriodonticsPage1";
import ViewPeriodonticsPage2 from "./Periodontics/ViewPeriodonticsPage2";
import ViewPeriodonticsPage3 from "./Periodontics/ViewPeriodonticsPage3";
import ViewPeriodonticsPage4 from "./Periodontics/ViewPeriodonticsPage4";

export default function StudentViewFile({ params }) {
    const { fileId } = params;
    const { currentUser } = useContext(UsersContext);
    const { file, setFile } = useContext(PatientInfoContext);
    const files = currentUser?.files ?? [];
    const { state, setState } = useContext(StatesContext);

    useEffect(() => {
        console.log("currentUser:", currentUser);
        console.log("files:", files);
        console.log("fileId:", fileId);

        if (!files.length) return;

        const foundFile = files.find(f => String(f.id) === String(fileId));
        console.log("foundFile:", foundFile);

        if (foundFile) {
            setFile(foundFile);
        }
    }, [files, fileId, setFile]);


    if (!file) {
        return <div className="d-flex justify-content-center align-items-center vh-100">
            <div
                className="alert alert-danger"
                role="alert"
            >
                <strong>No File Found</strong>
            </div>
        </div>
    }

    return (
        <div className="container-fluid pt-5">
            <Header title={'Patient File'} desc={'View and Edit Patient File'} page={'Patient File'} file={file} setFile={setFile} />

            <hr className="mt-0" />

            {state === 1 ?
                <ViewGeneralForm />
                : state === 2 ?
                    <ViewPeriodonticsPage1 />
                    : state === 3 ? <ViewPeriodonticsPage2 />
                        : state === 4 ? <ViewPeriodonticsPage3 />
                            : <ViewPeriodonticsPage4 />
            }
            <div className="d-flex justify-content-between m-3">
                {state === 1 ? <div></div> : <button className="btn btn-primary" onClick={() => { setState(state - 1) }}>Back</button>}
                {state === 5 ? <div></div> : <button className="btn btn-primary" onClick={() => { setState(state + 1) }}>Next</button>}
            </div>
        </div>
    );
}