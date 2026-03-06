/** @type {import('tailwindcss').Config} */
module.exports = {
  
  darkMode: ['class'],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', 
     "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
   theme: {
    screens: {
      xs: "350px",     
      sm: "500px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      '2xl': "1536px",
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('light', '.light &')
    },
  ],
}