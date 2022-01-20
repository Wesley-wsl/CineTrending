import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Cast, IMovie } from '../@types';
import { api, keyApi } from '../services/api';

async function getDetails(
    setMovieDetails: Dispatch<SetStateAction<IMovie>>,
    id: string,
    isMovie: boolean,
) {
    const type = isMovie ? 'movie' : 'tv';

    return await api
        .get(`${type}/${id}?api_key=${keyApi}&language=en-US`)
        .then(res => setMovieDetails(res.data));
}

async function getCast(
    setCast: Dispatch<SetStateAction<Cast[]>>,
    id: string,
    isMovie: boolean,
) {
    const type = isMovie ? 'movie' : 'tv';

    await api
        .get(`${type}/${id}/credits?api_key=${keyApi}&language=en-US`)
        .then(res =>
            setCast(
                res.data.cast.filter(
                    (person: Cast) => person.profile_path !== null,
                ),
            ),
        );
}

async function getTrailer(
    setTrailer: Dispatch<SetStateAction<string>>,
    id: string,
    isMovie: boolean,
) {
    const type = isMovie ? 'movie' : 'tv';

    await api
        .get(`${type}/${id}/videos?api_key=${keyApi}&language=en-US`)
        .then(res => {
            setTrailer(res.data.results[0].key);
        });
}

export function useDetails(movieid: string, isMovie: boolean) {
    const [details, setDetails] = useState<IMovie>(Object);
    const [trailer, setTrailer] = useState(String);
    const [cast, setCast] = useState<Cast[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        Promise.all([
            getDetails(setDetails, movieid, isMovie),
            getTrailer(setTrailer, movieid, isMovie),
            getCast(setCast, movieid, isMovie),
        ])
            .then(() => setLoading(false))
            .catch(error => {
                console.log(error);
                navigate('/notfound');
            });
    }, [isMovie, movieid, navigate]);

    return { loading, details, trailer, cast };
}
