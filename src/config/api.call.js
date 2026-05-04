import axios from "axios";
import { BASE_URL, LIST_MOVIES_ENDPOINT } from "./api.config";

// ─── 1. Movies List (with filters) ───────────────────────────────────────────
export const getMovieListData = async (params = {}) => {
    try {
        const { page = 1, genre, quality, rating, language, sortBy, query_term, year } = params;

        const queryParams = new URLSearchParams();
        queryParams.append('page', page);
        queryParams.append('limit', 20);

        if (genre && genre !== 'all')        queryParams.append('genre', genre);
        if (quality && quality !== 'all')    queryParams.append('quality', quality);
        if (rating && rating !== '0')        queryParams.append('minimum_rating', rating);
        if (language && language !== 'all')  queryParams.append('language', language);
        if (sortBy && sortBy !== 'latest')   queryParams.append('sort_by', sortBy);
        if (query_term && query_term.trim()) queryParams.append('query_term', query_term);
        if (year && year !== '0')            queryParams.append('year', year);

        const url = `${LIST_MOVIES_ENDPOINT}?${queryParams.toString()}`;
        console.log("Fetching URL:", url);

        const response = await axios.get(url);
        return {
            movies: response.data.data.movies || [],
            movie_count: response.data.data.movie_count || 0
        };
    } catch (error) {
        console.error("API Call Error:", error);
        return { movies: [], movie_count: 0 };
    }
};

// ─── 2. Single Movie Details ──────────────────────────────────────────────────
export const getMovieDetails = async (movieId) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/api/v2/movie_details.json?movie_id=${movieId}`
        );
        return response.data.data.movie || null;
    } catch (error) {
        console.error("Movie Detail Error:", error);
        return null;
    }
};

// ─── 3. Similar Movies ────────────────────────────────────────────────────────
export const getSimilarMovies = async (movieId) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/api/v2/movie_suggestions.json?movie_id=${movieId}`
        );
        return response.data.data.movies || [];
    } catch (error) {
        console.error("Similar Movies Error:", error);
        return [];
    }
};