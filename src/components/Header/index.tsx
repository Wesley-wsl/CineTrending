import { Link } from 'react-router-dom';

import * as S from './style';

export default function Header() {
    return (
        <S.HeaderMain>
            <h1>
                <Link to="/">CineTrending</Link>
            </h1>

            <S.SearchMovie>
                <input type="text" placeholder="search movie" />
                <button type="button" aria-label="search movie">
                    <i className="fas fa-search" />
                </button>
            </S.SearchMovie>
        </S.HeaderMain>
    );
}
