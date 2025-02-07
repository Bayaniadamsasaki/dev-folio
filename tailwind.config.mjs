/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        background: "#11071F",
        primary: "#033ACA",
        secondary: "#B0FC04",
      },
      backgroundImage: {
        'card-glass': 'linear-gradient(0deg, rgba(3, 58, 202, 0.40) 0%, rgba(3, 58, 202, 0.40) 100%), rgba(255, 255, 255, 0.35);',
      }
    },
  },
  plugins: [],
};
