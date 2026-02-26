"use client";

import Header from "../Components/General/Header";
import XrayUploadBox from "../Components/AI/XrayUploadBox";
import XrayInfo from "../Components/AI/Xray Info";
import { useRouter } from "next/navigation";
import { UsersContext } from "../Contexts/UsersContext";
import { useContext, useEffect } from "react";

export default function UploadXrayPage() {
    const { currentUser } = useContext(UsersContext);
    const router = useRouter();

    return (
        <div className="container-fluid">
            <Header title={'X-ray AI Diagnosis'} desc={'Upload dental X-rays for automated AI analysis'} />

            <hr className="m-0" />

            <XrayUploadBox />

            <XrayInfo />
        </div>
    );
}