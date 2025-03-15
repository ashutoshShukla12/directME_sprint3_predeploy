"use client";
import React, { useEffect, useState } from "react";
import { getUsers } from "@/utils/api";
import ProtectedRoute from "../ProtectedRoute";

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getUsers();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
                setError("Failed to fetch users");
            }
        };

        fetchUsers();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <ProtectedRoute>
            <div>
                <h1>User Management</h1>
                <ul>
                    {users.map((user) => (
                        <li key={user._id}>{user.username}</li>
                    ))}
                </ul>
            </div>
        </ProtectedRoute>
    );
};

export default UserManagement;