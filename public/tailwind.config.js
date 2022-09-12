/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      veryDarkDesaturatedBlue: "hsl(238, 29%, 16%)",
      softRed: "hsl(14, 88%, 65%)",
      softViolet: "hsl(273, 75%, 66%)",
      softBlue: "hsl(240, 73%, 65%)",
      veryDarkGrayishBlue: "hsl(237, 12%, 33%)",
      darkGrayishBlue: "hsl(240, 6%, 50%)",
      lightGrayishBlue: "hsl(240, 5%, 91%)",
      white: "#FFFFFF"
    },
    extend: {},
  },
  plugins: [],
};
