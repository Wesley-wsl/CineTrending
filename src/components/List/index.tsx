import { Link } from 'react-router-dom';

import { ListStyle } from './styles';

type MovieProps = {
    // eslint-disable-next-line @typescript-eslint/ban-types
    movie: Array<Object>;
    original_title: string;
    original_name: string;
    release_date: string;
    first_air_date: string;
    id: string;
    poster_path: string;
};

type ListProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    listRenderWith: any;
    isMovie: boolean;
};

export function List(props: ListProps) {
    return (
        <ListStyle>
            {props.listRenderWith.map((movie: MovieProps, index: number) => {
                if (index < 10) {
                    return (
                        <div key={index}>
                            <Link
                                to={`./details${props.isMovie ? '' : '/tv'}/${
                                    movie.id
                                }`}
                            >
                                <img
                                    src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                                    alt="Poster"
                                />
                                <p>
                                    {movie.original_title
                                        ? movie.original_title
                                        : movie.original_name}
                                </p>
                                <p className="year">
                                    {movie.release_date
                                        ? movie.release_date
                                        : movie.first_air_date}
                                </p>
                            </Link>
                        </div>
                    );
                }
            })}
        </ListStyle>
    );
}
