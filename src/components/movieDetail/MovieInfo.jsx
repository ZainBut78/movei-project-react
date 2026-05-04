import React from 'react';
import { Clock, Calendar, Globe } from 'lucide-react';

const MovieInfo = ({ movie }) => {

    const formatRuntime = (mins) => {
        if (!mins) return 'N/A';
        const h = Math.floor(mins / 60);
        const m = mins % 60;
        return `${h}h ${m}m`;
    };

    return (
        <div className="flex-1 min-w-0">

            {/* Title */}
            <h1 className="text-3xl lg:text-5xl font-black uppercase tracking-tight text-white mb-3">
                {movie.title}
            </h1>

            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-8">
                <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <span>{movie.year}</span>
                </div>
                <span className="text-white/20">•</span>
                <span>{movie.genres?.join(' / ')}</span>
                <span className="text-white/20">•</span>
                <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    <span>{formatRuntime(movie.runtime)}</span>
                </div>
                {movie.mpa_rating && (
                    <>
                        <span className="text-white/20">•</span>
                        <span className="px-2 py-0.5 border border-white/20 rounded text-xs uppercase">
                            {movie.mpa_rating}
                        </span>
                    </>
                )}
                {movie.language && (
                    <>
                        <span className="text-white/20">•</span>
                        <div className="flex items-center gap-1.5">
                            <Globe size={14} />
                            <span className="uppercase">{movie.language}</span>
                        </div>
                    </>
                )}
            </div>

            {/* Plot Summary */}
            <div className="mb-8">
                <SectionTitle title="Plot Summary" />
                <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                    {movie.description_full || movie.description_intro || 'No description available.'}
                </p>
            </div>
        </div>
    );
};

// Reusable Section Title
export const SectionTitle = ({ title }) => (
    <h2 className="text-[#a3c9ff] text-xs font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
        <span className="w-6 h-px bg-[#a3c9ff]" />
        {title}
    </h2>
);

export default MovieInfo;