/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0e462c",
          light: "#1a6e45",
          dark: "#083d25",
        },
        secondary: {
          DEFAULT: "#ffc107",
          light: "#ffdb6c",
          dark: "#db9f00",
        },
        accent: {
          DEFAULT: "#6a42f4",
          light: "#8a6af6",
          dark: "#5331d9",
        },
        success: "#28a745",
        info: "#17a2b8",
        warning: "#ffc107",
        danger: "#dc3545",
        light: "#f8f9fa",
        dark: "#343a40",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        display: [
          "Poppins",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 2px 15px rgba(0, 0, 0, 0.08)",
        card: "0 10px 20px rgba(0, 0, 0, 0.05)",
        hover: "0 15px 30px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/hero-bg.jpg')",
        "categories-pattern": "linear-gradient(120deg, #0e462c, #1a6e45)",
        "dots-pattern": "url('/images/dots-pattern.svg')",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.dark"),
            a: {
              color: theme("colors.primary.DEFAULT"),
              "&:hover": {
                color: theme("colors.primary.light"),
              },
            },
            h1: {
              color: theme("colors.primary.DEFAULT"),
              fontFamily: theme("fontFamily.display").join(", "),
            },
            h2: {
              color: theme("colors.primary.DEFAULT"),
              fontFamily: theme("fontFamily.display").join(", "),
            },
            h3: {
              color: theme("colors.primary.DEFAULT"),
              fontFamily: theme("fontFamily.display").join(", "),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
