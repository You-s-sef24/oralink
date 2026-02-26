"use client";

import { useContext } from "react";
import AdminAnalytics from "./AdminAnalytics";
import UsersList from "./UsersList";
import { UsersContext } from "@/app/Contexts/UsersContext";
import UsersModal from "./UsersModal";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

export default function AdminDashboard() {
  const {
    showUsersModal,
    setShowUsersModal,
    showEditModal,
    setShowEditModal,
    showDeleteModal,
    setShowDeleteModal,
    selectedUser,
    setSelectedUser,
  } = useContext(UsersContext);

  return (
    <div className="p-2">
      <AdminAnalytics />

      <hr />

      <UsersList />

      {showUsersModal && (
        <UsersModal
          show={showUsersModal}
          isClose={() => {
            setShowUsersModal(false);
          }}
        />
      )}

      {showDeleteModal && (
        <DeleteModal
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          show={showDeleteModal}
          isClose={() => {
            setShowDeleteModal(false);
          }}
        />
      )}

      {showEditModal && (
        <EditModal
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          show={showEditModal}
          isClose={() => {
            setShowEditModal(false);
          }}
        />
      )}
    </div>
  );
}
