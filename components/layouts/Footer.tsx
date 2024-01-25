"use client";

import Image from "next/image";
import ukFlag from "@/public/assets/footer/uk_flag.svg";
import amex1 from "@/public/assets/footer/amex1.svg";
import amex2 from "@/public/assets/footer/amex2.svg";
import visa from "@/public/assets/footer/visa.svg";
import stripe from "@/public/assets/footer/stripe.svg";
import paypal from "@/public/assets/footer/paypal.svg";
import Icon from "@mdi/react";
import { mdiChevronDown, mdiFacebook, mdiInstagram, mdiTwitter } from "@mdi/js";
import { Button, TextField } from "@mui/material";

function Footer() {
  const products = [
    "New arrivals",
    "Collections",
    "Jeans/Pants",
    "Tshirts",
    "Bags",
    "Jackets",
  ];
  const getHelpItems = [
    "Shipping & Return",
    "Contact us",
    "About us",
    "Blog",
    "Sustainability",
  ];

  const paymentMethods = [amex1, amex2, visa, stripe, paypal];
  return (
    <>
      <div className="flex flex-col basis-full px-24 gap-x-5 justify-between bg-footer-bg-blue text-white">
        <div className="flex my-[60px] justify-evenly">
          <div className="flex flex-col basis-1/4">
            <h6 className="text-2xl font-semibold mb-3"> About the store</h6>
            <span className="mb-5">(United Kingdom, London)</span>
            <span className="mb-10">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit ofa consequat duis enim. Icia consequat duis
              enimAmet minim
            </span>
            <div className="flex items-center">
              <Image
                src={ukFlag}
                width={32}
                height={24}
                alt="flag"
                className="mr-3"
              />
              <Icon path={mdiChevronDown} size={1} />
            </div>
          </div>
          <div className="flex flex-col basis-1/4">
            <span className="text-[22px] font-semibold mb-3">Products</span>
            {products.map((product) => {
              return (
                <span key={product} className="mb-2">
                  {product}
                </span>
              );
            })}
          </div>
          <div className="flex flex-col basis-1/4">
            <span className="text-[22px] font-semibold mb-3">Get Help</span>
            {getHelpItems.map((item) => {
              return (
                <span key={item} className="mb-2">
                  {item}
                </span>
              );
            })}
          </div>
          <div className="flex flex-col basis-1/4">
            <span className="text-[22px] font-semibold mb-3">News letter</span>
            <span className="mb-6">
              To be always updated to our newest products. promos and more.
              Subscribe now!
            </span>
            <div className="flex items-center mb-8">
              <input
                type="text"
                name=""
                id=""
                className="w-[260px] h-12 mr-3 p-3 text-black"
                placeholder="Your email"
              />
              <Button
                style={{
                  backgroundColor: "#ffffff",
                  color: "#141414",
                  width: 101,
                  height: 48,
                  borderRadius: 2,
                  textTransform: "none",
                }}
              >
                {" "}
                Subscribe
              </Button>
            </div>
            <div className="flex gap-x-4">
              <Icon path={mdiFacebook} size={1} />
              <Icon path={mdiTwitter} size={1} />
              <Icon path={mdiInstagram} size={1} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex basis-full justify-between px-24 gap-x-5 py-4 bg-secondary-black text-white">
        <div className="flex gap-x-11 items-center">
          <span className="text-sm">Copyright © 2022 Vicand </span>
          <span className="text-sm">Privacy & Policy </span>
          <span className="text-sm">Terms & Condition</span>
          <span className="text-sm">Frequently Asked Questions</span>
        </div>
        <div className="flex gap-x-4">
          {paymentMethods.map((method) => {
            return (
              <Image
                width={51}
                height={28}
                key={method}
                src={method}
                alt="payment method"
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Footer;
