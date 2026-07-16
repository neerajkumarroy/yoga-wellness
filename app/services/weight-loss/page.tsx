"use client";

import { useEffect, useState } from "react";
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

/* ---------- Signature element: the Sun Salutation cycle ---------- */
const SALUTATION_STEPS = [
  "Mountain Pose",
  "Raised Arms",
  "Standing Forward Bend",
  "Half Standing Forward Bend",
  "Plank",
  "Eight-Limbed Pose",
  "Cobra",
  "Downward Dog",
  "Half Standing Forward Bend",
  "Standing Forward Bend",
  "Raised Arms",
  "Mountain Pose",
];

function SalutationRing({ size = 260 }: { size?: number }) {
  const [step, setStep] = useState(0);
  const radius = size * 0.42;
  const circumference = 2 * Math.PI * radius;
  const progress = (step + 1) / SALUTATION_STEPS.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((s) => (s + 1) % SALUTATION_STEPS.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
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
          stroke="#C2591C"
          strokeWidth={2}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - progress)}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.6s ease-out" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
        <span className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.25em] uppercase text-[#C2591C]">
          Step {step + 1} / {SALUTATION_STEPS.length}
        </span>
        <span className="mt-3 font-[family-name:var(--font-display)] italic text-2xl text-[#20302A] leading-snug">
          {SALUTATION_STEPS[step]}
        </span>
        <span className="mt-2 text-xs text-[#20302A]/50">Surya Namaskar</span>
      </div>
    </div>
  );
}

