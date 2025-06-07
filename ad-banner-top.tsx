
'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

export default function AdBannerTop() {
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
    <div className="bg-blue-50/50 border-b border-blue-100 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
          <p className="text-gray-400 text-xs mb-2">Advertisement</p>
          <div className="bg-gray-50 rounded p-3 min-h-[90px] flex items-center justify-center">
            <p className="text-gray-400 text-sm">
              Top Banner AdSense Placeholder
              <br />
              <span className="text-xs">728x90 Leaderboard Ad</span>
            </p>
          </div>
          {/* Uncomment and replace with your AdSense code */}
          {/*
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"
            data-ad-slot="XXXXXXXXXX"
            data-ad-format="leaderboard"
            data-full-width-responsive="true"
          ></ins>
          */}
        </div>
      </div>
    </div>
  )
}
