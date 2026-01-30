import Link from "next/link";
import HodGettingStarted from "./HodGettingStarted";
import HodOverview from "./HodOverview";

export default function HodDashboard() {
    return (
        <>
            <div className="p-4">
                <p>Overview</p>
                <HodOverview />
                <p>Quick Actions</p>
                <div className="row align-items-center g-3">
                    <div className="col-12 col-sm-6 col-lg-4">
                        <Link href={'/students'} className="d-flex flex-column bg-white rounded shadow action text-decoration-none p-3">
                            <span className="w-25 mb-3 text-center bg-primary text-white rounded p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-7 h-7 text-white" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                            </span>
                            <p className="mb-2">View All Students</p>
                            <p className="m-0 text-muted">Manage and review registered students</p>
                        </Link>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4">
                        <Link href={'/patientfiles'} className="d-flex flex-column bg-white rounded shadow action text-decoration-none p-3">
                            <span className="w-25 mb-3 text-center bg-success text-white rounded p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-open w-7 h-7 text-white" aria-hidden="true"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"></path></svg>
                            </span>
                            <p className="mb-2">View All Patient Files</p>
                            <p className="m-0 text-muted text-truncate">Search and filter patient files by student or department</p>
                        </Link>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4">
                        <Link href={'/grading'} className="d-flex flex-column bg-white rounded shadow action text-decoration-none p-3">
                            <span className="w-25 mb-3 text-center bg-warning text-white rounded p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-check w-7 h-7 text-white" aria-hidden="true"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
                            </span>
                            <p className="mb-2">Grading Panel</p>
                            <p className="m-0 text-muted">Review and grade student submissions</p>
                        </Link>
                    </div>
                </div>
            </div>

            <HodGettingStarted />
        </>
    );
}