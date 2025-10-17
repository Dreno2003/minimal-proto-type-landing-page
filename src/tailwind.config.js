/** @type {import('tailwindcss').Config} */
// import tailwindcssAnimate from "tailwindcss-animate";
// import { primaryColor, secondaryColor } from "./src/constants/theme.constant";

export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {},
  plugins: [
    require("tailwindcss-motion"),
    require("tailwindcss-intersect"),
    // tailwindcssAnimate,
    function ({ addUtilities }) {
      const newUtilities = {
        ".hide-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".show-scrollbar": {
          "-ms-overflow-style": "auto",
          "scrollbar-width": "auto",
          "&::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
        },
      };

      addUtilities(newUtilities, { variants: ["responsive"] });
    },
  ],
};
