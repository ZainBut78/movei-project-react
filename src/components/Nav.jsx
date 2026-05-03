import React, { useState, useEffect, useRef } from 'react'
import { Search, Bell, X } from 'lucide-react'
import { getMovieListData } from '../config/api.call'

const Nav = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef(null);

  // Bahar click karne pe dropdown band karo
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Debounce search
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setShowDropdown(false);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const result = await getMovieListData({ query_term: query, page: 1 });
        setResults(result.movies?.slice(0, 5) || []); // Sirf 5 results
        setShowDropdown(true);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setShowDropdown(false);
  };

  return (
    <nav className="w-full h-20 bg-[#0a0b14]/80 backdrop-blur-md flex items-center justify-between px-8 border-b border-[#22c55e]/20 shadow-[0_4px_30px_rgba(34,197,94,0.1)] sticky top-0 z-50">

      {/* Left Side */}
      <div className="flex items-center gap-8 text-sm font-medium text-gray-400">
        <span className="hover:text-white cursor-pointer transition-colors">Movies</span>
        <span className="hover:text-white cursor-pointer transition-colors">TV Shows</span>
        <div className="relative py-2">
          <span className="text-[#22c55e] cursor-pointer">New & Popular</span>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#22c55e] rounded-full"></div>
        </div>
        <span className="hover:text-white cursor-pointer transition-colors">My List</span>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">

        {/* Search with Dropdown */}
        <div className="relative" ref={searchRef}>
          
          {/* Input */}
          <div className="relative group">
            <Search 
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#22c55e] transition-colors" 
              size={18} 
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => results.length > 0 && setShowDropdown(true)}
              placeholder="Search titles..."
              className="bg-[#1a1b26] text-sm text-white pl-10 pr-8 py-2 rounded-full border border-transparent focus:border-[#22c55e]/50 focus:outline-none w-72 transition-all"
            />
            {/* Clear button */}
            {query && (
              <button 
                onClick={handleClear}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Dropdown */}
          {showDropdown && (
            <div className="absolute top-[calc(100%+8px)] left-0 w-72 bg-[#13141f] border border-white/10 rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] z-50">
              
              {/* Loading */}
              {loading ? (
                <div className="p-4 space-y-3">
                  {Array(3).fill(0).map((_, i) => (
                    <div key={i} className="flex gap-3 animate-pulse">
                      <div className="w-10 h-14 bg-white/5 rounded-lg shrink-0" />
                      <div className="flex-1 space-y-2 py-1">
                        <div className="h-3 bg-white/5 rounded w-3/4" />
                        <div className="h-3 bg-white/5 rounded w-1/4" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : results.length > 0 ? (
                <>
                  {/* Movie Results */}
                  <div className="py-2">
                    {results.map((movie) => (
                      <div
                        key={movie.id}
                        className="flex items-center gap-3 px-3 py-2.5 hover:bg-white/5 cursor-pointer transition-colors group"
                      >
                        {/* Poster */}
                        <div className="w-10 h-14 rounded-lg overflow-hidden shrink-0 bg-white/5">
                          <img
                            src={movie.small_cover_image}
                            alt={movie.title}
                            className="w-full h-full object-cover"
                            onError={(e) => e.target.src = 'https://via.placeholder.com/40x56?text=N/A'}
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-sm font-medium truncate group-hover:text-[#a3c9ff] transition-colors">
                            {movie.title}
                          </p>
                          <p className="text-gray-500 text-xs mt-0.5">{movie.year}</p>
                        </div>

                        {/* Rating */}
                        {movie.rating > 0 && (
                          <span className="text-[#ffb800] text-xs font-bold shrink-0">
                            ★ {movie.rating}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Advanced Search Button — bilkul YTS jaisa! */}
                  <div className="border-t border-white/5">
                    <button className="w-full flex flex-col items-center justify-center gap-0.5 py-3 bg-[#22c55e]/10 hover:bg-[#22c55e]/20 transition-colors group">
                      <div className="flex items-center gap-2">
                        <Search size={14} className="text-[#22c55e]" />
                        <span className="text-[#22c55e] text-sm font-semibold">Advanced Search</span>
                      </div>
                      <span className="text-gray-500 text-xs">Find more results and apply filters</span>
                    </button>
                  </div>
                </>
              ) : (
                <div className="p-4 text-center text-gray-500 text-sm">
                  No results found for "{query}"
                </div>
              )}
            </div>
          )}
        </div>

        {/* Notification Bell */}
        <button className="text-gray-400 hover:text-white transition-colors">
          <Bell size={20} />
        </button>

        {/* Profile Avatar */}
        <div className="w-8 h-8 rounded-lg overflow-hidden border border-gray-700 cursor-pointer">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
            alt="user"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </nav>
  );
};

export default Nav;