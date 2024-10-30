import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/Theme-provider';
import { FloatingNav } from '@/components/ui/FloatingNavbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gabriel Zouad Portfolio',
  description: 'Learn more about Gabriel Zouad and his projects.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    { name: 'Hjem', link: '/' },
    { name: 'Om Oss', link: '#om-oss' },
    { name: 'Prosjekter', link: '#prosjekter' },
    { name: 'Contact', link: '#contact' },
  ];
  return (
    <html lang='en'>
      <ThemeProvider
        attribute='class'
        defaultTheme='dark'
        enableSystem
        disableTransitionOnChange
      >
        <FloatingNav navItems={navItems} />
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
