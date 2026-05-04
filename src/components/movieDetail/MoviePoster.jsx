import React from 'react';
import { Play, Download, Monitor, Star } from 'lucide-react';

const MoviePoster = ({ movie }) => {
    return (
        <div className="flex flex-col items-center lg:items-start gap-4 lg:w-[220px] shrink-0">

            {/* Poster Image */}
            <div className="w-[180px] lg:w-[220px] rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-white/10">
                <img
                    src={movie.large_cover_image}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                    onError={(e) => e.target.src = 'https://via.placeholder.com/220x330?text=No+Poster'}
                />
            </div>

            {/* Action Buttons */}
            <button className="w-full flex items-center justify-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-black font-bold py-3 rounded-xl transition-all">
                <Play size={18} fill="black" />
                Watch Online
            </button>
            <button className="w-full flex items-center justify-center gap-2 bg-[#1e2029] hover:bg-[#2d333f] text-white font-semibold py-3 rounded-xl border border-white/10 transition-all">
                <Download size={18} />
                Download
            </button>
            <button className="w-full flex items-center justify-center gap-2 bg-[#1e2029] hover:bg-[#2d333f] text-white font-semibold py-3 rounded-xl border border-white/10 transition-all">
                <Monitor size={18} />
                Watch Now
            </button>

            {/* Genre Tags */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-2">
                {movie.genres?.map(g => (
                    <span key={g} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300 uppercase tracking-wider">
                        {g}
                    </span>
                ))}
            </div>

            {/* IMDb Rating */}
            {movie.rating > 0 && (
                <div className="w-full bg-[#1e2029] border border-white/10 rounded-xl p-4 text-center">
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">IMDb Rating</p>
                    <div className="flex items-center justify-center gap-1">
                        <Star size={18} className="text-[#ffb800]" fill="#ffb800" />
                        <span className="text-2xl font-bold text-white">{movie.rating}</span>
                        <span className="text-gray-400 text-sm">/10</span>
                    </div>
                    {movie.like_count > 0 && (
                        <p className="text-xs text-gray-500 mt-1">{movie.like_count.toLocaleString()} likes</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default MoviePoster;