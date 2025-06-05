
'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AdBannerProps {
  size: '728x90' | '300x250' | '336x280' | '160x600' | 'in-feed'
  className?: string
}

const adSizes = {
  '728x90': { width: 'w-full max-w-[728px]', height: 'h-[90px]', label: 'Leaderboard (728x90)' },
  '300x250': { width: 'w-full max-w-[300px]', height: 'h-[250px]', label: 'Medium Rectangle (300x250)' },
  '336x280': { width: 'w-full max-w-[336px]', height: 'h-[280px]', label: 'Large Rectangle (336x280)' },
  '160x600': { width: 'w-[160px]', height: 'h-[600px]', label: 'Skyscraper (160x600)' },
  'in-feed': { width: 'w-full', height: 'h-[120px]', label: 'In-feed Ad' }
}

export default function AdBanner({ size, className = '' }: AdBannerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const adConfig = adSizes[size]

  useEffect(() => {
    // Simulate ad loading
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // In a real application, you would integrate with Google AdSense here
  // This is a placeholder that shows where ads would be displayed
  
  return (
    <motion.div
      className={`ad-container ${adConfig.width} ${adConfig.height} mx-auto ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center justify-center h-full text-center p-4">
        <i className="ri-advertisement-line text-gray-400 text-2xl mb-2"></i>
        <div className="text-gray-500 text-sm font-medium">Advertisement</div>
        <div className="text-gray-400 text-xs mt-1">{adConfig.label}</div>
        
        {/* Placeholder for actual AdSense code */}
        {/* 
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client="ca-pub-XXXXXXXXXX"
             data-ad-slot="XXXXXXXXXX"
             data-ad-format="auto"
             data-full-width-responsive="true">
        </ins>
        */}
      </div>
    </motion.div>
  )
}
