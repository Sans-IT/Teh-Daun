import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const berkshireSwash = localFont({
  src: "./fonts/BerkshireSwash-Regular.ttf",
  variable: "--font-berkshire",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Teh Daun Official Surabaya",
  description: "Website Official Teh Daun Surabaya",
  icons: "../../tehdaun.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${berkshireSwash.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="mt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
