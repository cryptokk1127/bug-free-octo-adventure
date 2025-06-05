
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TikTok Video Downloader - Download TikTok Videos Without Watermark',
  description: 'Free TikTok video downloader tool. Download high-quality TikTok videos without watermark in MP4 or MP3 format. Fast, secure, and easy to use.',
  keywords: 'TikTok downloader, download TikTok videos, remove watermark, TikTok to MP4, TikTok to MP3, free video downloader',
  authors: [{ name: 'TikTok Video Downloader' }],
  creator: 'TikTok Video Downloader',
  publisher: 'TikTok Video Downloader',
  robots: 'index, follow',
  openGraph: {
    title: 'TikTok Video Downloader - Download Videos Without Watermark',
    description: 'Free tool to download TikTok videos in high quality without watermark. Support for MP4 and MP3 formats.',
    type: 'website',
    locale: 'en_US',
    siteName: 'TikTok Video Downloader',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TikTok Video Downloader - Download Videos Without Watermark',
    description: 'Free tool to download TikTok videos in high quality without watermark.',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1E90FF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css" />
        
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        
        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "TikTok Video Downloader",
              "description": "Free tool to download TikTok videos without watermark",
              "url": "https://your-domain.com",
              "applicationCategory": "MultimediaApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "Download TikTok videos without watermark",
                "HD quality downloads",
                "MP4 and MP3 format support",
                "Free to use"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-white min-h-screen`}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
