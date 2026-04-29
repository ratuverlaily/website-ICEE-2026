"use client";

import { motion } from "framer-motion";
import { Upload, Search, CheckCircle, FileEdit, Globe, ArrowRight } from "lucide-react";

export function Schedule() {
  const steps = [
    {
      step: "Step 1",
      title: "Call For Paper",
      date: "Deadline: 10/04/2026",
      icon: <Upload size={24} />,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      step: "Step 2",
      title: "Submission Deadline",
      date: "28/07/2026",
      icon: <Search size={24} />,
      gradient: "from-blue-600 to-blue-700",
    },
    {
      step: "Step 3",
      title: "Acceptance Notification",
      date: "25/09/2026",
      icon: <CheckCircle size={24} />,
      gradient: "from-blue-700 to-blue-800",
    },
    {
      step: "Step 4",
      title: "Camera Ready",
      date: "30/10/2026",
      icon: <FileEdit size={24} />,
      gradient: "from-blue-800 to-blue-900",
    },
    {
      step: "Step 5",
      title: "Conference Date",
      date: "24/11 - 25/11/2026",
      icon: <Globe size={24} />,
      gradient: "from-blue-900 to-slate-900",
    },
  ];

  return (
    <section id="schedule" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 font-bold text-xs rounded-full uppercase tracking-widest mb-4">
            Publication Timeline
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tighter">
            Manuscript Roadmap
          </h2>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-blue-200 z-0" />

          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative z-10 flex flex-col items-center group"
            >
              {/* Icon Circle */}
              <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} text-white rounded-full flex items-center justify-center mb-6 shadow-xl shadow-blue-200 group-hover:scale-110 transition-transform duration-300 border-4 border-white`}>
                {item.icon}
              </div>

              {/* Card Content */}
              <div className="bg-white p-6 rounded-3xl w-full border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center">
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-2">
                  {item.step}
                </span>
                <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 font-medium">
                  {item.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-300 transition-all">
                Check Submission Guidelines
            </button>
        </div>
      </div>
    </section>
  );
}