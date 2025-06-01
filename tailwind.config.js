/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
            colors: {
        'component-color': '#f0fafa',
        'body-bg-color': '#e5f7f7',
        'header-bg-color': '#839b9b',
        'hover-active': '#2c3d3d',
      },
    },
  },
  plugins: [],
}