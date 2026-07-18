import type { Metadata } from "next";
import { bebasNeue, sfProRounded } from "@/ui/fonts/fonts";
import Navbar from "@/components/Nav/Navbar";
import Footer from "@/sections/Footer";
import CustomCursor from "@/components/Cursor/CustomCursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "J9 Design and Build | We Build Your Dreams",
  description:
    "J9 Design and Build offers building plans, construction, and supply services. Your all-in-one partner, built with quality, integrity, and excellence.",
  icons: {
    icon: "/assets/j9_whitelogo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${sfProRounded.variable} h-full antialiased`}
    >
      <body className="grain min-h-full bg-background text-foreground">
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
