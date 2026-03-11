module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neon: "#C3FC3F",
        bg: "#050505",
      },
      fontFamily: {
        sans: ["Space Grotesk", "Inter", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 30px rgba(195, 252, 63, 0.35)",
      },
    },
  },
  plugins: [],
};
