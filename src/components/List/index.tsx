import { ListStyle } from './styles';

export function List(props: any) {
    return (
        <ListStyle>
            {props.listRenderWith.results.map((movie: any, index: number) => {
                if (index < 10) {
                    return (
                        <div key={index}>
                            <img
                                src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                                alt="Poster"
                            />
                            <p>
                                {props.movie
                                    ? movie.original_title
                                    : movie.original_name}
                            </p>
                            <p className="year">
                                {props.movie
                                    ? movie.release_date
                                    : movie.first_air_date}
                            </p>
                        </div>
                    );
                }
            })}
        </ListStyle>
    );
}
