import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BINT KAMAL SOLACE LTD | Executive Coaching & Leadership",
  description: "Structured communication coaching, leadership training, and capacity-building programs for professionals and organizations.",
};

import { ModalProvider } from "@/context/ModalContext";
import { BookCoachingModal } from "@/components/BookCoachingModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased text-charcoal bg-background`}>
        <ModalProvider>
          <SmoothScroll>
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <BookCoachingModal />
          </SmoothScroll>
        </ModalProvider>
      </body>
    </html>
  );
}
