import React from 'react';
import { Play, Film } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionTitle } from './MovieInfo';

const MovieTrailer = ({ ytCode }) => {
    if (!ytCode) return null;

    return (
        <div className="mb-8">
            <SectionTitle title="Trailers & Behind The Scenes" />
            <div className="grid grid-cols-3 gap-3">
                {/* Main Trailer */}
                <motion.div whileHover={{ scale: 1.02 }}
                    className="aspect-video rounded-xl overflow-hidden border border-white/10 shadow-lg"
                >
                    <iframe
                        src={`https://www.youtube.com/embed/${ytCode}`}
                        title="Trailer" className="w-full h-full" allowFullScreen
                    />
                </motion.div>

                {[1, 2].map(i => (
                    <motion.div key={i} whileHover={{ scale: 1.02 }}
                        className="aspect-video rounded-xl bg-[#1e263a] border border-white/5 hover:border-[#a3c9ff]/20 hidden sm:flex flex-col items-center justify-center gap-2 cursor-pointer group transition-all"
                    >
                        <div className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-white/10 flex items-center justify-center transition-all">
                            <Play size={18} className="text-white/40 group-hover:text-white/70 ml-0.5 transition-colors" fill="currentColor" />
                        </div>
                        <span className="text-[10px] text-gray-600 group-hover:text-gray-400 uppercase tracking-widest transition-colors">
                            {i === 1 ? 'Behind Scenes' : 'Clip'}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default MovieTrailer;