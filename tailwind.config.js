/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'pp-regular': ['PP Neue Montreal Regular', 'sans-serif'],
        'pp-medium': ['PP Neue Montreal Medium', 'sans-serif'],
        'pp-bold': ['PP Neue Montreal Bold', 'sans-serif'],
        'pp-light': ['PP Neue Montreal Light', 'sans-serif'],
        'pp-thin': ['PP Neue Montreal Thin', 'sans-serif'],
        'pp-italic': ['PP Neue Montreal Italic', 'sans-serif'],

        'humane': ['Humane', 'sans-serif'],
        'humane-italic': ['Humane Italic', 'sans-serif'],
        'humane-light': ['Humane Light', 'sans-serif'],
        'humane-medium': ['Humane Medium', 'sans-serif'],
        'humane-bold': ['Humane Bold', 'sans-serif'],
        'humane-extra-light': ['Humane ExtraLight', 'sans-serif'],
        'humane-thin': ['Humane Thin', 'sans-serif'],
      },
      colors: {
        green: {
          high: '#008001',
        },
        pink: {
          mid: 'var(--secondary-300)',
        },
        text: {
          50: '#f1eef7',
          100: '#e3dcef',
          200: '#c8b9df',
          300: '#ac96cf',
          400: '#9073bf',
          500: '#7450af',
          600: '#5d408c',
          700: '#463069',
          800: '#2f2046',
          900: '#171023',
          950: '#0c0811',
        },
        background: {
          50: '#f1e5ff',
          100: '#e4ccff',
          200: '#c999ff',
          300: '#ad66ff',
          400: '#9233ff',
          500: '#7700ff',
          600: '#5f00cc',
          700: '#470099',
          800: '#300066',
          900: '#180033',
          950: '#0c001a',
        },
        primary: {
          50: '#f0eafb',
          100: '#e1d5f6',
          200: '#c2abed',
          300: '#a481e4',
          400: '#8557db',
          500: '#672dd2',
          600: '#5224a8',
          700: '#3e1b7e',
          800: '#291254',
          900: '#15092a',
          950: '#0a0415',
        },
        secondary: {
          50: '#f8eafb',
          100: '#f1d5f6',
          200: '#e2aaee',
          300: '#d480e5',
          400: '#c656dc',
          500: '#b82bd4',
          600: '#9323a9',
          700: '#6e1a7f',
          800: '#491155',
          900: '#25092a',
          950: '#120415',
        },
        accent: {
          50: '#f6e9fb',
          100: '#edd3f8',
          200: '#dba7f1',
          300: '#c97bea',
          400: '#b650e2',
          500: '#a424db',
          600: '#831daf',
          700: '#631584',
          800: '#420e58',
          900: '#21072c',
          950: '#100416',
        },
      },
    },
  },
  plugins: [function ({ addUtilities }) {
    const newUtilities = {
      '.no-scrollbar::-webkit-scrollbar': {
        display: 'none',
      },
      '.no-scrollbar': {
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
      },
      '.flex-container': {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%', 
        height: '100%',
      },
    };
    addUtilities(newUtilities);
  }]
}
