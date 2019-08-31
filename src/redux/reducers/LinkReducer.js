import { Type } from '../actions/LinkActions.js';

const initState = "https://api.themoviedb.org/3/movie/now_playing?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru-RU&page=1";

const linkReducer = (state = initState, { type, payload }) =>
{
    switch (type) {
    case Type.CHANGE_LINK:
        return payload;

    default:
        return state;
}}
export default linkReducer;