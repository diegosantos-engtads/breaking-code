import './globals.css';
import { Main } from '@/components/Main';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import clsx from 'clsx';
import { Container } from '@/components/Container';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Breaking Code',
    default: 'Breaking Code',
  },
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
      <body className={clsx('bg-background-1 antialiased', roboto.variable)}>
        <Main>
          <Header />
          <Container>{children}</Container>
          <Footer />
        </Main>
      </body>
    </html>
  );
}
