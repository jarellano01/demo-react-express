import axios from 'axios';

export const GET_INSTRUCTORS = 'GET_INSTRUCTORS';
export const GET_INSTRUCTOR = 'GET_INSTRUCTOR';
export const RESET_INSTRUCTOR = 'RESET_INSTRUCTOR';

export function getInstructors() {
    const request = axios.get('/api/instructor/all');
    return {
        type: GET_INSTRUCTORS,
        payload: request
    }
}

export function getInstructor(id) {
    const request = axios.get(`/api/instructor/${id}`);
    return {
        type: GET_INSTRUCTOR,
        payload: request
    }
}

export function resetSelectedInstructor(){
    return {
        type: RESET_INSTRUCTOR,
        payload: null
    }
}