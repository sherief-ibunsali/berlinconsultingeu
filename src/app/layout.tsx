import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import NavBar from "./navbar";

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

export const metadata: Metadata = {
  title: "Berlin Consulting Services",
  description: "BerlinConsulting.eu offers expert migration consulting, visa services, and business registration in Germany. Specializing in work visas, residency permits, and company formation, we provide personalized solutions for individuals and businesses. Get professional guidance on German visas, migration laws, and setting up your business with our experienced consultants.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
