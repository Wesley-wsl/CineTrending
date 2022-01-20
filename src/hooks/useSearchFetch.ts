import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { IMovie } from '../@types';
import { api, keyApi } from '../services/api';

async function getMovies(
    setMovies: Dispatch<SetStateAction<IMovie[]>>,
    movie: string,
) {
    await api
        .get(
            `search/movie?api_key=${keyApi}&language=en-US&query=${movie}&page=1&include_adult=false`,
        )
        .then(res => {
            const movie = res.data.results.filter(
                (element: IMovie) =>
                    element.backdrop_path !== null &&
                    element.poster_path !== null,
            );

            setMovies(movie);
        });
}

export function useSearchFetch(movie: string) {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        getMovies(setMovies, movie)
            .then(() => setLoading(false))
            .catch(error => console.log(error));
    }, [movie]);

    return { loading, movies };
}
