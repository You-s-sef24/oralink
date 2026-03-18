"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { UsersContext } from "../../Contexts/UsersContext";
import Loading from "../../loading";

export default function Navbar() {
    const pathname = usePathname();
    const { currentUser, logout } = useContext(UsersContext);

    const linkClasses = (href) =>
        `list-group-item list-group-item-action py-3 ${pathname === href || pathname.startsWith(href + "/")
            ? "active text-white bg-primary"
            : "text-dark"
        }`;

    function closeOffcanvas() {
        const offcanvas = document.getElementById("offcanvasNavbar");
        const backdrop = document.querySelector(".offcanvas-backdrop");

        if (offcanvas) {
            offcanvas.classList.remove("show");
            offcanvas.setAttribute("aria-hidden", "true");
        }

        if (backdrop) {
            backdrop.remove();
        }

        document.body.classList.remove("offcanvas-backdrop", "modal-open");
        document.body.style.overflow = "auto";
    }


    return (
        <nav className="navbar navbar-light bg-white">
            <div className="container-fluid d-flex gap-2 align-items-center justify-content-start">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    data-bs-scroll="true"
                    aria-controls="offcanvasNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <img src="/OraLink (1).png" alt="OraLink" style={{ width: '15%' }} />
                <div
                    className="offcanvas offcanvas-start"
                    tabIndex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                >
                    <div className="offcanvas-header">
                        <img className="offcanvas-title" src="/OraLink (1).png" alt="OraLink" id="offcanvasNavbarLabel" style={{ width: '35%' }} />
                        <button
                            type="button"
                            className="btn-close text-reset"
                            onClick={closeOffcanvas}
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="list-group list-group-flush">
                            <Link href="/home" onClick={closeOffcanvas} className={`d-flex align-items-center ${linkClasses("/home")} rounded border-0 mb-2 gap-2`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
                                </svg>
                                <p className="m-0">Home</p>
                            </Link>
                            {currentUser?.role === "Student" ? (
                                <>
                                    <Link href="/my-files" onClick={closeOffcanvas} className={`d-flex align-items-center ${linkClasses("/my-files")} rounded border-0 mb-2 gap-2`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-open w-5 h-5" aria-hidden="true"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"></path></svg>
                                        <p className="m-0">My Files</p>
                                    </Link>

                                    <Link href="/upload-xray" onClick={closeOffcanvas} className={`d-flex align-items-center ${linkClasses("/upload-xray")} rounded border-0 mb-2 gap-2`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-upload w-5 h-5" aria-hidden="true"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
                                        <p className="m-0">Upload X-ray</p>
                                    </Link>
                                </>
                            ) : currentUser?.role === "Supervisor" ? (
                                <>
                                    <Link href="/pending-procedures" onClick={closeOffcanvas} className={`d-flex align-items-center ${linkClasses("/pending-procedures")} rounded border-0 mb-2 gap-2`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-check w-5 h-5" aria-hidden="true"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
                                        <p className="m-0">Pending Procedures</p>
                                    </Link>

                                    <Link href="/view-students" onClick={closeOffcanvas} className={`d-flex align-items-center ${linkClasses("/view-students")} rounded border-0 mb-2 gap-2`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-7 h-7" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                                        <p className="m-0">View All Students</p>
                                    </Link>

                                    <Link href="/view-cases" onClick={closeOffcanvas} className={`d-flex align-items-center ${linkClasses("/view-cases")} rounded border-0 mb-2 gap-2`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-open w-6 h-6" data-fg-d07u4="1.23:1.956:/src/app/components/quick-action-card.tsx:25:13:684:39:e:Icon"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"></path></svg>
                                        <p className="m-0">View All Patient Cases</p>
                                    </Link>
                                </>
                            ) : currentUser?.role === "Head of Department" ? (
                                <>
                                    <Link href="/dashboard" onClick={closeOffcanvas} className={`d-flex align-items-center ${linkClasses("/dashboard")} rounded border-0 mb-2 gap-2`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-dashboard" aria-hidden="true"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>
                                        <p className="m-0">Dashboard</p>
                                    </Link>

                                    <Link href="/students" onClick={closeOffcanvas} className={`d-flex align-items-center ${linkClasses("/students")} rounded border-0 mb-2 gap-2`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-5 h-5" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                                        <p className="m-0">Students</p>
                                    </Link>

                                    <Link href="/patientfiles" onClick={closeOffcanvas} className={`d-flex align-items-center ${linkClasses("/patientfiles")} rounded border-0 mb-2 gap-2`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-open w-5 h-5" aria-hidden="true"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"></path></svg>
                                        <p className="m-0">Patient Files</p>
                                    </Link>

                                    <Link href="/grading" onClick={closeOffcanvas} className={`d-flex align-items-center ${linkClasses("/grading")} rounded border-0 mb-2 gap-2`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-check w-5 h-5" aria-hidden="true"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
                                        <p className="m-0">Grading</p>
                                    </Link>
                                </>
                            ) : currentUser?.role === "Admin" ? (
                                <>
                                </>
                            ) : currentUser?.role === "Doctor" ? (
                                <>
                                    <Link href="/students" onClick={closeOffcanvas} className={`d-flex align-items-center ${linkClasses("/students")} rounded border-0 mb-2 gap-2`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-5 h-5" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                                        <p className="m-0">Students</p>
                                    </Link>

                                    <Link href="/patientfiles" onClick={closeOffcanvas} className={`d-flex align-items-center ${linkClasses("/patientfiles")} rounded border-0 mb-2 gap-2`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-open w-5 h-5" aria-hidden="true"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"></path></svg>
                                        <p className="m-0">Patient Files</p>
                                    </Link>

                                    <Link href="/grading" onClick={closeOffcanvas} className={`d-flex align-items-center ${linkClasses("/grading")} rounded border-0 mb-2 gap-2`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-check w-5 h-5" aria-hidden="true"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
                                        <p className="m-0">Grading</p>
                                    </Link>
                                </>
                            ) : (<Loading />)}

                            <Link href="/help" onClick={closeOffcanvas} className={`d-flex align-items-center ${linkClasses("/help")} rounded border-0 mb-2 gap-2`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                    <path d="M12 17h.01" />
                                </svg>
                                <p className="m-0">Help & Guide</p>
                            </Link>
                            <button
                                className="d-flex align-items-center list-group-item list-group-item-action py-3 text-danger rounded border-0 gap-2"
                                onClick={() => {
                                    closeOffcanvas();
                                    logout();
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out" aria-hidden="true"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav >

    );
}
