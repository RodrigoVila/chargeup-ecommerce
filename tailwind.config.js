const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'ping-slow': 'ping 3s infinite ease-in-out',
      },
      colors: {
        success: '#00C851',
        danger: '#ff4444',
        info: '#33b5e5',
        tranlucentWhite: 'rgba(255,255,255,0.5)',
        tranlucentBlack: 'rgba(0,0,0,0.5)',
        tranlucentBlack1: 'rgba(0,0,0,0.3)',
        tranlucentBlack2: 'rgba(0,0,0,0.75)',
        tranlucentWhite2: 'rgba(255,255,255,0.8)',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        dinMedium: ['DINPro-Medium'],
        dinBold: ['DINPro-Bold'],
        dinRegular: ['DINPro-Regular'],
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
      },
      inset: {
        outofScreen: '-700px',
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
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
