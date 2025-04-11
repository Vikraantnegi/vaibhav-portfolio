import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Vaibhav Negi | 3D Animator",
  description:
    "A Passionate 3D Animator, experienced in Characters Creation, Environment Building, Modelling and Rigging!",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body> <main className="flex min-h-screen bg-background font-gilroy">
      <div className="flex max-w-[64rem] w-full mx-auto flex-col items-center px-8 md:px-0">
        <Navbar />
        {children}
        <FooterSection />
      </div>
      </main>
      </body>
    </html>
  );
}
