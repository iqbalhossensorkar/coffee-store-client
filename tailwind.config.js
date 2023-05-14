/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my-image': "url('/src/assets/images/more/15.jpg')",
        'first': "url('/src/assets/images/more/13.jpg')",
        'second': "url('/src/assets/images/more/24.jpg')",
        'addCoffee': "url('/src/assets/images/more/11.png')",
        'home': "url('/src/assets/images/more/3.png')",
        'addCoffee-second': "url('/src/assets/images/more/1.png')"
      },
    },
  },
  plugins: [require("daisyui")],
}

