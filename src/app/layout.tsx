import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import { NavBar } from '@/components/NavBar';


export const metadata: Metadata = {
  title: 'Kanzi Katsira Firdausi',
  description: 'Portfolio website',
  themeColor: "#317EFB"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <NavBar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
