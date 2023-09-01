/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        breathe: {
          '0%, 100%': { filter: 'drop-shadow(0px 0px 0px rgb(139,92,246))'},
          '50%': {filter: 'drop-shadow(0px 0px 30px rgb(139,92,246))'}
        }
      },
      animation: {
        breathe: 'breathe 10s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

