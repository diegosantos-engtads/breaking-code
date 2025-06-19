import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import clsx from 'clsx';
import { Main } from '@/components/Main';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Breaking Code',
  description:
    'Novidades de tecnologias, conhecimento e notícias sobre o mundo dev.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body
        className={clsx(
          'bg-amber-50',
          `${geistSans.variable} ${geistMono.variable} antialiased`,
        )}
      >
        <Main>
          <Header />
          {children}
          <Footer />
        </Main>
      </body>
    </html>
  );
}
