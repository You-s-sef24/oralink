"use client";

import { createContext, useEffect, useState } from "react";

export const UsersContext = createContext();

export default function UsersProvider({ children }) {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Youssef Mahmoud",
            role: "Student",
            email: "202205658@o6u.edu.eg",
            password: "123",
            patients: [],
        },
    ]);
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem("currentUser");
        const storedLoginStatus = localStorage.getItem("isLoggedIn");
        const storedUsers = localStorage.getItem("users");
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        }
        if (storedUser !== null && storedUser !== "null") {
            setCurrentUser(JSON.parse(storedUser));
        }
        if (storedLoginStatus === "true") {
            setIsLoggedIn(true);
        }
        setLoading(true);
    }, []);


    useEffect(() => {
        if (!loading) return;

        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        localStorage.setItem("isLoggedIn", isLoggedIn.toString());
    }, [users, currentUser, isLoggedIn, loading]);


    return (
        <UsersContext.Provider value={{ users, setUsers, currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn }}>
            {children}
        </UsersContext.Provider>
    );
}