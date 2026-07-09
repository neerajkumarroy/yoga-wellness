"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiLock, FiPhone } from "react-icons/fi";
import Navbar from "../../components/layout/Navbar";
import { authService } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

type Step = "form" | "otp";

function getErrorMessage(err: unknown, fallback: string) {
  if (err && typeof err === "object" && "response" in err) {
    return (err as { response?: { data?: { message?: string } } }).response?.data?.message || fallback;
  }
  return fallback;
}

export default function RegisterPage() {
  const [step, setStep] = useState<Step>("form");
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [otp, setOtp] = useState("");
  const [userId, setUserId] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { refreshUser } = useAuth();

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await authService.register(form);
      setUserId(res.userId);
      setStep("otp");
    } catch (err) {
      setError(getErrorMessage(err, "Registration failed. Please try again."));
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await authService.verifyOTP({ userId, otp });
      await refreshUser();
      router.push("/dashboard");
    } catch (err) {
      setError(getErrorMessage(err, "Invalid or expired OTP."));
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setError("");
    try {
      await authService.resendOTP(userId);
    } catch (err) {
      setError(getErrorMessage(err, "Could not resend OTP."));
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
          {step === "form" ? (
            <form onSubmit={handleRegister}>
              <h1 className="font-heading text-3xl text-dark dark:text-cream text-center">Create Account</h1>
              <p className="text-sm text-dark/50 dark:text-cream/50 text-center mt-2 mb-8">
                Start your yoga journey with us
              </p>

              {error && <p className="mb-4 text-sm text-red-500 bg-red-500/10 rounded-lg px-3 py-2">{error}</p>}

              <label className="block mb-4">
                <span className="text-sm text-dark/70 dark:text-cream/70">Full Name</span>
                <div className="mt-1 flex items-center gap-2 rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 focus-within:border-primary">
                  <FiUser className="text-dark/40 dark:text-cream/40" />
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent outline-none text-dark dark:text-cream" placeholder="Jane Doe" />
                </div>
              </label>

              <label className="block mb-4">
                <span className="text-sm text-dark/70 dark:text-cream/70">Email</span>
                <div className="mt-1 flex items-center gap-2 rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 focus-within:border-primary">
                  <FiMail className="text-dark/40 dark:text-cream/40" />
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent outline-none text-dark dark:text-cream" placeholder="you@example.com" />
                </div>
              </label>

              <label className="block mb-4">
                <span className="text-sm text-dark/70 dark:text-cream/70">Phone (optional)</span>
                <div className="mt-1 flex items-center gap-2 rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 focus-within:border-primary">
                  <FiPhone className="text-dark/40 dark:text-cream/40" />
                  <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-transparent outline-none text-dark dark:text-cream" placeholder="+91 98765 43210" />
                </div>
              </label>

              <label className="block mb-6">
                <span className="text-sm text-dark/70 dark:text-cream/70">Password</span>
                <div className="mt-1 flex items-center gap-2 rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 focus-within:border-primary">
                  <FiLock className="text-dark/40 dark:text-cream/40" />
                  <input type="password" required minLength={6} value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}
                    className="w-full bg-transparent outline-none text-dark dark:text-cream" placeholder="At least 6 characters" />
                </div>
              </label>

              <button type="submit" disabled={loading}
                className="w-full rounded-xl2 bg-primary text-white py-3 font-medium hover:bg-primary/90 transition-colors disabled:opacity-60">
                {loading ? "Creating account..." : "Create Account"}
              </button>

              <p className="text-center text-sm text-dark/60 dark:text-cream/60 mt-6">
                Already have an account?{" "}
                <Link href="/login" className="text-primary font-medium hover:underline">Sign in</Link>
              </p>
            </form>
          ) : (
            <form onSubmit={handleVerify}>
              <h1 className="font-heading text-3xl text-dark dark:text-cream text-center">Verify Email</h1>
              <p className="text-sm text-dark/50 dark:text-cream/50 text-center mt-2 mb-8">
                We sent a 6-digit code to {form.email}
              </p>

              {error && <p className="mb-4 text-sm text-red-500 bg-red-500/10 rounded-lg px-3 py-2">{error}</p>}

              <input
                required
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                className="w-full text-center tracking-[0.5em] text-xl rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 mb-6 bg-transparent outline-none focus:border-primary text-dark dark:text-cream"
                placeholder="000000"
              />

              <button type="submit" disabled={loading}
                className="w-full rounded-xl2 bg-primary text-white py-3 font-medium hover:bg-primary/90 transition-colors disabled:opacity-60">
                {loading ? "Verifying..." : "Verify & Continue"}
              </button>

              <button type="button" onClick={handleResend}
                className="w-full text-center text-sm text-primary mt-4 hover:underline">
                Resend code
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </>
  );
}
