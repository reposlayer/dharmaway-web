import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import FilmGrain from "@/components/FilmGrain";
import InteractiveCanvas from "@/components/InteractiveCanvas";
import CursorGlow from "@/components/CursorGlow";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Studio Harā | Oaza Mira & Balansa u Zagrebu",
  description: "Studio Harā - autentično utočište u srcu Zagreba. Yoga, shiatsu masaža i organska kozmetika vlastite proizvodnje.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${outfit.variable} font-sans antialiased text-foreground bg-background`}
      >
        <SmoothScroll>
          <FilmGrain />
          <InteractiveCanvas />
          <CursorGlow />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