/* ---------- Line icons (no emoji) ---------- */
const icons = {
  flame: (
    <path
      d="M12 2c1 3-2 4-2 7a4 4 0 0 0 8 0c0-1-.5-2-1-2 1 4-1 6-3 6a3.5 3.5 0 0 1-3.5-3.5C10.5 6 9 5 12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinejoin="round"
    />
  ),
  pulse: (
    <path
      d="M2 12h4l2-7 4 14 2-7h8"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  apple: (
    <path
      d="M12 8c-2.5-2-6-1-6 3 0 4 3 8 6 8s6-4 6-8c0-4-3.5-5-6-3Zm0 0c0-2 1-3.5 2.5-4"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  spark: (
    <path
      d="M12 3v5M12 16v5M3 12h5M16 12h5M6 6l3.5 3.5M18 6l-3.5 3.5M6 18l3.5-3.5M18 18l-3.5-3.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  ),
};

type IconName = keyof typeof icons;

function Icon({ name }: { name: IconName }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" className="text-[#6B7B4F]">
      {icons[name]}
    </svg>
  );
}

const benefits: { icon: IconName; title: string; copy: string }[] = [
  {
    icon: "flame",
    title: "Fat burning",
    copy: "Dynamic, flowing sequences keep your heart rate up long enough to burn real calories, not just stretch.",
  },
  {
    icon: "pulse",
    title: "Better fitness",
    copy: "Stamina and flexibility build together, so daily movement gets easier week over week.",
  },
  {
    icon: "apple",
    title: "Healthy lifestyle",
    copy: "Nutrition guidance from real instructors, matched to the pace of your practice — not a generic meal plan.",
  },
  {
    icon: "spark",
    title: "Real confidence",
    copy: "Progress you can feel in your own body tends to outlast progress you only see on a scale.",
  },
];

const yogaTraining = [
  ["Sun Salutation", "Surya Namaskar — the twelve-step sequence that opens every session."],
  ["Power Yoga", "A faster-paced flow built to raise your heart rate and build strength together."],
  ["Fat-burning flow", "Sequences designed around sustained movement, not isolated poses."],
  ["Core strength", "Targeted work for the muscles that support everything else you do."],
];

const wellnessSupport = [
  ["Healthy diet guidance", "Practical eating advice that fits around your practice, not against it."],
  ["Weekly progress tracking", "A clear view of what's changing, session by session."],
  ["Personal guidance", "Direct feedback from an instructor who knows your starting point."],
  ["Daily wellness routine", "Small habits outside class that make the class itself work harder."],
];

export default function WeightLossPageClient() {
  return (
    <main
      className={`${fraunces.variable} ${inter.variable} ${mono.variable} bg-[#F3EEE3] font-[family-name:var(--font-body)]`}
    >
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#F3EEE3] pt-40 pb-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div>
            <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.3em] uppercase text-[#C2591C]">
              Weight Loss Program
            </span>
            <h1 className="mt-6 font-[family-name:var(--font-display)] italic text-5xl md:text-6xl leading-[1.05] text-[#20302A]">
              Movement that
              <br />
              earns its
              <br />
              own momentum.
            </h1>
            <p className="mt-8 text-lg text-[#20302A]/75 max-w-md leading-relaxed">
              A dynamic yoga program built around real calorie burn, stronger
              metabolism, and habits that hold up outside the studio.
            </p>
            <Link
              href="/free-trial"
              className="inline-block mt-10 bg-[#20302A] text-[#F3EEE3] px-8 py-4 rounded-full font-medium tracking-wide hover:bg-[#2B4038] transition"
            >
              Start your free trial
            </Link>
          </div>

          <div className="justify-self-center">
            <SalutationRing />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 bg-[#F3EEE3] pt-7">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="/images/home3.jpg"
              alt="Weight Loss Yoga"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>

          <div>
            <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.3em] uppercase text-[#C2591C]">
              Why it works
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] italic text-4xl text-[#20302A]">
              Built for change you can sustain
            </h2>
            <p className="mt-6 text-[#20302A]/70 leading-relaxed">
              The program pairs dynamic poses and breathing work with plain,
              practical guidance on daily habits — so weight loss comes from a
              routine you can actually keep, not a plan you abandon in three
              weeks.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Burn calories naturally",
                "Improve metabolism",
                "Reduce belly fat",
                "Increase flexibility",
                "Build healthy daily habits",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[#20302A]/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C2591C]" />
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
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <h2 className="font-[family-name:var(--font-display)] italic text-4xl md:text-5xl text-[#20302A]">
              What's included
            </h2>
            <p className="text-[#20302A]/60 max-w-sm">
              Two tracks, taught together — the practice itself, and the
              habits that make it stick.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[#20302A]/10">
            <div className="bg-[#F3EEE3] p-10">
              <h3 className="font-[family-name:var(--font-display)] text-2xl text-[#20302A]">
                Yoga training
              </h3>
              <ul className="mt-8 space-y-6">
                {yogaTraining.map(([title, desc]) => (
                  <li key={title} className="border-l-2 border-[#C2591C] pl-5">
                    <p className="font-medium text-[#20302A]">{title}</p>
                    <p className="mt-1 text-sm text-[#20302A]/60">{desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#F3EEE3] p-10">
              <h3 className="font-[family-name:var(--font-display)] text-2xl text-[#20302A]">
                Wellness support
              </h3>
              <ul className="mt-8 space-y-6">
                {wellnessSupport.map(([title, desc]) => (
                  <li key={title} className="border-l-2 border-[#6B7B4F] pl-5">
                    <p className="font-medium text-[#20302A]">{title}</p>
                    <p className="mt-1 text-sm text-[#20302A]/60">{desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#20302A] text-[#F3EEE3] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] italic text-4xl md:text-5xl">
            Start your weight loss journey today
          </h2>
          <p className="mt-5 text-[#F3EEE3]/70 max-w-md mx-auto">
            Join an expert-led program built around movement that compounds —
            one honest session at a time.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-10 bg-[#C2591C] text-[#F3EEE3] px-8 py-4 rounded-full font-semibold hover:bg-[#d66a2b] transition"
          >
            Contact us
          </Link>
        </div>
      </section>

<div className="mt-[-100px]"> <Footer /></div>
    </main>
  );
}