
export const SITE_CONFIG = {
  name: 'TikDown - TikTok Video Downloader',
  description: 'Free TikTok video downloader tool. Download high-quality TikTok videos without watermark in MP4 or MP3 format.',
  url: process.env.NEXT_PUBLIC_DOMAIN || 'https://your-domain.com',
  ogImage: '/og-image.png',
  creator: '@tikdown',
  keywords: [
    'TikTok downloader',
    'download TikTok videos',
    'remove watermark',
    'TikTok to MP4',
    'TikTok to MP3',
    'free video downloader',
    'TikTok video converter',
    'no watermark',
    'HD quality',
    'mobile friendly'
  ]
}

export const NAVIGATION_LINKS = [
  { href: '#', label: 'Home' },
  { href: '#how-it-works', label: 'How to Use' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' }
]

export const SOCIAL_LINKS = [
  { href: '#', icon: 'ri-facebook-fill', label: 'Facebook' },
  { href: '#', icon: 'ri-twitter-x-fill', label: 'Twitter' },
  { href: '#', icon: 'ri-instagram-fill', label: 'Instagram' },
  { href: '#', icon: 'ri-youtube-fill', label: 'YouTube' }
]

export const LEGAL_LINKS = [
  { href: '#', label: 'Terms of Service' },
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Cookie Policy' },
  { href: '#', label: 'DMCA' }
]

export const SUPPORTED_FORMATS = [
  { value: 'mp4', label: 'MP4 Video', description: 'Download as video file' },
  { value: 'mp3', label: 'MP3 Audio', description: 'Extract audio only' }
] as const

export const QUALITY_OPTIONS = [
  { value: 'hd', label: 'HD Quality', description: 'Best available quality' },
  { value: 'standard', label: 'Standard', description: 'Balanced quality and size' }
] as const

export const AD_SIZES = {
  '728x90': { width: 728, height: 90, name: 'Leaderboard' },
  '300x250': { width: 300, height: 250, name: 'Medium Rectangle' },
  '336x280': { width: 336, height: 280, name: 'Large Rectangle' },
  '160x600': { width: 160, height: 600, name: 'Skyscraper' },
  'in-feed': { width: '100%', height: 120, name: 'In-feed' }
} as const

export const API_ENDPOINTS = {
  download: '/api/download'
} as const
