"use client";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function RootLayout({ children }) {
 

  return (
    <html lang="en" suppressHydrationWarning>
      
      <body>
        <Provider store={store}>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
