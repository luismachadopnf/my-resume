/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "cupcake",
      {
        dim: {
          ...require("daisyui/src/theming/themes")["dim"],
          "--rounded-btn": "1.9rem",
        },
      },
    ],
    darkTheme: "dim",
  },
};
