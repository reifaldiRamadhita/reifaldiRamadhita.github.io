/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        jost: "Jost",
        poiret: "Poiret One",
        bona: "Bona Nova",
      },
    },
  },
  plugins: [],
};
