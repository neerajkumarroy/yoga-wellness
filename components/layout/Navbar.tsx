"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/login", label: "SignIn" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 overflow-x-hidden bg-black/45 backdrop-blur-xl border-b border-green-500/20 shadow-lg">
     <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 w-full">
        {/* Logo */}
        <Link
  href="/"
  className="flex items-center gap-2 min-w-0 flex-1 lg:flex-none"
>
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-green-500 shadow-lg shadow-green-500/30">
            <Image
              src="/images/logo1.png"
              alt="Yoga Wellness Logo"
              width={56}
              height={56}
              priority
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white truncate">
              Yoga Wellness
            </h1>
           <p className="hidden sm:block text-xs text-green-300 truncate">
              Balance • Health • Peace
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-[15px] font-medium transition-all duration-300 ${
                pathname === link.href
                  ? "text-green-400"
                  : "text-white hover:text-green-400"
              }`}
            >
              {link.label}

              {pathname === link.href && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-green-400 rounded-full"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
  onClick={() => setOpen(!open)}
  className="lg:hidden flex-shrink-0 text-white hover:text-green-400 transition"
>
          {open ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-black/90 backdrop-blur-xl border-t border-green-500/20 px-6 py-5">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-3 transition ${
                  pathname === link.href
                    ? "bg-green-600 text-white"
                    : "text-white hover:bg-green-500/20 hover:text-green-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}