/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'protext': ['Protest Revolution', 'sans-serif'],
'rancho': ['Rancho', 'cursive'],
'grasick': ['Space Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}

