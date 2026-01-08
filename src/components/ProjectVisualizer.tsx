import React from 'react';
import { motion } from 'framer-motion';

interface ProjectVisualizerProps {
  type: string;
}

export const ProjectVisualizer: React.FC<ProjectVisualizerProps> = ({ type }) => {
  // Use switch directly on type (project id) for specific animations
  const renderContent = () => {
    switch (type) {
      // 1. NewDP MCP Service - Layered Architecture & Microservices
      case 'newdp-mcp':
        return (
          <svg viewBox="0 0 200 150" className="w-full h-full p-4">
            {/* Layers */}
            <motion.rect x="40" y="20" width="120" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8" />
            <motion.rect x="40" y="65" width="120" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8" />
            <motion.rect x="40" y="110" width="120" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8" />
            
            {/* Connecting lines */}
            <motion.line x1="100" y1="40" x2="100" y2="65" stroke="currentColor" strokeWidth="2" 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.line x1="100" y1="85" x2="100" y2="110" stroke="currentColor" strokeWidth="2" 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5, repeat: Infinity }}
            />

            {/* Data packets */}
            <motion.circle cx="100" cy="50" r="3" fill="currentColor"
              animate={{ cy: [40, 65], opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle cx="100" cy="95" r="3" fill="currentColor"
              animate={{ cy: [85, 110], opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        );

      // 2. Midea BigData - Data Lake & Flow
      case 'midea-bigdata':
        return (
          <svg viewBox="0 0 200 150" className="w-full h-full p-4">
            {/* Central Lake */}
            <motion.ellipse cx="100" cy="100" rx="60" ry="20" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
            <motion.ellipse cx="100" cy="90" rx="50" ry="15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" 
              animate={{ rx: [50, 55, 50], ry: [15, 18, 15] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Incoming Streams */}
            {[0, 1, 2].map(i => (
              <motion.path
                key={i}
                d={`M ${40 + i * 60} 20 Q ${40 + i * 60} 60 100 90`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
              />
            ))}
            
            {/* Particles flowing in */}
            {[0, 1, 2].map(i => (
              <motion.circle
                key={`p-${i}`}
                r="3"
                fill="currentColor"
                animate={{ 
                  offsetDistance: "100%",
                  opacity: [0, 1, 0]
                }}
              >
                <animateMotion 
                  path={`M ${40 + i * 60} 20 Q ${40 + i * 60} 60 100 90`}
                  dur="2s"
                  begin={`${i * 0.5}s`}
                  repeatCount="indefinite"
                />
              </motion.circle>
            ))}
          </svg>
        );

      // 3. DW-Store - AI Scanning Assets
      case 'dw-store':
        return (
          <svg viewBox="0 0 200 150" className="w-full h-full p-4">
            {/* Database Icons */}
            <rect x="40" y="40" width="30" height="40" rx="2" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
            <rect x="85" y="40" width="30" height="40" rx="2" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
            <rect x="130" y="40" width="30" height="40" rx="2" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
            
            {/* Scanning Beam */}
            <motion.line 
              x1="20" y1="20" x2="180" y2="20" 
              stroke="currentColor" strokeWidth="2"
              animate={{ y1: [20, 100, 20], y2: [20, 100, 20] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.rect
              x="20" y="20" width="160" height="20"
              fill="url(#scan-gradient)"
              opacity="0.2"
              animate={{ y: [0, 80, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <defs>
              <linearGradient id="scan-gradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="currentColor" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>
        );

      // 4. Metric Management - Knowledge Graph
      case 'metric-platform':
        return (
          <svg viewBox="0 0 200 150" className="w-full h-full p-4">
            {/* Nodes */}
            {[
              {x: 100, y: 75}, {x: 50, y: 40}, {x: 150, y: 40}, 
              {x: 50, y: 110}, {x: 150, y: 110}
            ].map((p, i) => (
              <motion.circle 
                key={i} cx={p.x} cy={p.y} r="6" fill="currentColor"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
              />
            ))}
            
            {/* Connections */}
            <motion.path 
              d="M100 75 L50 40 M100 75 L150 40 M100 75 L50 110 M100 75 L150 110" 
              stroke="currentColor" strokeWidth="1" opacity="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </svg>
        );

      // 5. Commercial Display BG - Dashboard & KPIs
      case 'bg-indicator':
        return (
          <svg viewBox="0 0 200 150" className="w-full h-full p-4">
            {/* Dashboard Frames */}
            <rect x="20" y="20" width="70" height="50" rx="4" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
            <rect x="110" y="20" width="70" height="50" rx="4" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
            <rect x="20" y="80" width="160" height="50" rx="4" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
            
            {/* Animated Charts */}
            <motion.path d="M30 60 L45 40 L60 50 L75 30" fill="none" stroke="currentColor" strokeWidth="2"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity }} />
            
            <motion.rect x="120" y="35" width="10" height="25" fill="currentColor" 
              animate={{ height: [10, 25, 15] }} transition={{ duration: 2, repeat: Infinity }} />
            <motion.rect x="140" y="45" width="10" height="15" fill="currentColor" 
              animate={{ height: [5, 15, 10] }} transition={{ duration: 2, delay: 0.5, repeat: Infinity }} />
              
            <motion.circle cx="100" cy="105" r="15" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="60"
              animate={{ strokeDashoffset: [60, 0] }} transition={{ duration: 3, repeat: Infinity }} />
          </svg>
        );

      // 6. Mobile BI - Phone Interaction
      case 'mobile-bi':
        return (
          <svg viewBox="0 0 100 200" className="w-full h-full p-4">
            {/* Phone Body */}
            <rect x="20" y="10" width="60" height="180" rx="8" fill="none" stroke="currentColor" strokeWidth="2"/>
            
            {/* Screen Content Scroll */}
            <clipPath id="screen-clip">
              <rect x="25" y="20" width="50" height="160" rx="4"/>
            </clipPath>
            
            <g clipPath="url(#screen-clip)">
              <motion.g
                animate={{ y: [-20, -100] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                {[0, 1, 2, 3, 4].map(i => (
                  <g key={i} transform={`translate(0, ${i * 40})`}>
                    <rect x="30" y="30" width="40" height="30" rx="4" fill="currentColor" opacity="0.2"/>
                    <rect x="35" y="35" width="30" height="5" rx="2" fill="currentColor" opacity="0.5"/>
                    <rect x="35" y="45" width="20" height="5" rx="2" fill="currentColor" opacity="0.3"/>
                  </g>
                ))}
              </motion.g>
            </g>
            
            {/* Touch Indicator */}
            <motion.circle cx="50" cy="150" r="5" fill="currentColor" opacity="0.5"
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </svg>
        );

      // 7. BI Chrome Extension - Browser Plugin
      case 'bi-plugin':
        return (
          <svg viewBox="0 0 200 150" className="w-full h-full p-4">
            {/* Browser Window */}
            <rect x="20" y="20" width="160" height="110" rx="4" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
            <line x1="20" y1="40" x2="180" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
            
            {/* Extension Icon/Popup */}
            <circle cx="160" cy="30" r="5" fill="currentColor"/>
            
            <motion.rect 
              x="130" y="45" width="40" height="60" rx="2" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="1"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 60, opacity: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
            
            {/* Popup Content */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5, repeat: Infinity, repeatDelay: 2.5 }}
            >
              <line x1="135" y1="55" x2="165" y2="55" stroke="currentColor" strokeWidth="2"/>
              <line x1="135" y1="65" x2="160" y2="65" stroke="currentColor" strokeWidth="2"/>
              <line x1="135" y1="75" x2="155" y2="75" stroke="currentColor" strokeWidth="2"/>
            </motion.g>
          </svg>
        );

      // 8. Midea Building - Construction/Monitoring
      case 'midea-building':
        return (
          <svg viewBox="0 0 200 150" className="w-full h-full p-4">
            {/* Building Outline */}
            <path d="M60 130 L60 50 L100 30 L140 50 L140 130 Z" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
            
            {/* Floors filling up */}
            {[0, 1, 2, 3].map(i => (
              <motion.rect
                key={i}
                x="70" y={110 - i * 20} width="60" height="15" fill="currentColor" opacity="0.2"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 0.4, width: 60 }}
                transition={{ duration: 1, delay: i * 0.5, repeat: Infinity, repeatDelay: 2 }}
              />
            ))}
            
            {/* Signal Waves */}
            <motion.circle cx="100" cy="30" r="5" fill="none" stroke="currentColor" strokeWidth="1"
              animate={{ r: [5, 20], opacity: [1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </svg>
        );

      // 9. Midea Finance - Currency Flow
      case 'midea-finance':
        return (
          <svg viewBox="0 0 200 150" className="w-full h-full p-4">
            {/* Chart Line */}
            <motion.polyline
              points="20,120 50,90 80,100 110,50 140,70 170,30"
              fill="none" stroke="currentColor" strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            {/* Currency Symbols Flowing */}
            {[0, 1, 2].map(i => (
              <motion.text
                key={i}
                x="20" y="120"
                fill="currentColor"
                fontSize="16"
                fontWeight="bold"
                opacity="0"
              >
                $
                <animateMotion
                  path="M 0 0 L 30 -30 L 60 -20 L 90 -70 L 120 -50 L 150 -90"
                  dur="3s"
                  begin={`${i}s`}
                  repeatCount="indefinite"
                />
                <animate attributeName="opacity" values="0;1;0" dur="3s" begin={`${i}s`} repeatCount="indefinite"/>
              </motion.text>
            ))}
          </svg>
        );

      // 10. Factory Energy - Gears & Efficiency
      case 'factory-energy':
        return (
          <svg viewBox="0 0 200 150" className="w-full h-full p-4">
            {/* Big Gear */}
            <motion.g 
              style={{ originX: "50%", originY: "50%" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <circle cx="70" cy="75" r="30" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="10 5"/>
              <circle cx="70" cy="75" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
            </motion.g>
            
            {/* Small Gear */}
            <motion.g 
              style={{ originX: "65%", originY: "50%" }}
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <circle cx="115" cy="75" r="15" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="8 4"/>
            </motion.g>

            {/* Energy Bolt */}
            <motion.path
              d="M150 40 L140 75 L160 85 L150 120"
              fill="none" stroke="currentColor" strokeWidth="3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
            />
          </svg>
        );

      // 11. User Lifecycle - Funnel
      case 'user-lifecycle':
        return (
          <svg viewBox="0 0 200 150" className="w-full h-full p-4">
            {/* Funnel Shape */}
            <path d="M40 20 L160 20 L120 130 L80 130 Z" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
            
            {/* Users dropping in */}
            {[0, 1, 2, 3, 4].map(i => (
              <motion.circle
                key={i}
                r="4"
                fill="currentColor"
                initial={{ x: 40 + Math.random() * 120, y: 20, opacity: 1 }}
                animate={{ 
                  x: 100 + (Math.random() * 20 - 10), 
                  y: 140,
                  opacity: 0
                }}
                transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
              />
            ))}
            
            {/* Segments */}
            <line x1="55" y1="50" x2="145" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
            <line x1="70" y1="90" x2="130" y2="90" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
          </svg>
        );

      // 12. Automation Platform - Robot/Code
      case 'auto-platform':
        return (
          <svg viewBox="0 0 200 150" className="w-full h-full p-4">
            {/* Document Stack */}
            <rect x="40" y="50" width="40" height="50" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
            <rect x="45" y="45" width="40" height="50" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
            
            {/* Robotic Arm */}
            <motion.path
              d="M160 130 L160 80 L120 50"
              fill="none" stroke="currentColor" strokeWidth="4"
              strokeLinecap="round"
            />
            <motion.circle cx="160" cy="130" r="5" fill="currentColor"/>
            <motion.circle cx="160" cy="80" r="4" fill="currentColor"/>
            
            {/* Moving Action */}
            <motion.g
              animate={{ x: [-20, 0, -20], y: [10, 0, 10] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <circle cx="120" cy="50" r="4" fill="currentColor"/>
              {/* Grabber */}
              <path d="M115 50 L110 45 M115 50 L110 55" stroke="currentColor" strokeWidth="2"/>
            </motion.g>
            
            {/* Processed Item */}
            <motion.rect 
              x="120" y="100" width="30" height="20" rx="2" fill="currentColor" opacity="0.5"
              animate={{ x: [0, 50], opacity: [1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </svg>
        );

      // 13. Talent Training - Pyramid Growth
      case 'talent-training':
        return (
          <svg viewBox="0 0 200 150" className="w-full h-full p-4">
            {/* Pyramid Levels */}
            <motion.path d="M20 130 L180 130 L160 100 L40 100 Z" fill="currentColor" opacity="0.2"
              initial={{ opacity: 0.1 }} animate={{ opacity: 0.3 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} />
            
            <motion.path d="M40 100 L160 100 L140 70 L60 70 Z" fill="currentColor" opacity="0.4"
              initial={{ opacity: 0.3 }} animate={{ opacity: 0.5 }} transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }} />
            
            <motion.path d="M60 70 L140 70 L100 20 Z" fill="currentColor" opacity="0.6"
              initial={{ opacity: 0.5 }} animate={{ opacity: 0.8 }} transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }} />
              
            {/* Rising Star */}
            <motion.path d="M100 10 L105 25 L95 25 Z" fill="currentColor"
              animate={{ y: [0, -5, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </svg>
        );

      // Default Fallback
      default:
        return (
           <svg viewBox="0 0 200 200" className="w-full h-full p-4">
             {[
               { x: 50, y: 50 }, { x: 150, y: 50 }, 
               { x: 100, y: 100 }, 
               { x: 50, y: 150 }, { x: 150, y: 150 }
             ].map((p, i) => (
               <React.Fragment key={i}>
                 <motion.circle 
                   cx={p.x} cy={p.y} r="6" fill="currentColor"
                   animate={{ scale: [1, 1.2, 1] }}
                   transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                 />
                 <motion.line
                   x1="100" y1="100" x2={p.x} y2={p.y}
                   stroke="currentColor" strokeWidth="1" opacity="0.3"
                 />
               </React.Fragment>
             ))}
             <motion.circle cx="100" cy="100" r="10" fill="currentColor" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
           </svg>
        );
    }
  };

  return (
    <div className={`w-full h-full flex items-center justify-center text-primary/80`}>
      {renderContent()}
    </div>
  );
};
