import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactPage = () => {
  // --- WEB3FORMS CONFIGURATION ---
  // Replace this placeholder string with your real generated key from web3forms.com
  const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY_HERE";

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare the payload structured for Web3Forms API
    const submissionData = {
      access_key: WEB3FORMS_ACCESS_KEY,
      name: formData.name,
      email: formData.email,
      phone: formData.contactNumber,
      message: formData.message,
      subject: `New GreenTail Inquiry from ${formData.name}`
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(submissionData)
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        // Reset the input fields on successful post
        setFormData({ name: "", email: "", contactNumber: "", message: "" });
      } else {
        console.error("Web3Forms Submission Error:", result);
        alert("Transmission failed. Please check your Access Key setup.");
      }
    } catch (error) {
      console.error("Network Error during submission:", error);
      alert("A connectivity error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
      
      // Hide success notification layout popup window after 4 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    }
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.8, ease: [0.215, 0.610, 0.355, 1.000] }
    })
  };

  const currentYear = new Date().getFullYear();

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }} 
      className="min-h-screen bg-gradient-to-br from-[#d2ce11/0] via-[#e4e1db] to-[#c6c2ba] pt-32 text-[#1c2317] relative overflow-hidden flex flex-col justify-between"
    >
      {/* Decorative Vector Plant Silhouette */}
      <div className="absolute top-10 right-[-5%] w-72 h-72 opacity-5 pointer-events-none select-none">
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-[#2c3a25]">
          <path d="M50,0 C60,20 90,40 90,60 C90,80 70,100 50,100 C30,100 10,80 10,60 C10,40 40,20 50,0 Z" />
        </svg>
      </div>

      {/* --- SUCCESS NOTIFICATION POPUP --- */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ y: -50, opacity: 0, x: "-50%" }}
            animate={{ y: 20, opacity: 1, x: "-50%" }}
            exit={{ y: -50, opacity: 0, x: "-50%" }}
            className="fixed top-24 left-1/2 z-[100] bg-[#2c3a25] text-[#e4e1db] px-8 py-3.5 rounded-full shadow-2xl border border-white/10 shadow-[#2c3a25]/20"
          >
            <p className="text-[9px] uppercase tracking-[0.3em] font-bold whitespace-nowrap">
              Transmission Received Successfully
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === MAIN CONTENT CONTAINER === */}
      <div className="max-w-6xl mx-auto w-full px-6 md:px-16 lg:px-24 relative z-10 space-y-12 flex-grow mb-24">
        
        {/* === PAGE HEADER === */}
        <header className="border-b border-[#2c3a25]/10 pb-6">
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#55694a] font-bold">
              Connect
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight text-[#2c3a25]">
              Get In Touch.
            </h1>
          </div>
        </header>

        {/* === TWO-COLUMN GRID SYSTEM === */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT PANEL: CONTACT DIRECTORY & GOOGLE MAPS */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={1}
              className="space-y-6"
            >
              <div>
                <h2 className="text-[9px] uppercase tracking-[.3em] font-bold text-[#55694a] mb-1">Telephone</h2>
                <a href="tel:+919011168565" className="text-xl font-light hover:text-[#55694a] transition-colors">+91 90111 68565</a>
              </div>

              <div>
                <h2 className="text-[9px] uppercase tracking-[.3em] font-bold text-[#55694a] mb-1">Digital Correspondence</h2>
                <a href="mailto:mayurjadhav634@gmail.com" className="text-xl font-light hover:text-[#55694a] transition-colors lowercase ">mayurjadhav634@gmail.com</a>
              </div>

              <div>
                <h2 className="text-[9px] uppercase tracking-[.3em] font-bold text-[#55694a] mb-1">Digital Domain</h2>
                <a href="https://www.greentail.studio" target="_blank" rel="noreferrer" className="text-xl font-light hover:text-[#55694a] transition-colors">www.greentail.studio</a>
              </div>
            </motion.div>

            {/* Architectural Google Maps Placement Frame */}
            <motion.div 
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={2}
              className="backdrop-blur-xl bg-white/10 border border-white/30 p-2 rounded-3xl overflow-hidden shadow-lg shadow-[#2c3a25]/5 group"
            >
              <div className="relative h-[220px] w-full rounded-2xl overflow-hidden">
                <img 
                  src="./map.png" 
                  alt="Glasshouse Location Preview" 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#2c3a25]/20 mix-blend-multiply"></div>
                
                {/* Clean overlay button acting as the actual redirect link */}
                <a 
                  href="https://maps.app.goo.gl/w32XRn9oihpbfher5" 
                  target="_blank" 
                  rel="noreferrer"
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 hover:bg-black/40 transition-colors duration-300 text-center p-4"
                >
                  <span className="text-[#e4e1db] text-[9px] uppercase font-bold tracking-[0.3em] bg-[#2c3a25] px-4 py-2.5 rounded-full border border-white/10 shadow-md">
                    Open Glasshouse Location ↗
                  </span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT PANEL: ECO GLASSMORPHIC FEEDBACK FORM */}
          <div className="lg:col-span-7">
            <motion.div 
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={3}
              className="backdrop-blur-xl bg-white/10 border border-white/30 rounded-3xl p-6 md:p-10 shadow-xl shadow-[#2c3a25]/5"
            >
              <div className="mb-8">
                <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#45573a] opacity-80 mb-1">Transmission</h2>
                <p className="text-sm font-light text-[#2c3a25]/70">Leave a message regarding custom botanical curations or scale landscaping installations.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[9px] uppercase font-bold tracking-[0.2em] text-[#2c3a25]/70 block pl-1">Collector Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name" 
                      className="w-full bg-white/20 border border-[#2c3a25]/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#55694a] focus:bg-white/40 transition-all text-[#2c3a25] placeholder:text-[#2c3a25]/30 font-light" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] uppercase font-bold tracking-[0.2em] text-[#2c3a25]/70 block pl-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="collector@greentail.studio" 
                      className="w-full bg-white/20 border border-[#2c3a25]/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#55694a] focus:bg-white/40 transition-all text-[#2c3a25] placeholder:text-[#2c3a25]/30 font-light" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] uppercase font-bold tracking-[0.2em] text-[#2c3a25]/70 block pl-1">Contact Number</label>
                  <input 
                    type="tel" 
                    name="contactNumber"
                    required
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    placeholder="+91 XXXXX XXXXX" 
                    className="w-full bg-white/20 border border-[#2c3a25]/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#55694a] focus:bg-white/40 transition-all text-[#2c3a25] placeholder:text-[#2c3a25]/30 font-light" 
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] uppercase font-bold tracking-[0.2em] text-[#2c3a25]/70 block pl-1">Message Detail</label>
                  <textarea 
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your architecture requirements or cultivation inquiry..." 
                    className="w-full bg-white/20 border border-[#2c3a25]/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#55694a] focus:bg-white/40 transition-all text-[#2c3a25] placeholder:text-[#2c3a25]/30 font-light resize-none" 
                  />
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#2c3a25] text-[#e4e1db] py-4 rounded-xl text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#1c2317] transition-all shadow-md active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Transmitting Ledger..." : "Submit Ledger Inquiries"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

        </div>
      </div>

      {/* ================= BRAND RUNNING FOOTER ================= */}
      <footer className="w-full bg-[#1c2317] border-t border-[#e4e1db]/5 pt-12 pb-8 px-6 md:px-16 overflow-hidden">
        {/* Scrolling Ticker Line */}
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
          {/* Newsletter / branding log entry */}
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

          {/* Nav system */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <a href="#" className="block text-[#e4e1db]/50 text-[10px] font-semibold uppercase tracking-[0.2em] hover:text-[#e4e1db] hover:translate-x-1 transition-all duration-300">Collection</a>
              <a href="#" className="block text-[#e4e1db]/50 text-[10px] font-semibold uppercase tracking-[0.2em] hover:text-[#e4e1db] hover:translate-x-1 transition-all duration-300">Our Intent</a>
              <a href="#" className="block text-[#e4e1db]/50 text-[10px] font-semibold uppercase tracking-[0.2em] hover:text-[#e4e1db] hover:translate-x-1 transition-all duration-300">Habitat Care</a>
            </div>
            <div className="space-y-3">
              <a href="#" className="block text-[#e4e1db]/50 text-[10px] font-semibold uppercase tracking-[0.2em] hover:text-[#e4e1db] hover:translate-x-1 transition-all duration-300">Instagram</a>
              <a href="#" className="block text-[#e4e1db]/50 text-[10px] font-semibold uppercase tracking-[0.2em] hover:text-[#e4e1db] hover:translate-x-1 transition-all duration-300">Journal</a>
              <a href="#" className="block text-[#e4e1db]/50 text-[10px] font-semibold uppercase tracking-[0.2em] hover:text-[#e4e1db] hover:translate-x-1 transition-all duration-300">Contact</a>
            </div>
          </div>

          {/* Legal Stamp */}
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
    </motion.div>
  );
};

export default ContactPage;