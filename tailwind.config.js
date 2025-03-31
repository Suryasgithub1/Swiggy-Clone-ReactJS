/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html", // Your main HTML file
      "./src/.{js}", // All files in the 'src' directory with these extensions
      "./components.{js}", // All files in the 'components' directory
      "./utils/.{js}", // All files in the 'pages' directory (for frameworks like Next.js)
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }