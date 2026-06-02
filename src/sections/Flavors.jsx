import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { flavorData } from "../assets/assets.js";

// ===================================================
// 1. PREMIUM LINE-ART ICON HELPER COMPONENT
// ===================================================
const CategoryIcon = ({ label }) => {
  const name = label.toLowerCase();
  
  // === BONSAI ICON (Sculptural Trunk & Tiered Cloud Canopy) ===
  if (name.includes("bonsai")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 18h16l-1.5 3h-13L4 18Z" />
        <path d="M3 18h18" />
        <path d="M12 18c-0.5-2.5-2-3.5-1.5-6.5s2.5-3.5 1.5-6.5" />
        <path d="M11 14.5c-1.5-0.5-2.5-1.5-2-2.5s1.5-1 2.5-0.5" />
        <path d="M10.5 5.5c-1.3 0-2.2-.8-2.2-1.8s1-1.7 2.2-1.7 1.8.3 2.2 1.2c.5-.5 1.3-.5 1.8 0s.3 1.3-.2 1.8c-.3.5-1 .5-1.6.5h-2.2Z" />
        <path d="M6.5 11.5c-1 0-1.8-.6-1.8-1.5s0.8-1.5 1.8-1.5 1.5.3 1.8 1c.4-.4 1-.4 1.4 0s.2 1-.2 1.4c-.3.4-.8.6-1.4.6H6.5Z" />
        <path d="M14.5 9.5c-1 0-1.8-.6-1.8-1.5s0.8-1.5 1.8-1.5 1.5.3 1.8 1c.4-.4 1-.4 1.4 0s.2 1-.2 1.4c-.3.4-.8.6-1.4.6h-1.6Z" />
      </svg>
    );
  }

  // === FLOWERING ICON (Symmetrical Radiant Bloom) ===
  if (name.includes("flower")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1l2.1-2.1M17 7l2.1-2.1" />
      </svg>
    );
  }

  // === HANGING ICON (Macramé Rigging & Spilling Cascading Vines) ===
  if (name.includes("hanging")) {
    return (
     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Top hanging anchor point */}
        <circle cx="12" cy="3" r="1" />
        
        {/* Clean minimalist suspension lines */}
        <path d="M12 4L6.5 14M12 4l5.5 14" />
        
        {/* Simple tapered geometric pot */}
        <path d="M6 14h12l-1.5 5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2L6 14Z" />
        
        {/* A tiny, clean plant sitting inside */}
        <path d="M12 14V9.5" />
        <path d="M12 12c-1.5-1-2 0-1.5 1" />
        <path d="M12 10.5c1.5-1 2 0 1.5 1" />
      </svg>
    );
  }

  // === INDOOR ICON (Architectural Minimalist Greenhouse) ===
  if (name.includes("indoor")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10z" />
        <path d="M9 21V12h6v9" />
      </svg>
    );
  }

  // === OUTDOOR ICON (Clean Geometric Solar Rays) ===
  if (name.includes("outdoor") || name.includes("sun")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    );
  }

  // === SEMI-SHADE ICON (Dappled Light Over Architectural Leaf Silhouette) ===
  if (name.includes("shade") || name.includes("semi")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Left Side Exposed Solar Radial Body */}
        <path d="M12 6a6 6 0 0 0 0 12" />
        {/* Left Side Linear Radiant Rays */}
        <path d="M6 12H2M7.5 7.5L4.4 4.4M12 6V2M7.5 16.5l-3.1 3.1M12 18v4" />
        
        {/* Right Side Shaded Clean Structural Palm Blade */}
        <path d="M12 5c4.8 0 7.5 3.5 7.5 7s-2.7 7-7.5 7V5Z" />
        {/* Horizontal Leaf Ribs matching line system weight */}
        <path d="M12 8.5h4.5M12 12h5.5M12 15.5h4.5" />
      </svg>
    );
  }
  
  // === DEFAULT FALLBACK ICON (LEAF) ===
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
};

