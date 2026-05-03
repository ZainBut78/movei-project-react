import React, { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const QualityFilter = () => {
  // State for quality selection
  const [selectedQuality, setSelectedQuality] = useState("all");

  // Reset function to set back to "All"
  const handleReset = (e) => {
    e.preventDefault();
    setSelectedQuality("all");
  };

  return (
    <div className="group relative w-fit pt-4">  
      
       
      <AnimatePresence>
        {selectedQuality !== "all" && (
          <motion.span
            initial={{ y: 10, opacity: 0, scale: 0.9 }}
            animate={{ y: -25, opacity: 1, scale: 0.85 }}
            exit={{ y: 10, opacity: 0, scale: 0.9 }}
            transition={{ 
              duration: 0.5, 
              ease: [0.4, 0, 0.2, 1],
              opacity: { duration: 0.3 } 
            }}
            className="absolute left-2 text-[#a3c9ff] font-semibold uppercase tracking-wider pointer-events-none origin-left"
          >
            Quality
          </motion.span>
        )}
      </AnimatePresence>

      <div className="relative">
        <select 
          name="quality"
          value={selectedQuality}
          onChange={(e) => setSelectedQuality(e.target.value)}
          className={`
            appearance-none cursor-pointer
            bg-[#1e2029] ${selectedQuality === "all" ? 'text-[#9ca3af]' : 'text-white'} 
            pl-5 pr-12 py-2.5 rounded-xl
            border outline-none text-sm font-medium
            transition-all duration-300
            
            /* Border dynamic based on selection */
            ${selectedQuality !== "all" ? 'border-[#a3c9ff]/50' : 'border-white/5'}

            /* Hover Effects consistent with your preference */
            group-hover:text-[#a3c9ff] 
            group-hover:border-[#a3c9ff]/30
            group-hover:shadow-[0_4px_20px_rgba(34,197,94,0.15)]
          `}
        >
          <option value="all">Quality: All</option>
          <option value="480p">480p</option>
          <option value="720p">720p</option>
          <option value="1080p">1080p</option>
          <option value="1080p.x265">1080p.x265</option>
          <option value="2160p">2160p</option>
          <option value="3D">3D</option>
        </select>

        {/* Dynamic Icon: Chevron for All, X for Selection */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 transition-colors group-hover:text-[#a3c9ff]">
          {selectedQuality === "all" ? (
            <ChevronDown size={16} />
          ) : (
            <button 
              onClick={handleReset}
              className="pointer-events-auto hover:scale-110 transition-transform flex items-center justify-center"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QualityFilter;