import daisyui from 'daisyui';

// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html}', // adjust this path based on your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
}


// module.exports = {
//   darkMode: 'class', 
// };
