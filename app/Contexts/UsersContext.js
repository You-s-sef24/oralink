"use client";

import { createContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";

export const UsersContext = createContext();

export default function UsersProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(null);
    const [isAuthReady, setIsAuthReady] = useState(false);
    const [showUsersModal, setShowUsersModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showEditAdminModal, setShowEditAdminModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (storedToken && storedUser) {
            axios.defaults.headers.common["Authorization"] =
                `Bearer ${storedToken}`;
            setCurrentUser(JSON.parse(storedUser));
            setToken(storedToken);
            setIsLoggedIn(true);
            setIsAuthReady(true);
        }
    }, []);

    useEffect(() => {
        const storedUser = localStorage.getItem("currentUser");
        const storedLoginStatus = localStorage.getItem("isLoggedIn");

        if (storedUser !== null && storedUser !== "null") {
            setCurrentUser(JSON.parse(storedUser));
        }
        if (storedLoginStatus === "true") {
            setIsLoggedIn(true);
        }
        setLoading(false);
    }, []);


    useEffect(() => {
        if (loading) return;

        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        localStorage.setItem("isLoggedIn", isLoggedIn.toString());

    }, [currentUser, isLoggedIn, loading]);

    const logout = () => {
        setCurrentUser(null);
        setToken('');
        setIsLoggedIn(false);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        router.replace("/");
    };

    return (
        <UsersContext.Provider value={{ currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn, token, logout, showUsersModal, setShowUsersModal, showEditModal, setShowEditModal, showDeleteModal, setShowDeleteModal, selectedUser, setSelectedUser, showEditAdminModal, setShowEditAdminModal }}>
            {children}
        </UsersContext.Provider>
    );
}