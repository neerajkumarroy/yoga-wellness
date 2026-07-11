"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Footer from "../../components/layout/Footer";
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
      {/* Fonts: swap for next/font in production */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Work+Sans:wght@400;500;600&display=swap");
        .font-serif {
          font-family: "Fraunces", serif;
        }
        .font-sans {
          font-family: "Work Sans", sans-serif;
        }
      `}</style>

      <Navbar />

      <section className="font-sans relative flex min-h-screen mt-10 items-center justify-center overflow-hidden px-6 py-16">
        {/* Background video */}
      

<div className="absolute inset-0">
  <Image
    src="/images/loginimg.png"
    alt="Login Background"
    fill
    priority
    className="object-cover"
  />
</div>
        {/* Overlay for text/form legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C2621]/70 via-[#1C2621]/50 to-[#1C2621]/70" />

        <div className="relative z-10 w-full max-w-sm rounded-3xl border border-white/20 bg-white/95 px-8 py-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-md sm:px-10">
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1C2621] shadow-[0_6px_20px_-6px_rgba(28,38,33,0.5)]">
              <Image
                src="/images/logo1.png"
                alt="Yoga Wellness"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
            </div>
          </div>

          {step === "form" ? (
            <form onSubmit={handleRegister}>
              <div className="mb-8 text-center">
                <h2 className="font-serif text-3xl font-medium text-[#1C2621]">
                  Create account
                </h2>
                <p className="mt-2 text-sm text-[#6B7A6E]">
                  Start your yoga journey with us.
                </p>
              </div>

              {error && (
                <div className="mb-6 rounded-lg border border-[#D8A488]/50 bg-[#D8A488]/10 px-4 py-3 text-sm text-[#8A4A32]">
                  {error}
                </div>
              )}

              {/* NAME */}
              <label className="mb-5 block">
                <span className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-[#6B7A6E]">
                  Full name
                </span>
                <div className="flex items-center gap-3 rounded-xl border border-[#E4DFD0] bg-[#FAF7F0] px-4 py-3 transition-colors focus-within:border-[#C79A56] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#C79A56]/10">
                  <FiUser className="text-[#93A38C]" size={17} />
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full bg-transparent text-[#1C2621] outline-none placeholder:text-[#B7BDAE]"
                  />
                </div>
              </label>

              {/* EMAIL */}
              <label className="mb-5 block">
                <span className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-[#6B7A6E]">
                  Email
                </span>
                <div className="flex items-center gap-3 rounded-xl border border-[#E4DFD0] bg-[#FAF7F0] px-4 py-3 transition-colors focus-within:border-[#C79A56] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#C79A56]/10">
                  <FiMail className="text-[#93A38C]" size={17} />
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full bg-transparent text-[#1C2621] outline-none placeholder:text-[#B7BDAE]"
                  />
                </div>
              </label>

              {/* PHONE */}
              <label className="mb-5 block">
                <span className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-[#6B7A6E]">
                  Phone (optional)
                </span>
                <div className="flex items-center gap-3 rounded-xl border border-[#E4DFD0] bg-[#FAF7F0] px-4 py-3 transition-colors focus-within:border-[#C79A56] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#C79A56]/10">
                  <FiPhone className="text-[#93A38C]" size={17} />
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-transparent text-[#1C2621] outline-none placeholder:text-[#B7BDAE]"
                  />
                </div>
              </label>

              {/* PASSWORD */}
              <label className="mb-4 block">
                <span className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-[#6B7A6E]">
                  Password
                </span>
                <div className="flex items-center gap-3 rounded-xl border border-[#E4DFD0] bg-[#FAF7F0] px-4 py-3 transition-colors focus-within:border-[#C79A56] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#C79A56]/10">
                  <FiLock className="text-[#93A38C]" size={17} />
                  <input
                    type="password"
                    required
                    minLength={6}
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    placeholder="At least 6 characters"
                    className="w-full bg-transparent text-[#1C2621] outline-none placeholder:text-[#B7BDAE]"
                  />
                </div>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1C2621] py-3.5 text-base font-medium text-[#FAF6EE] shadow-[0_6px_16px_-6px_rgba(28,38,33,0.5)] transition-colors hover:bg-[#2C3A31] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Creating account..." : "Create account"}
              </button>

              <p className="mt-7 text-center text-sm text-[#6B7A6E]">
                Already have an account?{" "}
                <Link href="/login" className="font-semibold text-[#1C2621] hover:text-[#C79A56]">
                  Sign in
                </Link>
              </p>
            </form>
          ) : (
            <form onSubmit={handleVerify}>
              <div className="mb-8 text-center">
                <h2 className="font-serif text-3xl font-medium text-[#1C2621]">
                  Verify email
                </h2>
                <p className="mt-2 text-sm text-[#6B7A6E]">
                  We sent a 6-digit code to {form.email}.
                </p>
              </div>

              {error && (
                <div className="mb-6 rounded-lg border border-[#D8A488]/50 bg-[#D8A488]/10 px-4 py-3 text-sm text-[#8A4A32]">
                  {error}
                </div>
              )}

              <input
                required
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                placeholder="000000"
                className="mb-6 w-full rounded-xl border border-[#E4DFD0] bg-[#FAF7F0] px-4 py-3 text-center text-xl tracking-[0.5em] text-[#1C2621] outline-none transition-colors placeholder:text-[#B7BDAE] focus:border-[#C79A56] focus:bg-white focus:ring-4 focus:ring-[#C79A56]/10"
              />

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1C2621] py-3.5 text-base font-medium text-[#FAF6EE] shadow-[0_6px_16px_-6px_rgba(28,38,33,0.5)] transition-colors hover:bg-[#2C3A31] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Verifying..." : "Verify & continue"}
              </button>

              <button
                type="button"
                onClick={handleResend}
                className="mt-5 w-full text-center text-sm font-medium text-[#8A6B3C] hover:text-[#C79A56]"
              >
                Resend code
              </button>
            </form>
          )}
        </div>
      </section>
      <div className="mt-[-100px]">
               <Footer />
            </div>
    </>
  );
}