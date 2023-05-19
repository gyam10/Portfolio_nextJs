/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".src/**/*.{js,ts,jsx,tsx}",
    // ".src/pages/**/*.{js,ts,jsx,tsx}",
    // ".src/components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        "primary-red": "#DC143C",
        "primary-gray": "rgb(24, 26, 27)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
