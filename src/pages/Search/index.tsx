import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { IMovie, IParams } from '../../@types';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { List } from '../../components/List';
import Loading from '../../components/Loading';
import { api, keyApi } from '../../services/api';

const Search: React.FC = () => {
    const { movie }: IParams = useParams();
    const [data, setData] = useState<IMovie[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    async function getMovieData() {
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

                setData(movie);
            });
    }

    useEffect(() => {
        Promise.all([getMovieData()])
            .then(() => setTimeout(() => setLoading(false), 400))
            .catch(() => navigate('/'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) return <Loading />;

    return (
        <>
            <Header />
            <List listName="Results" listRenderWith={data} isMovie={true} />
            <Footer />
        </>
    );
};

export default Search;
