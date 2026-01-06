import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0EA5E9", // sky-500
          foreground: "#FFFFFF",
          dark: "#0369A1", // sky-700
          light: "#BAE6FD", // sky-200
        },
        secondary: {
          DEFAULT: "#0369A1", // sky-700
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#06B6D4", // cyan-500
          foreground: "#FFFFFF",
        },
        success: {
          DEFAULT: "#10B981", // emerald-500
          foreground: "#FFFFFF",
        },
        warning: {
          DEFAULT: "#F59E0B", // amber-500
          foreground: "#FFFFFF",
        },
        background: "#FFFFFF",
        surface: "#F8FAFC", // slate-50
        text: {
          body: "#64748B", // slate-500
          heading: "#1E293B", // slate-800
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-jakarta)", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1400px",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
