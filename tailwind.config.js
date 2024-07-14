/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './frontend/components/**/*.js',
    './frontend/modules/**/*.js',
    './config/*.json',
    './layout/*.liquid',
    './sections/*.{liquid,json}',
    './snippets/*.liquid',
    './templates/**/*.{liquid,json}',
  ],
  corePlugins: {
    aspectRatio: false,
    container: false,
  },
  theme: {
    extend: {
      colors: {
        brand: '#f9a',
      },
    },
  },
}
