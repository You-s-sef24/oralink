"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import PublicRoute from "../Components/General/PublicRoute";

export default function ResetPasswordPage() {
    const router = useRouter();

    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [newPassword, setNewPassword] = useState("");
    const [showNew, setShowNew] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [resendCooldown, setResendCooldown] = useState(0);

    const otpRefs = useRef([]);
    const email = typeof window !== "undefined" ? sessionStorage.getItem("resetEmail") || "" : "";
    
    useEffect(() => {
        if (!email) router.replace("/forgot-password");
    }, [email]);

    useEffect(() => {
        if (resendCooldown <= 0) return;
        const t = setTimeout(() => setResendCooldown((c) => c - 1), 1000);
        return () => clearTimeout(t);
    }, [resendCooldown]);

    function handleOtpChange(i, val) {
        const digit = val.replace(/\D/g, "").slice(-1);
        const next = [...otp];
        next[i] = digit;
        setOtp(next);
        setError("");
        if (digit && i < 5) otpRefs.current[i + 1]?.focus();
    }

    function handleOtpKeyDown(i, e) {
        if (e.key === "Backspace" && !otp[i] && i > 0) {
            otpRefs.current[i - 1]?.focus();
        }
    }

    function handleOtpPaste(e) {
        e.preventDefault();
        const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
        const next = [...otp];
        pasted.split("").forEach((d, i) => { next[i] = d; });
        setOtp(next);
        otpRefs.current[Math.min(pasted.length, 5)]?.focus();
    }

    function passwordStrength(p) {
        if (!p) return null;
        let score = 0;
        if (p.length >= 8) score++;
        if (/[A-Z]/.test(p)) score++;
        if (/[0-9]/.test(p)) score++;
        if (/[^A-Za-z0-9]/.test(p)) score++;
        if (score <= 1) return { label: "Weak", variant: "danger", width: "25%" };
        if (score === 2) return { label: "Fair", variant: "warning", width: "50%" };
        if (score === 3) return { label: "Good", variant: "primary", width: "75%" };
        return { label: "Strong", variant: "success", width: "100%" };
    }

    const strength = passwordStrength(newPassword);

    async function handleResend() {
        if (!email || resendCooldown > 0) return;
        try {
            await axios.post("https://oralink.runasp.net/api/auth/forgot-password", { email });
            setResendCooldown(60);
        } catch {
            setError("Failed to resend OTP. Please try again.");
        }
    }

    async function handleReset(e) {
        e.preventDefault();
        setError("");

        const otpValue = otp.join("");
        if (otpValue.length < 6) { setError("Please enter the complete 6-digit OTP."); return; }
        if (!newPassword) { setError("Please enter a new password."); return; }
        if (newPassword.length < 8) { setError("Password must be at least 8 characters."); return; }

        setIsLoading(true);
        try {
            await axios.post("https://oralink.runasp.net/api/Auth/reset-password", {
                email,
                otp: otpValue,
                newPassword,
            });
            setSuccess(true);
            sessionStorage.removeItem("resetEmail");
            setTimeout(() => router.push("/"), 2500);
        } catch (err) {
            const msg =
                err.response?.data?.message ||
                err.response?.data?.Message ||
                err.response?.data?.title ||
                "Failed to reset password. Please check your OTP and try again.";
            setError(msg);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <PublicRoute>
            <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-5 px-3">
                <div className="card shadow-sm border-0 rounded-4 w-100" style={{ maxWidth: 460 }}>
                    <div className="bg-primary rounded-top" style={{ height: 4 }} />

                    <div className="card-body p-4 p-md-5">
                        {success ? (
                            <div className="text-center py-3">
                                <div
                                    className="d-flex align-items-center justify-content-center rounded-circle border border-success bg-success bg-opacity-10 mx-auto mb-4"
                                    style={{ width: 64, height: 64 }}
                                >
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#198754" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <h5 className="fw-bold mb-2">Password reset!</h5>
                                <p className="text-secondary small mb-0">
                                    Your password has been updated successfully.<br />
                                    Redirecting you to login…
                                </p>
                            </div>
                        ) : (
                            <>
                                <div
                                    className="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-3 mb-4"
                                    style={{ width: 52, height: 52 }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2a4 4 0 0 1 4 4v1H8V6a4 4 0 0 1 4-4z" stroke="#0d6efd" strokeWidth="1.75" />
                                        <rect x="3" y="11" width="18" height="11" rx="2" stroke="#0d6efd" strokeWidth="1.75" />
                                        <path d="M12 15v2" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>

                                <h4 className="fw-bold mb-1">Reset password</h4>
                                <p className="text-secondary small mb-4">
                                    Enter the 6-digit code sent to{" "}
                                    {email && (
                                        <span className="badge bg-primary bg-opacity-10 text-primary fw-medium">
                                            {email}
                                        </span>
                                    )}{" "}
                                    and choose a new password.
                                </p>

                                <form onSubmit={handleReset} noValidate>

                                    <label className="form-label fw-medium small mb-2">One-time code</label>
                                    <div className="d-flex gap-2 mb-2">
                                        {otp.map((digit, i) => (
                                            <input
                                                key={i}
                                                ref={(el) => (otpRefs.current[i] = el)}
                                                type="text"
                                                inputMode="numeric"
                                                maxLength={1}
                                                value={digit}
                                                className={`form-control text-center fw-semibold fs-5 p-0 ${digit ? "border-primary text-primary" : ""}`}
                                                style={{ height: 52 }}
                                                onChange={(e) => handleOtpChange(i, e.target.value)}
                                                onKeyDown={(e) => handleOtpKeyDown(i, e)}
                                                onPaste={i === 0 ? handleOtpPaste : undefined}
                                                autoFocus={i === 0}
                                            />
                                        ))}
                                    </div>

                                    <p className="small text-secondary mb-4">
                                        Didn&apos;t receive it?{" "}
                                        <button
                                            type="button"
                                            className="btn btn-link btn-sm p-0 text-primary"
                                            onClick={handleResend}
                                            disabled={resendCooldown > 0}
                                        >
                                            {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : "Resend OTP"}
                                        </button>
                                    </p>

                                    <hr className="my-3" />

                                    <div className="mb-3">
                                        <label htmlFor="rp-new" className="form-label fw-medium small">
                                            New password
                                        </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-white border-end-0">
                                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6c757d" strokeWidth="1.75" strokeLinecap="round">
                                                    <rect x="3" y="11" width="18" height="11" rx="2" />
                                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                                </svg>
                                            </span>
                                            <input
                                                id="rp-new"
                                                type={showNew ? "text" : "password"}
                                                className="form-control border-start-0 border-end-0 ps-0"
                                                placeholder="Min. 8 characters"
                                                value={newPassword}
                                                onChange={(e) => { setNewPassword(e.target.value); setError(""); }}
                                                autoComplete="new-password"
                                            />
                                            <button
                                                type="button"
                                                className="btn btn-outline-secondary border-start-0"
                                                onClick={() => setShowNew((v) => !v)}
                                                tabIndex={-1}
                                            >
                                                {showNew ? (
                                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                                                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                                                        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                                                        <line x1="1" y1="1" x2="23" y2="23" />
                                                    </svg>
                                                ) : (
                                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                        <circle cx="12" cy="12" r="3" />
                                                    </svg>
                                                )}
                                            </button>
                                        </div>

                                        {newPassword && strength && (
                                            <div className="mt-2">
                                                <div className="progress" style={{ height: 4 }}>
                                                    <div
                                                        className={`progress-bar bg-${strength.variant}`}
                                                        style={{ width: strength.width, transition: "width 0.3s" }}
                                                    />
                                                </div>
                                                <small className={`text-${strength.variant} fw-medium`}>
                                                    {strength.label}
                                                </small>
                                            </div>
                                        )}
                                    </div>

                                    {error && (
                                        <div className="alert alert-danger d-flex align-items-center gap-2 py-2 px-3 small mb-3" role="alert">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
                                                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                                            </svg>
                                            {error}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                                                Resetting…
                                            </>
                                        ) : (
                                            <>
                                                Reset password
                                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                </form>

                                <div className="text-center mt-4">
                                    <Link href="/login" className="text-secondary text-decoration-none small d-inline-flex align-items-center gap-1">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                            <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
                                        </svg>
                                        Back to login
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </PublicRoute>
    );
}