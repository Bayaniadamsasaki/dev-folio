/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      inter: ["Inter"],
    },
    extend: {
      lineHeight: {
        'hero': '175px',
      },
      colors: {
        background: "#11071F",
        primary: "#033ACA",
        secondary: "#B0FC04",
      },
      backgroundImage: {
        'hero-texture': 'linear-gradient(180deg, #FFF 22.5%, rgba(255, 255, 255, 0.70) 100%);',
      }
    },
  },
  plugins: [],
};
