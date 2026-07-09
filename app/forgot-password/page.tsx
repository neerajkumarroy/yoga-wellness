"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMail, FiLock } from "react-icons/fi";
import Navbar from "../../components/layout/Navbar";
import { api } from "../../services/api";

type Step = "request" | "reset" | "done";

function getErrorMessage(err: unknown, fallback: string) {
  if (err && typeof err === "object" && "response" in err) {
    return (err as { response?: { data?: { message?: string } } }).response?.data?.message || fallback;
  }
  return fallback;
}

export default function ForgotPasswordPage() {
  const [step, setStep] = useState<Step>("request");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRequest = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await api.post("/auth/forgot-password", { email });
      setUserId(res.data.userId);
      setStep("reset");
    } catch (err) {
      setError(getErrorMessage(err, "Could not send reset code."));
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await api.post("/auth/reset-password", { userId, otp, newPassword });
      setStep("done");
    } catch (err) {
      setError(getErrorMessage(err, "Invalid or expired code."));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-[85vh] flex items-center justify-center bg-cream dark:bg-dark px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm rounded-xl2 bg-white dark:bg-[#161616] p-8 shadow-premium"
        >
          {step === "request" && (
            <form onSubmit={handleRequest}>
              <h1 className="font-heading text-3xl text-dark dark:text-cream text-center">Reset Password</h1>
              <p className="text-sm text-dark/50 dark:text-cream/50 text-center mt-2 mb-8">
                Enter your email and we&apos;ll send a reset code
              </p>
              {error && <p className="mb-4 text-sm text-red-500 bg-red-500/10 rounded-lg px-3 py-2">{error}</p>}
              <label className="block mb-6">
                <span className="text-sm text-dark/70 dark:text-cream/70">Email</span>
                <div className="mt-1 flex items-center gap-2 rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 focus-within:border-primary">
                  <FiMail className="text-dark/40 dark:text-cream/40" />
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent outline-none text-dark dark:text-cream" placeholder="you@example.com" />
                </div>
              </label>
              <button type="submit" disabled={loading}
                className="w-full rounded-xl2 bg-primary text-white py-3 font-medium hover:bg-primary/90 transition-colors disabled:opacity-60">
                {loading ? "Sending..." : "Send Reset Code"}
              </button>
              <p className="text-center text-sm text-dark/60 dark:text-cream/60 mt-6">
                Remembered it? <Link href="/login" className="text-primary font-medium hover:underline">Sign in</Link>
              </p>
            </form>
          )}

          {step === "reset" && (
            <form onSubmit={handleReset}>
              <h1 className="font-heading text-3xl text-dark dark:text-cream text-center">Enter Code</h1>
              <p className="text-sm text-dark/50 dark:text-cream/50 text-center mt-2 mb-8">
                Check {email} for a 6-digit code
              </p>
              {error && <p className="mb-4 text-sm text-red-500 bg-red-500/10 rounded-lg px-3 py-2">{error}</p>}
              <input
                required
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                className="w-full text-center tracking-[0.5em] text-xl rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 mb-4 bg-transparent outline-none focus:border-primary text-dark dark:text-cream"
                placeholder="000000"
              />
              <label className="block mb-6">
                <span className="text-sm text-dark/70 dark:text-cream/70">New Password</span>
                <div className="mt-1 flex items-center gap-2 rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 focus-within:border-primary">
                  <FiLock className="text-dark/40 dark:text-cream/40" />
                  <input type="password" required minLength={6} value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full bg-transparent outline-none text-dark dark:text-cream" placeholder="At least 6 characters" />
                </div>
              </label>
              <button type="submit" disabled={loading}
                className="w-full rounded-xl2 bg-primary text-white py-3 font-medium hover:bg-primary/90 transition-colors disabled:opacity-60">
                {loading ? "Resetting..." : "Reset Password"}
              </button>
            </form>
          )}

          {step === "done" && (
            <div className="text-center">
              <h1 className="font-heading text-3xl text-dark dark:text-cream mb-3">Password Reset</h1>
              <p className="text-sm text-dark/50 dark:text-cream/50 mb-8">You can now sign in with your new password.</p>
              <Link href="/login" className="inline-block rounded-xl2 bg-primary text-white px-6 py-3 font-medium hover:bg-primary/90">
                Go to Login
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </>
  );
}
