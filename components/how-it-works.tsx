
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const steps = [
  {
    icon: 'ri-link-m',
    title: '1. Copy Video Link',
    description: 'Copy the link of the TikTok video you want to download from the TikTok app or website'
  },
  {
    icon: 'ri-paste-line',
    title: '2. Paste URL',
    description: 'Paste the URL in the input field above and select your preferred download options'
  },
  {
    icon: 'ri-download-cloud-line',
    title: '3. Download Video',
    description: 'Click the download button and save your high-quality video without watermark'
  }
]

export default function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="how-it-works" className="bg-white rounded-xl shadow-lg p-6 mb-8 hover-lift">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-primary/10 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-primary/20 group-hover:to-blue-200 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <i className={`${step.icon} text-primary ri-2x`}></i>
              </motion.div>
              <h3 className="font-semibold mb-3 text-lg text-gray-800 group-hover:text-primary transition-colors duration-200">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Additional Tips */}
        <motion.div
          className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="font-semibold mb-4 text-gray-800 flex items-center">
            <i className="ri-lightbulb-line mr-2 text-primary"></i>
            Pro Tips
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="flex items-start gap-2">
              <i className="ri-check-line text-primary mt-0.5"></i>
              <span>Works with all TikTok video types including trending videos</span>
            </div>
            <div className="flex items-start gap-2">
              <i className="ri-check-line text-primary mt-0.5"></i>
              <span>No registration or account required - completely free</span>
            </div>
            <div className="flex items-start gap-2">
              <i className="ri-check-line text-primary mt-0.5"></i>
              <span>Download videos in original quality up to 1080p HD</span>
            </div>
            <div className="flex items-start gap-2">
              <i className="ri-check-line text-primary mt-0.5"></i>
              <span>Safe and secure - no malware or unwanted software</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
