"use client";

import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export const UsersContext = createContext();

export default function UsersProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const [loginError, setLoginError] = useState({
        status: false,
        msg: ""
    });
    const [loggingOut, setLoggingOut] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const storedToken = localStorage.getItem("token");

        if (!storedToken) {
            setLoading(false);
            return;
        }

        axios.defaults.headers.common["Authorization"] =
            `Bearer ${storedToken}`;

        setToken(storedToken);

        axios.get("https://oralink.runasp.net/api/Auth/me")
            .then(res => {
                setCurrentUser(res.data);
                setIsLoggedIn(true);
            })
            .catch(() => {
                logout();
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    async function handleLogin(e) {
        e.preventDefault();

        if (!loginData.email || !loginData.password) {
            setLoginError({ status: true, msg: "All fields are required." });
            return;
        }

        if (loginData.password.length < 8) {
            setLoginError({ status: true, msg: "Password too short." });
            return;
        }

        try {
            setLoading(true);

            const res = await axios.post(
                "https://oralink.runasp.net/api/auth/login",
                loginData
            );

            const receivedToken = res.data.token;

            localStorage.setItem("token", receivedToken);

            axios.defaults.headers.common["Authorization"] =
                `Bearer ${receivedToken}`;

            setToken(receivedToken);
            setCurrentUser(res.data.user);
            setIsLoggedIn(true);
            setLoginError({ status: false, msg: "" });

            router.replace("/home");
        } catch (err) {
            setLoginError({
                status: true,
                msg: err.response?.data?.message || "Login failed"
            });
        } finally {
            setLoading(false);
        }
    }

    function logout() {
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];

        setCurrentUser(null);
        setToken(null);
        setIsLoggedIn(false);
        setLoggingOut(true);
    }

    useEffect(() => {
        if (loggingOut && !isLoggedIn) {
            setLoggingOut(false);
            router.replace("/");
        }
    }, [loggingOut, isLoggedIn]);

    return (
        <UsersContext.Provider
            value={{
                currentUser,
                isLoggedIn,
                loading,
                loginData,
                setLoginData,
                loginError,
                setLoginError,
                handleLogin,
                token,
                logout
            }}
        >
            {children}
        </UsersContext.Provider>
    );
}