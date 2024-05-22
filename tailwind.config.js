// tailwind.config.js
module.exports = {
  darkMode: 'selector',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          text: 'rgb(14, 2, 23)',
          background: 'rgb(192, 186, 222)',
          primary: 'rgb(203, 162, 221)',
          secondary: 'rgb(221, 219, 255)',
          accent: 'rgb(40, 0, 97)',
        },
        dark: {
          text: 'rgb(244, 232, 253)',
          background: 'rgb(39, 33, 69)',
          primary: 'rgb(75, 34, 93)',
          secondary: 'rgb(2, 0, 36)',
          accent: 'rgb(198, 158, 255)',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}