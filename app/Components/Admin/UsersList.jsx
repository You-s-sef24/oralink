"use client";

import axios from "axios";
import { UsersContext } from "@/app/Contexts/UsersContext";
import { useContext, useEffect, useState } from "react";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
import UsersModal from "./UsersModal";
import EditAdminModal from "./AdminModal";
import ExcelModal from "./ExelModal";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const {
    showUsersModal,
    setShowUsersModal,
    showEditModal,
    setShowEditModal,
    showDeleteModal,
    setShowDeleteModal,
    selectedUser,
    setSelectedUser,
    showEditAdminModal,
    setShowEditAdminModal,
    showExelModal,
    setShowExelModal,
  } = useContext(UsersContext);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://oralink.runasp.net/api/admin/get-all-users",
      );
      setUsers(data?.data || data || []);
    } catch (err) {
      console.error("Failed to fetch users:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user?.email?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

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

        <div className="col-12 col-sm-4 text-md-end d-flex gap-2">
          <button
            className="btn btn-primary w-50 w-md-auto"
            onClick={() => setShowUsersModal(true)}
          >
            <i className="bi bi-person-add me-2"></i>
            Add User
          </button>

          <button
            className="btn btn-success w-50 w-md-auto"
            onClick={() => setShowExelModal(true)}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="16" y="6" width="36" height="52" rx="4" fill="#E9ECEF" />

              <rect x="8" y="12" width="20" height="40" rx="3" fill="#198754" />

              <path
                d="M14 24 L20 32 L14 40 H18 L22 34 L26 40 H30 L24 32 L30 24 H26 L22 30 L18 24 Z"
                fill="white"
              />

              <line
                x1="22"
                y1="18"
                x2="46"
                y2="18"
                stroke="#ADB5BD"
                stroke-width="2"
              />
              <line
                x1="22"
                y1="26"
                x2="46"
                y2="26"
                stroke="#ADB5BD"
                stroke-width="2"
              />
              <line
                x1="22"
                y1="34"
                x2="46"
                y2="34"
                stroke="#ADB5BD"
                stroke-width="2"
              />
              <line
                x1="22"
                y1="42"
                x2="46"
                y2="42"
                stroke="#ADB5BD"
                stroke-width="2"
              />
            </svg>
            Import Exel Sheet
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

        {loading ? (
          <div className="text-center py-3">
            <span className="spinner-border spinner-border-sm"></span>
          </div>
        ) : filteredUsers.length === 0 ? (
          <div className="text-center py-3 text-muted">No users found</div>
        ) : (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              className="row text-center bg-white p-2 rounded border-bottom"
            >
              <div className="col-3">
                <p className="fw-bold m-0">{user.name || "-"}</p>
              </div>

              <div className="col-3">
                <p className="m-0 text-truncate">{user.email || "-"}</p>
              </div>

              <div className="col-3">
                <p className="m-0">{user.role || "-"}</p>
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
          ))
        )}
      </div>

      {showUsersModal && (
        <UsersModal
          show={showUsersModal}
          isClose={() => setShowUsersModal(false)}
          refreshUsers={fetchUsers}
        />
      )}

      {showEditModal && (
        <EditModal
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          show={showEditModal}
          isClose={() => setShowEditModal(false)}
          refreshUsers={fetchUsers}
        />
      )}

      {showDeleteModal && (
        <DeleteModal
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          show={showDeleteModal}
          isClose={() => setShowDeleteModal(false)}
          refreshUsers={fetchUsers}
        />
      )}

      {showEditAdminModal && (
        <EditAdminModal
          show={showEditAdminModal}
          isClose={() => setShowEditAdminModal(false)}
        />
      )}

      {showExelModal && <ExcelModal onClose={() => setShowExelModal(false)} />}
    </div>
  );
}
