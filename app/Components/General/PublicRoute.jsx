"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UsersContext } from "@/app/Contexts/UsersContext";

export default function PublicRoute({ children }) {
  const { isLoggedIn, loading } = useContext(UsersContext);
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    if (isLoggedIn) {
      router.replace("/home");
    }
  }, [isLoggedIn, loading, router]);

  if (loading) return null;
  if (isLoggedIn) return null;

  return children;
}
