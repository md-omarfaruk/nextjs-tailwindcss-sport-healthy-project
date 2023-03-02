/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'omar-black': '#262524',
        'omar-blue':'#264373',
        'omar-yellow':'#F3B411',
        'omar-pink': '#D388FF',
        'omar-hotpink': '#F4CDD6',
        'omar-grey': '#E5E5E5',
      },
      padding:{
        '23': '5.938rem',
        '9': '6.188rem',
      },
      width:{
        '35': '8.813rem',
        '29': '7.125rem',
        '100': '884px',       
      },
      height:{
        '10': '2.375rem',
        '13': '3.125rem',
        '100': '884px',       
      },
      borderRadius:{
        'omar-rounded': '10px',
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
        sporting: ['Sporting', 'sans-serif'],
      },      
    },
  },
  plugins: [],
}