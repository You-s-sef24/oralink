"use client";

import Link from "next/link";
import HodGettingStarted from "./HodGettingStarted";
import HodOverview from "./HodOverview";
import QuickAction from "../General/QuickActionCard";
import SubmissionStatusBanner from "./SubmissionStatusBanner";
import SubmissionToggleModal from "./SubmissionToggleModal";
import { useState, useEffect } from "react";
import axios from "axios";

export default function HodHome() {
    const [submissionStatus, setSubmissionStatus] = useState({ isEnabled: true, deadlineDate: null });
    const [statusLoading, setStatusLoading] = useState(true);
    const [showToggleModal, setShowToggleModal] = useState(false);

    useEffect(() => {
        async function fetchStatus() {
            try {
                const res = await axios.get("https://oralink.runasp.net/api/deadline");
                setSubmissionStatus({
                    isEnabled: res.data?.isEnabled ?? true,
                    deadlineDate: res.data?.deadlineDate ?? null,
                });
            } catch (err) {
                console.error("Failed to fetch submission status:", err);
            } finally {
                setStatusLoading(false);
            }
        }
        fetchStatus();
    }, []);

    return (
        <>
            <div className="p-4">
                <p className="d-flex justify-content-between align-items-center">
                    Overview
                    <Link href={'/dashboard'}>
                        View Full Dashboard
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                        </svg>
                    </Link>
                </p>

                <SubmissionStatusBanner
                    isEnabled={submissionStatus.isEnabled}
                    deadlineDate={submissionStatus.deadlineDate}
                    loading={statusLoading}
                    onToggleClick={() => setShowToggleModal(true)}
                />

                <HodOverview />

                <p>Quick Actions</p>
                <div className="row align-items-center g-3">
                    <div className="col-12 col-sm-6 col-lg-3">
                        <QuickAction
                            title={'View All Students'}
                            desc={'Manage and review registered students.'}
                            svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>}
                            spanColor={'primary'}
                            link={'/students'}
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <QuickAction
                            title={'View All Patient Files'}
                            desc={'Search and filter patient files by student or department.'}
                            svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"></path></svg>}
                            spanColor={'success'}
                            link={'/patientfiles'}
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <QuickAction
                            title={'Grading Panel'}
                            desc={'Review and grade student submissions.'}
                            svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>}
                            spanColor={'warning'}
                            link={'/grading'}
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <QuickAction
                            title={'Upload X-ray for AI Diagnosis'}
                            desc={'Upload dental X-rays for automated AI analysis.'}
                            svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className="lucide lucide-upload w-7 h-7 text-white" aria-hidden="true"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>}
                            spanColor={'info'}
                            link={'/upload-xray'}
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <QuickAction
                            title={'View All Archived Files'}
                            desc={'Access and review archived student files and information.'}
                            svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-archive" viewBox="0 0 16 16"><path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" /></svg>}
                            spanColor={'secondary'}
                            link={'/archive'}
                        />
                    </div>
                </div>
            </div>

            <HodGettingStarted />

            <SubmissionToggleModal
                show={showToggleModal}
                isClose={() => setShowToggleModal(false)}
                isEnabled={submissionStatus.isEnabled}
                deadlineDate={submissionStatus.deadlineDate}
                onSuccess={(newStatus) => setSubmissionStatus(newStatus)}
            />
        </>
    );
}