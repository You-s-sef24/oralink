"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useRef } from "react";
import { UsersContext } from "../../Contexts/UsersContext";

const NAV_LINKS = {
    Student: [
        {
            href: "/my-files",
            label: "My Files",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" /></svg>,
        },
        {
            href: "/upload-xray",
            label: "Upload X-ray",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12" /><path d="m17 8-5-5-5 5" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /></svg>,
        },
        {
            href: "/dss-report",
            label: "View DSS Reports",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="" aria-hidden="true">
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
            </svg>,
        },
    ],
    Supervisor: [
        {
            href: "/pending-procedures",
            label: "Pending Procedures",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="m9 14 2 2 4-4" /></svg>,
        },
        {
            href: "/view-students",
            label: "View All Students",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><path d="M16 3.128a4 4 0 0 1 0 7.744" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><circle cx="9" cy="7" r="4" /></svg>,
        },
        {
            href: "/view-cases",
            label: "View All Patient Cases",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" /></svg>,
        },
    ],
    "Head of Department": [
        {
            href: "/dashboard",
            label: "Dashboard",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" /></svg>,
        },
        {
            href: "/students",
            label: "Students",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><path d="M16 3.128a4 4 0 0 1 0 7.744" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><circle cx="9" cy="7" r="4" /></svg>,
        },
        {
            href: "/patientfiles",
            label: "Patient Files",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" /></svg>,
        },
        {
            href: "/grading",
            label: "Grading",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="m9 14 2 2 4-4" /></svg>,
        },
    ],
    Doctor: [
        {
            href: "/students",
            label: "Students",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><path d="M16 3.128a4 4 0 0 1 0 7.744" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><circle cx="9" cy="7" r="4" /></svg>,
        },
        {
            href: "/patientfiles",
            label: "Patient Files",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" /></svg>,
        },
        {
            href: "/grading",
            label: "Grading",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="m9 14 2 2 4-4" /></svg>,
        },
    ],
    Admin: [],
};

function cleanupBootstrapBody() {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
    document.body.classList.remove("modal-open");
    document.querySelectorAll(".offcanvas-backdrop").forEach(el => el.remove());
}

export default function Navbar() {
    const pathname = usePathname();
    const { currentUser, logout } = useContext(UsersContext);
    const offcanvasElRef = useRef(null);

    useEffect(() => {
        const el = document.getElementById("offcanvasNavbar");
        if (!el) return;
        offcanvasElRef.current = el;

        const handleHidden = () => {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
            document.body.classList.remove("modal-open");
        };

        el.addEventListener("hidden.bs.offcanvas", handleHidden);
        return () => el.removeEventListener("hidden.bs.offcanvas", handleHidden);
    }, []);

    useEffect(() => {
        cleanupBootstrapBody();
    }, [pathname]);

    function closeOffcanvas() {
        const el = offcanvasElRef.current;
        if (!el) return;

        import("bootstrap").then(({ Offcanvas }) => {
            const instance = Offcanvas.getInstance(el);
            if (instance) {
                instance.hide();
            } else {
                el.classList.remove("show");
                el.setAttribute("aria-hidden", "true");
                document.querySelector(".offcanvas-backdrop")?.remove();
                document.body.style.overflow = "";
                document.body.style.paddingRight = "";
                document.body.classList.remove("modal-open");
            }
        });
    }

    const isActive = (href) =>
        pathname === href || pathname.startsWith(href + "/");

    const linkClass = (href) =>
        `d-flex align-items-center gap-2 list-group-item list-group-item-action py-3 rounded border-0 mb-1 ${isActive(href) ? "active text-white bg-primary" : "text-dark"
        }`;

    const roleLinks = NAV_LINKS[currentUser?.role] ?? [];

    return (
        <nav className="navbar navbar-light bg-white border-bottom shadow-sm">
            <div className="container-fluid gap-3">

                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                    aria-label="Open navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <Link href="/home">
                    <img
                        src="/OraLink (1).png"
                        alt="OraLink"
                        style={{ height: 36, width: "auto" }}
                    />
                </Link>

                <div
                    className="offcanvas offcanvas-start"
                    tabIndex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                >
                    <div className="offcanvas-header border-bottom pb-3">
                        <img
                            src="/OraLink (1).png"
                            alt="OraLink"
                            id="offcanvasNavbarLabel"
                            style={{ height: 40, width: "auto" }}
                        />
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        />
                    </div>

                    <div className="offcanvas-body d-flex flex-column px-3 py-3">
                        <div className="list-group list-group-flush flex-grow-1">

                            <Link href="/home" onClick={closeOffcanvas} className={linkClass("/home")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                                </svg>
                                Home
                            </Link>

                            {roleLinks.map(({ href, label, icon }) => (
                                <Link key={href} href={href} onClick={closeOffcanvas} className={linkClass(href)}>
                                    {icon}
                                    {label}
                                </Link>
                            ))}

                            <Link href="/help" onClick={closeOffcanvas} className={linkClass("/help")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                    <path d="M12 17h.01" />
                                </svg>
                                Help & Guide
                            </Link>
                        </div>

                        <div className="border-top pt-3 mt-2">
                            {currentUser?.name && (
                                <p className="text-muted small mb-2 px-1">
                                    Signed in as <strong>{currentUser.name}</strong>
                                    {currentUser.role ? ` · ${currentUser.role}` : ""}
                                </p>
                            )}
                            <button
                                className="d-flex align-items-center gap-2 btn btn-outline-danger w-100 py-2"
                                onClick={() => { closeOffcanvas(); logout(); }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="m16 17 5-5-5-5" /><path d="M21 12H9" /><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                </svg>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}