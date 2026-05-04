import React from 'react';

const DirectorSection = () => {
    return (
        <div>
            <h3 className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold mb-4">Director</h3>
            <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-[#1e263a] border border-white/10 group-hover:border-[#a3c9ff]/30 transition-all shrink-0">
                    <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=director"
                        alt="Director"
                        className="w-full h-full object-cover"
                    />
                </div>
                <span className="text-white text-sm font-semibold group-hover:text-[#a3c9ff] transition-colors">
                    Unknown Director
                </span>
            </div>
        </div>
    );
};

export default DirectorSection;