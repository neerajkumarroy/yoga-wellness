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

/* ---------- Signature element: a paced breathing guide ---------- */
function BreathGuide({ size = 220 }: { size?: number }) {
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    const timer = setInterval(() => {
      setPhase((p) => (p === "in" ? "out" : "in"));
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative mx-auto flex items-center justify-center"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 rounded-full border border-[#B4794A]/30"
        style={{
          transition: "transform 4.2s ease-in-out",
          transform: phase === "in" ? "scale(1)" : "scale(0.72)",
        }}
      />
      <div
        className="absolute rounded-full bg-[#B4794A]/10"
        style={{
          width: size * 0.66,
          height: size * 0.66,
          transition: "transform 4.2s ease-in-out",
          transform: phase === "in" ? "scale(1.18)" : "scale(0.78)",
        }}
      />
      <div
        className="absolute rounded-full bg-[#B4794A]/90"
        style={{
          width: size * 0.16,
          height: size * 0.16,
          transition: "transform 4.2s ease-in-out",
          transform: phase === "in" ? "scale(1.4)" : "scale(1)",
        }}
      />
      <span
        className="relative font-[family-name:var(--font-mono)] text-[11px] tracking-[0.25em] uppercase text-[#20302A]/70"
        style={{ marginTop: size * 0.62 }}
      >
        {phase === "in" ? "Breathe in" : "Breathe out"}
      </span>
    </div>
  );
}

/* ---------- Small line icons (no emoji) ---------- */
const icons = {
  wave: (
    <path
      d="M3 12c2-4 4-4 6 0s4 4 6 0 4-4 6 0"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />
  ),
  moon: (
    <path
      d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 1 0 10.5 10.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinejoin="round"
    />
  ),
  heart: (
    <path
      d="M12 20s-7-4.35-9.5-9C.5 7.5 3 4 6.5 4 9 4 11 6 12 7.5 13 6 15 4 17.5 4 21 4 23.5 7.5 21.5 11c-2.5 4.65-9.5 9-9.5 9Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinejoin="round"
    />
  ),
  leaf: (
    <path
      d="M5 19c8 0 14-6 14-14 0 0-13-2-14 9-.4 4 0 5 0 5Zm0 0c0-4 2-7 6-9"
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
    <svg width="28" height="28" viewBox="0 0 24 24" className="text-[#7E9481]">
      {icons[name]}
    </svg>
  );
}

/* ---------- Wave divider ---------- */
function WaveDivider({ fill = "#20302A" }: { fill?: string }) {
  return (
    <svg
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      className="block w-full h-[40px]"
      aria-hidden="true"
    >
      <path
        d="M0 30 C 150 0, 350 60, 600 30 C 850 0, 1050 60, 1200 30 L1200 60 L0 60 Z"
        fill={fill}
      />
    </svg>
  );
}

const benefits: { icon: IconName; title: string; copy: string }[] = [
  {
    icon: "wave",
    title: "A calmer baseline",
    copy: "Regulated breathing lowers cortisol within minutes, not weeks. Most people feel a shift by the second session.",
  },
  {
    icon: "moon",
    title: "Sleep that resets you",
    copy: "The evening sequence trains your nervous system to downshift, so you fall asleep faster and wake up clearer.",
  },
  {
    icon: "heart",
    title: "A steadier heart rate",
    copy: "Slow, even breath work has a measurable effect on heart-rate variability — your body's own stress gauge.",
  },
  {
    icon: "leaf",
    title: "Focus without force",
    copy: "Ten minutes of stillness clears the mental static that makes small tasks feel heavier than they are.",
  },
];

const meditationItems = [
  ["Mindfulness meditation", "Notice thought without following it."],
  ["Guided relaxation", "A voice to walk you down when your mind won't slow on its own."],
  ["Deep breathing", "Four counts in, four counts out — the base pattern for everything else."],
  ["Stress-response reset", "A short sequence for the moment stress actually hits."],
];

const breathingItems = [
  ["Anulom Vilom", "Alternate-nostril breathing, for balance before a demanding day."],
  ["Bhramari", "A humming exhale that quiets a racing mind fast."],
  ["Kapalbhati", "Short, forceful exhales to clear fog and lift energy."],
  ["Extended exhale", "Doubling the exhale count to trigger the body's calm response."],
];

const faqs = [
  {
    q: "Is this program suitable for beginners?",
    a: "Yes. Every sequence starts from zero prior experience — you're never asked to do something you haven't been shown first.",
  },
  {
    q: "How long is each session?",
    a: "Sessions run 45–60 minutes, with a shorter 10-minute option for mornings when that's all you have.",
  },
  {
    q: "Do I need any equipment?",
    a: "A mat and a quiet corner. Nothing else is required to begin.",
  },
  {
    q: "How soon will I notice a difference?",
    a: "Most people notice calmer breathing and better sleep within the first week of consistent practice.",
  },
];

function FaqItem({
  item,
  isOpen,
  onToggle,
}: {
  item: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[#20302A]/15">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 py-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-[family-name:var(--font-display)] text-xl text-[#20302A]">
          {item.q}
        </span>
        <span
          className="shrink-0 text-2xl text-[#B4794A] transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-[#20302A]/70 leading-relaxed max-w-2xl">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ReduceStressPageClient() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <main
      className={`${fraunces.variable} ${inter.variable} ${mono.variable} bg-[#F3EEE3] font-[family-name:var(--font-body)]`}
    >
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#F3EEE3] pt-40 pb-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div>
            <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.3em] uppercase text-[#B4794A]">
              Yoga &amp; Breathwork
            </span>
            <h1 className="mt-6 font-[family-name:var(--font-display)] italic text-5xl md:text-6xl leading-[1.05] text-[#20302A]">
              Thirty seconds.
              <br />
              One breath.
              <br />
              A different afternoon.
            </h1>
            <p className="mt-8 text-lg text-[#20302A]/75 max-w-md leading-relaxed">
              A grounded, structured practice in yoga, meditation, and
              breathing — built for people who need stress relief that fits
              into a real week, not a retreat.
            </p>
            <Link
              href="/free-trial"
              className="inline-block mt-10 bg-[#20302A] text-[#F3EEE3] px-8 py-4 rounded-full font-medium tracking-wide hover:bg-[#2B4038] transition"
            >
              Start your free trial
            </Link>
          </div>

          <div className="justify-self-center">
            <BreathGuide />
          </div>
        </div>
      </section>

      <WaveDivider fill="#20302A" />

      {/* Benefits */}
      <section className="bg-[#20302A] text-[#F3EEE3] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] italic text-4xl md:text-5xl max-w-xl">
            What changes when you practice
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

      {/* Practices */}
      <section className="py-24 bg-[#F3EEE3]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <h2 className="font-[family-name:var(--font-display)] italic text-4xl md:text-5xl text-[#20302A]">
              What you'll learn
            </h2>
            <p className="text-[#20302A]/60 max-w-sm">
              Two tracks, taught together — the stillness of meditation and
              the mechanics of breath.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[#20302A]/10">
            <div className="bg-[#F3EEE3] p-10">
              <h3 className="font-[family-name:var(--font-display)] text-2xl text-[#20302A]">
                Meditation
              </h3>
              <ul className="mt-8 space-y-6">
                {meditationItems.map(([title, desc]) => (
                  <li
                    key={title}
                    className="border-l-2 border-[#7E9481] pl-5"
                  >
                    <p className="font-medium text-[#20302A]">{title}</p>
                    <p className="mt-1 text-sm text-[#20302A]/60">{desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#F3EEE3] p-10">
              <h3 className="font-[family-name:var(--font-display)] text-2xl text-[#20302A]">
                Breathing techniques
              </h3>
              <ul className="mt-8 space-y-6">
                {breathingItems.map(([title, desc]) => (
                  <li
                    key={title}
                    className="border-l-2 border-[#B4794A] pl-5"
                  >
                    <p className="font-medium text-[#20302A]">{title}</p>
                    <p className="mt-1 text-sm text-[#20302A]/60">{desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#EBE4D3]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] italic text-4xl text-[#20302A] mb-4">
            Questions, answered
          </h2>
          <div className="mt-10">
            {faqs.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#20302A] text-[#F3EEE3] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <BreathGuide size={140} />
          <h2 className="mt-10 font-[family-name:var(--font-display)] italic text-4xl md:text-5xl">
            Start with one session
          </h2>
          <p className="mt-5 text-[#F3EEE3]/70 max-w-md mx-auto">
            No commitment, no equipment to buy first — just your next fifty
            minutes, spent differently.
          </p>
          <Link
            href="/free-trial"
            className="inline-block mt-10 bg-[#B4794A] text-[#20302A] px-8 py-4 rounded-full font-semibold hover:bg-[#c68b5c] transition"
          >
            Join the free trial
          </Link>
        </div>
      </section>
     
<div className="mt-[-100px]"> <Footer /></div>
    </main>
  );
}