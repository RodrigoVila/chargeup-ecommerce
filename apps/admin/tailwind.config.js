/** @type {import('tailwindcss').Config} */

const baseConfig = require('@packages/config/tailwind.config.cjs');

module.exports = {
  ...baseConfig,
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    ...baseConfig.theme
  }
}
