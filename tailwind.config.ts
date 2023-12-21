import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "secondary-black": "#141414",
      },
      backgroundImage: {
        "hero-image": "url('../public/assets/hero-image.svg')",
        "tshirt-image": "url('../public/assets/featured-category/tshirt.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
