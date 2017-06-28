import {GET_INSTRUCTORS, GET_INSTRUCTOR, RESET_INSTRUCTOR} from '../actions/instructor_actions';

const instructors = (state={all:[], selected:null}, action) => {
    switch(action.type){
        case GET_INSTRUCTORS:
            return {
                ...state,
                all: action.payload.data
            };
        case GET_INSTRUCTOR:
            return {
                ...state,
                selected: action.payload.data
            };
        case RESET_INSTRUCTOR:
            return {
                ...state,
                selected: action.payload
            };
        default:
            return state;
    }

};

export default instructors;