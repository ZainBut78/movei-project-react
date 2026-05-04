import React from 'react';
import { Film } from 'lucide-react';
import { SectionTitle } from './MovieInfo';

const MovieTrailer = ({ ytCode }) => {
    if (!ytCode) return null;

    return (
        <div className="mb-8">
            <SectionTitle title="Trailers & Behind The Scenes" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                {/* Main Trailer */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-white/10 col-span-1">
                    <iframe
                        src={`https://www.youtube.com/embed/${ytCode}`}
                        title="Trailer"
                        className="w-full h-full"
                        allowFullScreen
                    />
                </div>

                {/* Placeholder 1 */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-[#1e2029] border border-white/5 hidden sm:flex items-center justify-center">
                    <Film size={32} className="text-white/20" />
                </div>

                {/* Placeholder 2 */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-[#1e2029] border border-white/5 hidden sm:flex items-center justify-center">
                    <Film size={32} className="text-white/20" />
                </div>
            </div>
        </div>
    );
};

export default MovieTrailer;