import { Type } from '../actions/LinkActions.js';

const linkReducer = (state = "hello", { type, payload }) =>
{switch (type) {
    case Type.CHANGE_LINK:
        return payload;

    default:
        return state;
}}
export default linkReducer;