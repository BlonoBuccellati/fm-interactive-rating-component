import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "@/app/_styles/globals.css";

const overPass = Overpass({
  variable: "--font-overpass",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Interactive rating component",
  description: "Interactive rating component",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${overPass.variable} antialiased`}>{children}</body>
    </html>
  );
}
