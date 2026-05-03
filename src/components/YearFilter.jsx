import React, { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const YearFilter = () => {
  // State for year selection
  const [selectedYear, setSelectedYear] = useState("0");

  const handleReset = (e) => {
    e.preventDefault();
    setSelectedYear("0");
  };

  return (
    <div className="group relative w-fit pt-4">  
      
      
      <AnimatePresence>
        {selectedYear !== "0" && (
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
            Year
          </motion.span>
        )}
      </AnimatePresence>

      <div className="relative">
        <select 
          name="year"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className={`
            appearance-none cursor-pointer
            bg-[#1e2029] ${selectedYear === "0" ? 'text-[#9ca3af]' : 'text-white'} 
            pl-5 pr-12 py-2.5 rounded-xl
            border outline-none text-sm font-medium
            transition-all duration-300
            
            /* Selection check for border color */
            ${selectedYear !== "0" ? 'border-[#a3c9ff]/50' : 'border-white/5'}

            /* Consistent Hover Effect */
            group-hover:text-[#a3c9ff] 
            group-hover:border-[#a3c9ff]/30
            group-hover:shadow-[0_4px_20px_rgba(34,197,94,0.15)]
          `}
        >
          <option value="0">Year: All</option>
          <option value="2026">2026</option>
          <option value="2025">2025</option>
          <option value="2020-2026">2020-now</option>
          <option value="2010-2026">2010-now</option>
          <option value="2010-2019">2010-2019</option>
          <option value="2000-2009">2000-2009</option>
          <option value="1990-1999">1990-1999</option>
          <option value="1980-1989">1980-1989</option>
          <option value="1970-1979">1970-1979</option>
          <option value="1950-1969">1950-1969</option>
          <option value="1900-1949">1900-1949</option>
        </select>

        {/* Dynamic Icon Logic */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 transition-colors group-hover:text-[#a3c9ff]">
          {selectedYear === "0" ? (
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

export default YearFilter;