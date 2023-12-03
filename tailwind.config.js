/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        head: ["Ubuntu", "sans-serif"],
        body: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
