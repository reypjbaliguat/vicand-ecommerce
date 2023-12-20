import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const inter = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Vicand Ecommerce",
  description: "Portfolio ecommerce site design by Sharwin Mark Vicariato",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
