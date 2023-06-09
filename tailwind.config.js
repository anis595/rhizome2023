/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors: {
      red2: "rgba(150, 24, 42, 0.5)",
      red: "#D60E41",
      blue: "#035591",
      blue2: "#90CCE8",
      blueNav: "#01152A",
      white: "#FFFFFF",
      gray: "rgba(255, 255, 255, 0.8)",
      night: "#24293A",
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    borderRadius: {
      full: "100%",
      "1xs": "10px",
      "1s": "10.4826px",
      "1m": "23.505px",
      "1l": "40px",
    },
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    fontSize: {
      8: "8px",
      9: "9px",
      11: "11px",
      19: "19px",
      25: "25px",
      22: "22px",
      27: "27px",
      28: "28px",
      36: "36px",
      41: "41px",
      49: "49px",
      95: "95px",
      xs: "10px",
      s: "12px",
      sm: "13px",
      sl: "17px",
      ls: "14px",
      l: "15px",
      lm: "16px",
      base: "18px",
      m: "20px",
      xl: "23px",
      xxl: "46px",
      "2xl": "26px",
      "3xl": "35px",
      "4xl": "30px",
      "5xl": "49px",
      "6xl": "55px",
      "7xl": "85px",
    },
    screens: {
      phone: "390px",
      tablet: "834px",
      laptop: "1440px",
      desktop: "1920px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        phone: "3rem",
        tablet: "3rem",
        laptop: "4rem",
        desktop: "4rem",
      },
      screens: {
        // phone: "390px",
        tablet: "834px",
        laptop: "1300px",
        desktop: "1300px",
      },
    },

    extend: {
      height: {
        86: "86px",
        213: "213px",
        289: "289px",
        680: "680px",
        760: "760px",
        870: "870px",
      },
      width: {
        85: "85px",
        95: "95px",
        105: "105px",
        140: "140px",
        151: "151px",
        157: "157px",
        184: "184px",
        199: "199px",
        200: "200px",
        221: "221px",
        228: "228px",
        246: "246px",
        248: "248px",
        263: "262px",
        271: "271px",
        272: "272px",
        281: "281px",
        310: "310px",
        514: "514px",
      },
      backgroundImage: {
        wave1: "url(/public/assets/customer/Vector 5.svg)",
      },
      padding: {
        30: "30rem",
        "32px": " calc(50% - 314.51px/2 - 3.19px);",
        86: "86px",
        "131px": "50px",
        300: "300px",
        500: "500px",
        700: "700px",
        850: "850px",
      },
      lineHeight: {
        18: "18px",
        20: "20px",
        50: "50px",
        71: "71px",
        25: "25px",
        41: "41px",
        13: "13px",
        14: "14px",
        30: "30px",
        12: "12px",
        17: "17px",
        36: "36px",
        16: "16px",
        37: "37px",
        22: "22px",
        19: "19px",
        32: "32px",
        26: "26px",
        23: "23px",
        31: "31px",
        50: "50px",
      },
      inset: {
        left: "10%",
        right: "17.19%",
        top: "26.56%",
        bottom: "23.44%",
      },
      dropShadow: {
        button: "2px 3px 8px rgba(7, 22, 50, 0.25)",
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
    },
  },
};
