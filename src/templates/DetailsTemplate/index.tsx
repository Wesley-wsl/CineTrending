import { IDetailsTemplate } from '../../@types';
import Cast from '../../components/Cast';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import * as S from './styles';

const DetailsTemplate: React.FC<IDetailsTemplate> = ({
    data,
    cast,
    trailer,
}) => {
    return (
        <>
            <Header />

            <S.DetailsStyle>
                <S.BackgroundImage
                    className="background"
                    src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
                    alt="background"
                />

                <S.MainInformations>
                    <S.Poster
                        className="poster"
                        src={`https://image.tmdb.org/t/p/w185${data.poster_path}`}
                        alt="Poster"
                    />
                    <div>
                        <h2>
                            {data.original_title
                                ? data.original_title
                                : data.original_name}
                        </h2>

                        <span>
                            <i className="fas fa-star"></i> {data.vote_average}
                        </span>

                        <button>
                            <a
                                href={`https://www.youtube.com/watch?v=${trailer}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Watch Trailer{' '}
                            </a>
                        </button>
                    </div>
                </S.MainInformations>

                <S.Overview>
                    <h2>Overview</h2>
                    <p>{data.overview}</p>
                    <p>
                        <span>Genres:</span>
                        {data.genres.map(
                            genres =>
                                ` ${genres.name}${
                                    genres ===
                                    data.genres[data.genres.length - 1]
                                        ? '.'
                                        : ','
                                }`,
                        )}
                    </p>
                    <p>
                        <span>Status:</span> {data.status}
                    </p>
                </S.Overview>
                <Cast cast={cast} />
            </S.DetailsStyle>
            <Footer />
        </>
    );
};

export default DetailsTemplate;
