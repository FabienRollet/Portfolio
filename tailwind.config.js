/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-color": "var(--text-color)",
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
      },
      fontFamily: {
        "font-header": "var(--font-header)",
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
      }
    },
  },
  plugins: [
    ({ addUtilities }) => {
       addUtilities({
          ".only-mobile": {
             "@apply lg:hidden": {},
          },
          ".non-mobile": {
             "@apply hidden lg:flex": {},
          },
       });
    },
 ],

};
