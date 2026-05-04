import React from 'react';
import { Play, Download, Monitor, Star, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const MoviePoster = ({ movie }) => {
    return (
        <div className="flex flex-col gap-2.5 mt-3 w-[160px] md:w-[180px] mx-auto md:mx-0">

            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="w-full flex items-center justify-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-black font-bold py-2.5 rounded-xl transition-all shadow-[0_4px_20px_rgba(34,197,94,0.35)] text-sm"
            >
                <Play size={14} fill="black" /> Watch Online
            </motion.button>

            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="w-full flex items-center justify-center gap-2 bg-[#1e263a] hover:bg-[#263045] text-white font-semibold py-2.5 rounded-xl border border-white/10 hover:border-[#a3c9ff]/40 transition-all text-sm"
            >
                <Download size={14} /> Download
            </motion.button>

            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="w-full flex items-center justify-center gap-2 bg-[#1e263a] hover:bg-[#263045] text-white font-semibold py-2.5 rounded-xl border border-white/10 hover:border-[#a3c9ff]/40 transition-all text-sm"
            >
                <Monitor size={14} /> Watch Now
            </motion.button>

            {/* Genre Tags */}
            <div className="flex flex-wrap gap-1.5 mt-1">
                {movie.genres?.map(g => (
                    <span key={g}
                        className="px-2 py-0.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded text-[10px] font-bold text-gray-300 uppercase tracking-wider cursor-pointer transition-all"
                    >
                        {g}
                    </span>
                ))}
            </div>

            {/* IMDb Rating */}
            {movie.rating > 0 && (
                <div className="bg-[#1e263a] border border-white/10 rounded-xl p-3 mt-1">
                    <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-1">IMDB Rating</p>
                    <div className="flex items-center gap-1.5">
                        <Star size={14} className="text-[#ffb800]" fill="#ffb800" />
                        <span className="text-xl font-black text-white">{movie.rating}</span>
                        <span className="text-gray-500 text-xs">/10</span>
                    </div>
                    <p className="text-[10px] text-gray-600 mt-0.5">
                        {movie.like_count?.toLocaleString()} user reviews
                    </p>
                </div>
            )}
        </div>
    );
};

export default MoviePoster;