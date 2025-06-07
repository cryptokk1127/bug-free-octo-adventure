
'use client'

import { useState } from 'react'
import { Download, Video, Shield, Zap, Globe, Heart } from 'lucide-react'
import VideoDownloader from '../components/video-downloader'
import AdBanner from '../components/ad-banner'
import AdBannerTop from '../components/ad-banner-top'
import AdBannerMiddle from '../components/ad-banner-middle'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Video className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">TikTok Downloader</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How it Works</a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Top Ad Banner - High visibility placement */}
      <AdBannerTop />

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Download TikTok Videos
            <span className="text-blue-600 block">Without Watermark</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Fast, free, and secure TikTok video downloader. Save your favorite videos in HD quality without any watermarks.
          </p>
          
          {/* Video Downloader Component */}
          <VideoDownloader />
        </div>
      </section>

      {/* Original Ad Banner - After main functionality */}
      <AdBanner />

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our TikTok Downloader?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">No Watermark</h4>
              <p className="text-gray-600">Download TikTok videos without any watermarks or logos for clean, professional content.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="bg-gray-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Lightning Fast</h4>
              <p className="text-gray-600">Our optimized servers ensure quick processing and instant downloads of your favorite videos.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Always Free</h4>
              <p className="text-gray-600">No hidden fees, no subscriptions. Download unlimited TikTok videos completely free.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Copy TikTok URL</h4>
              <p className="text-gray-600">Copy the link of the TikTok video you want to download from the TikTok app or website.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Paste & Process</h4>
              <p className="text-gray-600">Paste the URL in our downloader and click the download button to process the video.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Download & Enjoy</h4>
              <p className="text-gray-600">Download your video in HD quality without watermarks and enjoy offline viewing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Middle Ad Banner - Strategic placement between content sections */}
      <AdBannerMiddle />

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Is it free to use?</h4>
              <p className="text-gray-600">Yes, our TikTok downloader is completely free to use with no hidden charges or subscriptions required.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Do I need to install any software?</h4>
              <p className="text-gray-600">No installation required! Our web-based downloader works directly in your browser on any device.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">What video quality can I download?</h4>
              <p className="text-gray-600">You can download videos in their original quality, including HD when available from the source.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Is it safe to use?</h4>
              <p className="text-gray-600">Absolutely! We don't store your videos or personal information. All processing is done securely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">TikTok Downloader</span>
              </div>
              <p className="text-gray-400">
                The fastest and most reliable way to download TikTok videos without watermarks.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Features</h5>
              <ul className="space-y-2 text-gray-400">
                <li>No Watermark</li>
                <li>HD Quality</li>
                <li>Fast Download</li>
                <li>Mobile Friendly</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li>How to Use</li>
                <li>FAQ</li>
                <li>Contact Us</li>
                <li>Report Issue</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Legal</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Disclaimer</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TikTok Downloader. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
