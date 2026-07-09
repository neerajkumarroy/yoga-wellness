import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3A7D44",
        secondary: "#8BC34A",
        cream: "#FAF8F4",
        dark: "#1D1D1D",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        premium: "0 20px 45px -15px rgba(58, 125, 68, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
