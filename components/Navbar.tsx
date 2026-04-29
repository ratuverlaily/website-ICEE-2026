"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    // { name: "Speakers", href: "#speakers" },
    { name: "Schedule", href: "#schedule" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  // SVG Icons murni agar tidak merah
  const Icons = {
    menu: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
      </svg>
    ),
    close: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    )
  };

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      setActiveSection(id);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-[60] px-4 sm:px-6 lg:px-8 pt-6"
    >
      <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
        <div className="flex justify-between items-center h-20 px-6">
          
          {/* Logo Section */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            onClick={() => scrollToSection("#home")}
            className="flex items-center gap-3 md:gap-4 cursor-pointer"
          >
            <div className="relative w-10 h-10 md:w-11 md:h-11">
              <Image 
                src="/logoblue.png" 
                alt="Untirta" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block border-l border-slate-200 pl-3">
              <h1 className="text-lg md:text-xl font-black text-blue-900 leading-none tracking-tighter">ICEE 2026</h1>
              <p className="text-[9px] text-blue-600 font-bold uppercase tracking-tighter mt-1">Sultan Ageng Tirtayasa University</p>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`text-sm font-bold transition-all relative group cursor-pointer ${
                  activeSection === item.href.replace("#", "") ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                  activeSection === item.href.replace("#", "") ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-blue-600 text-white font-black text-sm rounded-xl shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all"
            >
              Register
            </motion.button>
          </div>

          {/* Hamburger Mobile - Pakai SVG */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-700 p-2 focus:outline-none"
          >
            {isOpen ? Icons.close : Icons.menu}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-50 overflow-hidden"
            >
              <div className="px-6 py-8 space-y-5">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left text-lg font-bold transition-colors ${
                      activeSection === item.href.replace("#", "") ? "text-blue-600" : "text-slate-700"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <button className="w-full px-6 py-4 bg-blue-600 text-white font-bold rounded-2xl">
                  Register Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}