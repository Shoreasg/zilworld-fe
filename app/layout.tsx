import { AnalyticsWrapper } from "./analytics";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="h-full bg-gray-300">
        <main className="h-full">
          <NavBar />
          {children}
          <AnalyticsWrapper />
        </main>
      </body>
    </html>
  );
}
