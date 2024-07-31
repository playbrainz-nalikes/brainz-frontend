/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
      "2xlc": ["25px", { lineHeight: "1.4" }],
      "3xlc": ["27px", { lineHeight: "1.4" }],
    },
    screens: {
      sm: "550px",
      md: "768px",
      custom: "870px",
      lg: "992px",
      // should have been a breakpoint at 1200
      xl: "1440px",
      c_1300: "1300px",
    },
    colors: {
      primary: {
        DEFAULT: "#011828",
        100: "#4299E1",
        200: "#00487A",
        225: "#3a5683",
        250: "#165682",
        275: "#0a3049",
        300: "#22323d",
        325: "#1a2f3e",
        350: "#061F30",
        375: "#0A3049",
        400: "#061A28",
        425: "#072336",
      },
      secondary: {
        DEFAULT: "#FFE61A",
        100: "#E9AB0D",
        200: "#FFE500",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
      grey: {
        DEFAULT: "#D9D9D9",
        100: "#EFEFEF",
        200: "#81898e",
        250: "#434e56",
        300: "#747474",
        400: "#bfc5c9",
        425: "#808b93",
        450: "#979797",
        475: "#50626d",
        500: "#4d5d68",
        525: "#677178",
        550: "#C1C7CB",
        600: "#CFCFCF",
        650: "#2a3d49",
      },
      gray: {
        100: "#9ca3af",
      },
      dark: {
        DEFAULT: "#121212",
        100: "#04131E",
        200: "#02101A",
      },

      success: {
        DEFAULT: "#58FF69",
        100: "#207E35",
      },
      danger: {
        DEFAULT: "#FF1A1A",
        100: "#FF351A",
        150: "#C53030",
        200: "#ED64A6",
      },
      info: {
        DEFAULT: "#9F7AEA",
      },
    },
    fontFamily: {
      basement: [
        "BasementGrotesqueNormal",
        "BasementGrotesqueBold",
        "BoldExtraCondensed",
      ],
      inter: ["Inter"],
    },
    boxShadow: {
      DEFAULT:
        " rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
      sessionCard:
        "rgba(36, 91, 134, 1) 11px 6px, rgba(28, 75, 111, 1) 19px 11px, rgba(18, 55, 83, 1) 26px 18px, rgba(0, 0, 0, 0) 18px 0",
      cryptoCardOne:
        "rgba(36, 91, 134, 1) 11px 6px, rgba(18, 55, 83, 1) 19px 11px",
      cryptoCardTwo:
        "rgba(161, 65, 112, 1) 11px 6px, rgba(79, 39, 58, 1) 19px 11px",
      cryptoCardThree:
        "rgba(78, 61, 113, 1) 11px 6px, rgba(54, 42, 79, 1) 19px 11px",
      progressBar:
        "rgba(233, 171, 13, 0.2) 0px 0 6px, rgba(233, 171, 13, 0.2) 0 0 6px",
      glow: " 0px 4px 50px 3px rgba(255, 255, 255, 0.25);",
    },
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-1deg) scale(1.0)" },
          "65%": { transform: "rotate(1deg) scale(1.1)" },
        },
      },
      animation: {
        wiggle: "wiggle 2.5s ease-in-out 0s 2 reverse",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({
      nocompatible: true,
    }),
  ],
};
