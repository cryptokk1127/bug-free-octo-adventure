
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AdBanner from './ad-banner'

const recentDownloads = [
  {
    title: 'Summer beach day with friends #beachday',
    author: '@sarahparker',
    date: 'June 1, 2025',
    thumbnail: 'https://i.pinimg.com/736x/82/bf/aa/82bfaadbadf847b669ad5832749690ea.jpg'
  },
  {
    title: 'My new workout routine! Check it out #fitness',
    author: '@fitnessguru',
    date: 'May 30, 2025',
    thumbnail: 'https://i.ytimg.com/vi/e5nR4ZCICyg/maxresdefault.jpg'
  },
  {
    title: 'Cooking my grandmother\'s secret recipe #foodie',
    author: '@chefmichael',
    date: 'May 28, 2025',
    thumbnail: 'https://i.ytimg.com/vi/JTc2FjgZ1aY/maxresdefault.jpg'
  }
]

const popularDownloads = [
  { title: 'Dance challenge #viral', downloads: '3.2M' },
  { title: 'Funny cat compilation #cats', downloads: '2.8M' },
  { title: 'Life hack you need to know #lifehack', downloads: '2.5M' },
  { title: 'Morning routine 2025 #routine', downloads: '2.1M' },
  { title: 'DIY home decoration #homedecor', downloads: '1.9M' }
]

const quickTips = [
  'Make sure to copy the full TikTok video URL',
  'For best quality, enable HD option when available',
  'Download may take longer for videos with higher resolution',
  'Some videos may be protected and cannot be downloaded',
  'Use MP3 option to extract only the audio from videos'
]

export default function Sidebar() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="space-y-6">
      {/* Large Rectangle Ad */}
      <AdBanner size="336x280" />
      
      {/* Recent Downloads */}
      <motion.section
        className="bg-white rounded-xl shadow-lg p-6 hover-lift"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="font-semibold mb-4 text-gray-800 flex items-center">
          <i className="ri-time-line mr-2 text-primary"></i>
          Recent Downloads
        </h3>
        <div className="space-y-4">
          {recentDownloads.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-20 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm line-clamp-2 text-gray-800 mb-1">
                  {item.title}
                </p>
                <p className="text-gray-500 text-xs mb-1">{item.author}</p>
                <p className="text-gray-400 text-xs">{item.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Popular Downloads */}
      <motion.section
        className="bg-white rounded-xl shadow-lg p-6 hover-lift"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="font-semibold mb-4 text-gray-800 flex items-center">
          <i className="ri-fire-line mr-2 text-primary"></i>
          Popular Downloads
        </h3>
        <div className="space-y-3">
          {popularDownloads.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary/10 to-blue-100 rounded-full flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm line-clamp-1 text-gray-800">
                  {item.title}
                </p>
                <p className="text-gray-500 text-xs">{item.downloads} downloads</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skyscraper Ad - Desktop Only */}
      <div className="hidden lg:block">
        <AdBanner size="160x600" />
      </div>

      {/* Quick Tips */}
      <motion.section
        className="bg-white rounded-xl shadow-lg p-6 hover-lift"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="font-semibold mb-4 text-gray-800 flex items-center">
          <i className="ri-lightbulb-line mr-2 text-primary"></i>
          Quick Tips
        </h3>
        <ul className="space-y-3 text-gray-600 text-sm">
          {quickTips.map((tip, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <i className="ri-check-line text-primary ri-lg mt-0.5 flex-shrink-0"></i>
              <span className="leading-relaxed">{tip}</span>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-xl p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h3 className="font-semibold mb-4 text-gray-800 text-center">Our Impact</h3>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <motion.div
              className="text-2xl font-bold text-primary mb-1"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              50M+
            </motion.div>
            <div className="text-xs text-gray-600">Videos Downloaded</div>
          </div>
          <div>
            <motion.div
              className="text-2xl font-bold text-primary mb-1"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              2M+
            </motion.div>
            <div className="text-xs text-gray-600">Happy Users</div>
          </div>
          <div>
            <motion.div
              className="text-2xl font-bold text-primary mb-1"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              99.9%
            </motion.div>
            <div className="text-xs text-gray-600">Uptime</div>
          </div>
          <div>
            <motion.div
              className="text-2xl font-bold text-primary mb-1"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              24/7
            </motion.div>
            <div className="text-xs text-gray-600">Support</div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
