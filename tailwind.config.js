module.exports = {
  darkMode: 'class',
  content: [
    'components/landing/**/*.vue',
    'layouts/landing.vue',
    'pages/index.vue',
  ],
  corePlugins: {
    container: false,
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        primary: '#E8A676',
        'primary-hover': '#D69265',
        'background-light': '#F9F7F4',
        'background-dark': '#121212',
        'surface-light': '#FFFFFF',
        'surface-dark': '#1A1A1A',
        'text-light': '#2C2621',
        'text-dark': '#F5F0E6',
        'muted-dark': '#948B83',
        'accent-mocha': '#3D2E22',
        'border-dark': '#2D2D2D',
      },
      fontFamily: {
        display: ['Pretendard', 'sans-serif'],
        body: ['Pretendard', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '1.25rem',
        xl: '1.5rem',
        '2xl': '1.75rem',
        '3xl': '2rem',
      },
      boxShadow: {
        premium: '0 25px 50px -12px rgba(61, 46, 34, 0.08)',
        'premium-dark': '0 20px 40px -12px rgba(0, 0, 0, 0.8)',
      },
      lineHeight: {
        relaxed: '1.75',
      },
      letterSpacing: {
        tight: '-0.01em',
        tighter: '-0.03em',
        wide: '0.02em',
      },
    },
  },
}
