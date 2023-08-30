/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-yellow": "rgb(255, 221, 0)",
        "primary-blue": "rgb(0, 0, 93)",
        "sky-blue": "rgb(2, 153, 247)",
        "light-blue": "rgb(2, 0, 141,0.1)",
      },
    },
  },
  plugins: [],
};
