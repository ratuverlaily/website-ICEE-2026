"use client";

import { motion } from "framer-motion";

export function Speakers() {
  const speakers = [
    {
      name: "Dr. Sarah Johnson",
      title: "Professor of Power Systems",
      affiliation: "MIT, United States",
      image: "https://images.unsplash.com/photo-1581094271453-1298de1aa392?w=400&h=400&fit=crop",
      topic: "Smart Grid Technologies & AI Integration",
    },
    {
      name: "Prof. Hiroshi Tanaka",
      title: "Director of Renewable Energy Lab",
      affiliation: "University of Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1559223694-98ed5e272fef?w=400&h=400&fit=crop",
      topic: "Next-Gen Solar Panel Efficiency",
    },
    {
      name: "Dr. Maria Garcia",
      title: "Chief Research Scientist",
      affiliation: "Siemens Energy, Germany",
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=400&h=400&fit=crop",
      topic: "Industrial Automation & IoT",
    },
  ];

  const duplicatedSpeakers = [...speakers, ...speakers];

  return (
    <section id="speakers" className="py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-blue-600 font-bold text-sm tracking-widest uppercase">Featured Speakers</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6">World-Class Experts</h2>
        </motion.div>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" } }}
        >
          {duplicatedSpeakers.map((speaker, index) => (
            <div key={index} className="flex-shrink-0 w-80 group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-50 h-full">
                <div className="relative overflow-hidden h-80">
                  <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* ICON SOSMED MENGGUNAKAN SVG MURNI (ANTI ERROR) */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-3">
                      {/* Logo LinkedIn */}
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors shadow-lg">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </button>
                      {/* Logo Twitter/X */}
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-black hover:text-white transition-colors shadow-lg">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-1">{speaker.name}</h3>
                  <p className="text-sm text-blue-600 font-bold mb-1 uppercase leading-tight">{speaker.title}</p>
                  <p className="text-xs text-gray-500 font-medium mb-4">{speaker.affiliation}</p>
                  <div className="pt-4 border-t border-blue-50">
                    <p className="text-sm text-gray-700 mt-1 font-semibold italic">"{speaker.topic}"</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}