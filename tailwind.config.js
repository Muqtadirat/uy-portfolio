/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-colorsprimary-blue": "var(--base-colorsprimary-blue)",
        "base-colorssecondary-blue": "var(--base-colorssecondary-blue)",
        "base-colorssurface": "var(--base-colorssurface)",
        "greyscale-10": "var(--greyscale-10)",
        "greyscale-100": "var(--greyscale-100)",
        "greyscale-20": "var(--greyscale-20)",
        "greyscale-30": "var(--greyscale-30)",
        "greyscale-40": "var(--greyscale-40)",
        "greyscale-50": "var(--greyscale-50)",
        "greyscale-60": "var(--greyscale-60)",
        "greyscale-70": "var(--greyscale-70)",
        "greyscale-80": "var(--greyscale-80)",
        "greyscale-90": "var(--greyscale-90)",
        "greyscale-95": "var(--greyscale-95)",
        "greyscale-97": "var(--greyscale-97)",
        "mobile-mockup-gen-2-iphone-color":
          "var(--mobile-mockup-gen-2-iphone-color)",
      },
      fontFamily: {
        "largescreen-body": "var(--largescreen-body-font-family)",
        "largescreen-button": "var(--largescreen-button-font-family)",
        "largescreen-caption": "var(--largescreen-caption-font-family)",
        "largescreen-heading": "var(--largescreen-heading-font-family)",
        "largescreen-largedisplay":
          "var(--largescreen-largedisplay-font-family)",
        "largescreen-mediumdisplay":
          "var(--largescreen-mediumdisplay-font-family)",
        "largescreen-smalldisplay":
          "var(--largescreen-smalldisplay-font-family)",
        "largescreen-subheading": "var(--largescreen-subheading-font-family)",
        "largescreen-xlargedisplay":
          "var(--largescreen-xlargedisplay-font-family)",
        "smallscreen-body": "var(--smallscreen-body-font-family)",
        "smallscreen-button": "var(--smallscreen-button-font-family)",
        "smallscreen-caption": "var(--smallscreen-caption-font-family)",
        "smallscreen-heading": "var(--smallscreen-heading-font-family)",
        "smallscreen-largedisplay":
          "var(--smallscreen-largedisplay-font-family)",
        "smallscreen-mediumdisplay":
          "var(--smallscreen-mediumdisplay-font-family)",
        "smallscreen-smalldisplay":
          "var(--smallscreen-smalldisplay-font-family)",
        "smallscreen-subheading": "var(--smallscreen-subheading-font-family)",
        "smallscreen-xlargedisplay":
          "var(--smallscreen-xlargedisplay-font-family)",
      },
    },
  },
  plugins: [],
};
