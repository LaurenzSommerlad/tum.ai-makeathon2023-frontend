/* eslint-disable global-require */
// tailwind.config.js
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "grid-cols-1",
    "grid-cols-2",
    "grid-cols-3",
    "grid-cols-4",
    "grid-cols-5",
    "grid-cols-6",
    "grid-cols-7",
    "grid-cols-8",
    "grid-cols-9",
    "grid-cols-10",
    "grid-cols-11",
    "grid-cols-12",
    "grid-cols-none",
  ],
  // https://github.com/tailwindlabs/tailwindcss-forms
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
  theme: {
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui"],
    },
    extend: {
      maxHeight: {
        128: "32rem",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink,
      violet: colors.violet,
      buttonColor: {
        loginButton: "#F00",
        mildButton: "#EA5455",
        lightButton: "#f37b00",
      },
      textColor: {
        tableHeader: "#B2C0CC",
        tableSubHeader: "#6B7280",
        tableRowData: "#111827",
        navigationText: "#023056",
        selectBoxLabel: "#374151",
        colonColor: "#023056",
        dateColor: "#828894",
      },
      borderColor: {
        header: "#E5E7EB",
        table: "#0000000F",
        subHeader: "#B2C0CC",
      },
      divideColor: {
        primary: "#B2C0CC",
      },
      logoColor: {
        success: "#34D399",
        waiting: "#FBBF24",
        aborted: "#F87171",
      },
    },
    screens: {
      xs: "330px",
      ...defaultTheme.screens,
    },
  },
};
