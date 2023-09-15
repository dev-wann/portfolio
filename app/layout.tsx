import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Seungwan Cho`,
  description: 'Portfolio page made by seungwan cho',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
