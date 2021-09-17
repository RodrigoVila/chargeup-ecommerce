const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        main: "url('/main.png')",
        brownies: "url('/brownies.jpg')",
        glutenFree: "url('/glutenfree.png')",
        purpleTexture: "url('/fondovioleta.svg')",
        whiteRing: "url('/whiteRing.png')",
      }),
      height: (theme) => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      width: (theme) => ({
        adminWidth: "calc(100vw -8rem)",
        250: "250px",
      }),
      colors: {
        primaryPurple: "#6122da",
        secondaryPurple: "#632dbf",
        tranlucentWhite: "rgba(255,255,255,0.8)",
        tranlucentBlack: "rgba(0,0,0,0.5)",
      },
      inset: {
        outofScreen: "-700px",
      },
      maxWidth: {
        250: "250px",
        180: "180px",
        140: "140px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
