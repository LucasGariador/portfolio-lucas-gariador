import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { url } from "inspector";

export const metadata = {
  title: 'Lucas Gariador | Game Programmer Portfolio',
  description: 'Desarrollador de videojuegos especializado en Unity',
  openGraph: {
    title: 'Lucas Gariador — Game Developer',
    description: 'Portfolio de Lucas Gariador, Game Developer especializado en Unity, C# y C++.',
    url: 'https://lucasgariador.dev',
    siteName: 'Lucas Gariador Portfolio',
    images: [
      {
        url: 'https://lucasgariador.dev/api/og',
        width: 1200,
        height: 630,
        alt: 'Game Dev Portfolio Preview',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        {children}
      </body>
    </html>
  );
}
