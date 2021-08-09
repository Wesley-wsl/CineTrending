import { HeroImage, ListName } from './style';
import { useEffect, useState } from 'react';
import { List } from '../../components/List';
import axios from 'axios';

export default function Home() {
    const [trendingTVs, setTrendingTVs] = useState(Object);
    const [existsTVs, setExistsTVs] = useState(Boolean);
    const [trendingMovies, setTrendingMovies] = useState(Object);
    const [existsMovies, setExistsMovies] = useState(Boolean);
    const api = {
        // eslint-disable-next-line no-undef
        key: process.env.REACT_APP_IMDB_API_KEY,
        base: 'https://api.themoviedb.org/3/',
        lang: 'en-US',
    };

    function getTrendingMovies() {
        axios
            .get(`${api.base}trending/movie/day?api_key=${api.key}`)
            .then(res => {
                setTrendingMovies(res.data);
                setExistsMovies(true);
            });
    }

    function getTrendingTVs() {
        axios.get(`${api.base}trending/tv/day?api_key=${api.key}`).then(res => {
            setTrendingTVs(res.data);
            setExistsTVs(true);
        });
    }

    useEffect(() => {
        getTrendingMovies();
        getTrendingTVs();
    });

    return (
        <main>
            {existsMovies ? (
                <HeroImage
                // backdrop={
                //     trendingMovies.results[Math.floor(Math.random() * 20)]
                //         .backdrop_path
                // }
                />
            ) : (
                ''
            )}

            <ListName>
                <h2>Trending Movies</h2>
            </ListName>
            {existsMovies ? (
                <List listRenderWith={trendingMovies} movie={true} />
            ) : (
                ''
            )}

            <ListName>
                <h2>Trending TVs</h2>
            </ListName>

            {existsTVs ? (
                <List listRenderWith={trendingTVs} movie={false} />
            ) : (
                ''
            )}
        </main>
    );
}
