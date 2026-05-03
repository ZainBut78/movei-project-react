import React, { useState, useEffect, useRef } from 'react';
import MovieFilters from '../components/MovieFilters';
import MovieGrid from '../components/MovieGrid';
import { getMovieListData } from '../config/api.call';

const BrowsePage = () => {
    const [search, setSearch] = useState('');
    const [filters, setFilters] = useState({
        genre: 'all',
        quality: 'all',
        rating: '0',
        year: '0',
        language: 'all',
        sortBy: 'latest',
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
        setCurrentPage(1);
    };

    const fetchMovies = async (searchVal, filtersVal, pageVal) => {
        setLoading(true);
        try {
            const result = await getMovieListData({
                page: pageVal,
                ...filtersVal,
                query_term: searchVal
            });
            setMovies(result.movies);
            setTotalPages(Math.ceil(result.movie_count / 20));
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // ✅ Search debounce — 500ms baad fetch
    useEffect(() => {
        const timer = setTimeout(() => {
            fetchMovies(search, filters, currentPage);
        }, 500);
        return () => clearTimeout(timer);
    }, [search, filters, currentPage]);

    return (
        <div className="min-h-screen bg-[#101419] px-6 py-8">
            <MovieFilters
                filters={filters}
                onFilterChange={handleFilterChange}
                search={search}
                onSearchChange={(val) => {
                    setSearch(val);
                    setCurrentPage(1);
                }}
            />
            <MovieGrid
                movies={movies}
                loading={loading}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default BrowsePage;