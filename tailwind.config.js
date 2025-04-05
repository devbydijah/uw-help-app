// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#1D4ED8",
        input: "#F3F4F6",
        foreground: "#374151",
        background: "#FFFFFF",
        "primary-dark": "#1A3A73",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["light"],
    },
  },
  plugins: [],
};
