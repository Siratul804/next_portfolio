/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        ...defaultTheme.screens,
      },
      colors: {
        "dark-red": "#9c412c",
        "light-red": "#ef233c",
        "light-bg": "",
        "dark-bg": "#8d99ae",
        "dark-blue": "#2b2d42",
      },
    },
  },
  plugins: [],
};
