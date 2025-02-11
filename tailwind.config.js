/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: '"Poppins", sans-serif'
      },
      backgroundImage:{
        'bg-banner-image': "url('/src/assets/bg1.png')"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

