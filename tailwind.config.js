/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": "#F7F9FF",
        "nav-text": "#9197B3",
        "search-col": "#7E7E7E",
        "search-text": "#B5B7C0",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(107.91deg, #EAABF0 7.37%, #4623E9 95.19%)",
      },
    },
  },
  plugins: [],
};
