"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/layout/Navbar";
import { useAuth } from "../../context/AuthContext";

// Student dashboard shell — full attendance/certificates/course UI is the
// next build phase. This establishes the protected route + real user data.
export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.replace("/login");
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
          Welcome back, {user.name.split(" ")[0]} 🧘
        </h1>
        <p className="text-dark/50 dark:text-cream/50">
          Your bookings, attendance, certificates, and video courses will appear here — coming in the next build phase.
        </p>
        <div className="mt-8 rounded-3xl bg-gradient-to-r from-green-600 to-emerald-500 p-8 text-white shadow-xl">

  <p className="uppercase tracking-widest text-green-100 text-sm">
    Yoga Wellness
  </p>

  <h2 className="text-4xl font-bold mt-2">
    Keep Going! 💪
  </h2>

  <p className="mt-3 max-w-2xl text-green-100">
    Every yoga session brings you one step closer to a healthier body,
    peaceful mind, and happier lifestyle.
  </p>

  <button className="mt-6 bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
    Explore Classes
  </button>

</div>
{/* ------------- */}
<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

  <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
    <h3 className="text-4xl font-bold text-green-600">12</h3>
    <p className="text-gray-500 mt-2">Classes</p>
  </div>

  <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
    <h3 className="text-4xl font-bold text-green-600">92%</h3>
    <p className="text-gray-500 mt-2">Attendance</p>
  </div>

  <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
    <h3 className="text-4xl font-bold text-green-600">4</h3>
    <p className="text-gray-500 mt-2">Certificates</p>
  </div>

  <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
    <h3 className="text-4xl font-bold text-green-600">75%</h3>
    <p className="text-gray-500 mt-2">Course Progress</p>
  </div>

</div>
{/* ---------------- */}
<div className="mt-10 bg-white  rounded-3xl shadow-xl overflow-hidden">

  <img
    src="/images/yoga8.jpeg"
    alt="Yoga Course"
    className="w-full h-72 object-cover"
  />

  <div className="p-8">

    <h2 className="text-2xl font-bold">
      Continue Your Yoga Journey
    </h2>

    <p className="text-gray-600 mt-3">
      Morning Yoga for Beginners
    </p>

    <div className="w-full bg-gray-200 rounded-full h-3 mt-6">
      <div className="bg-green-600 h-3 rounded-full w-3/4"></div>
    </div>

    <p className="mt-2 text-sm text-gray-500">
      75% Completed
    </p>

    <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full">
      Continue Learning →
    </button>

  </div>

</div>
{/* ------------------------------ */}
<div className="relative mt-10 rounded-3xl overflow-hidden shadow-xl">

  {/* Background Image */}
  <img
    src="/images/yoga6.jpeg"
    alt="Yoga Class"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 p-8">

    <h2 className="text-3xl font-bold text-white">
      Today's Live Class
    </h2>

    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-8 gap-6">

      <div>
        <h3 className="text-2xl font-semibold text-white">
          Morning Meditation
        </h3>

        <p className="text-gray-200 mt-2">
          🕖 07:00 AM – 08:00 AM
        </p>

        <p className="text-gray-300 mt-3 max-w-md">
          Start your day with guided meditation and breathing exercises to
          improve focus, reduce stress, and bring inner peace.
        </p>
      </div>

      <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition">
        Join Now →
      </button>

    </div>

  </div>

</div>
{/* ------------------------ */}
<div className="mt-10 bg-gray-900 rounded-3xl p-10 text-center text-white">

  <h2 className="text-3xl font-bold">
    "Yoga is the journey of the self,
    through the self,
    to the self."
  </h2>

  <p className="mt-4 text-gray-300">
    Stay consistent. Every session counts.
  </p>

</div>
      </main>
    </>
  );
}
