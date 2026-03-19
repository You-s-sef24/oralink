import DoctorGettingStarted from "./DoctorGettingStarted";
import QuickAction from "../General/QuickActionCard";

export default function DoctorHome() {
    return (
        <>
            <div className="p-4">
                <p>Quick Actions</p>
                <div className="row align-items-center g-3">
                    <div className="col-12 col-sm-6 col-lg-4">
                        <QuickAction
                            title={'View All Students'}
                            desc={'Manage and review registered students.'}
                            svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-7 h-7 text-white" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>}
                            spanColor={'primary'}
                            link={'/students'}
                        />
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4">
                        <QuickAction
                            title={'View All Patient Files'}
                            desc={'Search and filter patient files by student or department.'}
                            svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-open w-7 h-7 text-white" aria-hidden="true"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"></path></svg>}
                            spanColor={'success'}
                            link={'/patientfiles'}
                        />
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4">
                        <QuickAction
                            title={'Grading Panel'}
                            desc={'Review and grade student submissions.'}
                            svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-check w-7 h-7 text-white" aria-hidden="true"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>}
                            spanColor={'warning'}
                            link={'/grading'}
                        />
                    </div>
                </div>
            </div>

            <DoctorGettingStarted />
        </>
    );
}