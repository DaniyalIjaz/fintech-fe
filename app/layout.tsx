'use client';

import './globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar/page';
import Footer from '@/components/Footer/page';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body
        className={`bg-background text-foreground min-h-screen transition-colors duration-300 ${geistSans.variable} ${geistMono.variable}`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <AnimatePresence mode="wait">
            <motion.main
              key={pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="flex-grow"
            >
              {children}
            </motion.main>
          </AnimatePresence>
          <Footer />
        </div>
      </body>
    </html>
  );
}
