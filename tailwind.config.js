/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./src/**/*.{html,js}"],
theme: {
    extend: {},
    screens: {
    'sm': '640px',
      // => @media (min-width: 640px) { ... }

    'md': '768px',
      // => @media (min-width: 768px) { ... }

    'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    'max-sm': { 'max': '639px' }
    }
},
plugins: [],
}