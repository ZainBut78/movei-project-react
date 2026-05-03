import React, { useState } from 'react'
import { ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomDropDown = ({ options, value, onChange }) => {

    const defaultValue = options[0]?.value;  
    const filterLabel = options[0]?.label.split(":")[0];  
    const handleReset = (e) => {
        e.preventDefault();
        onChange(defaultValue);  
    };

    return (
        <div className="group relative w-fit pt-4">

            
            <AnimatePresence>
                {value !== defaultValue && (
                    <motion.span
                        initial={{ y: 10, opacity: 0, scale: 0.9 }}
                        animate={{ y: -25, opacity: 1, scale: 0.85 }}
                        exit={{ y: 10, opacity: 0, scale: 0.9 }}
                        transition={{
                            duration: 0.5,
                            ease: [0.4, 0, 0.2, 1],
                            opacity: { duration: 0.3 }
                        }}
                        className="absolute left-2 text-[#a3c9ff] font-semibold uppercase tracking-wider pointer-events-none origin-left text-xs"
                    >
                        {filterLabel}
                    </motion.span>
                )}
            </AnimatePresence>

            <div className="relative">
                <select
                    value={value}
                    onChange={(e) => onChange(e.target.value)} 
                    className={`
                        appearance-none cursor-pointer
                        bg-[#1e2029] 
                        ${value === defaultValue ? 'text-[#9ca3af]' : 'text-white'} 
                        pl-5 pr-12 py-2.5 rounded-xl
                        border outline-none text-sm font-medium
                        transition-all duration-300
                        ${value !== defaultValue ? 'border-[#a3c9ff]/50' : 'border-white/5'}
                        group-hover:text-[#a3c9ff] 
                        group-hover:border-[#a3c9ff]/30
                        group-hover:shadow-[0_4px_20px_rgba(34,197,94,0.15)]
                    `}
                >
                    {options.map((op) => (
                        <option key={op.value} value={op.value}>{op.label}</option>
                    ))}
                </select>

                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 transition-colors group-hover:text-[#a3c9ff]">
                    {value === defaultValue ? (
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

export default CustomDropDown;