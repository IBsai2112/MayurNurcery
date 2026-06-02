import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d2ce11/0] via-[#e4e1db] to-[#c6c2ba] flex items-center justify-center p-4 md:p-10 relative overflow-hidden text-[#1c2317]">
      
      {/* Decorative Vector Plant Silhouette (Matches About/Account pages) */}
      <div className="absolute top-10 right-[-5%] w-72 h-72 opacity-5 pointer-events-none select-none">
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-[#2c3a25]">
          <path d="M50,0 C60,20 90,40 90,60 C90,80 70,100 50,100 C30,100 10,80 10,60 C10,40 40,20 50,0 Z" />
        </svg>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.215, 0.610, 0.355, 1.000] }}
        className="w-full max-w-5xl h-full min-h-[600px] backdrop-blur-xl bg-white/10 border border-white/30 rounded-[2rem] overflow-hidden shadow-2xl shadow-[#2c3a25]/10 flex flex-col lg:flex-row-reverse relative z-10"
      >
        {/* RIGHT SIDE: THE EDITORIAL IMAGE */}
        <div className="hidden lg:block lg:w-1/2 h-full relative">
          <img 
            // Replaced iceHero with an architectural botanical image to match the theme
            src="https://images.unsplash.com/photo-1612363148946-07973d4df554?q=80&w=1000&auto=format&fit=crop" 
            alt="Botanical Entrance" 
            className="w-full h-full object-cover grayscale-[10%]" 
          />
          <div className="absolute inset-0 bg-[#2c3a25]/10 mix-blend-multiply"></div>
        </div>

        {/* LEFT SIDE: THE FORM */}
        <div className="flex-1 h-full p-10 md:p-16 flex flex-col justify-center">
          <div className="mb-12 space-y-2">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#55694a]">
              Authentication
            </h2>
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-[#2c3a25]">
              Access Profile.
            </h1>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#2c3a25]/70 block pl-1">
                Email Address
              </label>
              <input 
                type="email" 
                placeholder="collector@greentail.studio" 
                className="w-full bg-white/20 border border-[#2c3a25]/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-[#55694a] focus:bg-white/40 transition-all text-[#2c3a25] placeholder:text-[#2c3a25]/30 font-light" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#2c3a25]/70 block pl-1">
                Password
              </label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full bg-white/20 border border-[#2c3a25]/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-[#55694a] focus:bg-white/40 transition-all text-[#2c3a25] placeholder:text-[#2c3a25]/30 font-light" 
              />
            </div>

            <div className="pt-4">
              <button className="w-full bg-[#2c3a25] text-[#e4e1db] py-4 rounded-xl text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#1c2317] transition-all shadow-md active:scale-[0.98]">
                Sign In
              </button>
            </div>
          </form>

          <p className="mt-10 text-[10px] text-[#2c3a25]/60 font-light uppercase tracking-[0.2em] text-center lg:text-left">
            New to GreenTail? <Link to="/signup" className="text-[#55694a] font-bold border-b border-[#55694a]/30 pb-0.5 hover:border-[#55694a] transition-colors ml-1">Become a Collector</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignIn;