export interface IMovie {
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
}
