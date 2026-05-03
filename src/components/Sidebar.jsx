import React from 'react'
// Lucide icons import karein
import { Home, Compass, Tv, Download, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-[#0a0b14] border-r border-[#22c55e]/10 flex flex-col p-6 text-gray-400 shadow-[10px_0_40px_-5px_rgba(34,197,94,0.15)] sticky top-0 z-40">
      
      {/* Logo Section */}
      <div className="mb-10">
        <h1 className="text-[#22c55e] text-2xl font-bold tracking-tight">CinePremium</h1>
        <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-medium">
          Private Digital Theater
        </p>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-2">
        
        {/* Home */}
        <div className="flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer hover:bg-white/5 hover:text-white transition-all group">
          <Home size={20} className="group-hover:text-[#22c55e]" />
          <span className="font-medium">Home</span>
        </div>

        {/* Browse - Active Highlight */}
        <div className="flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer bg-[#162a22] text-[#22c55e] border-r-4 border-[#22c55e] transition-all">
          <Compass size={20} />
          <span className="font-medium">Browse</span>
        </div>

        {/* Live TV */}
        <div className="flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer hover:bg-white/5 hover:text-white transition-all group">
          <Tv size={20} className="group-hover:text-[#22c55e]" />
          <span className="font-medium">Live TV</span>
        </div>

        {/* Downloads */}
        <div className="flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer hover:bg-white/5 hover:text-white transition-all group">
          <Download size={20} className="group-hover:text-[#22c55e]" />
          <span className="font-medium">Downloads</span>
        </div>

      </nav>

      {/* Settings Bottom Section */}
      <div className="mt-auto pt-6 border-t border-white/5">
        <div className="flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer hover:bg-white/5 hover:text-white transition-all group">
          <Settings size={20} className="group-hover:text-[#22c55e]" />
          <span className="font-medium">Settings</span>
        </div>
      </div>

    </div>
  )
}

export default Sidebar