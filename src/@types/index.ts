export interface IMovie {
    title: string;
    backdrop_path: string;
    vote_average: number;
    overview: string;
    original_title: string;
    original_name: string;
    release_date: string;
    first_air_date: string;
    id: string;
    poster_path: string;
}

export interface IList {
    listRenderWith: IMovie[];
    isMovie: boolean;
    listName: string;
}

export interface IDetailsTemplate {
    data: IMovie;
    trailer: string;
}

export interface IParams {
    id?: string | number;
    idTv?: string | number;
    movie?: string;
}
