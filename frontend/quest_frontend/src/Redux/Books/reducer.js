import React from 'react'
import { GET_BOOKS_FAILURE, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from './actionTypes';

const initialState = {
    books: [],
    isLoading: false,
    isError: false,
}

export const reducer = (oldstate = initialState, { type, payload }) => {

    switch (type) {
        case GET_BOOKS_REQUEST:
            return { ...oldstate, isLoading: true }

        case GET_BOOKS_SUCCESS:
            return { ...oldstate, isLoading: false, books: payload }

        case GET_BOOKS_FAILURE:
            return { ...oldstate, isError: true }

        default:
            return oldstate;
    }


}
