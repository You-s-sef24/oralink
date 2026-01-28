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
import ViewEndodonticsFile from "./Endodontics/ViewEndodonticsFile";
import Loading from "../loading";
import { useParams } from "next/navigation";

export default function StudentViewFile() {
    const { fileId } = useParams();
    const { currentUser } = useContext(UsersContext);
    const { file, setFile } = useContext(PatientInfoContext);
    const files = currentUser?.files ?? [];
    const { state, setState } = useContext(StatesContext);

    useEffect(() => {
        setFile(null);
        setState(1);
        console.log("currentUser:", currentUser);
        console.log("files:", files);
        console.log("fileId:", fileId);

        if (!files.length) return;

        const foundFile = files.find(f => Number(f.fileId) == Number(fileId));
        console.log("foundFile:", foundFile);

        if (foundFile) {
            setFile(foundFile);
        }
    }, [files, fileId, setFile]);

    if (!files.length) {
        return <Loading />;
    }

    if (!file) {
        return <div>No File Found</div>;
    }

    return (
        <div className="container-fluid pt-5">
            <Header title={'Patient File'} desc={'View and Edit Patient File'} page={'Patient File'} file={file} setFile={setFile} />

            <hr className="mt-0" />

            {
                file.department === 'Periodontics' ?
                    state === 1 ?
                        <ViewGeneralForm />
                        : state === 2 ?
                            <ViewPeriodonticsPage1 />
                            : state === 3 ? <ViewPeriodonticsPage2 />
                                : state === 4 ? <ViewPeriodonticsPage3 />
                                    : <ViewPeriodonticsPage4 />
                    : file.department === 'Endodontics' ?
                        state === 1 ?
                            <ViewGeneralForm />
                            :
                            <ViewEndodonticsFile />
                        : <></>
            }
            {
                file.department === "Periodontics" ?
                    <div className="d-flex justify-content-between m-3">
                        {state === 1 ? <div></div> : <button className="btn btn-primary" onClick={() => { setState(state - 1) }}>Back</button>}
                        {state === 5 ? <div></div> : <button className="btn btn-primary" onClick={() => { setState(state + 1) }}>Next</button>}
                    </div>
                    : file.department === "Endodontics" ?
                        <div className="d-flex justify-content-between m-3">
                            {state === 1 ? <div></div> : <button className="btn btn-primary" onClick={() => { setState(state - 1) }}>Back</button>}
                            {state === 2 ? <div></div> : <button className="btn btn-primary" onClick={() => { setState(state + 1) }}>Next</button>}
                        </div>
                        : <div className="d-flex justify-content-between m-3">
                        </div>
            }
        </div>
    );
}