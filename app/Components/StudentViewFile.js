"use client";

import Header from "@/app/Components/Header";
import { UsersContext } from "@/app/Contexts/UsersContext";
import { use, useContext, useEffect, useState } from "react";
import ViewGeneralForm from "./ViewGeneralForm";
import { PatientInfoContext } from "../Contexts/PatientInfoContext";

export default function StudentViewFile({ params }) {
    const { fileId } = params;
    const { currentUser } = useContext(UsersContext);
    const { file, setFile } = useContext(PatientInfoContext);
    const files = currentUser?.files ?? [];

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

            <ViewGeneralForm />
        </div>
    );
}