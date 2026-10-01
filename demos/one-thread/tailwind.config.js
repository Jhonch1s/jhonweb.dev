import forms from '@tailwindcss/forms'

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#176779', 'primary-hover': '#125566', 'primary-light': '#e6f2ed',
        danger: '#C41E3A', success: '#308230', warning: '#B8860B',
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      borderRadius: { sm: '4px', md: '8px', lg: '12px' },
      boxShadow: { sm: '0 1px 2px rgba(0,0,0,0.05)', md: '0 4px 6px rgba(0,0,0,0.07)', lg: '0 10px 15px rgba(0,0,0,0.1)' },
    },
  },
  plugins: [forms],
}
