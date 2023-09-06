"use client";
import { useState } from "react";
import { AnalyticsWrapper } from "./analytics";
import Header from "./components/Header";
import NavBarV2 from "./components/NavBarV2";
import "./globals.css";
import { Plus_Jakarta_Sans, Lato } from "next/font/google";
import MobileNavBar from "./components/MobileNavBar";
import Overlay from "./components/Overlay";
import { onMenuClickContext } from "./context/MenuContext";
import Head from "next/head";
import { Metadata } from "next";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  style: ["normal", "italic"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "auto",
  preload: false,
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["400", "700"],
  preload: false,
});

export const metadata: Metadata = {
  title: 'ZilWorld-Ecosystem of Zilliqa',
  description: 'Ecosystem of Zilliqa',
  icons:{
    icon: '/ZilWorld Logo.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [onMenuClick, setonMenuClick] = useState(true);

  return (
    <html lang="en">
      <head />
      <body className="h-full w-full">
        {/* Mobile View */}
        <onMenuClickContext.Provider value={onMenuClick}>
          <div className="block md:hidden">
            <Header setMenuClick={setonMenuClick} />
            <main className="bg-[#f5f5f5] flex flex-col w-full h-full">
              {onMenuClick ? (
                <>
                  <MobileNavBar />
                </>
              ) : (
                <>
                  <Overlay setMenuClick={setonMenuClick} />
                  <MobileNavBar />
                </>
              )}
              {children}
            </main>
          </div>
          {/* Web View */}
          <div className="hidden md:block">
            <main className="bg-[#f5f5f5] flex w-full h-full">
              <NavBarV2 setMenuClick={setonMenuClick} />
              {children}
              <AnalyticsWrapper />
            </main>
          </div>
        </onMenuClickContext.Provider>
      </body>
    </html>
  );
}
