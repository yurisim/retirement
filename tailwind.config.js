const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3F51B5', // Indigo 500
        'primary-200': '#9FA8DA', // Indigo 300
        accent: '#FF4081', // Pink A200
        error: '#F44336', // Red 500
        'dark-primary': '#009688', // Teal 500,
        'dark-primary-200': '#80CBC4', // Teal 500
        'dark-accent': '#607D8B', // Blue Gray 500
      }
    },
  },
  important: true,
  plugins: [],
};
