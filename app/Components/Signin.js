"use client";

import { useState } from "react";

export default function Signin() {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [rememberMe, setRememberMe] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if (data.email === "" || data.password === "") {
            alert("Please fill in all fields.");
            return;
        }
        console.log(data);
        alert("Signed in successfully!");
        if (rememberMe) {
            console.log("Remember me is checked.");
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="d-flex flex-column border rounded shadow p-4">

                <div className="d-flex justify-content-center align-items-center gap-1 mb-1">
                    <img src="../images/tooth.png" alt="tooth" width={35} height={35} />
                    <h3 className="fw-bold m-0">OraLink</h3>
                </div>
                <p className="text-muted text-center mb-2">Clinic Management System</p>

                <hr className="m-0 mb-3" />

                <h4 className="fw-semibold text-center mb-1">Sign in to OraLink</h4>
                <p className="text-muted text-center mb-4">Welcome back! Please enter your details.</p>

                <form className="d-flex flex-column" action="" onSubmit={(e) => { handleSubmit(e) }}>

                    <div className="input-group mb-2">
                        <span className="input-group-text bg-white border-end-0 py-0" >
                            <i className="bi bi-envelope"></i>
                        </span>
                        <input
                            type="email"
                            className="form-control border-start-0"
                            placeholder="Email address"
                            required
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                        />
                    </div>

                    <div className="input-group mb-2">
                        <span className="input-group-text bg-white border-end-0 py-0" >
                            <i className="bi bi-lock-fill"></i>
                        </span>
                        <input
                            type="password"
                            className="form-control border-start-0"
                            placeholder="Enter your password"
                            required
                            value={data.password}
                            onChange={(e) => setData({ ...data, password: e.target.value })}
                        />
                    </div>

                    <div className="form-check mb-3">
                        <input type="checkbox" className="form-check-input" id="rememberMe" checked={rememberMe === true} onChange={(e) => { rememberMe ? setRememberMe(false) : setRememberMe(true) }} />
                        <label className="form-check-label" htmlFor="rememberMe"> Remember me </label>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Sign In</button>

                </form>

            </div>
        </div>
    );
}