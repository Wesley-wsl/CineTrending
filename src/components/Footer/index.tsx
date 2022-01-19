import * as S from './style';

export default function Footer() {
    return (
        <S.Container>
            <h1>
                CineTrending <span> © 2021</span>
            </h1>

            <p>
                powered by <a href="https://www.themoviedb.org">tmdb</a>
            </p>
        </S.Container>
    );
}
