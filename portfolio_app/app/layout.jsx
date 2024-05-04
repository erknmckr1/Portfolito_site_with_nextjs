"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  const [theme, setTheme] = useState("light-mode");

  Router.events.on("routeChangeStart",()=>nProgress.start());
  Router.events.on("routeChangeComplete",()=>nProgress.done());
  Router.events.on("routeChangeError",()=>nProgress.done());

  return (
    <html className={`${theme}`}  lang="en" suppressHydrationWarning>
      <body >
          <Header theme={theme} setTheme={setTheme} />
          {children}
          <Footer />
      </body>
    </html>
  );
}