// ===================================================
// 2. MAIN BOTANICAL COLLECTION COMPONENT
// ===================================================
const Collection = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState(flavorData?.[0] || null);
  const [popup, setPopup] = useState({ visible: false, productName: "" });

  const handleAddClick = (product) => {
    addToCart(product);
    setPopup({ visible: true, productName: product.name });
    setTimeout(() => {
      setPopup({ visible: false, productName: "" });
    }, 2000);
  };

  if (!activeCategory) {
    return <div className="min-h-screen bg-[#e4e1db]"></div>;
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }} 
      className="min-h-screen bg-gradient-to-br from-[#d2ce11/0] via-[#e4e1db] to-[#c6c2ba] pt-32 pb-24 px-6 md:px-16 lg:px-24 relative overflow-hidden text-[#1c2317]"
    >
      {/* Decorative Vector Plant Silhouette Background */}
      <div className="absolute top-10 right-[-5%] w-72 h-72 opacity-5 pointer-events-none select-none">
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-[#2c3a25]">
          <path d="M50,0 C60,20 90,40 90,60 C90,80 70,100 50,100 C30,100 10,80 10,60 C10,40 40,20 50,0 Z" />
        </svg>
      </div>

      {/* --- NOTIFICATION POPUP --- */}
      <AnimatePresence>
        {popup.visible && (
          <motion.div
            initial={{ y: -50, opacity: 0, x: "-50%" }}
            animate={{ y: 20, opacity: 1, x: "-50%" }}
            exit={{ y: -50, opacity: 0, x: "-50%" }}
            className="fixed top-24 left-1/2 z-[100] bg-[#2c3a25] text-[#e4e1db] px-8 py-3.5 rounded-full shadow-2xl border border-white/10 shadow-[#2c3a25]/20"
          >
            <p className="text-[9px] uppercase tracking-[0.3em] font-bold whitespace-nowrap">
              {popup.productName} Added to Habitats
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* === PAGE HEADER === */}
        <div className="mb-12 text-center space-y-2">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#55694a] font-bold">
            The Studio
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight text-[#2c3a25]">
            Botanical Collection.
          </h1>
        </div>

        {/* === ICON-BASED CATEGORY NAVIGATION === */}
        <div className="flex justify-start md:justify-center gap-8 md:gap-16 mb-16 border-b border-[#2c3a25]/10 pb-6 overflow-x-auto no-scrollbar w-full px-2">
          {flavorData?.map((category) => {
            const isActive = activeCategory.id === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category)}
                className={`flex flex-col items-center gap-3 transition-all duration-300 relative pb-4 whitespace-nowrap group ${
                  isActive ? "text-[#45573a]" : "text-[#2c3a25]/40 hover:text-[#2c3a25]/80"
                }`}
              >
                {/* Icon Container Layout */}
                <div className={`w-8 h-8 md:w-9 md:h-9 transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-105"}`}>
                  <CategoryIcon label={category.label} />
                </div>
                
                {/* Label Metadata */}
                <span className={`text-[9px] md:text-[10px] uppercase tracking-[0.25em] ${isActive ? "font-bold" : "font-semibold"}`}>
                  {category.label}
                </span>

                {/* Animated Minimal Underline Indicator */}
                {isActive && (
                  <motion.div 
                    layoutId="underline" 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[#45573a]" 
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* === 2-COLUMN PRODUCT ARCHITECTURE === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-12">
          <AnimatePresence mode="wait">
            {activeCategory?.products?.map((product) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.215, 0.610, 0.355, 1.000] }}
                className="flex items-center gap-6 border-b border-[#2c3a25]/10 pb-8 group"
              >
                {/* Image System with Glassmorphism Border */}
                <div className="w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-2xl backdrop-blur-xl bg-white/20 flex-shrink-0 shadow-sm border border-white/40">
                  <img 
                    src={product.img} 
                    className="w-full h-full object-cover grayscale-[15%] transition-all duration-700 
                              group-hover:grayscale-0 group-hover:scale-105" 
                    alt={product.name}
                    loading="lazy"
                  />
                </div>

                {/* Typography details and CTA action parameters */}
                <div className="flex-grow space-y-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif font-light text-[#2c3a25] tracking-tight group-hover:text-[#55694a] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[#2c3a25]/60 text-[11px] font-light tracking-widest uppercase mt-1">
                      Greenhouse Raised — ₹{product.price}.00
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => handleAddClick(product)}
                    className="text-[9px] uppercase tracking-[0.3em] font-bold bg-white/30 border border-[#2c3a25]/20 text-[#2c3a25] px-6 py-2.5 mt-2 rounded-full hover:bg-[#2c3a25] hover:text-[#e4e1db] hover:border-[#2c3a25] transition-all duration-300 shadow-sm active:scale-[0.98]"
                  >
                    Acquire
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
      </div>
    </motion.div>
  );
};

export default Collection;