import {
    GET_EVENTS,
    EVENT_ERROR,
    EVENT_SUCCESS,
    GET_EVENT,
    REGISTER_EVENT_SUCCESS,
    CREATE_EVENT
  } from '../types';
  
  export default (state, action) => {
    switch(action.type){
        case CREATE_EVENT:
            return {
                ...state,
                events: [action.payload, ...state.events],
                isAuthenticated: true,
                loading: false
            }
        case GET_EVENTS:
            return{
                ...state,
                events: action.payload
            }
        case GET_EVENT:
        default:
            return state;
    }
  };
  