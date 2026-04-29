"use client";

import { motion } from "framer-motion";
import { FileText, Award, Calendar, Clock, MapPin, Coffee, ArrowRight } from "lucide-react";

export function Schedule() {
  const events = [
    {
      date: "06 SEP",
      title: "Abstract Deadline",
      icon: <FileText size={20} />,
      gradient: "from-blue-500 via-blue-600 to-blue-700",
      shadow: "shadow-blue-200",
    },
    {
      date: "10 SEP",
      title: "Acceptance Note",
      icon: <Award size={20} />,
      gradient: "from-blue-600 via-blue-700 to-blue-800",
      shadow: "shadow-blue-300",
    },
    {
      date: "12 SEP",
      title: "Early Bird Reg.",
      icon: <Calendar size={20} />,
      gradient: "from-blue-700 via-blue-800 to-blue-900",
      shadow: "shadow-blue-400",
    },
    {
      date: "15 SEP",
      title: "Day 1: Keynotes",
      icon: <Clock size={20} />,
      gradient: "from-blue-800 via-blue-900 to-slate-900",
      shadow: "shadow-blue-500",
    },
    {
      date: "16 SEP",
      title: "Day 2: Sessions",
      icon: <MapPin size={20} />,
      gradient: "from-blue-700 via-blue-800 to-blue-900",
      shadow: "shadow-blue-400",
    },
    {
      date: "17 SEP",
      title: "Day 3: Closing",
      icon: <Coffee size={20} />,
      gradient: "from-blue-600 via-blue-700 to-blue-800",
      shadow: "shadow-blue-300",
    },
  ];

  return (
    <section id="schedule" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 font-bold text-xs rounded-full uppercase tracking-widest mb-4">
            Conference Milestones
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tighter">
            Roadmap to ICEE 2026
          </h2>
          <p className="text-lg text-slate-600 mt-5 max-w-xl mx-auto leading-relaxed">
            Key dates and essential deadlines for researchers, speakers, and participants.
          </p>
        </motion.div>

        {/* Timeline Horizontal */}
        <div className="relative">
          {/* Garis Penghubung Desktop */}
          <div className="absolute top-[20px] left-0 right-0 h-1 bg-gradient-to-r from-blue-100 via-blue-400 to-blue-100 rounded-full hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-4 relative">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center group"
              >
                {/* Dot Marker Desktop */}
                <div className="w-10 h-10 bg-white border-4 border-blue-100 group-hover:border-blue-600 group-hover:scale-110 rounded-full flex items-center justify-center mb-8 shadow-lg transition-all duration-300 relative z-10 hidden md:flex">
                    <div className="w-3 h-3 bg-blue-600 rounded-full" />
                </div>

                {/* Event Card */}
                <motion.div
                  whileHover={{ y: -10 }}
                  className={`w-full bg-gradient-to-br ${event.gradient} ${event.shadow} p-6 rounded-[2rem] text-white flex flex-col justify-between h-52 transition-all duration-500 relative shadow-xl group cursor-default`}
                >
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                        {event.icon}
                      </div>
                      <div className="text-right flex-1">
                        <span className="text-2xl font-black leading-none drop-shadow-md block">
                          {event.date.split(" ")[0]}
                        </span>
                        <span className="block text-[10px] font-bold uppercase tracking-widest text-blue-100">
                          {event.date.split(" ")[1]}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-base font-bold leading-tight tracking-tight text-white line-clamp-2">
                      {event.title}
                    </h3>
                  </div>

                  <div className="flex justify-end relative z-10 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                     <ArrowRight size={18} className="text-white/40" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section - Biru Gradasi Mewah */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-900/20"
        >
            {/* Glow Effects */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-blue-400/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full translate-x-1/2 translate-y-1/2 blur-[100px]" />

            <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tight drop-shadow-md">
                    Need the full conference agenda?
                </h3>
                <p className="text-blue-100/80 mb-10 max-w-xl mx-auto leading-relaxed text-lg font-medium">
                    A detailed daily schedule featuring parallel sessions, workshops, and networking events will be available for download soon.
                </p>
                <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-4 bg-white text-blue-900 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl"
                  >
                    Download PDF Schedule
                </motion.button>
            </div>
        </motion.div>
      </div>
    </section>
  );
}