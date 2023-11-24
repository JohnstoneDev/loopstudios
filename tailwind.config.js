/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    fontFamily : {
      global : ['Alata', 'sans-serif'],
      heading : ['Josefin Sans', 'sans-serif'],
    },
    fontSize : {
      'heading' : ['40px', {
          lineHeight : '45px',
          letterSpacing : '0px',
          fontWeight : '300',
        }
      ],
    'regular' : ['15px', {
        lineHeight : '28px',
        letterSpacing : '0px',
        fontWeight : '400',
      }
    ],
  },
    screens: {
      'mobile' : '375px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    colors : {
      'white' : 'hsl(0, 0%, 100%)',
      'black' : 'hsl(0, 0%, 0%)',
      'dark-gray': 'hsl(0, 0%, 55%)',
      'very-dark-gray' : 'hsl(0, 0%, 41%)'
    },
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
