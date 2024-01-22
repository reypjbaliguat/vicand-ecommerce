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
        "dark-blue": "#314356",
        "latest-blog-bg-cover": "rgba(0, 0, 0, 0.38)",
      },
      textColor: {
        "dark-blue": "#314356",
        "secondary-black": "#474747",
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
        "more-with-vicand": "url('../public/assets/more-with-vicand.png')",
        "aesthetic-men":
          "url('https://s3-alpha-sig.figma.com/img/3d11/182b/0bd095853bafb9750ea54c98f964fb60?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cAc4LXEYFdhFktjVCzbLaD1sEvCg7gDnZZFjhUY7xoYDAmWvzRHlCxMKHK4LjWfG~FRizwCZrABSSZg2mm--RBCs-ypYhKDpgx00vuCTzNrZgtNl9OWKLpcSy3ANkM9SlJhjhcKIzkDgDkBDCMshLid1yPEoox1lyAVTRueFVo5HwG0ktzZswY6Yl540o~A5-eSlG3Qat-06taLu9KHaWA6OW~-dPADFXrO~LjFyOvq~Im2uM5eV2vdjS9oEpW94bCYQqANYkZ0wSd7KGS3-7l-pKQ6grYJaxAnX3fwJ6lQRK7h2aZT6pa60RTeIKV38fE7FGRuCcKDDQPSq27079g__')",
        "aesthetic-women":
          "url('https://s3-alpha-sig.figma.com/img/05c1/f5f9/60747eafd180db8fae9c47887e5b2182?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SgRsFrOBQlw1A8JhocHqXp~8JkO~EabouPM3Vm3~An3JCLDl4ZDgvHVcDtOmkQ0o17mH4p4TDuhw-1azl1~MXEy2eKI~WPFNC92zxwVIFjxfVjFZvB5g6xDjU9-ebt~Ki-9HXpoLMVtiCMTK~xiX-J-JxFu0SbUV2hIy-gd2bbVYjozoT~Yof8-0IO6FgpVD-~1cIgEzcKNmaunsCbyAytdNMAHvHrxMLo64CKBmOoh80I98Ncbvzw9viNp-ZcclVyye35NAuzEQZasjeFRk6FHgL1qgKyOb7buROP7rPkHbIlEDPeFCrNkaN~372ZpTGunNK254U-nlRQOMb0jBBw__')",
        testimonial:
          "url('https://s3-alpha-sig.figma.com/img/17db/73b1/af1321c2d7663b137f836064c6a162b8?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fc9GxOWIgf~irPptr0UBXgyuH7QqefFS~GSsiRQxOak~zI4LAK~boaeBTDzSEw6UspDelMjvPXSBtT31z4imul~MOGxBiVwiKv68olfVwkw5UHIOwa0EHOYtlv2JcIHDSFqRL16gmwHBb1ob7p9REn9ALTP8gpPI5xCJtjtCOT4qZIAs1tEQ9C7YRDalC5tnBPqeYrQ101p-dzX20zPekuCONBWrUFLPkOEGaJurt0PqwxuN9be9oatq4v72DBYrOAdp28pWTIVzAFJbCwH7hc7Et0A~GpSFX5LFTLna3h~TfmdBXjYL0bfwP5DSW9W-qfBoILtqTzoMLdwMQ1RB1w__')",
        "latest-blog-1": "url('../public/assets/latest-blog/latest_blog1.png')",
        "latest-blog-2": "url('../public/assets/latest-blog/latest_blog2.png')",
        "latest-blog-3": "url('../public/assets/latest-blog/latest_blog3.png')",
        "latest-blog-4": "url('../public/assets/latest-blog/latest_blog4.png')",
        "latest-blog-5": "url('../public/assets/latest-blog/latest_blog5.png')",
      },
    },
  },
  plugins: [],
};
export default config;
