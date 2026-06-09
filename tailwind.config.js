/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#111827',
          dark: '#0B1220',
          blue: '#2563EB',
          cyan: '#22D3EE',
          white: '#F9FAFB',
          muted: '#9CA3AF',
          light: '#D1D5DB',
        },
      },
      fontFamily: {
        heading: ['Sora', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },
    },
  },
  plugins: [],
};
