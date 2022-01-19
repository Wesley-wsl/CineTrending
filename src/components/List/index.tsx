import { Link } from 'react-router-dom';

import { IList, IMovie } from '../../@types';
import { ListName } from '../../pages/Home/styles';
import { ListStyle } from './styles';

export function List({ listRenderWith, isMovie, listName }: IList) {
    return (
        <>
            <ListName>{listName}</ListName>
            <ListStyle>
                {listRenderWith.map((movie: IMovie, index: number) => (
                    <div key={index}>
                        <Link
                            to={`/details${isMovie ? '' : '/tv'}/${movie.id}`}
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
                ))}
            </ListStyle>
        </>
    );
}
