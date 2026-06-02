import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1c2317] border-t border-[#e4e1db]/5 pt-12 pb-8 px-6 md:px-16 overflow-hidden">
      
      {/* 1. SCROLLING TICKER (Architectural Botanical Theme) */}
      <div className="flex whitespace-nowrap mb-16 opacity-10 pointer-events-none select-none">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex gap-20 text-[5rem] md:text-[7rem] font-serif font-light tracking-tight text-[#e4e1db] uppercase leading-none"
        >
          <span>Living Architecture</span>
          <span className="text-[#55694a]">•</span>
          <span>Peat-Free Mix</span>
          <span className="text-[#55694a]">•</span>
          <span>Architectural Specimens</span>
          <span className="text-[#55694a]">•</span>
          <span>Studio Est. {currentYear}</span>
          <span className="text-[#55694a]">•</span>
          <span>Sainjal Botanical</span>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end max-w-7xl mx-auto">
        
        {/* 2. BRANDING & NEWSLETTER */}
        <div className="md:col-span-5 space-y-6">
          <h3 className="text-[#e4e1db] text-[10px] font-bold uppercase tracking-[0.4em] opacity-80">The Ledger</h3>
          <div className="relative group max-w-sm">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-transparent border-b border-[#e4e1db]/20 py-4 text-[#e4e1db] font-light focus:outline-none focus:border-[#55694a] transition-colors placeholder:text-[#e4e1db]/30 uppercase text-[10px] tracking-[0.2em]"
            />
            <button className="absolute right-0 bottom-4 text-[#e4e1db]/40 hover:text-[#55694a] transition-colors text-[10px] font-bold uppercase tracking-[0.3em]">
              Subscribe
            </button>
          </div>
        </div>

        {/* 3. NAVIGATION (MINIMAL) */}
        <div className="md:col-span-4 grid grid-cols-2 gap-4">
          <div className="space-y-3">
            <FooterLink label="Collection" />
            <FooterLink label="Our Intent" />
            <FooterLink label="Habitat Care" />
          </div>
          <div className="space-y-3">
            <FooterLink label="Instagram" />
            <FooterLink label="Journal" />
            <FooterLink label="Contact" />
          </div>
        </div>

        {/* 4. COPYRIGHT & LOGO */}
        <div className="md:col-span-3 text-left md:text-right">
          <div className="inline-block border border-[#e4e1db]/10 bg-[#e4e1db]/5 rounded-full px-5 py-2.5 mb-5">
            <span className="text-[9px] font-bold text-[#55694a] tracking-[0.3em] uppercase">
              GreenTail / {currentYear}
            </span>
          </div>
          <p className="text-[9px] text-[#e4e1db]/40 uppercase tracking-[0.2em] leading-relaxed font-light">
            All rights reserved. Designed for the <br className="hidden md:block" /> modern collector.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Helper Component for hover effect
const FooterLink = ({ label }) => (
  <a 
    href="#" 
    className="block text-[#e4e1db]/50 text-[10px] font-semibold uppercase tracking-[0.2em] hover:text-[#e4e1db] hover:translate-x-1 transition-all duration-300"
  >
    {label}
  </a>
);

export default Footer;