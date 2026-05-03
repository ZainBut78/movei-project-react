import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './MovieCard';

const MovieGrid = ({ movies = [], loading, currentPage, totalPages, onPageChange }) => {

    const getPageNumbers = () => {
        const pages = [];
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else if (currentPage <= 4) {
            pages.push(1, 2, 3, 4, 5, '...', totalPages);
        } else if (currentPage >= totalPages - 3) {
            pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
        } else {
            pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
        }
        return pages;
    };

    const handlePageChange = (page) => {
        if (page === '...') return;
        if (page < 1 || page > totalPages) return;
        onPageChange(page);  
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10 justify-items-center">
                {loading ? (
                    Array(20).fill(0).map((_, i) => (
                        <div key={i} className="w-full max-w-[220px] aspect-[2/3] bg-white/5 animate-pulse rounded-xl" />
                    ))
                ) : movies.length > 0 ? (
                    movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                ) : (
                    <p className="text-white col-span-full text-center py-20">
                        No movies found. Try different filters!
                    </p>
                )}
            </div>

            {!loading && totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-16 mb-10 flex-wrap">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="w-10 h-10 rounded-lg bg-[#1e2029] flex items-center justify-center text-gray-400 border border-white/5 hover:bg-[#2d333f] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    {getPageNumbers().map((page, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(page)}
                            disabled={page === '...'}
                            className={`w-10 h-10 rounded-lg font-bold transition-all text-sm
                                ${page === currentPage
                                    ? 'bg-[#a3c9ff] text-[#101419] shadow-[0_0_20px_rgba(163,201,255,0.3)]'
                                    : page === '...'
                                    ? 'text-gray-600 cursor-default bg-transparent'
                                    : 'bg-[#1e2029] text-gray-400 border border-white/5 hover:bg-[#2d333f]'
                                }`}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="w-10 h-10 rounded-lg bg-[#1e2029] flex items-center justify-center text-gray-400 border border-white/5 hover:bg-[#2d333f] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                     >
                        <ChevronRight size={20} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default MovieGrid;