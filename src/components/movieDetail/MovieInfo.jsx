import React from 'react';
import { Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export const SectionTitle = ({ title }) => (
    <h3 className="text-[#22c55e] text-xs font-bold uppercase tracking-[0.2em] mb-4">{title}</h3>
);

const MovieInfo = ({ movie }) => {
    const formatRuntime = (mins) => {
        if (!mins) return 'N/A';
        return `${Math.floor(mins / 60)}h ${mins % 60}m`;
    };

    return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight mb-3">
                {movie.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-2 text-gray-400 text-sm mb-6">
                <span className="font-semibold text-gray-300">{movie.year}</span>
                <span className="text-white/20">•</span>
                <span>{movie.genres?.join(' / ')}</span>
                <span className="text-white/20">•</span>
                <span className="flex items-center gap-1">
                    <Clock size={13} />
                    {formatRuntime(movie.runtime)}
                </span>
                {movie.mpa_rating && (
                    <>
                        <span className="text-white/20">•</span>
                        <span className="px-2 py-0.5 border border-white/20 rounded text-[11px] font-bold">{movie.mpa_rating}</span>
                    </>
                )}
            </div>

            {/* Plot */}
            <div className="mb-8">
                <SectionTitle title="Plot Summary" />
                <p className="text-gray-300 text-sm leading-relaxed">
                    {movie.description_full || movie.description_intro || 'No description available.'}
                </p>
            </div>
        </motion.div>
    );
};

export default MovieInfo;