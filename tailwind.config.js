/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 0.8 }
        },
        floatUp: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' }
        },
        floatDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(30px)' }
        },
        sideFloat: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(15px)' }
        }
      },
      animation: {
        twinkle: 'twinkle 3s infinite',
        floatUp: 'floatUp 6s infinite',
        floatDown: 'floatDown 6s infinite',
        sideFloat: 'sideFloat 8s infinite'
      }
    },
  },
  plugins: [],
}
