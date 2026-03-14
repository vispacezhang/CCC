/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./sections/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b1523",
        deep: "#0b1b2b",
        cobalt: "#123a66",
        ocean: "#0d4b7d",
        mist: "#f5f8fb",
        frost: "#e6eef7",
        steel: "#2a4e73",
        accent: "#2d7ff9"
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        display: ["Playfair Display", "ui-serif", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(11, 21, 35, 0.18)",
        glow: "0 0 0 1px rgba(45, 127, 249, 0.25), 0 20px 60px rgba(13, 75, 125, 0.35)"
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at top left, rgba(45, 127, 249, 0.35), transparent 55%), radial-gradient(circle at 25% 15%, rgba(35, 110, 190, 0.35), transparent 45%), radial-gradient(circle at 80% 0%, rgba(15, 90, 160, 0.35), transparent 55%)",
        "mesh": "radial-gradient(circle at 20% 20%, rgba(45, 127, 249, 0.18), transparent 55%), radial-gradient(circle at 80% 10%, rgba(20, 70, 140, 0.25), transparent 45%), radial-gradient(circle at 50% 90%, rgba(16, 40, 80, 0.4), transparent 60%)"
      }
    }
  },
  plugins: []
};

