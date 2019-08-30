import {createStore, combineReducers} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import LinkReducer from './reducers/LinkReducer';
const rootReducer = combineReducers({
    link: LinkReducer,
})

const store = createStore(rootReducer, devToolsEnhancer());

export default store;