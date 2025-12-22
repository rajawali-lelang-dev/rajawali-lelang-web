import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
         primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "#eff6ff",   // primary-50
          100: "#dbeafe",  // primary-100
          200: "#bfdbfe",  // primary-200
          300: "#93c5fd",  // primary-300
          400: "#60a5fa",  // primary-400
          500: "#3b82f6",  // primary-500 
          600: "#2563eb",  // primary-600
          700: "#1d4ed8",  // primary-700
          800: "#1e40af",  // primary-800
          900: "#1e3a8a",  // primary-900
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          50: "#fef2f2",   // secondary-50
          100: "#fee2e2",  // secondary-100
          200: "#fecaca",  // secondary-200
          300: "#fca5a5",  // secondary-300
          400: "#f87171",  // secondary-400
          500: "#ef4444",  // secondary-500 (biasanya warna utama)
          600: "#dc2626",  // secondary-600
          700: "#b91c1c",  // secondary-700
          800: "#991b1b",  // secondary-800
          900: "#7f1d1d",  // secondary-900
        },
         neutral: {
          50: "#fafafa",   // N50 
          75: "#f5f5f5",   // N75 
          100: "#eeeeee",  // N100 
          200: "#e0e0e0",  // N200 
          300: "#bdbdbd",  // N300 
          400: "#9e9e9e",  // N400 
          500: "#757575",  // N500 
          600: "#616161",  // N600 
          700: "#424242",  // N700 
          800: "#303030",  // N800 
          900: "#212121",  // N900 
        },
      },
      fontFamily: {
        'manrope': 'var(--font-manrope)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config