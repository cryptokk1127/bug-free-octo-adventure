
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const faqs = [
  {
    question: 'Is this TikTok downloader free to use?',
    answer: 'Yes, our TikTok video downloader is completely free to use. You can download as many videos as you want without any cost, registration, or hidden fees.'
  },
  {
    question: 'Can I download TikTok videos without watermark?',
    answer: 'Absolutely! Our tool specializes in removing TikTok watermarks. Simply toggle the "Remove Watermark" option when processing your video to get a clean, watermark-free download.'
  },
  {
    question: 'Is it legal to download TikTok videos?',
    answer: 'Downloading videos for personal use is generally acceptable. However, please respect copyright laws and don\'t use downloaded content for commercial purposes without permission from the original creator.'
  },
  {
    question: 'How do I find the TikTok video URL?',
    answer: 'Open the TikTok app, find the video you want to download, tap on "Share" and then "Copy Link". On TikTok\'s website, you can also right-click the video and copy the URL from your browser\'s address bar.'
  },
  {
    question: 'What video quality can I download?',
    answer: 'Our tool supports downloading videos in their original quality, including HD (1080p) when available. You can choose between standard and HD quality options during the download process.'
  },
  {
    question: 'Can I download TikTok audio only?',
    answer: 'Yes! You can extract just the audio from TikTok videos by selecting the MP3 format option. This is perfect for downloading music or audio content from TikTok videos.'
  },
  {
    question: 'Why is my download taking a long time?',
    answer: 'Download time depends on video length, quality, and your internet connection. HD videos and longer content take more time to process. Our servers work hard to optimize the process for the best quality.'
  },
  {
    question: 'Is my data safe when using this tool?',
    answer: 'Yes, we prioritize your privacy and security. We don\'t store your downloaded videos or personal information. All processing is done securely, and we don\'t track your activity.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="bg-white rounded-xl shadow-lg p-6 mb-8 hover-lift">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-200"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="font-semibold text-gray-800 pr-4">{faq.question}</h3>
                <motion.i
                  className={`ri-${openIndex === index ? 'subtract' : 'add'}-line text-primary ri-lg flex-shrink-0`}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                ></motion.i>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        {/* Contact Section */}
        <motion.div
          className="mt-8 bg-gradient-to-r from-primary/5 to-blue-50 rounded-xl p-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="font-semibold mb-2 text-gray-800">Still have questions?</h3>
          <p className="text-gray-600 mb-4">
            Can't find the answer you're looking for? Feel free to reach out to our support team.
          </p>
          <motion.button
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="ri-mail-line mr-2"></i>
            Contact Support
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
