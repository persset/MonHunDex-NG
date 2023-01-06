/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "placeholder-bgi":
          "url('https://images3.alphacoders.com/251/251305.jpg')",
      },
    },
  },
  plugins: [],
};
