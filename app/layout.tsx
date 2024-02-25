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
      <body className="h-[100dvh] w-full bg-[#F5F5F5]">
        {/* Mobile View */}
        <onMenuClickContext.Provider value={onMenuClick}>
          <div className={`block xl:hidden w-screen h-screen ${onMenuClick === false? "overflow-y-hidden":""}`}>
            <Header setMenuClick={setonMenuClick} />
            <main className={`flex flex-col w-full h-[100dvh]`}>
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
          <div className="hidden xl:block w-screen h-screen">
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
