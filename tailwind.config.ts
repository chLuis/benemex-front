import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "goTopRight": {
          "0%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-100px) translateX(100px) scale(2)" },
          "100%": { transform: "translateY(0) translateX(0)" },
        },
        "goTopLeft": {
          "0%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-100px) translateX(-100px) scale(2)" },
          "100%": { transform: "translateY(0) translateX(0)" },
        },
        "goBotRight": {
          "0%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(100px) translateX(100px) scale(2)" },
          "100%": { transform: "translateY(0) translateX(0)" },
        },
        "goBotLeft": {
          "0%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(100px) translateX(-100px) scale(2)" },
          "100%": { transform: "translateY(0) translateX(0)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "goTopRight" : "goTopRight 20s infinite",
        "goTopLeft" : "goTopLeft 20s infinite",
        "goBotRight" : "goBotRight 20s infinite",
        "goBotLeft" : "goBotLeft 20s infinite"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config