/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
            colors: {
        'list-item': '#f0fafa',
        'body-bg-color': '#e5f7f7',
        'header-bg-color': '#839b9b',
        'hover-active': '#2c3d3d',
        "features": "#000",
        'main-font': '#599999',
        "second-font": "#ffffff",
        "third-font": "#808080"
      },
            backgroundImage: {
        'header-desktop': "url('/public/images/bg-header-desktop.svg')",
        'header-mobile': "url('/public/images/bg-header-mobile.svg')",
      },
      boxShadow : {
        'boxList': '0 0px 10px 1px rgba(0,0,0,0.1)' 
      }
    },
  },
  plugins: [],
}