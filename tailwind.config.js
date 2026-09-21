/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#030712',
          surface: '#080d1a',
          card: '#0f172a',
          cardHover: '#131d35',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(99, 102, 241, 0.4)',
          cyan: '#06b6d4',
          violet: '#8b5cf6',
          indigo: '#6366f1',
          emerald: '#10b981',
          accent: '#38bdf8'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-spin': 'spin 12s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'border-beam': 'border-beam 4s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'laser-flow': 'laserFlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        laserFlow: {
          '0%': { offsetDistance: '0%' },
          '100%': { offsetDistance: '100%' },
        }
      },
      backgroundImage: {
        'radial-gradient-hero': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.25), transparent)',
        'radial-gradient-bottom': 'radial-gradient(ellipse 60% 50% at 50% 120%, rgba(6, 182, 212, 0.15), transparent)',
        'cyber-gradient': 'linear-gradient(135deg, #06b6d4 0%, #6366f1 50%, #8b5cf6 100%)',
      }
    },
  },
  plugins: [],
}

