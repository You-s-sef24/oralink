import StudentGettingStarted from "./StudentGettingStarted";
import QuickAction from "../General/QuickActionCard";

export default function StudentHome() {
    return (
        <>
            <div className="p-4">
                <p>Quick Actions</p>
                <div className="row g-3">
                    <div className="col-12 col-sm-6 col-lg-3">
                        <QuickAction
                            title={'Create New Patient File'}
                            desc={'Register a new patient and fill their medical forms.'}
                            svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className="lucide lucide-file-text w-7 h-7 text-white" aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>}
                            spanColor={'primary'}
                            link={'/createnewfile'}
                        />
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3">
                        <QuickAction
                            title={'Search Existing Patient File'}
                            desc={'Find and view patient records by name or ID.'}
                            svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search w-7 h-7 text-white" aria-hidden="true"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>}
                            spanColor={'primary'}
                            link={'/my-files'}
                        />
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3">
                        <QuickAction
                            title={'Upload X-ray for AI Diagnosis'}
                            desc={'Upload dental X-rays for automated AI analysis.'}
                            svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className="lucide lucide-upload w-7 h-7 text-white" aria-hidden="true"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>}
                            spanColor={'primary'}
                            link={'/upload-xray'}
                        />
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3">
                        <QuickAction
                            title={'View DSS Reports'}
                            desc={'Access and review detailed diagnostic reports.'}
                            svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide w-7 h-7 text-white" aria-hidden="true">
                                {/* Brain outline */}
                                <path d="M9 3a4 4 0 0 0-4 4c0 1.5.8 2.8 2 3.5V13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2.5c1.2-.7 2-2 2-3.5a4 4 0 0 0-4-4" />
                                {/* Decision nodes */}
                                <circle cx="9" cy="10" r="1" fill="currentColor" />
                                <circle cx="15" cy="10" r="1" fill="currentColor" />
                                {/* Output line */}
                                <path d="M12 15v3" />
                                <path d="M9 18h6" />
                                {/* Checkmark - decision made */}
                                <path d="M10 21l1.5 1.5L14 20" />
                            </svg>}
                            spanColor={'primary'}
                            link={'/dss-report'}
                        />
                    </div>
                </div>
            </div>
            <StudentGettingStarted />
        </>
    );
}