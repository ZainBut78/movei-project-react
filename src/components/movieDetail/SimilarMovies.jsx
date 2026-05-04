import React from 'react';
import { Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SimilarCard = ({ movie }) => {
    const navigate = useNavigate();

    return (
        <div
            className="group cursor-pointer"
            onClick={() => navigate(`/movie/${movie.id}`)}
        >
            <div className="aspect-[2/3] rounded-xl overflow-hidden bg-[#1e2029] mb-2 border border-white/5 relative">
                <img
                    src={movie.medium_cover_image}
                    alt={movie.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => e.target.src = 'https://via.placeholder.com/210x315?text=No+Poster'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                        <Play size={18} fill="white" className="text-white ml-1" />
                    </div>
                </div>
            </div>
            <p className="text-white text-sm font-semibold truncate group-hover:text-[#a3c9ff] transition-colors">
                {movie.title}
            </p>
            <p className="text-gray-500 text-xs">{movie.year}</p>
        </div>
    );
};

const SimilarMovies = ({ movies }) => {
    if (!movies?.length) return null;

    return (
        <div className="mt-16">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold uppercase tracking-wider text-white">
                    Similar Movies
                </h2>
                <button className="text-[#a3c9ff] text-sm font-semibold hover:underline">
                    View All
                </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {movies.slice(0, 5).map(m => (
                    <SimilarCard key={m.id} movie={m} />
                ))}
            </div>
        </div>
    );
};

export default SimilarMovies;