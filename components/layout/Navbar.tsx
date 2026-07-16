"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },

  {
    href: "/services",
    label: "Services",
    children: [
      {
        href: "/services/reduce-stress",
        label: "🧘 Reduce Stress",
      },      
      {
        href: "/services",
        label: "Services",
      },
      {
        href: "/services/build-strength",
        label: "💪 Build Strength",
      },
      {
        href: "/services/weight-loss",
        label: "⚖️ Weight Loss",
      },
      {
        href: "/services/healthy-lifestyle",
        label: "🌿 Healthy Lifestyle",
      },
    ],
  },

  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/login", label: "SignIn" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const pathname = usePathname();

  return (
   <header className="fixed inset-x-0 top-0 z-50 bg-black/45 backdrop-blur-xl border-b border-green-500/20 shadow-lg">
     <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
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
        <div className="hidden lg:flex items-center gap-8 relative">
  {navLinks.map((link) => (
    <div
      key={link.href}
      className="relative group"
    >
      <Link
        href={link.href}
        className={`flex items-center gap-1 text-[15px] font-medium transition-all duration-300 ${
          pathname === link.href
            ? "text-green-400"
            : "text-white hover:text-green-400"
        }`}
      >
        {link.label}

        {link.children && (
          <svg
            className="w-3 h-3 group-hover:rotate-180 transition"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </Link>

      {pathname === link.href && (
        <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-green-400 rounded-full"></span>
      )}

     {link.children && (
  <div
  className="
absolute
left-1/2
top-full
mt-4
w-80
-translate-x-1/2
overflow-hidden
rounded-2xl
bg-gradient-to-br
from-green-900/95
via-black/95
to-orange-900/95
backdrop-blur-2xl
border
border-green-400/20
shadow-[0_20px_50px_rgba(0,0,0,0.5)]
opacity-0
invisible
translate-y-3
group-hover:opacity-100
group-hover:visible
group-hover:translate-y-0
transition-all
duration-300
ease-out
z-[9999]
"
  >
    {link.children.map((child) => (
      <Link
        key={child.href}
        href={child.href}
        className="
flex
items-center
justify-between
px-6
py-4
text-white
font-medium
border-b
border-white/10
hover:bg-gradient-to-r
hover:from-green-500/20
hover:via-green-400/10
hover:to-orange-500/20
hover:text-green-300
transition-all
duration-300
last:border-none
"
      >
        {child.label}
      </Link>
    ))}
  </div>
)}</div>
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
      {/* Mobile Menu */}
{open && (
  <div className="lg:hidden bg-black/90 backdrop-blur-xl border-t border-green-500/20 px-6 py-5">
    <div className="flex flex-col gap-3">
      {navLinks.map((link) => (
        <div key={link.href}>
          {link.children ? (
            <>
              {/* Services Button */}
              <button
                onClick={() => setServiceOpen(!serviceOpen)}
                className="w-full flex items-center justify-between rounded-lg px-4 py-3 text-white hover:bg-green-500/20 transition"
              >
                <span>{link.label}</span>

                <span
                  className={`transition-transform duration-300 ${
                    serviceOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Sub Menu */}
              {serviceOpen && (
                <div className="ml-5 mt-2 border-l border-green-500/30 pl-4 flex flex-col gap-2">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => {
                        setOpen(false);
                        setServiceOpen(false);
                      }}
                      className="text-green-300 hover:text-white py-2 transition"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <Link
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-4 py-3 transition ${
                pathname === link.href
                  ? "bg-green-600 text-white"
                  : "text-white hover:bg-green-500/20 hover:text-green-400"
              }`}
            >
              {link.label}
            </Link>
          )}
        </div>
      ))}
    </div>
  </div>
)}
    </header>
  );
}