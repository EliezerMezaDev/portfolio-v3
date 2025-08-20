export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#f5f5f5",
          DEFAULT: "#512173",
          dark: "#231037",
          darker: "#130a22",
        },
        accent: {
          DEFAULT: "#E32887",
          darker: "#CA2075",
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #130a22, #231037, #512173)",
      },
    },
  },
  plugins: [],
};
