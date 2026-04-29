"use client"; // Wajib karena menggunakan state, effect, dan motion

import { motion } from "framer-motion"; // Pastikan import dari framer-motion
import { Calendar, MapPin, Users } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target tanggal konferensi
    const targetDate = new Date("2026-09-15T09:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1561489411-c0ce86e994bb?w=1920&h=1080&fit=crop"
          alt="Conference background"
          className="w-full h-full object-cover"
        />
        {/* Overlay Biru Untirta */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-800/40 to-blue-950/70 shadow-inner">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
              radial-gradient(circle at 80% 80%, white 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px, 80px 80px'
          }} />
        </div>
      </div>

      {/* Glow Effects */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-[150px]" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Tanggal Badge */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-bold mb-8 text-sm md:text-base tracking-wide"
          >
            September 15-17, 2026 • Banten, Indonesia
          </motion.span>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1] drop-shadow-2xl"
          >
            International Conference on <br />
            <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
              Electrical Engineering
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base md:text-lg lg:text-xl text-blue-50/90 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
          >
            Join leading experts and researchers from around the world to explore cutting-edge innovations 
            in electrical engineering, sustainable energy, and smart technologies.
          </motion.p>

          {/* --- COUNTDOWN TIMER --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12 max-w-3xl mx-auto px-4"
          >
            {Object.entries(timeLeft).map(([unit, value], index) => (
              <motion.div
                key={unit}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-2xl border border-white"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-br from-blue-600 to-blue-900 bg-clip-text text-transparent leading-none">
                  {value.toString().padStart(2, "0")}
                </div>
                <div className="text-[10px] md:text-xs font-bold text-blue-800 uppercase tracking-widest mt-2">{unit}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* --- ACTION BUTTONS --- */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold shadow-xl shadow-blue-900/40 transition-all text-sm md:text-base"
            >
              Submit Your Paper
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/50 hover:bg-white/20 rounded-2xl font-bold transition-all text-sm md:text-base"
            >
              View Program
            </motion.button>
          </motion.div>

          {/* --- INFO CARDS --- */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8"
          >
            <div className="flex items-center gap-3 text-white/90">
              <Calendar className="text-blue-400" size={24} />
              <span className="font-semibold text-sm">3 Days Event</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <MapPin className="text-blue-400" size={24} />
              <span className="font-semibold text-sm">Hybrid Conference</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <Users className="text-blue-400" size={24} />
              <span className="font-semibold text-sm">500+ Participants</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2 backdrop-blur-sm">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}