"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import PublicRoute from "../Components/General/PublicRoute";

export default function ForgotPasswordPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function handleSendOtp(e) {
        e.preventDefault();
        setError("");

        if (!email.trim()) {
            setError("Please enter your email address.");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
            setError("Please enter a valid email address.");
            return;
        }

        setIsLoading(true);
        try {
            await axios.post("https://oralink.runasp.net/api/Auth/forgot-password", {
                email: email.trim(),
            });
            sessionStorage.setItem("resetEmail", email.trim());
            router.push("/reset-password");
        } catch (err) {
            const msg =
                err.response?.data?.message ||
                err.response?.data?.Message ||
                err.response?.data?.title ||
                "Failed to send OTP. Please try again.";
            setError(msg);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <PublicRoute>
            <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-5 px-3">
                <div className="card shadow-sm border-0 rounded-4 w-100" style={{ maxWidth: 440 }}>
                    {/* blue top bar */}
                    <div className="bg-primary rounded-top" style={{ height: 4 }} />

                    <div className="card-body p-4 p-md-5">
                        {/* icon */}
                        <div
                            className="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-3 mb-4"
                            style={{ width: 52, height: 52 }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <rect x="3" y="11" width="18" height="11" rx="2" stroke="#0d6efd" strokeWidth="1.75" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#0d6efd" strokeWidth="1.75" strokeLinecap="round" />
                                <circle cx="12" cy="16" r="1.25" fill="#0d6efd" />
                            </svg>
                        </div>

                        <h4 className="fw-bold mb-1">Forgot password?</h4>
                        <p className="text-secondary small mb-4">
                            Enter your registered email and we&apos;ll send you a one-time code to reset your password.
                        </p>

                        <form onSubmit={handleSendOtp} noValidate>
                            <div className="mb-3">
                                <label htmlFor="fp-email" className="form-label fw-medium small">
                                    Email address
                                </label>
                                <div className="input-group">
                                    <span className="input-group-text bg-white border-end-0">
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6c757d" strokeWidth="1.75" strokeLinecap="round">
                                            <rect x="2" y="4" width="20" height="16" rx="2" />
                                            <path d="m2 7 10 7 10-7" />
                                        </svg>
                                    </span>
                                    <input
                                        id="fp-email"
                                        type="email"
                                        className={`form-control border-start-0 ps-0 ${error ? "is-invalid" : ""}`}
                                        placeholder="you@example.com"
                                        value={email}
                                        onChange={(e) => { setEmail(e.target.value); setError(""); }}
                                        autoComplete="email"
                                        autoFocus
                                    />
                                </div>
                            </div>

                            {error && (
                                <div className="alert alert-danger d-flex align-items-center gap-2 py-2 px-3 small mb-3" role="alert">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" flexShrink="0">
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
                                        Sending code…
                                    </>
                                ) : (
                                    <>
                                        Send OTP
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="text-center mt-4">
                            <Link href="/" className="text-secondary text-decoration-none small d-inline-flex align-items-center gap-1">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                    <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
                                </svg>
                                Back to login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </PublicRoute>
    );
}