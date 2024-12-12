/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3DD5B0',  // Lighter mint
          DEFAULT: '#2AB090', // Mint green
          dark: '#1A8870',   // Darker mint
        },
        // Dark mode specific colors
        dark: {
          bg: '#0F1115',
          surface: '#1A1D23',
          text: '#E0E0E0',
        }
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.05)',
        'mint': '0 4px 20px rgba(42, 176, 144, 0.15)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'slide-in': 'slide-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'rotate-in': 'rotate-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'rotate-in': {
          '0%': { transform: 'rotate(-12deg) scale(0.9)', opacity: '0' },
          '100%': { transform: 'rotate(0) scale(1)', opacity: '1' },
        },
        'pulse-slow': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}