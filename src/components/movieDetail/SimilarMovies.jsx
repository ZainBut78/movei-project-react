import React from 'react';
import { Play, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SimilarCard = ({ movie, index }) => {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.07 }}
            whileHover={{ y: -5 }}
            onClick={() => navigate(`/movie/${movie.id}`)}
            className="group cursor-pointer"
        >
            {/* Poster */}
            <div className="aspect-[2/3] rounded-xl overflow-hidden bg-[#1e263a] mb-2 relative border border-white/5 group-hover:border-[#a3c9ff]/30 transition-all duration-300 shadow-lg group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
                <img
                    src={movie.medium_cover_image}
                    alt={movie.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => e.target.src = 'https://via.placeholder.com/210x315?text=N/A'}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                {/* Play */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur border border-white/25 flex items-center justify-center">
                        <Play size={18} fill="white" className="text-white ml-0.5" />
                    </div>
                </div>

                {/* Rating */}
                {movie.rating > 0 && (
                    <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded text-[10px]">
                        <Star size={9} fill="#ffb800" className="text-[#ffb800]" />
                        <span className="text-white font-bold">{movie.rating}</span>
                    </div>
                )}
            </div>

            <p className="text-white text-xs font-semibold truncate group-hover:text-[#a3c9ff] transition-colors">{movie.title}</p>
            <p className="text-gray-500 text-[11px] mt-0.5">{movie.year}</p>
        </motion.div>
    );
};

const SimilarMovies = ({ movies }) => {
    if (!movies?.length) return null;

    return (
        <div className="mb-10">
            <div className="flex items-center justify-between mb-5">
                <h3 className="text-white text-base font-black uppercase tracking-wider">Similar Movies</h3>
                <button className="text-[#a3c9ff] text-xs font-bold hover:text-white transition-colors uppercase tracking-wider">
                    View All
                </button>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3">
                {movies.slice(0, 5).map((m, i) => (
                    <SimilarCard key={m.id} movie={m} index={i} />
                ))}
            </div>
        </div>
    );
};

export default SimilarMovies;