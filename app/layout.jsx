import './globals.css';
import { Anton, Inter } from 'next/font/google';

const anton = Anton({ subsets: ['latin'], weight: '400', variable: '--font-anton' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Inkbreed Tattoo Studio',
  description: 'Mais que tattoo. É arte na pele. Agende sua tatuagem no Inkbreed.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#070707',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${anton.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
