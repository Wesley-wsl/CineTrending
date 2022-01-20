import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { List } from '../../components/List';
import Loading from '../../components/Loading';
import { useTrendingFetch } from '../../hooks/useTrendingFetch';
import * as S from './styles';

export default function Home() {
    const { trendingMovies, trendingTvs, loading } = useTrendingFetch();

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

                <List
                    listName="Trending Movies"
                    listRenderWith={trendingMovies}
                    isMovie={true}
                />

                <List
                    listName="Trending TVs"
                    listRenderWith={trendingTvs}
                    isMovie={false}
                />
            </main>
            <Footer />
        </>
    );
}
