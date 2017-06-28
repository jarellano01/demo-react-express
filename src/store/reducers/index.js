import { combineReducers } from 'redux';
import pages from './pagesReducer';
import instructors from './instructorReducer';

const reducers = combineReducers({
    pages,
    instructors
});

export default reducers;