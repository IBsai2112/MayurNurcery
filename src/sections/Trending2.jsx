import React from 'react';
import { motion } from 'framer-motion';

const BotanicalOrigins = () => {
  return (
    <section className="min-h-screen lg:h-screen w-full bg-gradient-to-tl from-[#c6c2ba]/80 via-[#e4e1db] to-[#e4e1db] flex items-center justify-center relative overflow-hidden py-20 lg:py-0 text-[#1c2317]">
      
      {/* Decorative Vector Plant Silhouette - Positioned bottom left for balance */}
      <div className="absolute bottom-10 left-[-5%] w-80 h-80 opacity-5 pointer-events-none select-none transform -scale-x-100">
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-[#2c3a25]">
          <path d="M50,0 C60,20 90,40 90,60 C90,80 70,100 50,100 C30,100 10,80 10,60 C10,40 40,20 50,0 Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* TEXT CONTENT (Top on Mobile / Left on Desktop) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.215, 0.610, 0.355, 1.000] }}
          className="space-y-8 lg:space-y-10 order-2 lg:order-1"
        >
          <div>
            <h2 className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] font-bold text-[#55694a] mb-4">
              Our Methodology
            </h2>
            <h3 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-light tracking-tight text-[#2c3a25] leading-[1.1] lg:leading-[1]">
              Botanical<br className="hidden sm:block" /> Origins.
            </h3>
          </div>
          
          <p className="text-sm text-[#2c3a25]/70 leading-relaxed font-light max-w-sm">
            By cultivating in strictly monitored, climate-controlled environments, we achieve structural integrity and root density that mass-grown facilities simply cannot replicate. Every specimen is a testament to slow growth and patience.
          </p>
          
          {/* STATS SECTION */}
          <div className="flex gap-8 sm:gap-12 pt-4 border-t border-[#2c3a25]/10">
            <div className="space-y-1.5">
              <p className="text-2xl sm:text-3xl font-serif text-[#2c3a25]">100%</p>
              <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.3em] font-bold text-[#55694a]">Peat-Free Mix</p>
            </div>
            <div className="space-y-1.5">
              <p className="text-2xl sm:text-3xl font-serif text-[#2c3a25]">Slow</p>
              <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.3em] font-bold text-[#55694a]">Maturation</p>
            </div>
          </div>
        </motion.div>

        {/* IMAGE VISUAL (Bottom on Mobile / Right on Desktop) */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.215, 0.610, 0.355, 1.000] }}
          className="relative order-1 lg:order-2 px-4 sm:px-0"
        >
          {/* Glassmorphism Frame replacing the thick white border */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/40 p-3 sm:p-4 w-full max-w-[350px] sm:max-w-[420px] mx-auto rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl shadow-[#2c3a25]/10 group">
            <div className="aspect-[4/5] w-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden relative">
              <div className="absolute inset-0 bg-[#2c3a25]/10 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=800&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transform transition-all duration-700 group-hover:scale-105" 
                alt="Slow cultivated botanical specimen" 
                loading="lazy"
              />
            </div>
          </div>
          
          {/* SIGNATURE BADGE - Updated to GreenTail Theme */}
          <motion.div 
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-[#2c3a25] text-[#e4e1db] p-6 sm:p-8 rounded-full shadow-xl border border-[#e4e1db]/10 z-20"
          >
            <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.3em] leading-relaxed text-center">
              Studio<br /> <span className="opacity-60 font-light">Pick</span>
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default BotanicalOrigins;