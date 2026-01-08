import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

export const Advantages = () => {
  return (
    <section id="advantages" className="py-20 bg-surface relative overflow-hidden">
       {/* Decor lines */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
       
       {/* Circuit Board Background Effect */}
       <div className="absolute inset-0 opacity-5 pointer-events-none">
         <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
           <defs>
             <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
               <path d="M10 10 h80 v80 h-80 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
               <circle cx="10" cy="10" r="2" fill="currentColor"/>
               <circle cx="90" cy="90" r="2" fill="currentColor"/>
               <path d="M10 10 L30 30 M90 90 L70 70" stroke="currentColor" strokeWidth="0.5"/>
             </pattern>
           </defs>
           <rect width="100%" height="100%" fill="url(#circuit-pattern)" className="text-primary"/>
         </svg>
       </div>

      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center glitch-text"
          data-text="PERSONAL ADVANTAGES"
        >
          PERSONAL ADVANTAGES
          <span className="block text-2xl md:text-3xl mt-2 text-primary/80 font-sans font-normal tracking-normal">个人优势</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.advantages.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 bg-background/50 border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                  <div className="p-4 bg-surface rounded-lg border border-white/5 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all">
                    <Icon size={32} className="text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                      {adv.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
                      {adv.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
