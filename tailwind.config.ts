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
        "product-gray": "#f7f7f7",
      },
      borderColor: {
        "product-border": "#ebebeb",
      },
      backgroundImage: {
        "hero-image": "url('../public/assets/hero-image.svg')",
        "tshirt-image": "url('../public/assets/featured-category/tshirt.jpg')",
        "lower-image": "url('../public/assets/featured-category/lower.jpg')",
        "bag-image": "url('../public/assets/featured-category/bag.jpg')",
        "watch-image": "url('../public/assets/featured-category/watch.jpg')",
        "jacket-image": "url('../public/assets/featured-category/jacket.jpg')",
        "man-1": "url('../public/assets/products/man_1.png')",
        "man-2": "url('../public/assets/products/man_2.png')",
        "man-1-back": "url('../public/assets/products/man_1_back.png')",
        "man-2-back": "url('../public/assets/products/man_2_back.png')",
      },
    },
  },
  plugins: [],
};
export default config;
