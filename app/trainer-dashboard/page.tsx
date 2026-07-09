"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/layout/Navbar";
import { useAuth } from "../../context/AuthContext";

export default function TrainerDashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || user.role !== "trainer")) router.replace("/login");
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream dark:bg-dark">
        <div className="h-10 w-10 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] max-w-5xl mx-auto px-6 py-16">
        <h1 className="font-heading text-3xl text-dark dark:text-cream mb-2">
          Welcome, {user.name.split(" ")[0]}
        </h1>
        <p className="text-dark/50 dark:text-cream/50">
          Your class schedule and attendance marking tools will appear here — coming in the next build phase.
        </p>
      </main>
    </>
  );
}
