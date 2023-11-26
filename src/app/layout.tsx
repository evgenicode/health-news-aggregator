import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Health News",
  description: "Health News",
  keywords: "news, health, healthspan, lifestyle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="md:container md:mx-auto max-w-screen-md lg:w-[900px]">
          {children}
        </div>
      </body>
    </html>
  );
}
