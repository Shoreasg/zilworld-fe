"use client";
import { useState } from "react";
import { AnalyticsWrapper } from "./analytics";
import Header from "./components/Header";
import NavBarV2 from "./components/NavBarV2";
import "./globals.css";
import MobileNavBar from "./components/MobileNavBar";
import Overlay from "./components/Overlay";
import { onMenuClickContext } from "./context/MenuContext";

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
          <div className="block md:hidden w-screen h-screen">
            <Header setMenuClick={setonMenuClick} />
            <main className=" flex flex-col w-full h-full">
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
            <main className="flex w-full h-full">
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
