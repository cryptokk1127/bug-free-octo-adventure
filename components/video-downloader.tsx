
'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'sonner'
import AdBanner from './ad-banner'
import LoadingSpinner from './loading-spinner'
import { isValidTikTokUrl, formatFileSize } from '@/lib/utils'
import { trackDownload, trackUrlPaste, trackFormatSelection } from '@/lib/analytics'
import { API_ENDPOINTS } from '@/lib/constants'

interface DownloadOptions {
  format: 'mp4' | 'mp3'
  hdQuality: boolean
  removeWatermark: boolean
}

interface VideoInfo {
  title: string
  author: string
  duration: string
  size: string
  thumbnail: string
}

export default function VideoDownloader() {
  const [url, setUrl] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [showOptions, setShowOptions] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [progress, setProgress] = useState(0)
  const [statusText, setStatusText] = useState('')
  const [options, setOptions] = useState<DownloadOptions>({
    format: 'mp4',
    hdQuality: true,
    removeWatermark: true
  })
  const [videoInfo, setVideoInfo] = useState<VideoInfo>({
    title: 'Summer vibes with friends #summer #friends',
    author: '@sarahparker',
    duration: '00:32',
    size: '4.2 MB',
    thumbnail: 'https://i.pinimg.com/736x/f8/ad/54/f8ad542c7ccc50cc0db73fbad6b20859.jpg'
  })

  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText()
      setUrl(text)
      trackUrlPaste()
      toast.success('URL pasted successfully!')
    } catch (err) {
      toast.error('Failed to paste from clipboard')
    }
  }

  const handleDownload = () => {
    if (!url.trim()) {
      toast.error('Please enter a TikTok URL')
      return
    }

    if (!isValidTikTokUrl(url)) {
      toast.error('Please enter a valid TikTok URL')
      return
    }

    setShowOptions(true)
    toast.success('URL validated! Please select your download options.')
  }

  const simulateDownload = async () => {
    setIsProcessing(true)
    setProgress(0)
    setShowPreview(false)

    const steps = [
      { progress: 20, text: 'Fetching video information...' },
      { progress: 40, text: 'Processing video...' },
      { progress: 60, text: 'Removing watermark...' },
      { progress: 80, text: 'Optimizing quality...' },
      { progress: 100, text: 'Download ready!' }
    ]

    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 800))
      setProgress(step.progress)
      setStatusText(step.text)
    }

    setIsProcessing(false)
    setShowPreview(true)
    toast.success('Video processed successfully!')
  }

  const handleFinalDownload = () => {
    // Track download event
    trackDownload(options.format, options.hdQuality ? 'hd' : 'standard')
    
    // In a real application, this would trigger the actual download
    const filename = `tiktok_video_${Date.now()}.${options.format}`
    toast.success(`Download started: ${filename}`)
    
    // Simulate file download
    const link = document.createElement('a')
    link.href = '#'
    link.download = filename
    link.click()
  }

  return (
    <section className="bg-white rounded-xl shadow-lg p-6 mb-8 hover-lift">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Download TikTok Videos Without Watermark
        </h2>
        <p className="text-gray-600 mb-6 text-lg">
          Easily download high-quality TikTok videos without watermark. Just paste the TikTok video URL below and click Download.
        </p>
        
        {/* URL Input Section */}
        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <i className="ri-link text-gray-400"></i>
            </div>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste TikTok video URL here (e.g., https://www.tiktok.com/@user/video/123456789)"
              className="w-full pl-10 pr-4 py-4 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-sm"
            />
          </div>
          <div className="flex gap-3">
            <motion.button
              onClick={handlePaste}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-4 rounded-lg font-medium whitespace-nowrap flex items-center transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <i className="ri-clipboard-line mr-2"></i> Paste
            </motion.button>
            <motion.button
              onClick={handleDownload}
              disabled={isProcessing}
              className="bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-medium whitespace-nowrap flex items-center transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <i className="ri-download-line mr-2"></i> Download
            </motion.button>
          </div>
        </div>

        {/* Download Options */}
        <AnimatePresence>
          {showOptions && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 mb-6"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Download Options</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="font-medium mb-4 text-gray-700">Format</p>
                  <div className="space-y-3">
                    <label className="flex items-center cursor-pointer group">
                      <input
                        type="radio"
                        name="format"
                        value="mp4"
                        checked={options.format === 'mp4'}
                        onChange={(e) => {
                          const format = e.target.value as 'mp4' | 'mp3'
                          setOptions({...options, format})
                          trackFormatSelection(format)
                        }}
                        className="radio-custom mr-3"
                      />
                      <span className="group-hover:text-primary transition-colors duration-200">MP4 Video (Recommended)</span>
                    </label>
                    <label className="flex items-center cursor-pointer group">
                      <input
                        type="radio"
                        name="format"
                        value="mp3"
                        checked={options.format === 'mp3'}
                        onChange={(e) => {
                          const format = e.target.value as 'mp4' | 'mp3'
                          setOptions({...options, format})
                          trackFormatSelection(format)
                        }}
                        className="radio-custom mr-3"
                      />
                      <span className="group-hover:text-primary transition-colors duration-200">MP3 Audio Only</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <p className="font-medium mb-4 text-gray-700">Quality Options</p>
                  <div className="space-y-4">
                    <label className="flex items-center justify-between cursor-pointer group">
                      <span className="group-hover:text-primary transition-colors duration-200">HD Quality</span>
                      <label className="switch">
                        <input
                          type="checkbox"
                          checked={options.hdQuality}
                          onChange={(e) => setOptions({...options, hdQuality: e.target.checked})}
                          disabled={options.format === 'mp3'}
                        />
                        <span className="slider"></span>
                      </label>
                    </label>
                    <label className="flex items-center justify-between cursor-pointer group">
                      <span className="group-hover:text-primary transition-colors duration-200">Remove Watermark</span>
                      <label className="switch">
                        <input
                          type="checkbox"
                          checked={options.removeWatermark}
                          onChange={(e) => setOptions({...options, removeWatermark: e.target.checked})}
                        />
                        <span className="slider"></span>
                      </label>
                    </label>
                  </div>
                </div>
              </div>

              <motion.button
                onClick={simulateDownload}
                disabled={isProcessing}
                className="mt-6 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-medium flex items-center transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="ri-play-line mr-2"></i> Process Video
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* In-feed Ad */}
        {showOptions && <AdBanner size="in-feed" className="mb-6" />}

        {/* Progress Section */}
        <AnimatePresence>
          {isProcessing && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-6"
            >
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex justify-between mb-3">
                  <span className="text-sm text-gray-600 font-medium">{statusText}</span>
                  <span className="text-sm text-primary font-semibold">{progress}%</span>
                </div>
                <div className="progress-bar">
                  <motion.div
                    className="progress"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Video Preview Section */}
        <AnimatePresence>
          {showPreview && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Video Preview & Download</h3>
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/2">
                  <div className="bg-gray-900 rounded-xl overflow-hidden aspect-[9/16] flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                    <img
                      src={videoInfo.thumbnail}
                      alt="Video thumbnail"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <motion.button
                        className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-primary hover:bg-white transition-all duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <i className="ri-play-fill ri-2x ml-1"></i>
                      </motion.button>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-sm text-gray-500 mb-1">Video Title</p>
                        <p className="font-medium text-gray-800">{videoInfo.title}</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-sm text-gray-500 mb-1">Author</p>
                        <p className="font-medium text-gray-800">{videoInfo.author}</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-sm text-gray-500 mb-1">Duration</p>
                        <p className="font-medium text-gray-800">{videoInfo.duration}</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-sm text-gray-500 mb-1">File Size</p>
                        <p className="font-medium text-gray-800">{videoInfo.size}</p>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-sm text-gray-500 mb-2">Download Settings</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          {options.format.toUpperCase()}
                        </span>
                        {options.hdQuality && options.format === 'mp4' && (
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                            HD Quality
                          </span>
                        )}
                        {options.removeWatermark && (
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                            No Watermark
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <motion.button
                      onClick={handleFinalDownload}
                      className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <i className="ri-download-cloud-line mr-3 ri-lg"></i>
                      Download Now ({options.format.toUpperCase()})
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
