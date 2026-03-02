"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UsersContext } from "@/app/Contexts/UsersContext";

export default function ProtectedRoute({ children, allowedRoles = [] }) {
  const { currentUser, isLoggedIn, loading } = useContext(UsersContext);
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    if (!isLoggedIn) {
      router.replace("/");
      return;
    }

    if (allowedRoles.length > 0 && !allowedRoles.includes(currentUser?.role)) {
      router.replace("/unauthorized");
    }
  }, [isLoggedIn, currentUser, loading, allowedRoles, router]);

  if (loading) return null;
  if (!isLoggedIn) return null;

  if (allowedRoles.length > 0 && !allowedRoles.includes(currentUser?.role)) {
    return null;
  }

  return children;
}
