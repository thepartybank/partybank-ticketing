/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        redHat: ['"Red Hat Display"', 'sans-serif'],
      },
      fontWeight: {
        thin: '100',
        extraLight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semiBold: '600',
        bold: '700',
        extraBold: '800',
        black: '900',
      },

      colors: {
        'primary-red': '#E91B41',
        'primary-black': '#171717',
        'secondary-red': '#FEEFF2',
        'secondary-text': '#181818',
        'secondary-heading': '#FBD1D9',
      },
    },
  },
  plugins: [],
}
