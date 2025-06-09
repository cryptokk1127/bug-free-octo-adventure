
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TikTok Video Downloader - Download TikTok Videos Without Watermark',
  description: 'Free TikTok video downloader. Download TikTok videos without watermark in HD quality. Fast, secure, and easy to use.',
  keywords: 'tiktok downloader, download tiktok video, tiktok video downloader, remove watermark',
  openGraph: {
    title: 'TikTok Video Downloader',
    description: 'Download TikTok videos without watermark in HD quality',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
