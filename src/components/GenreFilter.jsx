import React, { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const GenreFilter = () => {
    const [selectedGenre, setSelectedGenre] = useState("all");

    const handleReset = (e) => {
        e.preventDefault();
        setSelectedGenre("all");
    };

    return (
        <div className="group relative w-fit pt-4">  

            
            <AnimatePresence>
                {selectedGenre !== "all" && (
                    <motion.span
                        initial={{ y: 10, opacity: 0, scale: 0.9 }}
                        animate={{
                            y: -25,
                            opacity: 1,
                            scale: 0.85
                        }}
                        exit={{
                            y: 10,
                            opacity: 0,
                            scale: 0.9
                        }}

                        transition={{
                            duration: 0.5,           // Kitne seconds tak animation chale (0.5 = smooth)
                            ease: [0.4, 0, 0.2, 1],  // Custom bezier curve taake animation natural lage
                            opacity: { duration: 0.3 } // Opacity ko thora jaldi dikhao taake dhundla pan khatam ho
                        }}
                        className="absolute left-2 text-[#a3c9ff] font-semibold uppercase tracking-wider pointer-events-none origin-left"
                    >
                        Genre
                    </motion.span>
                )}
            </AnimatePresence>

            <div className="relative">
                <select
                    name="genre"
                    value={selectedGenre}
                    onChange={(e) => setSelectedGenre(e.target.value)}
                    className={`
                                   appearance-none cursor-pointer
                                    bg-[#1e2029] ${selectedGenre === "all" ? 'text-[#9ca3af]' : 'text-white'} 
                                     pl-5 pr-12 py-2.5 rounded-xl
                                   border transition-all duration-300 outline-none text-sm font-medium
                                   ${selectedGenre !== "all" ? 'border-[#a3c9ff]/50' : 'border-white/5'}
                                 group-hover:text-[#a3c9ff] 
                                  group-hover:border-[#a3c9ff]/30
                                   group-hover:shadow-[0_4px_20px_rgba(34,197,94,0.15)]
                               `}
                >

                    <option value="all">Genre: All</option>
                    <option value="action">Action</option>
                    <option value="adventure">Adventure</option>
                    <option value="animation">Animation</option>
                    <option value="biography">Biography</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="documentary">Documentary</option>
                    <option value="drama">Drama</option>
                    <option value="family">Family</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="film-noir">Film-Noir</option>
                    <option value="game-show">Game-Show</option>
                    <option value="history">History</option>
                    <option value="horror">Horror</option>
                    <option value="music">Music</option>
                    <option value="musical">Musical</option>
                    <option value="mystery">Mystery</option>
                    <option value="news">News</option>
                    <option value="reality-tv">Reality-TV</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-Fi</option>
                    <option value="sport">Sport</option>
                    <option value="talk-show">Talk-Show</option>
                    <option value="thriller">Thriller</option>
                    <option value="war">War</option>
                    <option value="western">Western</option>
                </select>
 
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 transition-colors group-hover:text-[#a3c9ff]">
                    {selectedGenre === "all" ? (
                        <ChevronDown size={16} />
                    ) : (
                        <button
                            onClick={handleReset}
                            className="pointer-events-auto hover:scale-110 transition-transform flex items-center justify-center"
                        >
                            <X size={16} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GenreFilter;