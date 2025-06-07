
'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

export default function AdBannerMiddle() {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        window.adsbygoogle.push({})
      }
    } catch (err) {
      console.log('AdSense error:', err)
    }
  }, [])

  return (
    <div className="py-12 bg-gradient-to-r from-blue-50 to-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-lg">
          <p className="text-gray-500 text-sm mb-3">Advertisement</p>
          <div className="bg-gray-50 rounded-lg p-6 min-h-[250px] flex items-center justify-center">
            <p className="text-gray-400">
              Middle Banner AdSense Placeholder
              <br />
              <span className="text-xs">336x280 Large Rectangle Ad</span>
            </p>
          </div>
          {/* Uncomment and replace with your AdSense code */}
          {/*
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"
            data-ad-slot="XXXXXXXXXX"
            data-ad-format="rectangle"
            data-full-width-responsive="true"
          ></ins>
          */}
        </div>
      </div>
    </div>
  )
}
