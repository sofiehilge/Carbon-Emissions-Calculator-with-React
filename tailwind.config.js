/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { Inter: ["sans-serif"], Montserrat: ["sans-serif"] },
    extend: {
      backgroundImage: {
        gradient: "linear-gradient(92deg, #2181CD 6.38%, #5EA1E2 93.85%)",
      },
    },
  },
  plugins: [],
};
