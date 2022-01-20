import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { IMovie } from '../@types';
import { api, keyApi } from '../services/api';

async function getTrendingMovies(
    setTrendingMovies: Dispatch<SetStateAction<IMovie[]>>,
) {
    await api
        .get(`trending/movie/day?api_key=${keyApi}&page=1`)
        .then(res => setTrendingMovies(res.data.results.slice(0, 10)));
}

async function getTrendingTVs(
    setTrendingTvs: Dispatch<SetStateAction<IMovie[]>>,
) {
    await api
        .get(`trending/tv/day?api_key=${keyApi}&page=1`)
        .then(res => setTrendingTvs(res.data.results.slice(0, 10)));
}

export function useTrendingFetch() {
    const [loading, setLoading] = useState(true);
    const [trendingMovies, setTrendingMovies] = useState<IMovie[]>([]);
    const [trendingTvs, setTrendingTvs] = useState<IMovie[]>([]);

    useEffect(() => {
        Promise.all([
            getTrendingMovies(setTrendingMovies),
            getTrendingTVs(setTrendingTvs),
        ])
            .then(() => setLoading(false))
            .catch(error => console.log(error));
    }, []);

    return { trendingMovies, trendingTvs, loading };
}
