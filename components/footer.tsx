
'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-['Pacifico'] text-primary text-2xl mb-4">TikDown</h3>
            <p className="text-gray-600 text-sm">
              The best free TikTok video downloader tool. Download TikTok videos without watermark in high quality.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">Home</a></li>
              <li><a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors duration-200">How to Use</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-primary transition-colors duration-200">FAQs</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-primary transition-colors duration-200">Contact Us</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">DMCA</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              <motion.a 
                href="#" 
                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-primary transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="ri-facebook-fill ri-lg"></i>
              </motion.a>
              <motion.a 
                href="#" 
                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-primary transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="ri-twitter-x-fill ri-lg"></i>
              </motion.a>
              <motion.a 
                href="#" 
                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-primary transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="ri-instagram-fill ri-lg"></i>
              </motion.a>
              <motion.a 
                href="#" 
                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-primary transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="ri-youtube-fill ri-lg"></i>
              </motion.a>
            </div>
            
            <h4 className="font-semibold mb-4">Secure & Trusted</h4>
            <div className="flex flex-wrap gap-3">
              <div className="w-8 h-8 flex items-center justify-center text-gray-600">
                <i className="ri-shield-check-line ri-lg"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center text-gray-600">
                <i className="ri-lock-line ri-lg"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center text-gray-600">
                <i className="ri-verified-badge-line ri-lg"></i>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-12 pt-6 border-t border-gray-200 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} TikDown - TikTok Video Downloader. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
