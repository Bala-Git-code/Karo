/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Plus Jakarta Sans", "Poppins", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          primary: "#FF7A00",
          orange: "#FF9F45",
          dark: "#1F1F1F",
          indigo: "#4F46E5",
          success: "#22C55E",
          beige: "#F2EBDC",
          sand: "#E3D4B2",
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #FF7A00, #FF9F45)",
        "hero-grid": "linear-gradient(rgba(255,122,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,122,0,0.04) 1px, transparent 1px)",
      },
      boxShadow: {
        card: "0 10px 40px rgba(0,0,0,0.08)",
        "card-hover": "0 24px 60px rgba(0,0,0,0.12)",
        glow: "0 0 30px rgba(255,122,0,0.45)",
        "glow-sm": "0 0 16px rgba(255,122,0,0.3)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
