"use client";

import { ReactNode, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Sidebar from "../../components/admin/Sidebar";
import { useAuth } from "../../context/AuthContext";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (isLoginPage) return;
    if (!loading && (!user || user.role !== "admin")) {
      router.replace("/admin/login");
    }
  }, [user, loading, router, isLoginPage]);

  // The login page renders standalone, without the sidebar/guard.
  if (isLoginPage) return <>{children}</>;

  if (loading || !user || user.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream dark:bg-dark">
        <div className="h-10 w-10 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex bg-cream dark:bg-dark min-h-screen">
      <Sidebar />
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  );
}
