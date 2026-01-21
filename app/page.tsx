'use client'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
          Your Name
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
          Full-stack developer crafting beautiful, functional web experiences.
        </p>
        <p className="text-lg text-gray-500 max-w-2xl">
          I specialize in building modern web applications with React, Next.js, 
          and TypeScript. Currently available for freelance projects and full-time opportunities.
        </p>
      </motion.div>
    </div>
  )
}