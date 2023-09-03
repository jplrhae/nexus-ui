/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      transparent: "transparent",
      current: "currentColor",
      primary: "#EF3340",
      secondary: "white",
      error: "#990000",
      disabled: "#CCCCCC",
    },
    extend: {},
  },
  plugins: [],
};

