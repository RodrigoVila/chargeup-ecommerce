const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {
      animation: {
        'ping-slow': 'ping 3s infinite ease-in-out',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        dinMedium: ['DINPro-Medium'],
        dinBold: ['DINPro-Bold'],
        dinRegular: ['DINPro-Regular'],
      },
      fontSize: {
        s: "0.60rem",
        xs: "0.35rem"
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
      },
      inset: {
        outofScreen: '-700px',
      },
      keyframes: {
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
      screens: {
        xxs: '380px',
        xs: '512px',
        sm: '640px',
        md: '768px',
        lg: '935px',
        xl: '1280px',
        '2xl': '1536px',
      },
      width: {
        adminWidth: 'calc(100vw -8rem)',
        250: '250px',
      },
      zIndex: {
        full: '9999px',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
