import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, getSimilarMovies } from '../config/api.call';

// ✅ Sab components import
import MoviePoster    from '../components/movieDetail/MoviePoster';
import MovieInfo      from '../components/movieDetail/MovieInfo';
import MovieTrailer   from '../components/movieDetail/MovieTrailer';
import TechSpecs      from '../components/movieDetail/TechSpecs';
import SimilarMovies  from '../components/movieDetail/SimilarMovies';

// Loading Skeleton
const DetailSkeleton = () => (
    <div className="min-h-screen bg-[#101419] max-w-7xl mx-auto px-6 py-10 animate-pulse">
        <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-[220px] h-[330px] bg-white/5 rounded-xl shrink-0" />
            <div className="flex-1 space-y-4">
                <div className="h-12 bg-white/5 rounded-xl w-3/4" />
                <div className="h-4 bg-white/5 rounded w-1/2" />
                <div className="h-32 bg-white/5 rounded-xl mt-6" />
                <div className="h-32 bg-white/5 rounded-xl" />
            </div>
        </div>
    </div>
);

const MovieDetailPage = () => {
    const { id } = useParams();
    const movieId = id || 10; // ← yeh line add karo

    const [movie, setMovie]   = useState(null);
    const [similar, setSimilar] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAll = async () => {
            setLoading(true);
            window.scrollTo({ top: 0 });
            const [movieData, similarData] = await Promise.all([
                getMovieDetails(movieId),  // ← id → movieId
                getSimilarMovies(movieId)  // ← id → movieId
            ]);
            setMovie(movieData);
            setSimilar(similarData);
            setLoading(false);
        };
        fetchAll();
    }, [movieId]); // ← id → movieId

    if (loading) return <DetailSkeleton />;
    if (!movie) return (
        <div className="min-h-screen bg-[#101419] flex items-center justify-center text-white text-xl">
            Movie not found!
        </div>
    );

    return (
        <div className="min-h-screen bg-[#101419] text-white">

            {/* Blurred Background */}
            <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
                <img src={movie.background_image_original} alt="" className="w-full h-full object-cover blur-2xl scale-110" />
                <div className="absolute inset-0 bg-[#101419]/80" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">

                {/* Top Section — Poster + Info */}
                <div className="flex flex-col lg:flex-row gap-10">
                    <MoviePoster movie={movie} />

                    <div className="flex-1 min-w-0">
                        <MovieInfo    movie={movie} />
                        <MovieTrailer ytCode={movie.yt_trailer_code} />
                        <TechSpecs    torrents={movie.torrents} runtime={movie.runtime} />
                    </div>
                </div>

                {/* Similar Movies */}
                <SimilarMovies movies={similar} />

            </div>
        </div>
    );
};

export default MovieDetailPage;