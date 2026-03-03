"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UsersContext } from "@/app/Contexts/UsersContext";

export default function PublicRoute({ children }) {
  const { isLoggedIn, loading } = useContext(UsersContext);
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    const token = localStorage.getItem("token");
    if (token) {
      router.replace("/home");
    }
  }, [isLoggedIn, loading, router]);

  if (loading) return null;

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (token) return null;

  return children;
}
