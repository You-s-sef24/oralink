"use client";

import { useContext, useState } from "react";
import '../globals.css';
import { UsersContext } from "../Contexts/UsersContext";
import { useRouter } from "next/navigation";

export default function Signin() {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState({
        status: false,
        msg: "",
    });
    const { users, setCurrentUser, setIsLoggedIn } = useContext(UsersContext);
    const router = useRouter();

    function handleSubmit(e) {
        e.preventDefault();
        const isFound = users.find((user) => user.email === data.email && user.password === data.password);

        if (data.email === "" || data.password === "") {
            setError({ status: true, msg: "All fields are required." });
            return;
        }

        if (!isFound) {
            setError({ status: true, msg: "Invalid email or password." });
            return;
        }
        setError({ status: false, msg: "" });
        setCurrentUser(isFound);
        setIsLoggedIn(true);
        router.push('/dashboard');
    }

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="d-flex flex-column border rounded shadow bg-white w-50 p-4">

                <div className="d-flex justify-content-center">
                    <img className="w-50" src="/OraLink (1).png" alt="OraLink" loading="lazy"/>
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


                <form className="d-flex flex-column" action="" onSubmit={(e) => { handleSubmit(e) }}>
                    <div className="">
                        <label htmlFor="email" className="form-label fw-semibold">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control mb-2"
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            placeholder="123456789@o6u.edu.eg"
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
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Sign In</button>
                    <hr />
                    <p className="text-center text-muted m-0">Accounts are pre-registered by administrators</p>
                </form>

            </div>
        </div>
    );
}