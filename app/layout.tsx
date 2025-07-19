// app/layout.tsx

import "./globals.css";
<link rel="stylesheet" href="../public/css/input.css" />

import Header from "@/components/parts/Header";
import Footer from "@/components/parts/Footer";

// import Footer1 from "@/components/parts/parts/Footer1";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adero Technologies",
  description:
    "Aderoo Tech is an East African internet company headquartered in Addis Ababa, Ethiopia. This organisation encompasses the entirety of the digital realm and all things online-related.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon & Meta */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/fav/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/fav/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/fav/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/fav/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/images/fav/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="pt-18 overflow-y-auto overflow-x-hidden h-screen snap-y snap-mandatory">
        <Header />
        
        <main>{children}</main>
        <Footer />
        {/* <Footer1 /> */}

        <script src="/js/index.js" async defer></script>
      </body>
    </html>
  );
}
