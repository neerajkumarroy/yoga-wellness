"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface StatCardProps {
  label: string;
  value: string | number;
  icon: IconType;
  accent?: "primary" | "secondary";
}

export default function StatCard({ label, value, icon: Icon, accent = "primary" }: StatCardProps) {
  const accentClass = accent === "primary" ? "bg-primary/10 text-primary" : "bg-secondary/20 text-secondary";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-xl2 bg-white dark:bg-[#161616] p-6 shadow-premium flex items-center justify-between"
    >
      <div>
        <p className="text-sm text-dark/50 dark:text-cream/50">{label}</p>
        <p className="text-3xl font-heading mt-2 text-dark dark:text-cream">{value}</p>
      </div>
      <div className={`h-12 w-12 rounded-full flex items-center justify-center ${accentClass}`}>
        <Icon size={22} />
      </div>
    </motion.div>
  );
}
