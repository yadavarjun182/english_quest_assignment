import React from 'react'
import { GET_LOGIN_ERROR, GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS } from './actionTypes'

const initialState = {
    isAuth: false,
    isLoading: false,
    token: "",
    isError: false,
}


export const reducer = (oldstate = initialState, { type, payload }) => {
    switch (type) {
        case GET_LOGIN_REQUEST:
            return { ...oldstate, isLoading: true }
        case GET_LOGIN_SUCCESS:
            return { ...oldstate, isLoading: false, isAuth: true, token: payload }
        case GET_LOGIN_ERROR:
            return { ...oldstate, isLoading: false, isError: true }
        default:
            return oldstate;
    }
}

