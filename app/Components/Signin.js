"use client";

import { useContext, useState } from "react";
import '../globals.css';
import { UsersContext } from "../Contexts/UsersContext";
import Image from "next/image";
import Link from "next/link";

export default function Signin() {
    const { handleLogin, loading, loginData, setLoginData, loginError, setLoginError } = useContext(UsersContext);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">

            <div className="bg-white rounded-4 shadow-sm p-4 p-md-5" style={{ width: "100%", maxWidth: "480px" }}>
                <div className="text-center mb-3">
                    <Image width={200} height={60} src="/OraLink (1).png" alt="OraLink" />
                    <p className="text-muted small mt-2 mb-0">
                        Academic Dental Clinic Management
                    </p>
                </div>

                <hr className="mb-4" />

                {loginError.status && (
                    <div className="alert alert-danger d-flex justify-content-between align-items-center py-2">
                        <small className="fw-semibold">{loginError.msg}</small>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={() => setLoginError({ status: false, msg: "" })}
                        ></button>
                    </div>
                )}

                <form onSubmit={handleLogin} className="d-flex flex-column gap-3">
                    <div>
                        <label htmlFor="email" className="form-label fw-semibold small">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            value={loginData?.email}
                            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                            placeholder="123456789@o6u.edu.eg"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="form-label fw-semibold small">
                            Password
                        </label>

                        <div className="input-group">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                className="form-control"
                                value={loginData.password}
                                onChange={(e) =>
                                    setLoginData({ ...loginData, password: e.target.value })
                                }
                                placeholder="********"
                                required
                                minLength={8}
                            />
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword
                                    ? <i className="bi bi-eye-slash-fill"></i>
                                    : <i className="bi bi-eye-fill"></i>}
                            </button>
                        </div>
                    </div>

                    <div className="text-end">
                        <Link
                            href="/forgot-password"
                            className="text-decoration-none small fw-medium"
                            style={{ color: '#0d6efd' }} // Standard Bootstrap primary or your brand color
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-100 d-flex justify-content-center align-items-center gap-2"
                        disabled={loading}
                    >
                        {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                        )}
                        Sign In
                    </button>

                    <hr className="my-2" />

                    <p className="text-center text-muted small m-0">
                        Accounts are pre-registered by administrators
                    </p>

                </form>
            </div>
        </div>
    );
}