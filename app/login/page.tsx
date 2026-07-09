"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FiMail, FiLock } from "react-icons/fi";
import Navbar from "../../components/layout/Navbar";
import { authService } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { refreshUser } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await authService.login({ email, password });
      await refreshUser();
      router.push(res.user.role === "trainer" ? "/trainer-dashboard" : "/dashboard");
    } catch (err: unknown) {
      const message =
        err && typeof err === "object" && "response" in err
          ? (err as { response?: { data?: { message?: string } } }).response?.data?.message
          : undefined;
      setError(message || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-[85vh] flex items-center justify-center bg-cream dark:bg-dark px-4 py-12">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="w-full max-w-sm rounded-xl2 bg-white dark:bg-[#161616] p-8 shadow-premium"
        >
          <h1 className="font-heading text-3xl text-dark dark:text-cream text-center">Welcome Back</h1>
          <p className="text-sm text-dark/50 dark:text-cream/50 text-center mt-2 mb-8">
            Sign in to continue your wellness journey
          </p>

          {error && <p className="mb-4 text-sm text-red-500 bg-red-500/10 rounded-lg px-3 py-2">{error}</p>}

          <label className="block mb-4">
            <span className="text-sm text-dark/70 dark:text-cream/70">Email</span>
            <div className="mt-1 flex items-center gap-2 rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 focus-within:border-primary">
              <FiMail className="text-dark/40 dark:text-cream/40" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent outline-none text-dark dark:text-cream"
                placeholder="you@example.com"
              />
            </div>
          </label>

          <label className="block mb-2">
            <span className="text-sm text-dark/70 dark:text-cream/70">Password</span>
            <div className="mt-1 flex items-center gap-2 rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 focus-within:border-primary">
              <FiLock className="text-dark/40 dark:text-cream/40" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent outline-none text-dark dark:text-cream"
                placeholder="••••••••"
              />
            </div>
          </label>

          <div className="flex justify-end mb-6">
            <Link href="/forgot-password" className="text-xs text-primary hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl2 bg-primary text-white py-3 font-medium hover:bg-primary/90 transition-colors disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <p className="text-center text-sm text-dark/60 dark:text-cream/60 mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-primary font-medium hover:underline">
              Register
            </Link>
          </p>
        </motion.form>
      </div>
    </>
  );
}
