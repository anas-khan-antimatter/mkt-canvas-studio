const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        display: ['var(--font-display)', ...fontFamily.sans],
      },
      colors: {
        canvas: {
          50: '#f8f7f4',
          100: '#efece5',
          200: '#ddd6c8',
          300: '#c5b99f',
          400: '#ae9d7a',
          500: '#9e8a62',
          600: '#8a7652',
          700: '#735f44',
          800: '#5f4e3c',
          900: '#4f4133',
          950: '#2a221b',
        },
        ink: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d0d0d0',
          300: '#acacac',
          400: '#828282',
          500: '#676767',
          600: '#555555',
          700: '#464646',
          800: '#3b3b3b',
          900: '#121212',
          950: '#0a0a0a',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'reveal': 'reveal 1.2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        reveal: {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
      },
    },
  },
  plugins: [],
}