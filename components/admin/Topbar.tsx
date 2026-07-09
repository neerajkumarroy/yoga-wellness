"use client";

import { FiMoon, FiSun, FiBell } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";

export default function Topbar({ title }: { title: string }) {
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-cream/80 dark:bg-dark/80 backdrop-blur-md border-b border-black/5 dark:border-white/5">
      <h1 className="font-heading text-2xl text-dark dark:text-cream">{title}</h1>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="h-10 w-10 rounded-full flex items-center justify-center bg-white dark:bg-white/5 shadow-premium hover:scale-105 transition-transform"
        >
          {theme === "dark" ? <FiSun className="text-secondary" /> : <FiMoon className="text-primary" />}
        </button>

        <button
          aria-label="Notifications"
          className="h-10 w-10 rounded-full flex items-center justify-center bg-white dark:bg-white/5 shadow-premium hover:scale-105 transition-transform"
        >
          <FiBell className="text-primary" />
        </button>

        <div className="flex items-center gap-3 pl-2">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-heading text-primary">
            {user?.name?.[0]?.toUpperCase() || "A"}
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-dark dark:text-cream leading-none">{user?.name || "Admin"}</p>
            <p className="text-xs text-dark/50 dark:text-cream/50">{user?.role || "admin"}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
