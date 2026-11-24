/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mc: {
          yellow: '#ffe01b',
          'yellow-hover': '#efd000',
          dark: '#171717',
          bg: '#f7f6f1',
          card: '#ffffff',
          warm: '#f7f6f1',
          sand: '#e7e5dc',
          teal: '#55534b',
          coral: '#8d2924',
          green: '#315d3b',
          purple: '#55534b',
          border: '#e7e5dc',
          muted: '#55534b',
          subtle: '#e7e5dc',
        },
        brand: {
          yellow: '#ffe01b',
          'yellow-hover': '#efd000',
          ink: '#171717',
          'soft-ink': '#55534b',
          'muted-ink': '#77756e',
          white: '#ffffff',
          border: '#e7e5dc',
          surface: '#f7f6f1',
          success: '#315d3b',
          'success-surface': '#edf5eb',
          error: '#8d2924',
          'error-surface': '#fbefed',
          info: '#55534b',
          warning: '#8a6400',
        }
      },
      fontFamily: {
        serif: ['Alga', 'Iowan Old Style', 'Palatino Linotype', 'Georgia', 'serif'],
        sans: ['Alga', 'Iowan Old Style', 'Palatino Linotype', 'Georgia', 'serif'],
      },
      boxShadow: {
        'mc-card': '0 4px 20px rgba(23, 23, 23, 0.06)',
        'mc-hover': '0 8px 30px rgba(23, 23, 23, 0.12)',
        'mc-hard': '4px 4px 0px #171717',
        'mc-hard-sm': '2px 2px 0px #171717',
        'mc-hard-lg': '6px 6px 0px #171717',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        marqueeReverse: 'marqueeReverse 35s linear infinite',
      }
    },
  },
  plugins: [],
}
