"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import Footer from "../../../components/layout/Footer";
import Navbar from "../../../components/layout/Navbar";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
});

/* ---------- Signature element: an interactive pose-hold timer ---------- */
const POSES = [
  { name: "Warrior II", cue: "Front knee tracked over the ankle, arms level, gaze steady past the front hand." },
  { name: "Plank", cue: "Shoulders stacked over wrists, one straight line from heel to crown." },
  { name: "Chair Pose", cue: "Weight in the heels, knees behind the toes, arms reaching long." },
];

function formatTime(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function HoldTimer({ size = 260 }: { size?: number }) {
  const [poseIndex, setPoseIndex] = useState(0);
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [bests, setBests] = useState<Record<number, number>>({});
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running]);

  const radius = size * 0.42;
  const circumference = 2 * Math.PI * radius;
  const cycle = seconds % 60;
  const progress = cycle / 60;

  const switchPose = (index: number) => {
    if (seconds > (bests[poseIndex] ?? 0)) {
      setBests((b) => ({ ...b, [poseIndex]: seconds }));
    }
    setPoseIndex(index);
    setRunning(false);
    setSeconds(0);
  };

  const handleReset = () => {
    if (seconds > (bests[poseIndex] ?? 0)) {
      setBests((b) => ({ ...b, [poseIndex]: seconds }));
    }
    setRunning(false);
    setSeconds(0);
  };

  const best = bests[poseIndex] ?? 0;

  return (
    <div className="w-full max-w-sm">
      <div className="flex gap-2 mb-6" role="tablist" aria-label="Choose a pose">
        {POSES.map((p, i) => (
          <button
            key={p.name}
            role="tab"
            aria-selected={poseIndex === i}
            onClick={() => switchPose(i)}
            className={`flex-1 rounded-full px-3 py-2 text-xs font-[family-name:var(--font-mono)] tracking-wide uppercase transition-colors ${
              poseIndex === i
                ? "bg-[#A83A3A] text-[#F3EEE3]"
                : "bg-[#20302A]/5 text-[#20302A]/60 hover:bg-[#20302A]/10"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      <div
        className="relative mx-auto flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#20302A"
            strokeOpacity={0.1}
            strokeWidth={2}
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#A83A3A"
            strokeWidth={2}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - progress)}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.9s linear" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <span className="font-[family-name:var(--font-display)] text-5xl text-[#20302A] tabular-nums">
            {formatTime(seconds)}
          </span>
          <span className="mt-2 text-xs text-[#20302A]/50">
            Best hold: {formatTime(best)}
          </span>
        </div>
      </div>

      <p className="mt-6 text-sm text-[#20302A]/60 text-center leading-relaxed min-h-[40px]">
        {POSES[poseIndex].cue}
      </p>

      <div className="mt-5 flex justify-center gap-3">
        <button
          onClick={() => setRunning((r) => !r)}
          className="bg-[#20302A] text-[#F3EEE3] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#2B4038] transition"
        >
          {running ? "Pause hold" : seconds > 0 ? "Resume hold" : "Start hold"}
        </button>
        <button
          onClick={handleReset}
          className="border border-[#20302A]/20 text-[#20302A] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#20302A]/5 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

/* ---------- Line icons (no emoji) ---------- */
const icons = {
  muscle: (
    <path
      d="M4 14c0-3 2-4 4-3 1-3 4-4 6-2 2-1 5 0 5 3 0 4-3 6-3 9H8c0-3-4-4-4-7Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinejoin="round"
    />
  ),
  balance: (
    <path
      d="M12 3v13M6 8l-3 5a3 3 0 0 0 6 0Zm12 0l-3 5a3 3 0 0 0 6 0ZM6 8h12M8 21h8"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  bone: (
    <path
      d="M6 6a2.2 2.2 0 1 0-3 3l12 12a2.2 2.2 0 1 0 3-3L6 6Zm-1.5 1.5a2.2 2.2 0 1 1-3-3 2.2 2.2 0 0 1 3 3Zm13 13a2.2 2.2 0 1 1-3-3 2.2 2.2 0 0 1 3 3Z"
      stroke="currentColor"
      strokeWidth="1.3"
      fill="none"
      strokeLinejoin="round"
    />
  ),
  flame: (
    <path
      d="M12 2c1 3-2 4-2 7a4 4 0 0 0 8 0c0-1-.5-2-1-2 1 4-1 6-3 6a3.5 3.5 0 0 1-3.5-3.5C10.5 6 9 5 12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinejoin="round"
    />
  ),
};

type IconName = keyof typeof icons;

function Icon({ name }: { name: IconName }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" className="text-[#A83A3A]">
      {icons[name]}
    </svg>
  );
}

const benefits: { icon: IconName; title: string; copy: string }[] = [
  {
    icon: "muscle",
    title: "Strong muscles",
    copy: "Isometric holds and slow transitions build lean, functional strength without added bulk.",
  },
  {
    icon: "balance",
    title: "Better balance",
    copy: "Single-leg and off-center poses retrain coordination that daily life rarely asks of you.",
  },
  {
    icon: "bone",
    title: "Healthy bones",
    copy: "Weight-bearing poses put controlled load through joints and bones, supporting long-term density.",
  },
  {
    icon: "flame",
    title: "Burn calories",
    copy: "Held poses raise your heart rate more than they look like they should — strength and cardio at once.",
  },
];

const tabs = {
  practice: {
    label: "Yoga practice",
    items: [
      ["Warrior poses", "The base stance for building leg strength and hip stability."],
      ["Plank variations", "Forearm, side, and single-arm holds for full core control."],
      ["Chair pose", "A quiet, brutal test of quad and glute endurance."],
      ["Balance training", "Tree, eagle, and half-moon — coordination as strength."],
    ],
  },
  coaching: {
    label: "Lifestyle coaching",
    items: [
      ["Healthy diet tips", "Practical eating guidance that supports recovery, not restriction."],
      ["Daily workout plan", "A rhythm of practice days and rest days that actually fits your week."],
      ["Progress tracking", "A record of hold times and range of motion, so gains are visible."],
      ["Personal guidance", "Direct instructor feedback on form, not just encouragement."],
    ],
  },
} as const;

type TabKey = keyof typeof tabs;

export default function BuildStrengthPageClient() {
  const [activeTab, setActiveTab] = useState<TabKey>("practice");

  return (
    <main
      className={`${fraunces.variable} ${inter.variable} ${mono.variable} bg-[#F3EEE3] font-[family-name:var(--font-body)]`}
    >
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#F3EEE3] pt-40 pb-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.05fr_0.95fr] gap-16 items-start">
          <div>
            <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.3em] uppercase text-[#A83A3A]">
              Strength Program
            </span>
            <h1 className="mt-6 font-[family-name:var(--font-display)] italic text-5xl md:text-6xl leading-[1.05] text-[#20302A]">
              Strength you
              <br />
              can measure
              <br />
              in seconds held.
            </h1>
            <p className="mt-8 text-lg text-[#20302A]/75 max-w-md leading-relaxed">
              Muscle, balance, and posture, built through poses designed to be
              held — not rushed through. Try the timer to feel what a real
              hold takes.
            </p>
            <Link
              href="/free-trial"
              className="inline-block mt-10 bg-[#20302A] text-[#F3EEE3] px-8 py-4 rounded-full font-medium tracking-wide hover:bg-[#2B4038] transition"
            >
              Start your free trial
            </Link>
          </div>

          <div className="justify-self-center">
            <HoldTimer />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 bg-[#F3EEE3]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="/images/service2.png"
              alt="Strength Yoga"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>

          <div>
            <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.3em] uppercase text-[#A83A3A]">
              Why strength yoga
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] italic text-4xl text-[#20302A]">
              Functional strength, built safely
            </h2>
            <p className="mt-6 text-[#20302A]/70 leading-relaxed">
              Yoga builds the kind of strength that carries over — posture,
              flexibility, and body control included. Instructors guide load
              and form from your first session, so progress is safe from the
              start.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Increase muscle strength",
                "Improve body balance",
                "Enhance core stability",
                "Better flexibility",
                "Improve posture",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[#20302A]/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A83A3A]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
<section className="bg-[#134E4A] text-[#F3EEE3] py-24">        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] italic text-4xl md:text-5xl max-w-xl">
            What the program builds
          </h2>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                tabIndex={0}
                className="group rounded-2xl p-7 border border-[#F3EEE3]/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#A83A3A]/50 hover:bg-[#F3EEE3]/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#A83A3A]"
              >
                <Icon name={b.icon} />
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm text-[#F3EEE3]/65 leading-relaxed">
                  {b.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included — tabbed */}
      <section className="py-24 bg-[#F3EEE3]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] italic text-4xl md:text-5xl text-[#20302A] text-center">
            What's included
          </h2>

          <div
            className="mt-12 flex justify-center gap-1 border-b border-[#20302A]/10"
            role="tablist"
          >
            {(Object.keys(tabs) as TabKey[]).map((key) => (
              <button
                key={key}
                role="tab"
                aria-selected={activeTab === key}
                onClick={() => setActiveTab(key)}
                className={`relative px-6 py-4 text-sm font-medium tracking-wide transition-colors ${
                  activeTab === key
                    ? "text-[#20302A]"
                    : "text-[#20302A]/45 hover:text-[#20302A]/70"
                }`}
              >
                {tabs[key].label}
                {activeTab === key && (
                  <span className="absolute left-0 right-0 -bottom-px h-[2px] bg-[#A83A3A]" />
                )}
              </button>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-6">
            {tabs[activeTab].items.map(([title, desc]) => (
              <div key={title} className="border-l-2 border-[#A83A3A] pl-5">
                <p className="font-medium text-[#20302A]">{title}</p>
                <p className="mt-1 text-sm text-[#20302A]/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
     <section className="bg-[#134E4A] text-[#F3EEE3] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] italic text-4xl md:text-5xl">
            Become stronger every day
          </h2>
          <p className="mt-5 text-[#F3EEE3]/70 max-w-md mx-auto">
            Join the strength-building program and put real, measured effort
            behind every session.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-10 bg-[#A83A3A] text-[#F3EEE3] px-8 py-4 rounded-full font-semibold hover:bg-[#bd4747] transition"
          >
            Contact us
          </Link>
        </div>
      </section>
    <div className="mt-[-100px]"> <Footer /></div>    
    </main>
  );
}