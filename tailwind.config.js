/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: "#111111",
        primary: "#00f0ff", // Cyberpunk cyan
        secondary: "#7000df", // Cyberpunk purple
        accent: "#ff003c", // Cyberpunk red
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'grid-flow': 'gridFlow 20s linear infinite',
      },
      keyframes: {
        gridFlow: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(50px)' },
        }
      }
    },
  },
  plugins: [],
};
