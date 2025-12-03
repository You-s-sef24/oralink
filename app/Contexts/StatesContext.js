"use client";

import { createContext, useState } from "react";

export const StatesContext = createContext();

export default function StatesProvider({ children }) {
    const [state, setState] = useState(1);
    
    return (
        <StatesContext.Provider value={{ state, setState }}>
            {children}
        </StatesContext.Provider>
    )
}