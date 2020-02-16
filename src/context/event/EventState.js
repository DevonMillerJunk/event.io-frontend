import React, { useReducer } from 'react';
import axios from 'axios';

import eventReducer from './eventReducer';
import EventContext from './eventContext';
import { 
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    GET_EVENTS,
    EVENT_ERROR,
    EVENT_SUCCESS,
    GET_EVENT,
    UPDATE_EVENT
} from '../types';


const EventState = props => {
    const initialState = {
        title: null,
        description: null,
        location: null,
        timeline: null
    };

    const [state, dispatch] = useReducer(eventReducer, initialState);

    // @todo Need to finish the reducer implementation, and how the components handle it.

    // Get all events
    const getEvents = async () => {
        try {
            const res = await axios.get("/events");
            dispatch({ type: GET_EVENTS, payload: res.data });
        } catch (error) {
            dispatch({ type: EVENT_ERROR });
        }
    }

    // Creating an event
    const createEvent = async FormData => {
        const config = {
            headers: {
              'Content-Type': 'application/json'
            }
        };
        try {
            const res = await axios.post("/events", FormData, config);
            dispatch({
                type: EVENT_SUCCESS,
                payload: res
            });

        } catch (error) {
            dispatch({
                type: EVENT_ERROR,
                payload: error.response.msg
            })
        }
    }

    // Get specific event
    const getEvent = async id => {
        try {
            const res = await axios.get(`/events/:${id}`);
            dispatch({ type: GET_EVENT, payload: res.data }); // Update state
        } catch (error) {
            dispatch({ type: EVENT_ERROR });
        }
    }

    // Update an event
    // const updateEvent = async id => {
    //     try {
    //         const res = await axios.put(`/events/:${id}`);
    //         dispatch({ type: UPDATE_EVENT, payload: res.data });
    //     } catch (error) {
    //         dispatch({ type: EVENT_ERROR });
    //     }
    // }

    // Delete an event
    const delEvent = id => {
        try {
            const res = axios.delete(`/events/:${id}`);
            dispatch({ type: 'DELETE_EVENT', payload: res.data });
        } catch (error) {
            dispatch({ type: 'EVENT_ERROR' });
        }
    }

    // Register a user for an event
    const regUserEvent = (eId, uId) => {
        const config = {
            headers: {
              'Content-Type': 'application/json'
            }
        };
        const body = { uId };
        try {
            const res = axios.post(`events/:${eId}/register`, body, config);
            dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
        } catch (error) {
            dispatch({ type: 'EVENT_ERROR' });
        }
    }

    return (
        <EventContext.Provider
            value={{
                title: state.title,
                description: state.description,
                location: state.location,
                ownerId: state.ownerId,
                timeline:state.timeline,
                createEvent,
                getEvents,
                getEvent,
                // updateEvent,
                delEvent,
                regUserEvent
            }}
        >
          {props.children}
        </EventContext.Provider>
      );
}

export default EventState;