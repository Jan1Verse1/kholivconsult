/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",   // make sure React components are scanned
  ],
  theme: {
    extend: {
      colors: {
        kholivBlack: "#1E1D2B",
      },
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui"],
        heading: ["Poppins", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
