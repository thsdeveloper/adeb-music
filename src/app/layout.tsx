import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ADEB Music | A música que nasce da adoração",
  description: "Selo musical oficial da ADEB - Assembleia de Deus de Brasília. Produção musical, videoclipes, lives e projetos autorais que edificam vidas.",
  keywords: ["ADEB Music", "música gospel", "adoração", "Brasília", "produção musical", "videoclipes"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" style={{ scrollPaddingTop: '100px' }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
