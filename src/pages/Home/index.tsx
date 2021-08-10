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

    const TopMovies: any = [];
    const TopTVs: any = [];

    function getTrendingMovies() {
        axios
            .get(`${api.base}trending/movie/day?api_key=${api.key}`)
            .then(res => {
                for (let i = 0; i < 10; i++) {
                    TopMovies.push(res.data.results[i]);
                }

                setTrendingMovies(TopMovies);
                setExistsMovies(true);
            })
            .catch(error => {
                console.log(`Houve um erro: ${error}`);
            });
    }

    function getTrendingTVs() {
        axios
            .get(`${api.base}trending/tv/day?api_key=${api.key}`)
            .then(res => {
                for (let i = 0; i < 10; i++) {
                    TopTVs.push(res.data.results[i]);
                }

                setTrendingTVs(TopTVs);
                setExistsTVs(true);
            })
            .catch(error => {
                console.log(`Houve um erro: ${error}`);
            });
    }

    useEffect(() => {
        getTrendingMovies();
        getTrendingTVs();
    }, []);

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
                <h2>TOP 10 - Trending Movies Today</h2>
            </ListName>
            {existsMovies ? <List listRenderWith={trendingMovies} /> : ''}

            <ListName>
                <h2>TOP 10 - Trending TVs Today</h2>
            </ListName>

            {existsTVs ? <List listRenderWith={trendingTVs} /> : ''}
        </main>
    );
}
