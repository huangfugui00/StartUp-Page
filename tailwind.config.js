module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     },
     zIndex: {
      '-1': '-1',
      '-2': '-2',
      '100':'100',
      '1':'1',
     },
  
  },
  variants: {
    extend: {},
  },
  // plugins: [
  //   require('tailwind-scrollbar-hide'),
  //   require('@tailwindcss/line-clamp'),
  // ],
}
