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
        "lower-image": "url('../public/assets/featured-category/lower.jpg')",
        "bag-image": "url('../public/assets/featured-category/bag.jpg')",
        "watch-image": "url('../public/assets/featured-category/watch.jpg')",
        "jacket-image": "url('../public/assets/featured-category/jacket.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
