"use client";

import { useContext, useEffect, useState } from "react";
import '../globals.css';
import { UsersContext } from "../Contexts/UsersContext";
import { useRouter } from "next/navigation";
import axios from "axios";
import { PatientInfoContext } from "../Contexts/PatientInfoContext";

export default function Signin() {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState({
        status: false,
        msg: "",
    });
    const { setCurrentUser, setIsLoggedIn, token } = useContext(UsersContext);
    const { setIsLoading, isLoading } = useContext(PatientInfoContext);
    const router = useRouter();

    async function handleSubmit(e) {
        e.preventDefault();
        if (!data.email || !data.password) {
            setError({ status: true, msg: "All fields are required." });
            return;
        }

        if (data.password && data.password.length < 8) {
            setError({ status: true, msg: "Password too short." });
            return;
        }

        try {
            setIsLoading(true);
            const res = await axios.post(
                "https://oralink.runasp.net/api/auth/login",
                {
                    email: data.email,
                    password: data.password,
                }
            );
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));

            setCurrentUser(res.data.user);
            setIsLoggedIn(true);
            setError({ status: false, msg: "" });

            router.replace("/home");
        } catch (err) {
            setError({
                status: true,
                msg: err.response?.data?.message || "Login failed",
            });
        }
        setIsLoading(false);
    }

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="d-flex flex-column border rounded shadow bg-white w-50 p-4">

                <div className="d-flex justify-content-center">
                    <img className="w-50" src="/OraLink (1).png" alt="OraLink" loading="lazy" />
                </div>
                <p className="text-muted text-center mb-2">Academic Dental Clinic Management</p>

                <hr className="m-0 mb-3" />

                <div className={`${error.status ? '' : 'd-none'} alert alert-danger alert-dismissible fade show`} role="alert">
                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => { setError({ status: false, msg: "" }) }}
                        aria-label="Close"
                    ></button>

                    <strong>{error.msg}</strong>
                </div>


                <form className="d-flex flex-column" onSubmit={handleSubmit}>
                    <div className="">
                        <label htmlFor="email" className="form-label fw-semibold">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control mb-2"
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            placeholder="123456789@o6u.edu.eg"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label fw-semibold">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control mb-2"
                            value={data.password}
                            onChange={(e) => setData({ ...data, password: e.target.value })}
                            placeholder="********"
                            required
                            minLength={8}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>Sign In</button>
                    <hr />
                    <p className="text-center text-muted m-0">Accounts are pre-registered by administrators</p>
                </form>

            </div>
        </div>
    );
}