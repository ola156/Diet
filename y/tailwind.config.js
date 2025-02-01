/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#CBEA7B",
          100: "#3CA455",
          200: "#1A3129",
        },
        orange: {
          300: "#FF6200 ",
        },
        pink: {
          300: "#FFE4FD",
        },
        yellow: {
          300: "#FFE100",
        },
        black: {
          75: "#2C2C2C",
        },
      },
    },
  },
  plugins: [],
};
