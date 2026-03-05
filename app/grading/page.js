"use client";

import GradingStats from "../Components/GradingStats";
import GradingTabs from "../Components/GradingTabs";
import Header from "../Components/General/Header";
import ProtectedRoute from "../Components/General/ProtectedRoute";
import { useEffect, useState } from "react";
import axios from "axios";

export default function GradingPanelPage() {
    const [stats, setStats] = useState({
        ungraded: 0,
        graded: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                setLoading(true);

                const response = await axios.get(
                    "https://oralink.runasp.net/api/files/status-count"
                );

                setStats({
                    ungraded: response.data.notGradedFiles ?? 0,
                    graded: response.data.gradedFiles ?? 0
                });
            } catch (error) {
                console.error("Error fetching grading stats:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);
    return (
        <ProtectedRoute allowedRoles={["Head of Department", "Doctor"]}>
            <div className="container-fluid">
                <Header title={'Grading Dashboard'} desc={'Review and grade student submissions'} />

                <hr className="m-0" />

                <GradingStats stats={stats} loading={loading} />

                <GradingTabs stats={stats} />
            </div>
        </ProtectedRoute>
    );
}