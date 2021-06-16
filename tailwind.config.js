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
      boxShadow: {
        10: "0px 0px 99px 0px rgba(26,26,26,0.06)",
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
