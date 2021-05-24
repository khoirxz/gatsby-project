module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: theme => ({
      ...theme,
      display: ["Montserrat", "system-ui"],
    }),
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    backgroundColor: theme => ({
      ...theme("colors"),
      base: "#FFF6F6",
    }),
    textColor: theme => ({
      ...theme("colors"),
      primary: "#F54748",
      customBlack: "#2E2E2E",
    }),
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
}
