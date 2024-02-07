/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  daisyui: {
    themes: ["forest", "light", "black"],
  },

  theme: {
    extend: {
      backgroundImage: {
        'footer-image': "url('./image/backfooter.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
};
