import {createStore, combineReducers} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import LinkReducer from './reducers/LinkReducer';
import DataReducer from './reducers/dataReducer';

const rootReducer = combineReducers({
    link: LinkReducer,
    data: DataReducer,
})

const store = createStore(rootReducer, devToolsEnhancer());

export default store;