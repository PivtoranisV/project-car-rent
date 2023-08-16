import NavBar from '@/components/NavBar';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JavCars',
  description: 'Quickly and easily find and rent a car',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
