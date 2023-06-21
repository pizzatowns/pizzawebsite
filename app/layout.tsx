import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Home |Pizza Towns -Fast Pizza Delivery, Order Pizza Online, Carry Out Pizza, Pizza Towns Welcomes You!",
  description:
    "At Pizza Towns, we are dedicated to providing you with the best pizza experience. Order online or visit our convenient locations for fast and delicious pizza delivery or in-store pickup. Our menu features a wide selection of mouthwatering pizzas made with fresh ingredients and topped with your favorite toppings. Whether you're craving a classic pepperoni pizza or want to try one of our signature creations, we have something to satisfy every palate. With our quick and easy ordering process, you can enjoy hot and tasty pizzas in no time. Experience the ultimate pizza satisfaction at Pizza Towns today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-HB94L0H21V"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-HB94L0H21V');
        `}
      </Script>
      <body >{children}</body>
    </html>
  );
}
