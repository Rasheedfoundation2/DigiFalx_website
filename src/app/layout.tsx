// src/app/layout.tsx
import type { Metadata } from 'next';
import { Oxanium, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const oxanium = Oxanium({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-oxanium' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'DigiFalx - Digital Growth, Powered by Intelligence',
  description: 'An agency from 2049 where human strategy and autonomous AI execution merge.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oxanium.variable} ${inter.variable}`}>
      <body className="font-body">
        <div className="flex min-h-screen flex-col bg-background">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}