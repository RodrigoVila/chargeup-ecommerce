const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        main: "url('/main.png')",
        brownies: "url('/brownies.jpg')",
      }),
    },
    colors: {
      ...colors,
      primary: {
        dark: "#6122da",
        light: "#632dbf",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
