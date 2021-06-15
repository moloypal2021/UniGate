module.exports = {
  mode: "jit",
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: {
          10: "#1A1A1A",
          20: "#484848",
        },
        blue: {
          10: "#576DFF",
        },
      },
      fontFamily: {
        "sf-pro-display": ["SF Pro Display", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
