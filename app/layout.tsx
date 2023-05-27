import { AnalyticsWrapper } from "./analytics";
import NavBar from "./components/NavBar";
import NavBarV2 from "./components/NavBarV2";
import "./globals.css";
import {Plus_Jakarta_Sans, Lato} from "@next/font/google";


const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  style: ["normal", "italic"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "auto"
})

const lato = Lato({
  variable: "--font-lato",
  weight: ["400", "700"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${lato.variable}`}>
      <head />
      <body>
        <main className="bg-[#f5f5f5] h-screen w-screen flex">
          <NavBarV2 />
          {/* {children} */}
          <AnalyticsWrapper />
        </main>
      </body>
    </html>
  );
}
