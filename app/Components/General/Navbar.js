"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useRef, useState, useCallback } from "react";
import { UsersContext } from "../../Contexts/UsersContext";
import axios from "axios";

const NAV_LINKS = {
    Student: [
        { href: "/my-files", label: "My Files", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" /></svg> },
        { href: "/upload-xray", label: "Upload X-ray", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12" /><path d="m17 8-5-5-5 5" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /></svg> },
        { href: "/dss-report", label: "View DSS Reports", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 3a4 4 0 0 0-4 4c0 1.5.8 2.8 2 3.5V13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2.5c1.2-.7 2-2 2-3.5a4 4 0 0 0-4-4" /><circle cx="9" cy="10" r="1" fill="currentColor" /><circle cx="15" cy="10" r="1" fill="currentColor" /><path d="M12 15v3" /><path d="M9 18h6" /><path d="M10 21l1.5 1.5L14 20" /></svg> },
    ],
    Supervisor: [
        { href: "/pending-procedures", label: "Pending Procedures", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="m9 14 2 2 4-4" /></svg> },
        { href: "/view-students", label: "View All Students", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><path d="M16 3.128a4 4 0 0 1 0 7.744" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><circle cx="9" cy="7" r="4" /></svg> },
        { href: "/view-cases", label: "View All Patient Cases", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" /></svg> },
        { href: "/upload-xray", label: "Upload X-ray", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12" /><path d="m17 8-5-5-5 5" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /></svg> },
    ],
    "Head of Department": [
        { href: "/dashboard", label: "Dashboard", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" /></svg> },
        { href: "/students", label: "Students", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><path d="M16 3.128a4 4 0 0 1 0 7.744" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><circle cx="9" cy="7" r="4" /></svg> },
        { href: "/patientfiles", label: "Patient Files", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" /></svg> },
        { href: "/grading", label: "Grading", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="m9 14 2 2 4-4" /></svg> },
        { href: "/upload-xray", label: "Upload X-ray", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12" /><path d="m17 8-5-5-5 5" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /></svg> },
        { href: "/archive", label: "Archive", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-archive" viewBox="0 0 16 16"><path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" /></svg> },
    ],
    Doctor: [
        { href: "/students", label: "Students", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><path d="M16 3.128a4 4 0 0 1 0 7.744" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><circle cx="9" cy="7" r="4" /></svg> },
        { href: "/patientfiles", label: "Patient Files", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" /></svg> },
        { href: "/grading", label: "Grading", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="m9 14 2 2 4-4" /></svg> },
        { href: "/upload-xray", label: "Upload X-ray", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12" /><path d="m17 8-5-5-5 5" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /></svg> },
    ],
    Admin: [],
};

function NotificationIcon({ type }) {
    if (type === "FileGraded") return <span className="d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10" style={{ width: 36, height: 36, flexShrink: 0 }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" /><circle cx="12" cy="8" r="6" /></svg></span>;
    if (type === "StepApproved") return <span className="d-flex align-items-center justify-content-center rounded-circle bg-success bg-opacity-10" style={{ width: 36, height: 36, flexShrink: 0 }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#198754" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4" /><circle cx="12" cy="12" r="10" /></svg></span>;
    if (type === "StepRejected") return <span className="d-flex align-items-center justify-content-center rounded-circle bg-danger bg-opacity-10" style={{ width: 36, height: 36, flexShrink: 0 }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc3545" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg></span>;
    return <span className="d-flex align-items-center justify-content-center rounded-circle bg-secondary bg-opacity-10" style={{ width: 36, height: 36, flexShrink: 0 }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6c757d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg></span>;
}

function formatRelativeTime(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const diff = Math.floor((now - date) / 1000);
    if (diff < 60) return "Just now";
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
    return date.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}

function NotificationsDropdown({ notifications, unreadCount, loading, onMarkRead, onViewFile }) {
    return (
        <div className="position-absolute bg-white border rounded-3 shadow-lg" style={{ top: "calc(100% + 8px)", right: 0, width: 340, zIndex: 1050, maxHeight: 420, overflowY: "auto" }}>
            <div className="d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
                <span className="fw-semibold">Notifications</span>
                {unreadCount > 0 && <span className="badge bg-primary rounded-pill">{unreadCount} new</span>}
            </div>
            {loading ? (
                <div className="text-center py-4"><span className="spinner-border spinner-border-sm text-primary" /></div>
            ) : notifications.length === 0 ? (
                <div className="text-center py-4 text-muted small">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-2 d-block mx-auto"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                    No notifications yet
                </div>
            ) : (
                <div>
                    {notifications.map((n) => (
                        <div key={n.id} className={`d-flex gap-3 px-3 py-2 border-bottom ${!n.isRead ? "bg-primary bg-opacity-10" : ""}`} style={{ cursor: n.relatedFileId ? "pointer" : "default" }}
                            onClick={() => { if (!n.isRead) onMarkRead(n.id); if (n.relatedFileId) onViewFile(n.relatedFileId); }}>
                            <NotificationIcon type={n.type} />
                            <div className="flex-grow-1 overflow-hidden">
                                <div className="d-flex justify-content-between align-items-start gap-1">
                                    <p className={`mb-0 small ${!n.isRead ? "fw-semibold" : ""}`} style={{ lineHeight: 1.3 }}>{n.title}</p>
                                    {!n.isRead && <span className="rounded-circle bg-primary flex-shrink-0" style={{ width: 7, height: 7, marginTop: 4 }} />}
                                </div>
                                <p className="mb-0 text-muted" style={{ fontSize: 11, lineHeight: 1.4 }}>{n.description}</p>
                                <p className="mb-0 text-muted" style={{ fontSize: 10 }}>{formatRelativeTime(n.createdAt)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function Navbar() {
    const pathname = usePathname();
    const { currentUser, logout } = useContext(UsersContext);
    const bsInstanceRef = useRef(null);
    const isStudent = currentUser?.role === "Student";
    const [unreadCount, setUnreadCount] = useState(0);
    const [notifications, setNotifications] = useState([]);
    const [notifLoading, setNotifLoading] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const notifRef = useRef(null);

    useEffect(() => {
        let instance = null;

        import("bootstrap").then(({ Offcanvas }) => {
            const el = document.getElementById("offcanvasNavbar");
            if (!el) return;

            instance = new Offcanvas(el, { backdrop: true, scroll: false });
            bsInstanceRef.current = instance;

            const handleHidden = () => {
                document.body.style.overflow = "";
                document.body.style.paddingRight = "";
                document.body.classList.remove("modal-open");
                document.querySelectorAll(".offcanvas-backdrop").forEach(b => b.remove());
            };

            el.addEventListener("hidden.bs.offcanvas", handleHidden);

            return () => {
                el.removeEventListener("hidden.bs.offcanvas", handleHidden);
                instance?.dispose();
                bsInstanceRef.current = null;
            };
        });
    }, []);

    useEffect(() => {
        bsInstanceRef.current?.hide();
        setShowNotifications(false);
    }, [pathname]);

    function openOffcanvas() {
        bsInstanceRef.current?.show();
    }

    function closeOffcanvas() {
        bsInstanceRef.current?.hide();
    }

    const fetchUnreadCount = useCallback(async () => {
        if (!isStudent) return;
        try {
            const res = await axios.get("https://oralink.runasp.net/api/notifications/unread-count");
            setUnreadCount(res.data?.unreadCount ?? 0);
        } catch (err) {
            console.error("Failed to fetch unread count:", err);
        }
    }, [isStudent]);

    useEffect(() => {
        fetchUnreadCount();
        const interval = setInterval(fetchUnreadCount, 60000);
        return () => clearInterval(interval);
    }, [fetchUnreadCount]);

    async function fetchNotifications() {
        setNotifLoading(true);
        try {
            const res = await axios.get("https://oralink.runasp.net/api/notifications");
            setNotifications(res.data ?? []);
        } catch (err) {
            console.error("Failed to fetch notifications:", err);
        } finally {
            setNotifLoading(false);
        }
    }

    function toggleNotifications() {
        if (!showNotifications) fetchNotifications();
        setShowNotifications(prev => !prev);
    }

    async function handleMarkRead(id) {
        try {
            await axios.patch(`https://oralink.runasp.net/api/notifications/${id}/mark-as-read`);
            setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
            setUnreadCount(prev => Math.max(0, prev - 1));
        } catch (err) {
            console.error("Failed to mark notification as read:", err);
        }
    }

    function handleViewFile(fileId) {
        setShowNotifications(false);
        window.location.href = `/my-files/${fileId}`;
    }

    useEffect(() => {
        function handleOutsideClick(e) {
            if (notifRef.current && !notifRef.current.contains(e.target)) {
                setShowNotifications(false);
            }
        }
        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, []);

    const isActive = (href) => pathname === href || pathname.startsWith(href + "/");
    const linkClass = (href) =>
        `d-flex align-items-center gap-2 list-group-item list-group-item-action py-3 rounded border-0 mb-1 ${isActive(href) ? "active text-white bg-primary" : "text-dark"}`;

    const roleLinks = NAV_LINKS[currentUser?.role] ?? [];

    return (
        <nav className="navbar navbar-light bg-white border-bottom shadow-sm">
            <div className="container-fluid gap-3">

                <button
                    className="navbar-toggler border-0"
                    type="button"
                    onClick={openOffcanvas}
                    aria-label="Open navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <Link href="/home">
                    <img src="/OraLink (1).png" alt="OraLink" style={{ height: 36, width: "auto" }} />
                </Link>

                {isStudent && (
                    <div className="position-relative ms-auto" ref={notifRef}>
                        <button className="btn btn-light border-0 position-relative p-2 rounded-circle" onClick={toggleNotifications} aria-label="Notifications">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                            </svg>
                            {unreadCount > 0 && (
                                <span className="position-absolute top-0 end-0 bg-danger text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: 18, height: 18, fontSize: 10, fontWeight: 700, transform: "translate(25%, -25%)" }}>
                                    {unreadCount > 9 ? "9+" : unreadCount}
                                </span>
                            )}
                        </button>
                        {showNotifications && (
                            <NotificationsDropdown
                                notifications={notifications}
                                unreadCount={unreadCount}
                                loading={notifLoading}
                                onMarkRead={handleMarkRead}
                                onViewFile={handleViewFile}
                            />
                        )}
                    </div>
                )}

                <div className="offcanvas offcanvas-start" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header border-bottom pb-3">
                        <img src="/OraLink (1).png" alt="OraLink" id="offcanvasNavbarLabel" style={{ height: 40, width: "auto" }} />
                        <button type="button" className="btn-close" aria-label="Close" onClick={closeOffcanvas} />
                    </div>

                    <div className="offcanvas-body d-flex flex-column px-3 py-3">
                        <div className="list-group list-group-flush flex-grow-1">
                            <Link href="/home" onClick={closeOffcanvas} className={linkClass("/home")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" /></svg>
                                Home
                            </Link>

                            {roleLinks.map(({ href, label, icon }) => (
                                <Link key={href} href={href} onClick={closeOffcanvas} className={linkClass(href)}>
                                    {icon}{label}
                                </Link>
                            ))}

                            <Link href="/help" onClick={closeOffcanvas} className={linkClass("/help")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m16 17 5-5-5-5" /><path d="M21 12H9" /><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /></svg>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}