const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: {
        50: "#E5F2E9",
        100: "#CAE4D3",
        150: "#B0D7BD",
        200: "#96C9A7",
        250: "#7CBC91",
        300: "#61AE7B",
        350: "#4E9968",
        400: "#417F56",
        450: "#396F4B",
        500: "#315F41",
        550: "#294F36",
        600: "#21402B",
        650: "#183020 ",
        700: "#102016",
        750: "#08100B",
      },
      neutral: {
        100: "#fff",
        200: "#F9F9F9",
        300: "#E1E1E1",
        400: "#EDEDED",
        500: "#CBCBCB",
        600: "#ADADAD",
        700: "#757575",
        800: "#717171",
        900: "#353535",
        1000: "#0C0C0C",
      },
      error: {
        primary: "#C30000",
        light: "#ED2E2E",
        extra_light: "#FFF2F2",
      },
      success: {
        primary: "#00966D",
        light: "#00BA88",
        extra_light: "#F3FDFA",
      },
      warning: {
        primary: "#A9791C",
        light: "#F4B740",
        extra_light: "#FFF8E1",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-estedad)"],
      },
      backgroundImage: {
        "about-background":
          "linear-gradient(0deg, #000000a6 0%, #000000a6 100%),url('/images/about-bg.jpeg')",
        "footer-background":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.65) 100%),url('/images/footer-bg.jpeg')",
      },
    },
  },
  plugins: [],
};
