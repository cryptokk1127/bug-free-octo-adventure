
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Header from '@/components/header'
import Footer from '@/components/footer'
import VideoDownloader from '@/components/video-downloader'
import HowItWorks from '@/components/how-it-works'
import FAQ from '@/components/faq'
import Sidebar from '@/components/sidebar'
import AdBanner from '@/components/ad-banner'

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      {/* Top Ad Banner */}
      <AdBanner size="728x90" className="mt-4" />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <VideoDownloader />
            </motion.div>
            
            {/* Medium Rectangle Ad */}
            <AdBanner size="300x250" className="my-8" />
            
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <HowItWorks />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <FAQ />
            </motion.div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-24">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
      
      {/* Bottom Ad Banner */}
      <AdBanner size="728x90" className="my-8" />
      
      <Footer />
    </div>
  )
}
