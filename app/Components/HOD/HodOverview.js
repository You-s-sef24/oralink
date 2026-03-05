"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function HodOverview() {

    const [stats, setStats] = useState({
        totalStudents: 0,
        totalFiles: 0,
        filesGraded: 0,
        averageGrade: 0,
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOverview = async () => {
            try {
                const response = await axios.get("https://oralink.runasp.net/api/overview"); 
                setStats(response.data);
            } catch (err) {
                console.error(err);
                setError("Failed to load data");
            } finally {
                setLoading(false);
            }
        };

        fetchOverview();
    }, []);

    if (loading) {
        return <div
            className="d-flex justify-content-center align-items-center"
        >
            <div
                className="spinner-border text-primary spinner-border-sm"
                role="status"
            >
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
        ;
    }

    if (error) {
        return <p className="text-danger">{error}</p>;
    }
    return (
        <div className="row justify-content-between g-2 mb-5">
            <div className="col-6 col-sm-3 col-md-2 col-lg-3">
                <div className="d-flex flex-column bg-white rounded shadow p-3">
                    <span className="w-50 mb-3 text-center bg-primary text-white rounded p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-6 h-6" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                    </span>
                    <p>{stats.totalStudents}</p>
                    <p className="text-muted m-0">Total Students</p>
                </div>
            </div>
            <div className="col-6 col-sm-3 col-md-2 col-lg-3">
                <div className="d-flex flex-column bg-white rounded shadow p-3">
                    <span className="w-50 mb-3 text-center bg-secondary text-white rounded p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-6 h-6" aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                    </span>
                    <p>{stats.totalFiles}</p>
                    <p className="text-muted m-0">Total Files</p>
                </div>
            </div>
            <div className="col-6 col-sm-3 col-md-2 col-lg-3">
                <div className="d-flex flex-column bg-white rounded shadow p-3">
                    <span className="w-50 mb-3 text-center bg-success text-white rounded p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-check w-6 h-6" aria-hidden="true"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
                    </span>
                    <p>{stats.filesGraded}</p>
                    <p className="text-muted m-0">Files Graded</p>
                </div>
            </div>
            <div className="col-6 col-sm-3 col-md-2 col-lg-3">
                <div className="d-flex flex-column bg-white rounded shadow p-3">
                    <span className="w-50 mb-3 text-center bg-warning text-white rounded p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-6 h-6" aria-hidden="true"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                    </span>
                    <p>{stats.averageGrade}</p>
                    <p className="text-muted m-0">Average Grade</p>
                </div>
            </div>
        </div>
    );
}