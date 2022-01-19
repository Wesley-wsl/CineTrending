import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

export const keyApi = process.env.REACT_APP_IMDB_API_KEY;
