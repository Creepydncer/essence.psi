/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Aqui conectamos o Tailwind com as cores do seu config
        primary: {
          light: '#F5EBE8',
          DEFAULT: '#C8A297',
          dark: '#A8877A',
        },
        accent: '#E5C4B8',
        background: '#FDFBFA',
      },
    },
  },
  plugins: [],
}