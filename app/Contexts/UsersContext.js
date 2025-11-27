"use client";

import { createContext, useState } from "react";

export const UsersContext = createContext();

export default function UsersProvider({ children }) {
    const [users, setUsers] = useState([
        { id: 1, name: "Youssef Mahmoud", role: "student", email: "202205658@o6u.edu.eg", password: "123" },
    ]);

    return (
        <UsersContext.Provider value={{ users }}>
            {children}
        </UsersContext.Provider>
    );
}