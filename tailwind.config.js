/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    "./components/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {
      animation: {
        'ping-slow': 'ping 3s infinite ease-in-out',
        fadeIn: "fadeIn 2s ease-in-out forwards",
        fadeOut: "fadeOut 2s ease-in-out forwards"
      },
      fontFamily: {
        sans: ['Inter var'],
        dinMedium: ['DINPro-Medium'],
        dinBold: ['DINPro-Bold'],
        dinRegular: ['DINPro-Regular'],
      },
      fontSize: {
        s: '0.60rem',
        xs: '0.35rem',
      },
      gradientColorStops: (theme) => ({
        primary: '#FF8C00',
        secondary: '#FFA500',
        danger: '#FFD700',
      }),
      height: {
        'screen/2': '50vh',
        'screen/3': 'calc(100vh / 3)',
        'screen/4': 'calc(100vh / 4)',
        'screen/5': 'calc(100vh / 5)',
        'screen*2': '200vh',
        'screen*1.5': '150vh',
        'screen*3': '300vh',
        21: "5.25rem",
        22: "5.5rem"
      },
      inset: {
        outofScreen: '-700px',
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "10%": { opacity: 0.1 },
          "20%": { opacity: 0.2 },
          "30%": { opacity: 0.3 },
          "40%": { opacity: 0.4 },
          "50%": { opacity: 0.5 },
          "60%": { opacity: 0.6 },
          "70%": { opacity: 0.7 },
          "80%": { opacity: 0.8 },
          "90%": { opacity: 0.9 },
          "100%": { opacity: 1 }
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "10%": { opacity: 0.9 },
          "20%": { opacity: 0.8 },
          "30%": { opacity: 0.7 },
          "40%": { opacity: 0.6 },
          "50%": { opacity: 0.5 },
          "60%": { opacity: 0.4 },
          "70%": { opacity: 0.3 },
          "80%": { opacity: 0.2 },
          "90%": { opacity: 0.1 },
          "100%": { opacity: 0 }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      maxWidth: {
        360: '360px',
        250: '250px',
        180: '180px',
        140: '140px',
      },
      maxHeight: {
        62: '15.5rem',
        360: '360px',
        250: '250px',
        180: '180px',
        140: '140px',
      },
      minWidth: {
        360: '360px',
        250: '250px',
        180: '180px',
        140: '140px',
      },
      minHeight: {
        360: '360px',
        250: '250px',
        180: '180px',
        140: '140px',
      },
      opacity: {
        0: 0,
        10: 0.1,
        20: 0.2,
        30: 0.3,
        40: 0.4,
        50: 0.5,
        60: 0.6,
        70: 0.7,
        80: 0.8,
        90: 0.9,
        100: 1,
      },
      screens: {
        "3xs": '280px',
        "2xs": '370px',
        xs: '512px',
        sm: '640px',
        md: '768px',
        lg: '935px',
        xl: '1280px',
        '2xl': '1536px',
      },
      transitionDuration: {
        "2000": "2000ms",
        "3000": "3000ms",
        "4000": "4000ms"
      },
      width: {
        adminWidth: 'calc(100vw -8rem)',
        21: "5.25rem",
        22: "5.5rem"
      },
      zIndex: {
        full: '9999px',
      },
    },
  },
  variants: {
    animation: ["motion-safe"]
  },
  plugins: [require('flowbite/plugin')],
};

