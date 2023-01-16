import NavBar from "./Components/navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="flex h-screen w-screen bg-[#49c1bf]">
        <NavBar />
        <main className="flex-1 overflow-y-scroll">{children}</main>
      </body>
    </html>
  );
}
