import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import * as S from './style';

export default function Header() {
    const [movie, setMovie] = useState(String);
    const navigate = useNavigate();

    function handleSearchMovie() {
        navigate(`/search/${movie.trim()}`);
    }

    return (
        <S.HeaderMain>
            <h1>
                <Link to="/">CineTrending</Link>
            </h1>

            <S.SearchMovie onSubmit={handleSearchMovie}>
                <input
                    type="text"
                    placeholder="search movie"
                    onChange={e => setMovie(e.target.value)}
                />
                <button type="submit" aria-label="search movie">
                    <i className="fas fa-search" />
                </button>
            </S.SearchMovie>
        </S.HeaderMain>
    );
}
