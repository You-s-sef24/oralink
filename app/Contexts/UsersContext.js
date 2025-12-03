"use client";

import { createContext, useEffect, useState } from "react";

export const UsersContext = createContext();

export default function UsersProvider({ children }) {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Reham Hussien",
            role: "Supervisor",
            email: "admin@123",
            password: "123",
        },
        {
            id: 202205658,
            name: "Youssef Mahmoud",
            role: "Student",
            email: "202205658@o6u.edu.eg",
            password: "123",
            files: [
                {
                    fileId: '1764427735465',
                    patientName: 'Youssef Ahmed',
                    age: '21',
                    nationalId: '12345678910',
                    phone: '012333423223',
                    department: 'Periodontics',
                    creationDate: '29/11/2025',
                    grade: 0
                }
            ],
        },
        {
            id: 2022056534,
            name: "Youssef Sawy",
            role: "Student",
            email: "2022056534@o6u.edu.eg",
            password: "123",
            files: [
                {
                    fileId: '176442773534',
                    patientName: 'Youssef Sherif',
                    age: '21',
                    nationalId: '12345678910',
                    phone: '012333423223',
                    department: 'Periodontics',
                    creationDate: '29/11/2025',
                    grade: 0
                }, {
                    fileId: '17644277353434',
                    patientName: 'Mohamed Ragab',
                    age: '21',
                    nationalId: '12345678910',
                    phone: '012333423223',
                    department: 'Periodontics',
                    creationDate: '29/11/2025',
                    grade: 0
                }
            ],
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
        setLoading(false);
    }, []);


    useEffect(() => {
        if (loading) return;

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