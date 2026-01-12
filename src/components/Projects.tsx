import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '../data/resume';
import { ProjectVisualizer } from './ProjectVisualizer';
import { Rocket, X, ArrowRight } from 'lucide-react';

const categories = [
  { id: "All", label: "全部" },
  { id: "AI Agent & Data Platform", label: "AI智能体与数据平台" },
  { id: "Data Asset & Knowledge Management", label: "数据资产与知识管理" },
  { id: "BI & Mobile", label: "BI商业智能与移动端" },
  { id: "Automation & Efficiency", label: "自动化与效能工具" }
];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? resumeData.projects 
    : resumeData.projects.filter(p => p.category === activeCategory);

  const selectedProject = selectedProjectId 
    ? resumeData.projects.find(p => p.id === selectedProjectId) 
    : null;

  return (
    <section id="projects" className="py-20 bg-black/50 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-white/5 border border-white/10 mb-4">
            <Rocket className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glitch-text" data-text="FEATURED PROJECTS">
            FEATURED PROJECTS
            <span className="block text-2xl md:text-3xl mt-2 text-primary/80 font-sans font-normal tracking-normal">项目经验</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-['Rajdhani'] text-lg">
            Innovative solutions delivering real business value
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-['Rajdhani'] font-bold tracking-wider transition-all duration-300 border ${
                activeCategory === category.id 
                  ? 'bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(0,240,255,0.3)]' 
                  : 'bg-surface border-white/10 text-gray-400 hover:border-white/30'
              }`}
            >
              {category.id}
              <span className="ml-2 text-xs opacity-70 font-sans font-normal">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-surface border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col h-full"
              >
                {/* Visualizer Header */}
                <div className="h-48 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden border-b border-white/5">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                  <ProjectVisualizer type={project.id} />
                  
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-mono text-primary">
                    {project.period}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold font-['Orbitron'] text-white group-hover:text-primary transition-colors">
                      {project.title.split(' - ')[0]}
                    </h3>
                    <project.icon className={`w-6 h-6 text-gray-400 group-hover:text-primary transition-colors`} />
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-6 line-clamp-2 font-['Rajdhani'] flex-grow">
                    {project.background}
                  </p>

                  <div className="mt-auto">
                    <button 
                      onClick={() => setSelectedProjectId(project.id)}
                      className="w-full py-3 rounded-lg bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 text-white hover:text-primary transition-all flex items-center justify-center gap-2 font-['Rajdhani'] font-bold tracking-wider group/btn"
                    >
                      VIEW DETAILS
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProjectId(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />
              
              <motion.div 
                layoutId={selectedProject.id}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-primary/30 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.15)]"
              >
                <button 
                  onClick={() => setSelectedProjectId(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white z-10 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="grid md:grid-cols-5 min-h-[500px]">
                  {/* Left Sidebar (Visual & Quick Info) */}
                  <div className="md:col-span-2 bg-surface/50 border-r border-white/10 p-6 flex flex-col">
                    <div className="h-48 w-full rounded-xl bg-black/50 border border-white/10 mb-6 relative overflow-hidden">
                       <ProjectVisualizer type={selectedProject.id} />
                    </div>
                    
                    <h2 className="text-2xl font-bold font-['Orbitron'] mb-2 text-primary">
                      {selectedProject.title.split(' - ')[0]}
                    </h2>
                    <p className="text-sm text-gray-400 mb-6 font-['Rajdhani']">
                      {selectedProject.title.split(' - ')[1]}
                    </p>

                    <div className="space-y-4 mt-auto">
                      <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Role</div>
                        <div className="text-sm font-medium">{selectedProject.role}</div>
                      </div>
                      <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Timeline</div>
                        <div className="text-sm font-medium">{selectedProject.period}</div>
                      </div>
                      {(selectedProject as any).link && (
                        <a 
                          href={(selectedProject as any).link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block p-3 rounded-lg bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors text-center group"
                        >
                          <div className="text-xs text-primary uppercase tracking-wider mb-1 font-bold">Project Link</div>
                          <div className="text-sm font-medium text-white flex items-center justify-center gap-2">
                             View Live Demo
                             <Rocket className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="md:col-span-3 p-8 space-y-8">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <span className="w-1 h-6 bg-primary rounded-full" />
                        Background
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {selectedProject.background}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <span className="w-1 h-6 bg-secondary rounded-full" />
                        Solution
                      </h3>
                      <ul className="space-y-2">
                        {selectedProject.solution.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-300">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <span className="w-1 h-6 bg-accent rounded-full" />
                        Key Results
                      </h3>
                      <div className="grid gap-3">
                        {selectedProject.result.map((item, idx) => (
                          <div key={idx} className="p-3 rounded-lg bg-accent/5 border border-accent/10 flex items-start gap-3">
                            <div className="mt-1 w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent text-xs">
                              ✓
                            </div>
                            <span className="text-gray-300 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
