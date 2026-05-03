import axios from "axios";
import { LIST_MOVIES_ENDPOINT } from "./api.config";

export const getMovieListData = async (params = {}) => {
    try {
        const { page = 1, genre, quality, rating, language, sortBy, query_term } = params;

        const queryParams = new URLSearchParams();
        queryParams.append('page', page);
        queryParams.append('limit', 20);

        if (genre && genre !== 'all')       queryParams.append('genre', genre);
        if (quality && quality !== 'all')   queryParams.append('quality', quality);
        if (rating && rating !== '0')       queryParams.append('minimum_rating', rating);
        if (language && language !== 'all') queryParams.append('language', language);
        if (sortBy && sortBy !== 'latest')  queryParams.append('sort_by', sortBy);
        if (query_term && query_term.trim()) queryParams.append('query_term', query_term);

        const url = `${LIST_MOVIES_ENDPOINT}?${queryParams.toString()}`;
        console.log("Fetching URL:", url); // debug ke liye

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