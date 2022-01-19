module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Oswald", "sans-serif"],
      serif: ["Playfair Display", "serif"],
    },
    extend: {
      maxWidth: {
        container: "980px",
      },
      backgroundImage: {
        "cta-texture": "url('/bg.webp')",
      },
      colors: {
        white: "#ffffff",
        black: "#000",
        "brand-green": "#507F70",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
