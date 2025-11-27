"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { UsersContext } from "../Contexts/UsersContext";
import '../globals.css';

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const { setIsLoggedin, setCurrentUser } = useContext(UsersContext);

    const linkClasses = (href) =>
        `list-group-item list-group-item-action py-3 ${pathname === href ? "active text-white bg-primary" : "text-dark"
        }`;

    function handleLogout() {
        router.push('/');
        setCurrentUser(null);
        setIsLoggedin(false);
    }

    return (
        <nav className="navbar navbar-light bg-white fixed-top">
            <div className="container-fluid d-flex gap-2 align-items-center justify-content-start">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <h2 className="navbar-brand text-primary fw-bold m-0" >OraLink</h2>
                <div
                    className="offcanvas offcanvas-start"
                    tabIndex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title text-primary fw-bold m-0" id="offcanvasNavbarLabel">
                            OraLink
                        </h5>
                        <button
                            type="button"
                            className="btn-close text-reset"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="list-group list-group-flush">
                            <Link
                                href="/dashboard"
                                className={`d-flex align-items-center ${linkClasses("/dashboard")} rounded border-0 mb-2 gap-2`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-dashboard" aria-hidden="true"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>
                                <p className="m-0">Dashboard</p>
                            </Link>

                            <Link
                                href="/profile"
                                className={`d-flex align-items-center ${linkClasses("/profile")} rounded border-0 mb-2 gap-2`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                <p className="m-0">Profile</p>
                            </Link>

                            <button
                                className="d-flex align-items-center list-group-item list-group-item-action py-3 text-danger rounded border-0 gap-2"
                                onClick={() => {
                                    handleLogout();
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out" aria-hidden="true"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    );
}
