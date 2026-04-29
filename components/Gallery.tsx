"use client";

import { motion } from "framer-motion";

export function Gallery() {
  const pastEvents = [
    {
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      title: "ICEE 2025 Opening Ceremony",
      attendees: "450+ participants",
    },
    {
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop",
      title: "Keynote Presentations",
      attendees: "International speakers",
    },
    {
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop",
      title: "Technical Sessions",
      attendees: "150+ research papers",
    },
    {
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&h=400&fit=crop",
      title: "Networking Events",
      attendees: "40+ countries",
    },
    {
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop",
      title: "Workshop Sessions",
      attendees: "Hands-on learning",
    },
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      title: "Exhibition Hall",
      attendees: "30+ exhibitors",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-bold text-sm tracking-widest uppercase">
            Past Conferences
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6">
            Conference Highlights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at memorable moments from our previous international conferences 
            and join us in creating more success stories.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[2rem] shadow-xl cursor-pointer bg-blue-900"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent" />
              </div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-xl font-black mb-2 leading-tight group-hover:text-blue-300 transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-blue-100 font-medium opacity-80 uppercase tracking-wider">
                  {event.attendees}
                </p>
              </div>

              {/* Zoom Icon on Hover */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section (Bottom) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-8 md:gap-16 bg-white rounded-[2.5rem] p-10 md:px-16 shadow-2xl border border-blue-50 w-full max-w-4xl">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-blue-600 group-hover:scale-110 transition-transform">5+</div>
              <div className="text-xs md:text-sm font-bold text-gray-500 mt-2 uppercase tracking-widest">Years of Excellence</div>
            </div>
            
            <div className="hidden md:block h-16 w-px bg-blue-100" />
            <div className="block md:hidden h-px w-20 bg-blue-100" />

            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-blue-600 group-hover:scale-110 transition-transform">2000+</div>
              <div className="text-xs md:text-sm font-bold text-gray-500 mt-2 uppercase tracking-widest">Total Participants</div>
            </div>

            <div className="hidden md:block h-16 w-px bg-blue-100" />
            <div className="block md:hidden h-px w-20 bg-blue-100" />

            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-blue-600 group-hover:scale-110 transition-transform">60+</div>
              <div className="text-xs md:text-sm font-bold text-gray-500 mt-2 uppercase tracking-widest">Partner Institutions</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}