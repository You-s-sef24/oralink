"use client";

import { createContext, useState } from "react";

export const UIContext = createContext();

export default function UIProvider({ children }) {
    const [showUsersModal, setShowUsersModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showEditAdminModal, setShowEditAdminModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showExelModal, setShowExelModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    return (
        <UIContext.Provider value={{ showUsersModal, setShowUsersModal, showEditModal, setShowEditModal, showDeleteModal, setShowDeleteModal, selectedUser, setSelectedUser, showEditAdminModal, setShowEditAdminModal, showExelModal, setShowExelModal }}>
            {children}
        </UIContext.Provider>
    );
}