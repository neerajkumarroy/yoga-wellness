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

/* ---------- Signature element: the daily rhythm wheel ---------- */
const RHYTHM = [
  {
    label: "Morning Yoga",
    time: "6–7 AM",
    copy: "A short flow to wake the body before the day's demands start pulling at it.",
  },
  {
    label: "Meditation",
    time: "12–1 PM",
    copy: "A midday reset — ten quiet minutes that keep the afternoon from running away with you.",
  },
  {
    label: "Stretching",
    time: "5–6 PM",
    copy: "Undoing the day's posture before it hardens into tomorrow's stiffness.",
  },
  {
    label: "Evening Relaxation",
    time: "9–10 PM",
    copy: "Slow breathing and low light, signaling to your body that the day is actually over.",
  },
];

function RhythmWheel({ size = 280 }: { size?: number }) {
  const [active, setActive] = useState(0);
  const userInteracted = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!userInteracted.current) {
        setActive((a) => (a + 1) % RHYTHM.length);
      }
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleSelect = (i: number) => {
    userInteracted.current = true;
    setActive(i);
  };

  const radius = size * 0.42;
  const center = size / 2;

  return (
    <div className="w-full max-w-sm">
      <div className="relative mx-auto" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={center}
            cy={center}
            r={radius}
            stroke="#20302A"
            strokeOpacity={0.08}
            strokeWidth={22}
            fill="none"
          />
          {RHYTHM.map((_, i) => {
            const segment = (2 * Math.PI * radius) / RHYTHM.length;
            const gap = 6;
            const offset = i * segment;
            return (
              <circle
                key={i}
                cx={center}
                cy={center}
                r={radius}
                stroke={i === active ? "#C99A3D" : "#4A7C82"}
                strokeOpacity={i === active ? 1 : 0.25}
                strokeWidth={22}
                fill="none"
                strokeDasharray={`${segment - gap} ${2 * Math.PI * radius - (segment - gap)}`}
                strokeDashoffset={-offset}
                style={{ transition: "stroke 0.4s, stroke-opacity 0.4s" }}
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10">
          <span className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.25em] uppercase text-[#C99A3D]">
            {RHYTHM[active].time}
          </span>
          <span className="mt-2 font-[family-name:var(--font-display)] italic text-2xl text-[#20302A] leading-snug">
            {RHYTHM[active].label}
          </span>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Time of day">
        {RHYTHM.map((r, i) => (
          <button
            key={r.label}
            role="tab"
            aria-selected={active === i}
            onClick={() => handleSelect(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              active === i ? "w-8 bg-[#C99A3D]" : "w-4 bg-[#20302A]/15 hover:bg-[#20302A]/30"
            }`}
            aria-label={r.label}
          />
        ))}
      </div>

      <p className="mt-6 text-sm text-[#20302A]/60 text-center leading-relaxed min-h-[40px]">
        {RHYTHM[active].copy}
      </p>
    </div>
  );
}

/* ---------- Line icons (no emoji) ---------- */
const icons = {
  nutrition: (
    <path
      d="M12 8c-2.5-2-6-1-6 3 0 4 3 8 6 8s6-4 6-8c0-4-3.5-5-6-3Zm0 0c0-2 1-3.5 2.5-4"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  yoga: (
    <path
      d="M12 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0 6v4m0 0-4 6m4-6 4 6m-4-6-3-3m3 3 3-3"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  sleep: (
    <path
      d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 1 0 10.5 10.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinejoin="round"
    />
  ),
  mind: (
    <path
      d="M12 3v3m6.4 1.6-2.1 2.1M21 12h-3m1.6 6.4-2.1-2.1M12 21v-3m-6.4-1.6 2.1-2.1M3 12h3M4.6 5.6l2.1 2.1M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

type IconName = keyof typeof icons;

function Icon({ name }: { name: IconName }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" className="text-[#4A7C82]">
      {icons[name]}
    </svg>
  );
}

const benefits: { icon: IconName; title: string; copy: string }[] = [
  {
    icon: "nutrition",
    title: "Healthy nutrition",
    copy: "Learn how to build balanced meals that actually fuel a full day, not just fill a plate.",
  },
  {
    icon: "yoga",
    title: "Daily yoga",
    copy: "Short, consistent practice does more for flexibility and posture than occasional long sessions.",
  },
  {
    icon: "sleep",
    title: "Better sleep",
    copy: "Evening routines that help your body actually wind down, not just lie still.",
  },
  {
    icon: "mind",
    title: "Mental wellness",
    copy: "Mindfulness practices that lower reactive stress and sharpen day-to-day focus.",
  },
];

const routine = [
  ["Morning yoga", "A short flow to start the body before the day starts pulling at it."],
  ["Meditation sessions", "Structured stillness, not just 'try to relax.'"],
  ["Stretching exercises", "Undoing the posture the day builds up."],
  ["Evening relaxation", "A wind-down sequence that actually ends the day."],
];

const guide = [
  ["Nutrition tips", "Plain, practical guidance — no fad rules to memorize."],
  ["Hydration guidance", "How much, when, and why it actually matters."],
  ["Healthy recipes", "Meals built around real ingredients and real schedules."],
  ["Lifestyle coaching", "One-on-one guidance as habits shift over time."],
];

const dailyHabits = [
  { label: "Drink water", copy: "Stay hydrated through the day, not just at meals." },
  { label: "Stay active", copy: "Walk, stretch, and move — movement doesn't need a gym." },
  { label: "Sleep well", copy: "Seven to eight hours, on a rhythm your body can predict." },
];

function HabitChecklist() {
  const [done, setDone] = useState<boolean[]>([false, false, false]);
  const completed = done.filter(Boolean).length;

  const toggle = (i: number) => {
    setDone((d) => d.map((v, idx) => (idx === i ? !v : v)));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-[family-name:var(--font-display)] italic text-4xl text-[#20302A]">
          Daily healthy habits
        </h2>
        <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#20302A]/50">
          {completed} / {dailyHabits.length} today
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {dailyHabits.map((h, i) => (
          <button
            key={h.label}
            onClick={() => toggle(i)}
            aria-pressed={done[i]}
            className={`text-left rounded-2xl p-8 shadow-sm border transition-all duration-300 ${
              done[i]
                ? "bg-[#20302A] border-[#20302A] text-[#F3EEE3]"
                : "bg-white border-transparent text-[#20302A] hover:-translate-y-1 hover:shadow-md"
            }`}
          >
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm transition-colors ${
                done[i]
                  ? "border-[#C99A3D] bg-[#C99A3D] text-[#20302A]"
                  : "border-[#20302A]/20"
              }`}
            >
              {done[i] ? "✓" : ""}
            </span>
            <h3 className="text-xl font-bold mt-4">{h.label}</h3>
            <p className={`mt-3 ${done[i] ? "text-[#F3EEE3]/70" : "text-[#20302A]/60"}`}>
              {h.copy}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function HealthyLifestylePageClient() {
  return (
    <main
      className={`${fraunces.variable} ${inter.variable} ${mono.variable} bg-[#F3EEE3] font-[family-name:var(--font-body)]`}
    >
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#F3EEE3] pt-40 pb-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.05fr_0.95fr] gap-16 items-start">
          <div>
            <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.3em] uppercase text-[#C99A3D]">
              Healthy Lifestyle
            </span>
            <h1 className="mt-6 font-[family-name:var(--font-display)] italic text-5xl md:text-6xl leading-[1.05] text-[#20302A]">
              A day, built
              <br />
              around what
              <br />
              actually helps.
            </h1>
            <p className="mt-8 text-lg text-[#20302A]/75 max-w-md leading-relaxed">
              Yoga, meditation, nutrition, and rest — not as separate goals,
              but as one rhythm you can hold onto. Tap around the wheel to
              see how the day fits together.
            </p>
            <Link
              href="/free-trial"
              className="inline-block mt-10 bg-[#20302A] text-[#F3EEE3] px-8 py-4 rounded-full font-medium tracking-wide hover:bg-[#2B4038] transition"
            >
              Start your free trial
            </Link>
          </div>

          <div className="justify-self-center">
            <RhythmWheel />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="pb-20 bg-[#F3EEE3]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="/images/healthy.png"
              alt="Healthy Lifestyle"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>

          <div>
            <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.3em] uppercase text-[#C99A3D]">
              The idea
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] italic text-4xl text-[#20302A]">
              Live better every day
            </h2>
            <p className="mt-6 text-[#20302A]/70 leading-relaxed">
              A healthy lifestyle is more than exercise. The program builds
              habits around movement, food, sleep, and stress — a routine
              designed to hold up on ordinary weeks, not just good ones.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Daily yoga practice",
                "Healthy eating habits",
                "Better sleep quality",
                "Stress management",
                "Positive mindset",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#20302A]/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C99A3D]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#20302A] text-[#F3EEE3] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] italic text-4xl md:text-5xl max-w-xl">
            What the program builds
          </h2>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14">
            {benefits.map((b) => (
              <div key={b.title}>
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

      {/* What's included */}
      <section className="py-24 bg-[#F3EEE3]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] italic text-4xl md:text-5xl text-[#20302A] text-center mb-16">
            What's included
          </h2>

          <div className="grid md:grid-cols-2 gap-px bg-[#20302A]/10">
            <div className="bg-[#F3EEE3] p-10">
              <h3 className="font-[family-name:var(--font-display)] text-2xl text-[#20302A]">
                Daily wellness routine
              </h3>
              <ul className="mt-8 space-y-6">
                {routine.map(([title, desc]) => (
                  <li key={title} className="border-l-2 border-[#C99A3D] pl-5">
                    <p className="font-medium text-[#20302A]">{title}</p>
                    <p className="mt-1 text-sm text-[#20302A]/60">{desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#F3EEE3] p-10">
              <h3 className="font-[family-name:var(--font-display)] text-2xl text-[#20302A]">
                Healthy living guide
              </h3>
              <ul className="mt-8 space-y-6">
                {guide.map(([title, desc]) => (
                  <li key={title} className="border-l-2 border-[#4A7C82] pl-5">
                    <p className="font-medium text-[#20302A]">{title}</p>
                    <p className="mt-1 text-sm text-[#20302A]/60">{desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Daily habits — interactive checklist */}
      <section className="py-24 bg-[#EBE4D3]">
        <div className="max-w-6xl mx-auto px-6">
          <HabitChecklist />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#20302A] text-[#F3EEE3] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] italic text-4xl md:text-5xl">
            Start living a healthier life today
          </h2>
          <p className="mt-5 text-[#F3EEE3]/70 max-w-md mx-auto">
            Join Yoga Wellness and take the first step toward a calmer,
            stronger, more balanced routine.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-10 bg-[#C99A3D] text-[#20302A] px-8 py-4 rounded-full font-semibold hover:bg-[#dcae52] transition"
          >
            Contact us
          </Link>
        </div>
      </section>

     <div className="mt-[-100px]"></div> <Footer />
    </main>
  );
}