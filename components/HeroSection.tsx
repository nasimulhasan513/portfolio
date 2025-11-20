"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            y: [0, 30, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="container-padding relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-primary-400 uppercase bg-primary-500/10 rounded-full border border-primary-500/20">
            Available for hire
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">Scalable</span> Digital Systems
          </h1>
          <p className="text-slate-400 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
            I'm Nasimul Hasan Deep, a Software Engineer specializing in Node.js, PostgreSQL, and AWS Cloud. I build high-performance backend systems that power impactful products.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-3 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-lg transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40">
              View Work
            </a>
            <a href="#contact" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-all border border-slate-700">
              Contact Me
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6 text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Open to collaborations</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center relative"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-purple-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800/50 shadow-2xl">
              <Image 
                src="https://media.licdn.com/dms/image/v2/D4D03AQGZgGVu66QKUg/profile-displayphoto-scale_400_400/B4DZmeOnHsJMAk-/0/1759296255883?e=1765411200&v=beta&t=gmbrY48q2ihobBKatVEgsLR9Oh6DpIqjGeN-QOYQGlw" 
                alt="Nasimul Hasan Deep"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Floating Tech Icons (Decorative) */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 p-3 bg-slate-900 rounded-xl border border-slate-800 shadow-xl"
            >
              <span className="text-2xl">🚀</span>
            </motion.div>
            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 p-3 bg-slate-900 rounded-xl border border-slate-800 shadow-xl"
            >
              <span className="text-2xl">⚡</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-slate-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
