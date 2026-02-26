"use client";

import { UsersContext } from "@/app/Contexts/UsersContext";
import { useContext, useState } from "react";

export default function UsersList() {
  const users = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      role: "Student",
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob.smith@example.com",
      role: "Doctor",
    },
    {
      id: 3,
      name: "Charlie Brown",
      email: "charlie.brown@example.com",
      role: "Head of Department",
    },
    {
      id: 4,
      name: "David Wilson",
      email: "david.wilson@example.com",
      role: "Supervisor",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const {
    setShowUsersModal,
    setShowEditModal,
    setShowDeleteModal,
    setSelectedUser,
  } = useContext(UsersContext);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const renderUsers = filteredUsers.map((user) => (
    <div
      key={user.id}
      className="row text-center bg-white p-2 rounded border-bottom"
    >
      <div className="col-3">
        <p className="fw-bold m-0">{user.name}</p>
      </div>
      <div className="col-3">
        <p className="m-0 text-truncate">{user.email}</p>
      </div>
      <div className="col-3">
        <p className="m-0">{user.role}</p>
      </div>
      <div className="col-3 d-flex justify-content-center gap-2">
        <button
          className="btn btn-sm btn-outline-primary"
          onClick={() => {
            setSelectedUser(user);
            setShowEditModal(true);
          }}
        >
          <i className="bi bi-pencil-square"></i>
        </button>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => {
            setSelectedUser(user);
            setShowDeleteModal(true);
          }}
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="row align-items-center g-3 my-3">
        <div className="col-12 col-sm-8">
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <i className="bi bi-search text-secondary"></i>
            </span>
            <input
              type="search"
              className="form-control border-start-0"
              placeholder="Search by user name or email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="col-12 col-sm-4 text-md-end">
          <button
            className="btn btn-primary w-100 w-md-auto"
            onClick={() => {
              setShowUsersModal(true);
            }}
          >
            <i className="bi bi-person-add me-2"></i>
            Add User
          </button>
        </div>
      </div>

      <div className="rounded border py-2">
        <div className="row bg-light text-center">
          <div className="col-3">
            <h5>Name</h5>
          </div>
          <div className="col-3">
            <h5>Email</h5>
          </div>
          <div className="col-3">
            <h5>Role</h5>
          </div>
          <div className="col-3">
            <h5>Actions</h5>
          </div>
        </div>
        {renderUsers}
      </div>
    </div>
  );
}
