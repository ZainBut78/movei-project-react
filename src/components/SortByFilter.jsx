import React, { useState } from 'react';
import { ListFilter, ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SortByFilter = () => {
  
  const [sortBy, setSortBy] = useState("latest");

  // Reset to default
  const handleReset = (e) => {
    e.preventDefault();
    setSortBy("latest");
  };

  return (
    <div className="group relative w-fit pt-4">
       
      <AnimatePresence>
        {sortBy !== "latest" && (
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
            Sort By
          </motion.span>
        )}
      </AnimatePresence>

      <div className="relative">
         
        <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 group-hover:text-[#a3c9ff] transition-colors">
          <ListFilter size={16} />
        </div>

        <select 
          name="order_by"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className={`
            appearance-none cursor-pointer
            bg-[#1e2029] ${sortBy === "latest" ? 'text-[#9ca3af]' : 'text-white'} 
            pl-11 pr-12 py-2.5 rounded-xl
            border outline-none text-sm font-medium
            transition-all duration-300
            
            /* Border dynamic check */
            ${sortBy !== "latest" ? 'border-[#a3c9ff]/50' : 'border-white/5'}

            /* Greenish Glow Hover Effect */
            group-hover:text-[#a3c9ff] 
            group-hover:border-[#a3c9ff]/30
            group-hover:shadow-[0_4px_20px_rgba(34,197,94,0.15)]
          `}
        >
          <option value="latest">Sort By: Latest</option>
          <option value="oldest">Oldest</option>
          <option value="featured">Featured</option>
          <option value="seeds">Seeds</option>
          <option value="peers">Peers</option>
          <option value="year">Year</option>
          <option value="rating">IMDb Rating</option>
          <option value="likes">YTS Likes</option>
          <option value="rt_audience">RT Audience</option>
          <option value="alphabetical">Alphabetical</option>
          <option value="downloads">Downloads</option>
        </select>

         
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 transition-colors group-hover:text-[#a3c9ff]">
          {sortBy === "latest" ? (
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

export default SortByFilter;