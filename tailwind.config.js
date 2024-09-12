/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'border-color': '#DBDBDB',
        'button-background': '#F93B1D',
        'button-background-hover': '#DF3014'
      }
    }
  },
  plugins: []
}
