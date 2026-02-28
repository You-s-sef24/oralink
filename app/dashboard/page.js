"use client";

import Header from "../Components/General/Header";
import HodDashboard from "../Components/HODDashboard/HodDashboard";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UsersContext } from "../Contexts/UsersContext";

export default function Dashboard() {
    const { currentUser } = useContext(UsersContext);
    const router = useRouter();

    return (
        <div className="container-fluid">
            <Header title={"Head of Department Dashboard"} desc={"View Analytics and Performance"} />

            <hr className="m-0" />

            <HodDashboard />
        </div>
    );
}