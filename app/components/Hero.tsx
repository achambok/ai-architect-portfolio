"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 pt-24">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.35em] uppercase text-neutral-500 mb-4">
            Principal AI & Cloud Architect
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            Designing national-scale{" "}
            <span className="text-neon">AI platforms</span> and cloud-native
            data systems.
          </h1>

          <p className="mt-6 text-neutral-400 max-w-xl">
            15+ years building AI/ML platforms, MLOps systems, and edge
            inference architectures across healthcare, fintech, government,
            and emerging tech.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-2 rounded-full border border-neon text-neon bg-neon/10 hover:bg-neon hover:text-black transition shadow-neon"
            >
              View My Work
            </a>

            <a
              href="/Ashley_Chamboko_CV.pdf"
              className="px-6 py-2 rounded-full border border-white/20 hover:border-neon hover:text-neon transition"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="px-6 py-2 rounded-full border border-white/10 hover:border-neon/60 hover:text-neon transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center"
        >
          <div className="h-72 w-72 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_80px_rgba(195,252,63,0.25)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(195,252,63,0.25),_transparent_60%)]" />
            <div className="absolute inset-0 flex items-center justify-center text-xs text-neutral-400">
              Profile Photo Placeholder
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
