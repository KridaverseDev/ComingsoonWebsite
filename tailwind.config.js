/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      kridaBlue: "#0080FF",
    },
    extend: {
      boxShadow: {
        soft: "1px 1px 15px 2px rgba(0,128,255,0.5)",
        softHover: "1px 1px 25px 3px rgba(0,128,255,0.5)",
      },
      fontFamily: {
        jetBrains: ["JetBrains Mono", "monospace"],
        gugi: ["Gugi", "sans-serif"],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
