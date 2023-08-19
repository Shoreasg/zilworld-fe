"use client";
import { useState } from "react";
import { AnalyticsWrapper } from "./analytics";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import NavBarV2 from "./components/NavBarV2";
import "./globals.css";
import { Plus_Jakarta_Sans, Lato } from "@next/font/google";
import MobileNavBar from "./components/MobileNavBar";
import Overlay from "./components/Overlay";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  style: ["normal", "italic"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "auto",
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [onMenuClick, setonMenuClick] = useState(false);
  console.log(onMenuClick);
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${lato.variable}`}>
      <head />
      <body>
        {/* Mobile View */}
        <div className="block md:hidden">
          <Header setMenuClick={setonMenuClick} menuClick={onMenuClick} />
          <main className="bg-[#f5f5f5] flex w-screen h-screen">
            {onMenuClick ? (
              <>
                <MobileNavBar menuClick={onMenuClick} />
              </>
            ) : (
              <>
                <MobileNavBar menuClick={onMenuClick} />
                <Overlay />
              </>
            )}
            {children}
          </main>
        </div>
        {/* Web View */}
        <div className="hidden md:block">
          <main className="bg-[#f5f5f5] flex w-screen h-screen">
            <NavBarV2 />
            {children}
            <AnalyticsWrapper />
          </main>
        </div>
      </body>
    </html>
  );
}
