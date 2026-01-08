import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Briefcase, MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const ExperienceItem = ({ job, index }: { job: typeof resumeData.experience[0], index: number }) => {
  const [isExpanded, setIsExpanded] = useState(index === 0); // Default expand first one

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-0"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/10 md:left-[50%] md:-ml-[1px]"></div>
      
      {/* Timeline Dot */}
      <div className="absolute left-[-5px] top-6 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_#00f0ff] md:left-[50%] md:-ml-[6px]"></div>

      <div className={`md:flex items-start justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
        <div className="md:w-[45%] mb-8 md:mb-0">
          <div 
            className="bg-surface/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-all cursor-pointer group-hover:shadow-[0_0_20px_rgba(0,240,255,0.1)]"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{job.role}</h3>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isExpanded ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
              </motion.div>
            </div>
            
            <h4 className="text-lg text-primary font-medium mb-4 font-['Orbitron']">{job.company}</h4>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4 font-['Rajdhani']">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {job.period}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {job.location}
              </div>
            </div>

            <AnimatePresence>
              {isExpanded && (
                <motion.ul 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2 text-gray-300 text-left overflow-hidden"
                >
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="md:w-[45%]"></div>
      </div>
    </motion.div>
  );
};

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Digital Data Stream Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-[10%] w-[1px] h-full bg-gradient-to-b from-transparent via-primary to-transparent opacity-20"></div>
        <div className="absolute top-0 right-[10%] w-[1px] h-full bg-gradient-to-b from-transparent via-primary to-transparent opacity-20"></div>
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="absolute top-0 w-[1px] h-20 bg-primary/50 blur-[1px]"
            style={{
              left: `${10 + Math.random() * 80}%`,
              animation: `dataStream ${2 + Math.random() * 3}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-white/5 border border-white/10 mb-4">
            <Briefcase className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glitch-text" data-text="WORK EXPERIENCE">
            WORK EXPERIENCE
            <span className="block text-2xl md:text-3xl mt-2 text-primary/80 font-sans font-normal tracking-normal">工作经历</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-['Rajdhani'] text-lg">
            Professional journey across data product management and AI engineering
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {resumeData.experience.map((job, index) => (
            <ExperienceItem key={index} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
