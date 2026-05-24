import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Alex Developer | Full-Stack Developer Portfolio",
  description:
    "Premium developer portfolio — React, Next.js, TypeScript specialist. Building modern web experiences.",
  keywords: ["developer", "portfolio", "react", "nextjs", "typescript", "fullstack"],
  openGraph: {
    title: "Alex Developer | Full-Stack Developer Portfolio",
    description: "Premium developer portfolio — React, Next.js, TypeScript specialist.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
