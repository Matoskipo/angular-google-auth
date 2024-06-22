/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        xs: "240px",
        md: "640px",
        lg: "1024px",
        xl: "1280px"
      }
    },
  },
  plugins: [],
};
