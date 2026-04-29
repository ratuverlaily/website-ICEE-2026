"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Import Image untuk logo

export function Footer() {
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
    }
  };

  // SVG Icons murni agar tidak error import
  const icons = {
    facebook: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>,
    twitter: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>,
    linkedin: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
    instagram: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>,
    youtube: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.42 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.42-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>,
    map: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
    phone: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
    mail: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
  };

  const socialLinks = [
    { icon: icons.facebook, href: "#" },
    { icon: icons.twitter, href: "#" },
    { icon: icons.linkedin, href: "#" },
    { icon: icons.instagram, href: "#" },
    { icon: icons.youtube, href: "#" },
  ];

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 text-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo & Deskripsi */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-8">
              {/* Logo Untirta Putih */}
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image 
                  src="/logoputih.png" 
                  alt="Untirta Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="border-l border-white/20 pl-3">
                <h3 className="font-extrabold text-xl leading-none tracking-tighter">ICEE 2026</h3>
                <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mt-1">Untirta Banten</p>
              </div>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed text-sm">
              Leading the future of electrical engineering through innovation, collaboration, 
              and sustainable technology solutions for a better world.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all text-blue-200"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-bold text-lg mb-8 text-white border-l-4 border-blue-600 pl-4 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About", "Speakers", "Schedule", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(`#${item.toLowerCase()}`)}
                    className="text-slate-400 hover:text-blue-400 transition-all inline-flex items-center group text-sm font-medium"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-blue-400 mr-0 group-hover:mr-3 transition-all" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* For Authors */}
          <div>
            <h4 className="font-bold text-lg mb-8 text-white border-l-4 border-blue-600 pl-4 uppercase tracking-widest text-xs">For Authors</h4>
            <ul className="space-y-4">
              {["Guidelines", "Templates", "Review Process", "Publication", "Presentation", "Awards"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-blue-400 transition-all inline-flex items-center group text-sm font-medium">
                    <span className="w-0 group-hover:w-4 h-0.5 bg-blue-400 mr-0 group-hover:mr-3 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold text-lg mb-8 text-white border-l-4 border-blue-600 pl-4 uppercase tracking-widest text-xs">Contact Info</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4 group">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">{icons.map}</div>
                <span className="text-slate-400 leading-relaxed">Jl. Jenderal Sudirman KM. 3, Cilegon, Banten 42435, Indonesia</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">{icons.phone}</div>
                <span className="text-slate-400 font-medium">+6285795057091</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">{icons.mail}</div>
                <span className="text-slate-400 font-medium">elektrountirtaicee2026@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] text-center md:text-left">
            © 2026 ICEE • Department of Electrical Engineering, Untirta.
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}