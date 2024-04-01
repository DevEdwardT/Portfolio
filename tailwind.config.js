/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tt: "600px",

      lt: "900px",

      dt: "1400px",
    },
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        image: "url('/bg-img.png')",
        artisan: "url('/Artisan.png')",
        smartbrain: "url('/SmartBrain.png')",
        stelar: "url('/Stelar TM.png')",
        admin: "url('/Admin Panel.png')",
        dashboard: "url('/Dashboard.png')",
        stream: "url('/Stream.png')",
        play: "url('/Play.png')",
        imagesquare: "url('/bg icons square.png')",
        imagephone: "url('/bg icons phone.png')",
      },
    },
  },
  plugins: [],
};
