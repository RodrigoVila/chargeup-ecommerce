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
        proteinBalls: "url('/bolitas.jpg')",
        driedfruits: "url('/driedfruits.jpg')",
        wooden: "url('/fondomadera.png')",
      }),
      colors: {
        purple1: "#6122da",
        purple2: "#632dbf",
        purple3: "#494295",
        success: "#00C851",
        danger: "#ff4444",
        info: "#33b5e5",
        tranlucentWhite: "rgba(255,255,255,0.5)",
        tranlucentBlack: "rgba(0,0,0,0.5)",
      },
      height: (theme) => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      inset: {
        outofScreen: "-700px",
      },
      maxWidth: {
        360: "360px",
        250: "250px",
        180: "180px",
        140: "140px",
      },
      minWidth: {
        360: "360px",
        250: "250px",
        180: "180px",
        140: "140px",
      },
      screens: {
        lg: "935px",
      },
      width: (theme) => ({
        adminWidth: "calc(100vw -8rem)",
        250: "250px",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
