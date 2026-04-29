"use client";

import { motion } from "framer-motion"; // Pastikan import dari framer-motion
import { Zap, Globe, Award, BookOpen } from "lucide-react";
import Image from "next/image"; // Gunakan Next Image agar lebih cepat

export function About() {
  const features = [
    {
      icon: <Zap size={28} />,
      title: "Innovation Focus",
      description: "Exploring breakthrough technologies in renewable energy and smart grid systems",
    },
    {
      icon: <Globe size={28} />,
      title: "Global Network",
      description: "Connect with researchers and industry leaders from over 40 countries",
    },
    {
      icon: <Award size={28} />,
      title: "Excellence Awards",
      description: "Recognition for outstanding research papers and innovative projects",
    },
    {
      icon: <BookOpen size={28} />,
      title: "Knowledge Sharing",
      description: "Workshops, keynotes, and technical sessions by world-class experts",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Teks Sebelah Kiri */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-600 font-semibold text-sm tracking-wide uppercase">
              About the Conference
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
              Advancing Sustainable and Intelligent Electrical Systems for a Resilient Future              
            </h2>
      
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              The theme “Advancing Sustainable and Intelligent Electrical Systems for a Resilient Future” highlights the urgent need to innovate electrical systems amid rising global energy demands and climate change. By integrating renewable energy sources with advanced technologies like artificial intelligence (AI), the Internet of Things (IoT), and smart grids, we can create intelligent systems capable of optimizing energy distribution and improving efficiency in real time.
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Furthermore, building resilience is crucial to ensure a reliable energy supply that can quickly recover from natural disasters, load fluctuations, and cyber threats. Through the collaborative efforts of academics, researchers, and industry professionals, we can drive vital innovations—such as advanced energy storage and electric vehicles—to secure a sustainable, smart, and robust energy future.
            </p>
                      
            {/* Box Statistik Kecil */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="text-center p-5 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="text-3xl md:text-4xl font-bold text-blue-600">2+</div>
                <div className="text-xs md:text-sm font-medium text-gray-600 mt-1">Speakers</div>
              </div>
              <div className="text-center p-5 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="text-3xl md:text-4xl font-bold text-blue-600">200+</div>
                <div className="text-xs md:text-sm font-medium text-gray-600 mt-1">Research Papers</div>
              </div>
            </div>
          </motion.div>

          {/* Gambar Sebelah Kanan */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-50">
              {/* Image Next.js */}
              <img
                src="/gb1.png"
                alt="Conference presentation"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
            </div>
            
            {/* Floating Card (Live Streaming) */}
            <motion.div
              whileHover={{ y: -5 }}
              className="absolute -bottom-6 -left-0 md:-left-8 bg-white p-6 rounded-2xl shadow-2xl border border-blue-50 max-w-xs"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-bold text-gray-900">Live Streaming</span>
              </div>
              <p className="text-xs text-gray-600">
                Join virtually from anywhere in the world and engage with experts.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Grid Features (Bawah) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all group"
            >
              <div className="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-200">
                {feature.icon}
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}