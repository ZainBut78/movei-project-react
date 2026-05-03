import React, { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const RatingFilter = () => {
   
  const [selectedRating, setSelectedRating] = useState("0");

   
  const handleReset = (e) => {
    e.preventDefault();
    setSelectedRating("0");
  };

  return (
    <div className="group relative w-fit pt-4">  
      
      
      <AnimatePresence>
        {selectedRating !== "0" && (
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
            Rating
          </motion.span>
        )}
      </AnimatePresence>

      <div className="relative">
        <select 
          name="rating"
          value={selectedRating}
          onChange={(e) => setSelectedRating(e.target.value)}
          className={`
            appearance-none cursor-pointer
            bg-[#1e2029] ${selectedRating === "0" ? 'text-[#9ca3af]' : 'text-white'} 
            pl-5 pr-12 py-2.5 rounded-xl
            border outline-none text-sm font-medium
            transition-all duration-300
            
            /* Border dynamic based on selection */
            ${selectedRating !== "0" ? 'border-[#a3c9ff]/50' : 'border-white/5'}

            /* Greenish Glow Hover Effect */
            group-hover:text-[#a3c9ff] 
            group-hover:border-[#a3c9ff]/30
            group-hover:shadow-[0_4px_20px_rgba(34,197,94,0.15)]
          `}
        >
          <option value="0">Rating: All</option>
          <option value="9">9+</option>
          <option value="8">8+</option>
          <option value="7">7+</option>
          <option value="6">6+</option>
          <option value="5">5+</option>
          <option value="4">4+</option>
          <option value="3">3+</option>
          <option value="2">2+</option>
          <option value="1">1+</option>
        </select>

        
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 transition-colors group-hover:text-[#a3c9ff]">
          {selectedRating === "0" ? (
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

export default RatingFilter;