/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary black shades
        primary: {
          100: '#d6d6d6',
          200: '#adadad',
          300: '#858585',
          400: '#5c5c5c',
          500: '#333333',
          600: '#292929',
          700: '#1f1f1f',
          800: '#141414',
          900: '#0a0a0a',
        },
        // Gold shades
        secondary: {
          100: '#fff6e0',
          200: '#ffedc2',
          300: '#ffe4a3',
          400: '#ffdb85',
          500: '#ffd166',
          600: '#cca752',
          700: '#997d3d',
          800: '#665429',
          900: '#332a14',
        },
        // Royal purple accent
        accent: {
          100: '#ece0ff',
          200: '#d9c1ff',
          300: '#c7a2ff',
          400: '#b483ff',
          500: '#a164ff',
          600: '#8150cc',
          700: '#613c99',
          800: '#402866',
          900: '#201433',
        },
        // Success, warning, error
        success: {
          100: '#e0f7ea',
          500: '#10b981',
          900: '#064e36',
        },
        warning: {
          100: '#fff8e6',
          500: '#f59e0b',
          900: '#713f01',
        },
        error: {
          100: '#fee2e2',
          500: '#ef4444',
          900: '#7f1d1d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'gold': '0 4px 16px rgba(255, 209, 102, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};