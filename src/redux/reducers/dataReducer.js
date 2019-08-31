import { Type } from '../actions/dataActions';

const dataReducer = (state = [], { type, payload }) =>
{switch (type) {
    case Type.CHANGE_DATA:
        return payload;

    default:
        return state;
}}
export default dataReducer;