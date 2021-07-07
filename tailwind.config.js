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
      height: (theme) => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      width: (theme) => ({
        "adminWidth": "calc(100vw -8rem)",
      }),
      colors: {
        primary: {
          dark: "#6122da",
          light: "#632dbf",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
