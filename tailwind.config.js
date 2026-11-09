/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          orange: '#FF4D00',
          'orange-hover': '#E04300',
          bg: '#FBE3E1',
          surface: '#FFF8F5',
          'surface-card': '#FFFDFB',
          'surface-subtle': '#F8D8D5',
          dark: '#141414',
          graphite: '#201E1D',
          slate: '#2C2A29',
          'slate-subtle': '#3B3836',
          gray: '#5E5855',
          'gray-light': '#948D8A',
          concrete: '#EAE2DE',
          'concrete-subtle': '#F3ECE8',
          ash: '#F0EAE6',
          pill: '#141414',
          muted: '#635E5D',
          border: 'rgba(20, 20, 20, 0.12)',
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Anton', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'float-slow': 'float 5s ease-in-out infinite',
        'float-delayed': 'float 5s ease-in-out 2.5s infinite',
        'wobble-subtle': 'wobble 4s ease-in-out infinite',
        'walk-bob': 'walkBob 0.6s ease-in-out infinite alternate',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        wobble: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        walkBob: {
          '0%': { transform: 'translateY(0px) rotate(-1deg)' },
          '100%': { transform: 'translateY(-4px) rotate(1deg)' },
        }
      }
    },
  },
  plugins: [],
}

