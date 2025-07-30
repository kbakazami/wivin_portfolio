import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import NavBar from "@/app/_components/NavBar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Mon Portfolio',
    description: 'Développeur Full-stack – PHP, Node.js, React',
    keywords: ['Portfolio', 'Développeur Full-stack', 'PHP', 'Node.js', 'React'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.className}`}
      >
      <header>
          <NavBar />
      </header>
        {children}
      <footer className="bg-[#30475E] text-white py-4 text-center">
          <p>© 2025 Struys Wivin. Tous droits réservés.</p>
      </footer>
      </body>
    </html>
  );
}
