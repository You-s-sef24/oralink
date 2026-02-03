"use client";

import Header from "@/app/Components/General/Header";
import SupervisorViewFile from "@/app/Components/Supervisor/SupervisorViewFile";
import { UsersContext } from "@/app/Contexts/UsersContext";
import { useParams } from "next/navigation";
import { useContext, use } from "react";

export default function File() {
    const { fileId } = useParams();

    return (
        <div className="container-fluid">
            <Header title={'Patient File Review'} desc={`File ID: ${fileId}`} />

            <hr className="m-0" />

            <SupervisorViewFile fileId={fileId} />
        </div>
    );
}