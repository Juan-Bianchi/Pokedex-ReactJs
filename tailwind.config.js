/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      transitionDuration: {
        "duration-2500": "2500",
      },
    },
  },
  plugins: [],
};
