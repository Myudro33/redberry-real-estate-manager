/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'border-color': '#DBDBDB',
        'input-border': '#808A93',
        'button-background': '#F93B1D',
        'button-background-hover': '#DF3014',
        'active-filter': '#F3F3F3',
        error: '#F93B1D',
        success: '#45A849',
        'deal-type': '#02152680',
        'gray-text': '#021526B2'
      },
      boxShadow: {
        'box-shadow': '5px 5px 12px 0px rgba(2, 21, 38, 0.08)'
      },
      fontFamily: {
        firago: ['FiraGO', 'sans-serif'],
        helvetica: ['Helvetica', 'sans-serif']
      }
    }
  },
  plugins: []
}
