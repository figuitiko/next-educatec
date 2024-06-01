import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        primary: '#001B48',
        'primary-light': '#062565',
        secondary: '#E9197F',
        third: '#1E1424',
        fourth: '#C9C9C9',
        fifth: '#8D8D8D',
        sixth: '#E9E4EC',
        seven: '#1E1424'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/Illustrationsmain-main.webp')",
        'gallery-hero': "url('/images/gallery-bg.webp')",
        'question-pattern': "url('/images/bg-question.webp')",
        'question-pattern-secondary':
          "url('/images/bg-secondary-question.webp')",
        'result-1':
          'linear-gradient(to bottom,rgba(182, 104, 32, 0.52), rgba(182, 104, 32, 0.73)), url(/images/bg-result-1.webp)',
        'result-2':
          'linear-gradient(to bottom, rgba(182, 104, 32, 0.52), rgba(182, 104, 32, 0.73)), url(/images/bg-result-2.webp)',
        'result-3':
          'linear-gradient(to bottom, rgba(182, 68, 32, 0.52), rgba(182, 68, 32, 0.73)), url(/images/bg-result-3.webp)',
        'result-4':
          'linear-gradient(to bottom, rgba(182, 32, 32, 0.52), rgba(182, 32, 32, 0.73)), url(/images/bg-result-4.webp)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 1s ease-in'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
