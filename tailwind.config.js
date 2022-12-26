/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx, md. mdx}"],
  theme: {
    extend: {
      screens: {
        lg: { min: "768px" },
        // => @media (max-width: 1023px) { ... }

        md: { min: "640px", max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Monty: ["Montserrat", "sans-serif"],
        Plex: ["IBM Plex Sans", "sans-serif"],
      },
      colors: {
        primary: "#31CE9F",
        darkshades: {
          active: "#0f0f0f",
          // passive: "#0f0f0f",
          // passive: "#171717",
          passive: "#202124",
        },
        textcolors: {
          active: "#FFFFFF",
          passive: "#B1B1B1",
          boundary: "#D9D9D9",
        },
        gradients: {
          green: "#00C180",
          logo: "#31CE9F",
        },
      },
    },
  },
  plugins: [],
};
