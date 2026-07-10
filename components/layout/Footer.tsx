"use client";

import Link from "next/link";
import Image from "next/image";
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
        <div className="flex items-center gap-4 mb-6">

  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-green-500 shadow-lg shadow-green-500/30">

    <Image
      src="/images/logo1.png"
      alt="Yoga Wellness Logo"
      width={56}
      height={56}
      className="w-full h-full object-cover"
    />

  </div>

  <div>

    <h2 className="text-2xl font-bold text-white">
      Yoga Wellness
    </h2>

    <p className="text-sm text-green-400">
      Balance • Health • Peace
    </p>

  </div>

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
              neeraj@yogawellness.com
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

          <form className="flex w-full max-w-md mx-auto">
  <input
    type="email"
    placeholder="Enter your email"
    className="min-w-0 flex-1 rounded-l-full px-4 py-3 bg-white text-black outline-none"
  />

  <button
    type="submit"
    className="flex-shrink-0 bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 rounded-r-full font-medium transition"
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