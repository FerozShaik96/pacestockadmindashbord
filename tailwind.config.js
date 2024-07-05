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
        "prod-false": " #FFC5C5",
        "prod-flase-border": " #DF0404",
        "prod-text-True": "#008767",
        "prod-true-border": "#00B087",
        "prod-true": "#16C09861",
        "prod-text": "#292D32",
        "Prod-Footer": "#404B52",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(107.91deg, #EAABF0 7.37%, #4623E9 95.19%)",
        "text-gradient":
          "linear-gradient(201.18deg, #D3FFE7 3.14%, #EFFFF6 86.04%)",
      },
    },
  },
  plugins: [],
};
