"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Footer from "../../components/layout/Footer";

import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight } from "react-icons/fi";

import Navbar from "../../components/layout/Navbar";
import { authService } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { refreshUser } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await authService.login({ email, password });
      await refreshUser();

      if (res.user.role === "admin") router.push("/admin");
      else if (res.user.role === "trainer") router.push("/trainer-dashboard");
      else router.push("/dashboard");
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
          "Login failed. Please check your credentials."
      );
    } finally {
      setLoading(false);
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

     <section className="relative min-h-screen mt-10 bg-gradient-to-br from-green-50 via-white to-emerald-100 dark:from-slate-900 dark:via-gray-900 dark:to-black flex items-center justify-center overflow-hidden px-6 py-16 font-sans">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 block h-full w-full object-cover"
        >
          <source src="/images/video.mp4" type="video/mp4" />
        </video>
        {/* Overlay for text/form legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C2621]/70 via-[#1C2621]/50 to-[#1C2621]/70" />

        <form
          onSubmit={handleSubmit}
          className="relative z-10 w-full max-w-sm rounded-3xl border border-white/20 bg-white/95 px-8 py-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-md sm:px-10"
        >
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
            <h2 className="font-serif text-3xl font-medium text-[#1C2621]">
              Welcome back
            </h2>
            <p className="mt-2 text-sm text-[#6B7A6E]">
              Continue your wellness journey.
            </p>
          </div>

          {error && (
            <div className="mb-6 rounded-lg border border-[#D8A488]/50 bg-[#D8A488]/10 px-4 py-3 text-sm text-[#8A4A32]">
              {error}
            </div>
          )}

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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
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
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full bg-transparent text-[#1C2621] outline-none placeholder:text-[#B7BDAE]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-[#93A38C] transition hover:text-[#C79A56]"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
          </label>

          <div className="mb-8 flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-[#6B7A6E]">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-[#D8D2C2] text-[#C79A56] focus:ring-[#C79A56]"
              />
              Remember me
            </label>
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-[#8A6B3C] hover:text-[#C79A56]"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1C2621] py-3.5 text-base font-medium text-[#FAF6EE] shadow-[0_6px_16px_-6px_rgba(28,38,33,0.5)] transition-colors hover:bg-[#2C3A31] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="opacity-25"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                Signing in...
              </>
            ) : (
              <>
                Sign in
                <FiArrowRight size={18} />
              </>
            )}
          </button>

          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#E4DFD0]" />
            <span className="text-xs uppercase tracking-[0.15em] text-[#B7BDAE]">
              or
            </span>
            <div className="h-px flex-1 bg-[#E4DFD0]" />
          </div>

          <button
            type="button"
            className="mb-7 flex w-full items-center justify-center gap-3 rounded-xl border border-[#E4DFD0] bg-[#FAF7F0] py-3 font-medium text-[#1C2621] transition-colors hover:bg-white"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="h-5 w-5"
            />
            Continue with Google
          </button>

          <p className="text-center text-sm text-[#6B7A6E]">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="font-semibold text-[#1C2621] hover:text-[#C79A56]">
              Create one
            </Link>
          </p>
        </form>
      </section>
      <div className="mt-[-100px]">
         <Footer />
      </div>
     
    </>
  );
}