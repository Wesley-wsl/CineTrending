import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { BackgroundImage, DetailsStyle } from './styles';

type Params = {
    id?: string | number;
    idTv?: string | number;
};

const Details: React.FC = () => {
    const { id }: Params = useParams();
    const [data, setData] = useState(Object);
    const [trailer, setTrailer] = useState(Object);
    window.scrollTo(0, 0);
    function getInfo() {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US`,
            )
            .then(res => {
                setData(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    function getTrailer() {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US`,
            )
            .then(res => {
                setTrailer(res.data.results[0].key);
            });
    }

    useEffect(() => {
        getInfo();
        getTrailer();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <DetailsStyle>
            <div>
                {data ? (
                    <>
                        <img
                            className="poster"
                            src={`https://image.tmdb.org/t/p/w185${data.poster_path}`}
                            alt="Poster"
                        />
                        <BackgroundImage>
                            <img
                                className="background"
                                src={`https://image.tmdb.org/t/p/w780${data.backdrop_path}`}
                                alt="background"
                            />
                        </BackgroundImage>
                    </>
                ) : (
                    'Loading...'
                )}

                <div>
                    <h2>
                        {data.original_title
                            ? data.original_title
                            : data.original_name}
                    </h2>

                    <p>
                        <span>OverView</span>: {data.overview}
                    </p>
                    <p>
                        <span>Companies</span>:{' '}
                        {data.production_companies
                            ? data.production_companies.map(
                                  (companies: { name: string }) =>
                                      `${companies.name} | `,
                              )
                            : 'Loading...'}
                    </p>
                    <p>
                        <span>Genres</span>:{' '}
                        {data.genres
                            ? data.genres.map(
                                  (genre: { name: string }) =>
                                      `${genre.name} | `,
                              )
                            : 'Loading...'}
                    </p>
                    <p>
                        <span>Duration</span>: {`${data.runtime} min.`}
                    </p>

                    <span>
                        <i className="fas fa-star"></i> {data.vote_average}
                    </span>
                    <a
                        href={`https://www.youtube.com/watch?v=${trailer}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button> Watch Trailer</button>
                    </a>
                </div>
            </div>
        </DetailsStyle>
    );
};

export default Details;
