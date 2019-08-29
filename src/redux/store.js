import {createStore, combineReducers} from 'redux';
import {devtoolsEnchancer} from 'redux-devtools-extension';
import LinkReducer from './reducers/LinkReducer.js';

const rootReducer = combineReducers({
    link: LinkReducer,
})

const store = createStore(rootReducer, devtoolsEnchancer);

export default store;