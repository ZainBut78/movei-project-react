import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getMovieDetails, getSimilarMovies } from '../config/api.call';
import MoviePoster    from '../components/movieDetail/MoviePoster';
import MovieInfo      from '../components/movieDetail/MovieInfo';
import MovieTrailer   from '../components/movieDetail/MovieTrailer';
import TechSpecs      from '../components/movieDetail/TechSpecs';
import TopCast        from '../components/movieDetail/TopCast';
import DirectorSection from '../components/movieDetail/DirectorSection';
import SimilarMovies  from '../components/movieDetail/SimilarMovies';
import CommentsSection from '../components/movieDetail/CommentsSection';

const DetailSkeleton = () => (
    <div className="min-h-screen bg-[#0d1117] animate-pulse">
        <div className="h-[400px] bg-white/5 w-full" />
        <div className="max-w-7xl mx-auto px-6 py-10 space-y-6">
            <div className="h-12 bg-white/5 rounded-xl w-2/3" />
            <div className="h-4 bg-white/5 rounded w-1/3" />
            <div className="h-32 bg-white/5 rounded-xl" />
        </div>
    </div>
);

const MovieDetailPage = () => {
    const { id } = useParams();
    const movieId = id || 10;

    const [movie, setMovie]     = useState(null);
    const [similar, setSimilar] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAll = async () => {
            setLoading(true);
            window.scrollTo({ top: 0 });
            const [movieData, similarData] = await Promise.all([
                getMovieDetails(movieId),
                getSimilarMovies(movieId)
            ]);
            setMovie(movieData);
            setSimilar(similarData);
            setLoading(false);
        };
        fetchAll();
    }, [movieId]);

    if (loading) return <DetailSkeleton />;
    if (!movie) return (
        <div className="min-h-screen bg-[#0d1117] flex items-center justify-center">
            <p className="text-white text-xl">Movie not found!</p>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#0d1117] text-white">

            {/* ── HERO BACKGROUND ───────────────────────── */}
            <div className="relative w-full h-[420px] overflow-hidden">
                <img
                    src={movie.background_image_original}
                    alt=""
                    className="w-full h-full object-cover object-top"
                />
                {/* Gradients */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117] via-[#0d1117]/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/40 to-transparent" />

                {/* Poster floating on hero */}
                <div className="absolute bottom-0 left-0 max-w-7xl w-full mx-auto px-4 md:px-8 flex items-end gap-8 pb-0"
                    style={{ left: '50%', transform: 'translateX(-50%)' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-[160px] md:w-[190px] shrink-0 rounded-xl overflow-hidden border-2 border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative -mb-0 z-10"
                    >
                        <img
                            src={movie.large_cover_image}
                            alt={movie.title}
                            className="w-full h-full object-cover"
                            onError={(e) => e.target.src = 'https://via.placeholder.com/190x285?text=No+Poster'}
                        />
                    </motion.div>
                </div>
            </div>

            {/* ── MAIN CONTENT ───────────────────────────── */}
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                {/* Top layout: Left sidebar + Right content */}
                <div className="flex flex-col lg:flex-row gap-8 mt-6">

                    {/* ── LEFT SIDEBAR ── */}
                    <div className="lg:w-[190px] shrink-0 space-y-3">
                        <MoviePoster movie={movie} />
                    </div>

                    {/* ── RIGHT CONTENT ── */}
                    <div className="flex-1 min-w-0 pt-2">
                        <MovieInfo movie={movie} />
                        <TopCast />
                        <MovieTrailer ytCode={movie.yt_trailer_code} />
                        <TechSpecs torrents={movie.torrents} runtime={movie.runtime} />
                    </div>
                </div>

                {/* ── BOTTOM SECTION ─────────────────────── */}
                <div className="flex flex-col lg:flex-row gap-8 mt-10 border-t border-white/5 pt-10">
                    {/* Director */}
                    <div className="lg:w-[190px] shrink-0">
                        <DirectorSection />
                    </div>

                    {/* Similar + Comments */}
                    <div className="flex-1 min-w-0">
                        <SimilarMovies movies={similar} />
                        <CommentsSection />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MovieDetailPage;