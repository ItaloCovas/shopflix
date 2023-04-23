import './globals.css';
import { Sora } from 'next/font/google';

const inter = Sora({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
