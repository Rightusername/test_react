import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import studio from './studio';
import filterStudios from './filterStudios';

export default combineReducers({
    routing: routerReducer,
    studio,
    filterStudios
});