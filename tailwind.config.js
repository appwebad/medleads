/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './hooks/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f8f7f2',
          100: '#f0ead5',
          200: '#e0cc8f',
          300: '#d3b46f',
          400: '#c69a45',
          500: '#b8832d',
          600: '#9d6d22',
          700: '#7d571d',
          800: '#65471d',
          900: '#12304a'
        },
        ink: '#06111f',
        slateblue: '#0f2740',
        surface: '#0b1726'
      },
      boxShadow: {
        soft: '0 12px 40px rgba(15, 39, 64, 0.12)',
        glow: '0 0 0 1px rgba(224, 204, 143, 0.25), 0 18px 50px rgba(11, 23, 38, 0.24)'
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at top, rgba(224,204,143,0.18), transparent 30%), linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};
