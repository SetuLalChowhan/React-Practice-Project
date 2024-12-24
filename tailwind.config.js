/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths to match your project structure
    "./public/index.html",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1520px",
      },
      padding: {
        DEFAULT: "16px",
        sm: "1rem",
        lg: "2rem",
        "2xl": "24px",
      },
    },
    extend: {
      boxShadow: {
        custom: "4px 4px 20px 0px rgba(0, 0, 0, 0.08)",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
       
       
      },
      colors: {
        textBlack: "#050505",
        textWhite: "#FFF",
        textGrayPrimary: "#7F7F7F",
        textGraySecondary: "#5A5C5F",
      },
      backgroundImage: {
        "banner-gradient":
          "linear-gradient(98deg, #F1FBFF 0%, #F1EDEB 49.68%, #F8DAB0 95.53%)",

        "offers-gradient":
          "linear-gradient(180deg, #FFF -18.59%, #EBEBEB 100%)",
      },
      screens: {
        xs: "375px",
        sm: "480px",
        md: "576px",
        lg: "768px",
        xlg: "992px",
        xl: "1200px",
        "2xl": "1520px",
      },
    },
  },
  plugins: [],
};
