
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-7xl">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-['Pacifico'] text-primary text-2xl mr-2">TikDown</h1>
          <span className="text-gray-700 font-semibold hidden md:inline">TikTok Video Downloader</span>
        </motion.div>
        
        <nav className="hidden md:flex">
          <motion.a 
            href="#" 
            className="text-gray-700 hover:text-primary mx-4 font-medium transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Home
          </motion.a>
          <motion.a 
            href="#how-it-works" 
            className="text-gray-700 hover:text-primary mx-4 font-medium transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            How to Use
          </motion.a>
          <motion.a 
            href="#faq" 
            className="text-gray-700 hover:text-primary mx-4 font-medium transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            FAQ
          </motion.a>
          <motion.a 
            href="#contact" 
            className="text-gray-700 hover:text-primary mx-4 font-medium transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.a>
        </nav>
        
        <button 
          className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:text-primary transition-colors duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line ri-lg`}></i>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white border-t border-gray-200"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            <a href="#" className="text-gray-700 hover:text-primary py-2 font-medium">Home</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-primary py-2 font-medium">How to Use</a>
            <a href="#faq" className="text-gray-700 hover:text-primary py-2 font-medium">FAQ</a>
            <a href="#contact" className="text-gray-700 hover:text-primary py-2 font-medium">Contact</a>
          </nav>
        </motion.div>
      )}
    </header>
  )
}
