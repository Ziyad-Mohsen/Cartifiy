/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Poppins",
    },
    container: {
      padding: {
        DEFAULT: "50px",
      },
    },
    extend: {
      colors: {
        primary: "#fd6600",
        secondary: "#222222",
      },
    },
  },
  plugins: [],
};
