"use client";

import { useContext, useState } from "react";
import '../globals.css';
import { UsersContext } from "../Contexts/UsersContext";

export default function Signin() {
    const { handleLogin, loading, loginData, setLoginData, loginError, setLoginError } = useContext(UsersContext);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="d-flex flex-column border rounded shadow bg-white w-75 p-4">

                <div className="d-flex justify-content-center">
                    <img className="w-50" src="/OraLink (1).png" alt="OraLink" loading="lazy" />
                </div>
                <p className="text-muted text-center mb-2">Academic Dental Clinic Management</p>

                <hr className="m-0 mb-3" />

                <div className={`${loginError.status ? '' : 'd-none'} alert alert-danger alert-dismissible fade show`} role="alert">
                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => { setLoginError({ status: false, msg: "" }) }}
                        aria-label="Close"
                    ></button>

                    <strong>{loginError.msg}</strong>
                </div>

                <form className="d-flex flex-column" onSubmit={handleLogin}>
                    <div className="">
                        <label htmlFor="email" className="form-label fw-semibold">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control mb-2"
                            value={loginData?.email}
                            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                            placeholder="123456789@o6u.edu.eg"
                            required
                        />
                    </div>
                    <div className="mb-3 position-relative">
                        <label htmlFor="password" className="form-label fw-semibold">Password</label>
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
                                tabIndex={-1}
                            >
                                {showPassword ? (<i className="bi bi-eye-slash-fill"></i>) : (<i className="bi bi-eye-fill"></i>)}
                            </button>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100" disabled={loading}>Sign In</button>
                    <hr />
                    <p className="text-center text-muted m-0">Accounts are pre-registered by administrators</p>
                </form>

            </div>
        </div>
    );
}