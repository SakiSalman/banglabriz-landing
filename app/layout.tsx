import { JSX } from 'react';
import './globals.css';
import type { Metadata } from 'next';
import Header from '@/views/Header/Header';
import Footer from '@/views/Footer/Footer';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export const metadata: Metadata = {
  title: 'BanglaBriz',
  description: 'A Bangla Briz CRM',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
