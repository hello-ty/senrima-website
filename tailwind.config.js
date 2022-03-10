module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fancy: ["New Tegomin"],
      },
      animation: {
        changeImgAnimation: "changeImgAnimation 20s infinite",
      },
      keyframes: {
        changeImgAnimation: {
          "0%, 65% ,100%": { opacity: "0" },
          "45%, 50%": { opacity: "1" },
        },
      },
      animationDelay: {
        10000: "10000ms",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay"), require("daisyui")],
};
