
// Google Analytics integration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Track events
export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track download events
export const trackDownload = (format: string, quality: string) => {
  event({
    action: 'download',
    category: 'video',
    label: `${format}_${quality}`,
  })
}

// Track URL paste events
export const trackUrlPaste = () => {
  event({
    action: 'paste_url',
    category: 'interaction',
  })
}

// Track format selection
export const trackFormatSelection = (format: string) => {
  event({
    action: 'select_format',
    category: 'preference',
    label: format,
  })
}
