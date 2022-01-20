import React from 'react';
import { useParams } from 'react-router-dom';

import { IParams } from '../../@types';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { List } from '../../components/List';
import Loading from '../../components/Loading';
import { useSearchFetch } from '../../hooks/useSearchFetch';

const Search: React.FC = () => {
    const { movie }: IParams = useParams();
    const { loading, movies } = useSearchFetch(movie || '');

    if (loading) return <Loading />;

    return (
        <>
            <Header />
            <List listName="Results" listRenderWith={movies} isMovie={true} />
            <Footer />
        </>
    );
};

export default Search;
