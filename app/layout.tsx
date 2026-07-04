import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "WildChild Studios",
  description: "A perfect mix of technology knowhow, concept explorers, never give up spirit and hardwork.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700|Raleway:300,400,500,600,700|Crete+Round:400i"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="stylesheet" href="/css/bootstrap.css" type="text/css" />
        <link rel="stylesheet" href="/style.css" type="text/css" />
        <link rel="stylesheet" href="/css/swiper.css" type="text/css" />
        <link rel="stylesheet" href="/css/dark.css" type="text/css" />
        <link rel="stylesheet" href="/css/font-icons.css" type="text/css" />
        <link rel="stylesheet" href="/css/animate.css" type="text/css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" type="text/css" />
        <link rel="stylesheet" href="/css/responsive.css" type="text/css" />
      </head>
      <body className="stretched">
        <div id="wrapper" className="clearfix">
          <Header />
          {children}
          <Footer />
        </div>

        <div id="gotoTop" className="icon-angle-up"></div>

        {/* External JavaScripts */}
        <Script src="/js/jquery.js" strategy="beforeInteractive" />
        <Script src="/js/plugins.js" strategy="beforeInteractive" />
        <Script src="/js/functions.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
