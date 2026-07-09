"use client";

import Link from "next/link";
import {
  FiInstagram,
  FiFacebook,
  FiYoutube,
  FiMail,
  FiPhone,
} from "react-icons/fi";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="mt-24 bg-gradient-to-br from-black via-gray-950 to-green-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-lg">
              Y
            </span>

            <span className="text-xl font-bold">
              Yoga Wellness
            </span>
          </div>

          <p className="text-gray-300 leading-7 text-sm">
            Transform your body, calm your mind, and improve your
            lifestyle with personalized yoga sessions.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-300 hover:text-green-400 transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-5">
            Contact Us
          </h3>

          <div className="space-y-4 text-gray-300">

            <div className="flex items-center gap-3">
              <FiPhone className="text-green-400" />
              +91 98765 43210
            </div>

            <div className="flex items-center gap-3">
              <FiMail className="text-green-400" />
              hello@yogawellness.com
            </div>

          </div>

          <div className="flex gap-3 mt-6">

            <a
              href="#"
              className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 transition"
            >
              <FiInstagram />
            </a>

            <a
              href="#"
              className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 transition"
            >
              <FiFacebook />
            </a>

            <a
              href="#"
              className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 transition"
            >
              <FiYoutube />
            </a>

          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-5">
            Newsletter
          </h3>

          <p className="text-gray-300 mb-4">
            Get wellness tips directly in your inbox.
          </p>

          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-l-full px-4 py-3 bg-white text-black outline-none"
            />

            <button
              className="bg-green-600 hover:bg-green-700 px-6 rounded-r-full font-medium transition"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-green-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Yoga Wellness. All Rights Reserved.
          </p>

          <p className="mt-2 md:mt-0">
            Designed with ❤️ for Healthy Living
          </p>
        </div>
      </div>
    </footer>
  );
}