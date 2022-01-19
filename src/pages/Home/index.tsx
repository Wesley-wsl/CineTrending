import { useEffect, useState } from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { List } from '../../components/List';
import Loading from '../../components/Loading';
import { api, keyApi } from '../../services/api';
import * as S from './style';

export default function Home() {
    const [trendingTVs, setTrendingTVs] = useState(Object);
    const [trendingMovies, setTrendingMovies] = useState(Object);
    const [loading, setLoading] = useState(true);

    async function getTrendingMovies() {
        await api
            .get(`trending/movie/day?api_key=${keyApi}&page=1`)
            .then(res => setTrendingMovies(res.data.results.slice(0, 10)));
    }

    async function getTrendingTVs() {
        await api
            .get(`trending/tv/day?api_key=${keyApi}&page=1`)
            .then(res => setTrendingTVs(res.data.results.slice(0, 10)));
    }

    useEffect(() => {
        const abort = new AbortController();
        Promise.all([getTrendingMovies(), getTrendingTVs()])
            .then(() => {
                setLoading(false);
            })
            .catch(err => console.log(err));
        return () => abort.abort();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <Header />
            <main>
                <S.HeroImage>
                    <img
                        src={`https://image.tmdb.org/t/p/original${trendingMovies[0].backdrop_path}`}
                        alt="Hero Image"
                    />

                    <div>
                        <h1>{trendingMovies[0].title}</h1>
                        <p>{trendingMovies[0].overview}</p>
                        <p>
                            <i className="fas fa-star" />{' '}
                            {trendingMovies[0].vote_average}
                        </p>
                    </div>
                </S.HeroImage>

                <S.ListName>Trending Movies</S.ListName>
                <List listRenderWith={trendingMovies} isMovie={true} />

                <S.ListName>Trending TVs</S.ListName>
                <List listRenderWith={trendingTVs} isMovie={false} />
            </main>
            <Footer />
        </>
    );
}
