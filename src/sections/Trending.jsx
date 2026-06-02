import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FeaturedCollections = () => {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.8, ease: [0.215, 0.610, 0.355, 1.000] }
    })
  };

  const collections = [
    {
      id: 1,
      title: "Structural Canopies",
      desc: "Tall, architectural specimens designed to anchor a room.",
      image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?q=80&w=800&auto=format&fit=crop",
      link: "/collection/canopies"
    },
    {
      id: 2,
      title: "Suspended Growth",
      desc: "Trailing and climbing varieties that draw the eye upward.",
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop",
      link: "/collection/suspended"
    },
    {
      id: 3,
      title: "Desert Forms",
      desc: "Low-maintenance, sculptural succulents and arid botanicals.",
      image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?q=80&w=800&auto=format&fit=crop",
      link: "/collection/desert"
    }
  ];

  return (
    <section className="relative w-full bg-[#e4e1db] py-24 md:py-32 px-6 md:px-16 lg:px-24 overflow-hidden text-[#1c2317]">
      
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#c6c2ba]/50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* === SECTION HEADER === */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[#2c3a25]/10 pb-8">
          <div className="space-y-3">
            <motion.p 
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={0}
              className="text-[10px] uppercase tracking-[0.4em] text-[#55694a] font-bold"
            >
              Curated Selection
            </motion.p>
            <motion.h2 
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={1}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight text-[#2c3a25]"
            >
              Living Architecture.
            </motion.h2>
          </div>
          
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={2}
          >
            <Link 
              to="/collection" 
              className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-[#2c3a25] border border-[#2c3a25]/20 bg-white/30 px-8 py-3 rounded-full hover:bg-[#2c3a25] hover:text-[#e4e1db] transition-all duration-300"
            >
              View Full Studio
            </Link>
          </motion.div>
        </div>

        {/* === COLLECTION GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((item, index) => (
            <motion.div 
              key={item.id}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={index + 2}
              className="group"
            >
              <Link to={item.link} className="block space-y-5">
                {/* Image Container with Glassmorphism Border */}
                <div className="backdrop-blur-xl bg-white/10 border border-white/40 p-2 rounded-3xl overflow-hidden shadow-lg shadow-[#2c3a25]/5 transition-all duration-500 group-hover:border-white/80 group-hover:bg-white/20">
                  <div className="relative h-[400px] md:h-[450px] w-full rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-[#2c3a25]/10 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      loading="lazy"
                      className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transform transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="px-2">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-serif font-light text-[#2c3a25] group-hover:text-[#55694a] transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-[#55694a] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      →
                    </span>
                  </div>
                  <p className="text-[11px] text-[#2c3a25]/60 font-light leading-relaxed max-w-[90%]">
                    {item.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedCollections;