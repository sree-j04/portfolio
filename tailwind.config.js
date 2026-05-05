/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F5F1EA",
        charcoal: "#1F1B16",
        terracotta: "#C46A4A",
        muted: "#6B645B",
        line: "#E5DED2",
      },
      fontFamily: {
        serif: ['"Fraunces"', "serif"],
        sans: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
