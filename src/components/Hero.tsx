import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
import { resumeData } from '../data/resume';

export const Hero = () => {
  const { profile } = resumeData;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-20 animate-grid-flow pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image with Tech Border */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-spin-slow"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-surface ring-2 ring-primary/50">
              <img 
                src={profile.image} 
                alt={profile.name} 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Tech Decoration */}
            <div className="absolute -bottom-4 -right-4 bg-surface border border-primary p-2 rounded-lg shadow-[0_0_15px_rgba(0,240,255,0.3)]">
               <span className="text-primary font-mono text-xs font-bold">{profile.experience}</span>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              <span className="text-white">{profile.name}</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-primary font-mono mb-6 flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
              {profile.title}
            </h2>
            
            <p className="text-gray-400 mb-8 max-w-lg text-lg">
              {profile.degree} | 专注于 AI Agent 与数据中台架构的深度融合
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mb-8">
              <div className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors cursor-pointer group bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:border-primary/50">
                <Mail size={18} />
                <span className="group-hover:text-glow">{profile.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors cursor-pointer group bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:border-primary/50">
                <Phone size={18} />
                <span className="group-hover:text-glow">{profile.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <MapPin size={18} />
                <span>{profile.location}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};
