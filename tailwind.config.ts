import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/hero.webp')",
        'gallery-hero': "url('/images/gallery-bg.webp')"
      },
      colors: {
        primary: '#001B48',
        secondary: '#E9197F',
        third: '#1E1424',
        fourth: '#C9C9C9',
        fifth: '#8D8D8D'
      }
    },
    variants: {
      fill: ['hover', 'focus']
    }
  },
  plugins: []
}
export default config
