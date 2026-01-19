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
            files: [],
        },
        {
            id: 2022056534,
            name: "Youssef Sawy",
            role: "Student",
            email: "2022056534@o6u.edu.eg",
            password: "123",
            files: [],
        },
    ]);
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [totalStudents, setTotalStudents] = useState(0);
    const [totalFiles, setTotalFiles] = useState(0);
    const [gradedFiles, setGradedFiles] = useState(0);
    const [avgGrade, setAvgGrade] = useState(0);


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

        setTotalStudents(users.reduce(
            (count, u) => (u.role === "Student" ? count + 1 : count),
            0
        ));

        const allFiles = users.flatMap(user => user.files || []);
        setTotalFiles(allFiles.length);

        const gradedFilesList = allFiles.filter(file => file.grade > 0);
        setGradedFiles(gradedFilesList.length);

        setAvgGrade(gradedFilesList.length > 0 ? gradedFilesList.reduce((sum, file) => sum + file.grade, 0) / gradedFilesList.length : 0);

    }, [users, currentUser, isLoggedIn, loading]);


    return (
        <UsersContext.Provider value={{ users, setUsers, currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn, totalStudents, totalFiles, gradedFiles, avgGrade }}>
            {children}
        </UsersContext.Provider>
    );
}