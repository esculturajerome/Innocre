module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        highlights: "minmax(150px, 25%) 1fr",
        fullRow: "minmax(250px, 25%) 1fr",
      },
      fontFamily: {
        Walsheim: ["Walsheim", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
