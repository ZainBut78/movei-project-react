import React, { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LanguageFilter = () => {
   
  const [selectedLang, setSelectedLang] = useState("all");

  const handleReset = (e) => {
    e.preventDefault();
    setSelectedLang("all");
  };

  return (
    <div className="group relative w-fit pt-4">
      
      <AnimatePresence>
        {selectedLang !== "all" && (
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
            Language
          </motion.span>
        )}
      </AnimatePresence>

      <div className="relative">
        <select 
          name="language"
          value={selectedLang}
          onChange={(e) => setSelectedLang(e.target.value)}
          className={`
            appearance-none cursor-pointer
            bg-[#1e2029] ${selectedLang === "all" ? 'text-[#9ca3af]' : 'text-white'} 
            pl-5 pr-12 py-2.5 rounded-xl
            border outline-none text-sm font-medium
            transition-all duration-300
            
            /* Border dynamic check */
            ${selectedLang !== "all" ? 'border-[#a3c9ff]/50' : 'border-white/5'}

            /* Greenish Glow Hover */
            group-hover:text-[#a3c9ff] 
            group-hover:border-[#a3c9ff]/30
            group-hover:shadow-[0_4px_20px_rgba(34,197,94,0.15)]
          `}
        >
          <option value="all">Language: All</option>
          <option value="en">English</option>
          <option value="foreign">Foreign</option>
          <option value="fr">French (3520)</option>
          <option value="ja">Japanese (2914)</option>
          <option value="es">Spanish (1982)</option>
          <option value="it">Italian (1623)</option>
          <option value="de">German (1346)</option>
          <option value="zh">Chinese (1167)</option>
          <option value="ko">Korean (1001)</option>
          <option value="hi">Hindi (922)</option>
          <option value="cn">Cantonese (870)</option>
          <option value="tr">Turkish (503)</option>
          <option value="pt">Portuguese (494)</option>
          <option value="sv">Swedish (476)</option>
          <option value="ro">Romanian (471)</option>
          <option value="ru">Russian (435)</option>
          <option value="pl">Polish (403)</option>
          <option value="nl">Dutch (366)</option>
          <option value="th">Thai (271)</option>
          <option value="da">Danish (269)</option>
          <option value="id">Indonesian (242)</option>
          <option value="ta">Tamil (234)</option>
          <option value="te">Telugu (227)</option>
          <option value="no">Norwegian (203)</option>
          <option value="ar">Arabic (193)</option>
          <option value="tl">Tagalog (171)</option>
          <option value="fi">Finnish (166)</option>
          <option value="cs">Czech (162)</option>
          <option value="hu">Hungarian (158)</option>
          <option value="vi">Vietnamese (138)</option>
          <option value="fa">Persian (117)</option>
          <option value="ml">Malayalam (103)</option>
          <option value="he">Hebrew (100)</option>
          <option value="pa">Punjabi (95)</option>
          <option value="ur">Urdu (24)</option>
           
        </select>

         
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 transition-colors group-hover:text-[#a3c9ff]">
          {selectedLang === "all" ? (
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

export default LanguageFilter;