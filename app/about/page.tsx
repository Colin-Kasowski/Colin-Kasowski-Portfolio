'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
          About
        </h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 leading-relaxed mb-6">
            Hi, I'm [Your Name], a full-stack developer based in [Your Location]. 
            I'm passionate about creating beautiful, functional web experiences that 
            make a difference.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            With [X] years of experience in web development, I've worked with a 
            variety of technologies including React, Next.js, TypeScript, and more. 
            I love solving complex problems and bringing ideas to life through code.
          </p>
          <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'].map((skill) => (
              <div key={skill} className="px-4 py-2 bg-gray-100 rounded-lg text-center text-gray-700">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}