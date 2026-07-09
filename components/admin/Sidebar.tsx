"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiGrid,
  FiUsers,
  FiUserCheck,
  FiFileText,
  FiStar,
  FiImage,
  FiLayers,
  FiTag,
  FiMail,
  FiLogOut,
} from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: FiGrid },
  { href: "/admin/users", label: "Users", icon: FiUsers },
  { href: "/admin/trainers", label: "Trainers", icon: FiUserCheck },
  { href: "/admin/blogs", label: "Blogs", icon: FiFileText },
  { href: "/admin/testimonials", label: "Testimonials", icon: FiStar },
  { href: "/admin/gallery", label: "Gallery", icon: FiImage },
  { href: "/admin/services", label: "Services", icon: FiLayers },
  { href: "/admin/pricing", label: "Pricing", icon: FiTag },
  { href: "/admin/messages", label: "Messages", icon: FiMail },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();

  return (
    <aside className="hidden md:flex md:flex-col w-64 shrink-0 h-screen sticky top-0 bg-white dark:bg-[#161616] border-r border-black/5 dark:border-white/5">
      <div className="px-6 py-6 flex items-center gap-2">
        <span className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-white font-heading text-lg">
          Y
        </span>
        <div>
          <p className="font-heading text-lg leading-none text-dark dark:text-cream">Yoga Wellness</p>
          <p className="text-xs text-dark/50 dark:text-cream/50">Admin Panel</p>
        </div>
      </div>

      <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl2 text-sm font-medium transition-colors ${
                active
                  ? "bg-primary/10 text-primary"
                  : "text-dark/70 dark:text-cream/70 hover:bg-primary/5 hover:text-primary"
              }`}
            >
              <Icon size={18} />
              {label}
            </Link>
          );
        })}
      </nav>

      <button
        onClick={logout}
        className="mx-3 mb-6 flex items-center gap-3 px-4 py-3 rounded-xl2 text-sm font-medium text-red-500 hover:bg-red-500/10 transition-colors"
      >
        <FiLogOut size={18} />
        Log out
      </button>
    </aside>
  );
}
