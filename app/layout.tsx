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
      <body className="h-full bg-gray-300">
        <main className="h-full">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
