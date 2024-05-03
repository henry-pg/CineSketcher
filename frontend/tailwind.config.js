/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'gray': '#99947f',
        'dark': '#080909',
        'light': '#eeebe2',
      },
      fontFamily: {
        sans: ['Roboto Mono', 'monospace'],
      },
    
    },
  },
  plugins: [],
};
