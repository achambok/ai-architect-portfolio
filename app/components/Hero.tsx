"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-gray-300 tracking-wide">Available for opportunities</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Designing national-scale{" "}
            <span className="text-gradient">AI platforms</span> and cloud-native data systems.
          </h1>

          <p className="text-lg text-gray-400 max-w-xl mb-8 leading-relaxed">
            15+ years building AI/ML platforms, MLOps systems, and edge inference architectures across healthcare, fintech, government, and emerging tech.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              View My Work
              <span className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all" />
            </a>

            <a
              href="/Ashley_Chamboko_CV.pdf"
              className="px-8 py-3 rounded-full glass-card text-white font-medium hover:bg-white/10 transition-all"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="px-8 py-3 rounded-full glass-card text-white font-medium hover:bg-white/10 transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl glass-card neon-glow relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-emerald-500/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center mb-4">
                  <span className="text-4xl">👨‍💻</span>
                </div>
                <p className="text-sm text-gray-400">Profile Photo</p>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-cyan-400/30 to-emerald-400/30 rounded-full blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

