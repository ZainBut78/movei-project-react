import React from 'react'
import { Search } from 'lucide-react'

const BigSearch = ({value, onChange}) => {
    return (
        <div className="mb-8 w-full">


            <div className="relative w-full max-w-[1200px] ml-10 mt-2 group">

                <Search className="absolute left-6 top-1/2 -translate-y-1/2 z-9999 text-[#a3c9ff]"
                    size={24}
                />


                <input
                    value={value}
                    onChange={(e)=>onChange(e.target.value)}
                    type="text"
                    placeholder="Search for movies, actors, or genres..."
                    className="
                         w-full h-16 md:h-25
                         bg-[#181C21]/50 
                         backdrop-blur-sm
                         text-white text-lg md:text-xl font-light 
                         placeholder:text-gray-400
                         placeholder:text-3xl
                         placeholder:font-bold 
                         pl-16 pr-24 py-4 
                         rounded-2xl 

                          
                         border border-[#656d77]/20 

                          
                         focus:border-[#656d77]/70 
                         focus:outline-none 

                          
                          
                         focus:shadow-[0_4px_40px_rgba(101,109,119,0.2)] 

                         transition-all duration-300
                       "
                />


                <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1 bg-[#1a1b26] border border-gray-800 text-gray-600 px-3 py-1.5 rounded-lg text-xs font-mono select-none">
                    <span>⌘</span>
                    <span>K</span>
                </div>

            </div>

        </div>
    )
}

export default BigSearch