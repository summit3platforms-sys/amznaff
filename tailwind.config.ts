import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d9ebff',
          200: '#bcdcff',
          300: '#8ec5ff',
          400: '#59a4ff',
          500: '#317dff',
          600: '#1c5cf5',
          700: '#1747e0',
          800: '#193bb5',
          900: '#1a378f'
        },
        winner: {
          50: '#f0fdf4',
          500: '#22c55e',
          600: '#16a34a'
        }
      },
      boxShadow: {
        card: '0 1px 3px rgba(15, 23, 42, 0.08), 0 1px 2px rgba(15, 23, 42, 0.06)'
      }
    }
  },
  plugins: []
};

export default config;
