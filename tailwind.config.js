module.exports = {
  mode: "jit",
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light: {
          10: "#F2F2F2",
          20: "#F6F6F6",
        },
        dark: {
          10: "#1A1A1A",
          20: "#484848",
        },
        blue: {
          10: "#576DFF",
        },
      },
      boxShadow: {
        10: "0px 0px 99px 0px rgba(26,26,26,0.04)",
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
