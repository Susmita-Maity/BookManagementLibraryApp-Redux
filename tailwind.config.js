/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "350px",
        ms: "400px",
        xxl: "1500px"
      },
      fontFamily: {
        cfont: ["Josefin Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}
