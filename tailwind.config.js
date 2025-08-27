/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // very important for Vite + React + TS
  ],
  theme: {
    extend: {
      colors: {
        "dark-1": "#09090a",
        "dark-2": "#1c1c1e",
        "dark-3": "#2c2c2e",
        "dark-4": "#3a3a3c",
        "light-1": "#ffffff",
        "light-4": "#a1a1aa",
        "primary-500": "#2563eb",
        "red": "#ef4444",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
