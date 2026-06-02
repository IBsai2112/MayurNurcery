import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.8, ease: [0.215, 0.610, 0.355, 1.000] }
    })
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-br from-[#d2ce111/0] via-[#e4e1db] to-[#c6c2ba] pt-28 pb-24 px-6 md:px-16 lg:px-24 text-[#1c2317] relative overflow-hidden"
    >
      {/* Decorative Vector Plant Silhouettes */}
      <div className="absolute top-10 right-[-5%] w-72 h-72 opacity-5 pointer-events-none select-none">
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-[#2c3a25]">
          <path d="M50,0 C60,20 90,40 90,60 C90,80 70,100 50,100 C30,100 10,80 10,60 C10,40 40,20 50,0 Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        
        {/* ================= OPTIMIZED HERO SECTION ================= */}
        <header className="border-b border-[#2c3a25]/10 pb-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            
            {/* Left aligned: Title and core categories tightly stacked */}
            <div className="space-y-3">
              <motion.h1 
                variants={fadeUpVariant}
                initial="hidden"
                animate="visible"
                custom={0}
                className="text-5xl md:text-7xl font-light tracking-tight font-serif text-[#2c3a25] select-none"
              >
                GreenTail<span className="text-[#55694a] font-normal">.</span>
              </motion.h1>
              
              <motion.div 
                variants={fadeUpVariant}
                initial="hidden"
                animate="visible"
                custom={1}
                className="flex flex-wrap items-center gap-3 text-[9px] uppercase tracking-[0.4em] text-[#2c3a25]/60 font-semibold"
              >
                <span>Potted</span>
                <span className="text-[#2c3a25]/30 text-[8px]">•</span>
                <span>Pure</span>
                <span className="text-[#2c3a25]/30 text-[8px]">•</span>
                <span>Perennial</span>
              </motion.div>
            </div>

            {/* Right aligned description - balances the empty screen space */}
            <motion.p 
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-[10px] uppercase tracking-[0.2em] text-[#2c3a25]/50 max-w-xs md:text-right font-light leading-relaxed pb-1"
            >
              A premium architectural glasshouse tailored for modern collectors.
            </motion.p>
            
          </div>
        </header>

        {/* ================= CONTENT CONTENT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT INTERACTIVE PANEL */}
          <div className="lg:col-span-7 space-y-8">
            <div className="backdrop-blur-xl bg-white/10 border border-white/30 rounded-3xl p-6 md:p-10 shadow-xl shadow-[#2c3a25]/5 space-y-12">
              
              {/* Mission Statement */}
              <motion.section 
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={0}
                className="grid grid-cols-1 md:grid-cols-12 gap-4"
              >
                <div className="md:col-span-3">
                  <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#45573a] opacity-80 pt-1">Our Vision</h2>
                </div>
                <div className="md:col-span-9 space-y-4">
                  <p className="text-xl md:text-2xl leading-snug font-light tracking-tight text-[#2c3a25] font-serif italic">
                    "Living spaces should breathe. We focus on curating slow-grown, architectural specimens that transform environment dynamics."
                  </p>
                  <p className="text-xs leading-relaxed text-[#2c3a25]/80 font-light">
                    Welcome to a modern canvas where biology meets visual balance. We source every single specimen with absolute structural intent, ensuring each distinct leaf pattern, resilient root, and tall stem establishes a serene anchor inside your architecture.
                  </p>
                </div>
              </motion.section>

              {/* The Creator Section */}
              <motion.section 
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={1}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-8 border-t border-[#2c3a25]/10"
              >
                <div className="md:col-span-3">
                  <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#45573a] opacity-80 pt-1">The Creator</h2>
                </div>
                <div className="md:col-span-9 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-extralight tracking-tight uppercase text-[#2c3a25]">
                      Sainjal
                    </h3>
                    <p className="text-[11px] leading-relaxed text-[#2c3a25]/80 max-w-sm font-light">
                      The seamless union of rigorous frontend web architectural execution and the natural craft of botanical distribution. Hand-coded layout systems engineered to breathe.
                    </p>
                  </div>
                  <div className="text-[8px] uppercase tracking-[0.3em] font-bold text-[#2c3a25]/60 bg-[#2c3a25]/5 px-3 py-1.5 rounded-full border border-[#2c3a25]/10 whitespace-nowrap">
                    Studio Est. 2026
                  </div>
                </div>
              </motion.section>
            </div>
            
            {/* Statistics Banner */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 bg-[#2c3a25] text-[#e4e1db] rounded-2xl p-5 text-center shadow-md divide-x divide-white/10"
            >
              <div>
                <div className="font-serif text-xl md:text-2xl font-light">140+</div>
                <div className="text-[8px] uppercase tracking-widest text-white/50 mt-0.5">Monitored Species</div>
              </div>
              <div>
                <div className="font-serif text-xl md:text-2xl font-light">100%</div>
                <div className="text-[8px] uppercase tracking-widest text-white/50 mt-0.5">Peat-Free Mix</div>
              </div>
              <div>
                <div className="font-serif text-xl md:text-2xl font-light">48hr</div>
                <div className="text-[8px] uppercase tracking-widest text-white/50 mt-0.5">Safe-Ship</div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT EDITORIAL IMAGE GALLERY */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-3xl h-[280px] md:h-[360px] shadow-lg border border-white/10 col-span-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1530968033775-2c92736b131e?q=80&w=600&auto=format&fit=crop" 
                alt="Architectural Houseplant Detail" 
                className="w-full h-full object-cover grayscale-[10%] hover:scale-105 transition-transform duration-500 ease-out"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="overflow-hidden rounded-3xl h-[180px] md:h-[220px] shadow-lg border border-white/10 col-span-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=600&auto=format&fit=crop" 
                alt="Minimalist Clay Potting" 
                className="w-full h-full object-cover grayscale-[15%] hover:scale-105 transition-transform duration-500 ease-out"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="overflow-hidden rounded-3xl h-[180px] md:h-[220px] shadow-lg border border-white/10 col-span-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1512428813833-df70f75a6a0a?q=80&w=1000&auto=format&fit=crop" 
                alt="Botanical Home Living Concept" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
              />
            </motion.div>
          </div>
        </div>

        {/* ================= THREE VALUE PILLARS ================= */}
        <section className="pt-10 border-t border-[#2c3a25]/10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3 p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/20 transition-all duration-300"
          >
            <span className="text-[9px] uppercase font-bold tracking-widest text-[#55694a]">01 / Foundation</span>
            <h4 className="text-lg font-serif font-medium text-[#2c3a25]">Potted Intent</h4>
            <p className="text-[11px] leading-relaxed text-[#2c3a25]/70 font-light">
              Every container, substrate profile, and structural support node is developed systematically in house. We engineer a specialized biome custom fit for every individual species arrival.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="space-y-3 p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/20 transition-all duration-300"
          >
            <span className="text-[9px] uppercase font-bold tracking-widest text-[#55694a]">02 / Clean Growth</span>
            <h4 className="text-lg font-serif font-medium text-[#2c3a25]">Pure Integrity</h4>
            <p className="text-[11px] leading-relaxed text-[#2c3a25]/70 font-light">
              Zero synthetic modifiers or toxic additives. We maintain clean growing cycles utilizing trace macro-nutrients and natural light patterns to strengthen cellular maturity safely.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-3 p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/20 transition-all duration-300"
          >
            <span className="text-[9px] uppercase font-bold tracking-widest text-[#55694a]">03 / Longevity</span>
            <h4 className="text-lg font-serif font-medium text-[#2c3a25]">Perennial Adaptation</h4>
            <p className="text-[11px] leading-relaxed text-[#2c3a25]/70 font-light">
              We select architectural specimens that evolve alongside your interior environments. Resilient foliage layouts engineered for generation-spanning botanical adaptation.
            </p>
          </motion.div>
        </section>

      </div>
    </motion.div>
  );
};

export default AboutPage;