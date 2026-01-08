import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Award, GraduationCap, Code } from 'lucide-react';

export const SkillsAndEducation = () => {
  return (
    <section id="skills" className="py-20 relative">
      {/* Hexagon Grid Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex-pattern" x="0" y="0" width="50" height="86.6" patternUnits="userSpaceOnUse">
              <path d="M25 0 L50 14.4 L50 43.3 L25 57.7 L0 43.3 L0 14.4 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-pattern)" className="text-secondary"/>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        
        {/* Skills Section */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-white/5 border border-white/10 mb-4">
              <Code className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glitch-text" data-text="TECHNICAL ARSENAL">
              TECHNICAL ARSENAL
              <span className="block text-2xl md:text-3xl mt-2 text-primary/80 font-sans font-normal tracking-normal">技能与教育</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {resumeData.skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all group hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                    <skillGroup.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-['Orbitron']">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 font-['Rajdhani'] font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* General Skills & Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* General Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex flex-col items-start gap-1 font-['Orbitron'] text-primary">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6" />
                ACHIEVEMENTS & CERTIFICATES
              </div>
              <span className="text-lg font-sans text-gray-400 ml-9 font-normal tracking-normal">荣誉奖项与证书</span>
            </h3>
            <div className="space-y-4">
              {resumeData.generalSkills.map((item, index) => (
                <div 
                  key={index}
                  className="bg-surface p-6 rounded-xl border border-white/10 flex items-start gap-4 hover:border-primary/50 transition-colors"
                >
                  <div className="mt-1 p-2 rounded-full bg-white/5">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-1">{item.name}</div>
                    <div className="text-lg text-white font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
             <h3 className="text-2xl font-bold mb-8 flex flex-col items-start gap-1 font-['Orbitron'] text-primary">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6" />
                EDUCATION
              </div>
              <span className="text-lg font-sans text-gray-400 ml-9 font-normal tracking-normal">教育经历</span>
            </h3>
            <div className="space-y-6">
              {resumeData.education.map((edu, index) => (
                <div 
                  key={index} 
                  className="relative pl-8 border-l-2 border-white/10 hover:border-primary transition-colors py-2"
                >
                  <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-black border-2 border-primary" />
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-white">{edu.school}</h4>
                    <span className="px-2 py-1 rounded bg-white/10 text-xs font-mono text-primary">{edu.level}</span>
                  </div>
                  <div className="text-lg text-gray-300 mb-1">{edu.major} <span className="text-sm text-gray-500">({edu.degree})</span></div>
                  <div className="text-sm text-gray-500 font-mono">{edu.period}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
