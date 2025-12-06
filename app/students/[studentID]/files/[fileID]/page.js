"use client";

import Header from "@/app/Components/Header";
import { UsersContext } from "@/app/Contexts/UsersContext";
import { useContext, use } from "react";

export default function File({ params }) {
    const { fileID } = use(params);

    return (
        <div className="container-fluid pt-5">
            <Header title={'Patient File Review'} desc={`File ID: ${fileID}`} />

            <hr className="m-0" />

        </div>
    );
}