/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#0f0f12',
          secondary: '#171721',
          accent: '#1c1c27'
        },
        primary: {
          50: '#F2F5FF',
          100: '#E6EAFF',
          200: '#C0CAFF',
          300: '#99A9FF',
          400: '#7889FF',
          500: '#5668FF',
          600: '#4050DB',
          700: '#2D3CB7',
          800: '#1C2993',
          900: '#0E1770'
        },
        accent: {
          50: '#EFFBFF',
          100: '#DEF7FF',
          200: '#B4EEFF',
          300: '#8AE5FF', 
          400: '#61DCFF',
          500: '#37D3FF',
          600: '#22A6DB',
          700: '#127AB7',
          800: '#064F93',
          900: '#002470'
        },
        success: '#10B981',
        warning: '#FBBF24',
        error: '#EF4444'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif']
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.6s ease-out'
      },
      boxShadow: {
        glow: '0 0 20px rgba(99, 102, 241, 0.3)'
      }
    },
  },
  plugins: [],
};