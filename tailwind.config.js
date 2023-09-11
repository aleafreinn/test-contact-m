/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        breathe: {
          "0%, 100%": { filter: "drop-shadow(0px 0px 0px rgb(139,92,246))" },
          "50%": { filter: "drop-shadow(0px 0px 30px rgb(139,92,246))" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      colors: {
        redBlueGradient: "linear-gradient(-45deg, #ff3d00 0%, #0400ff 100%)",
      },
      animation: {
        breathe: "breathe 10s ease-in-out infinite",
        gradient: "gradient 5s linear infinite",
      },
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
};
