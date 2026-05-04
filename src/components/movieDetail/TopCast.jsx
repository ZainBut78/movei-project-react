import React from 'react';
import { SectionTitle } from './MovieInfo';

// YTS API mein cast nahi hoti — dummy data dikhate hain
const castData = [
    { name: 'Lead Actor', role: 'as Main Character', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=cast1' },
    { name: 'Supporting Actor', role: 'as Supporting', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=cast2' },
    { name: 'Lead Actress', role: 'as Heroine', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=cast3' },
    { name: 'Villain', role: 'as Antagonist', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=cast4' },
];

const TopCast = () => {
    return (
        <div className="mb-8">
            <SectionTitle title="Top Cast" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {castData.map((actor, i) => (
                    <div key={i}
                        className="flex items-center gap-3 bg-[#1e263a] hover:bg-[#263045] border border-white/5 hover:border-[#a3c9ff]/20 rounded-xl p-3 cursor-pointer transition-all group"
                    >
                        <img
                            src={actor.avatar}
                            alt={actor.name}
                            className="w-10 h-10 rounded-full bg-white/10 shrink-0"
                        />
                        <div className="min-w-0">
                            <p className="text-white text-xs font-bold truncate group-hover:text-[#a3c9ff] transition-colors">{actor.name}</p>
                            <p className="text-gray-500 text-[10px] truncate">{actor.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopCast;