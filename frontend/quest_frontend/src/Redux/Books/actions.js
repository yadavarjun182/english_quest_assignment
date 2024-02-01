import { GET_BOOKS_FAILURE, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from "./actionTypes"
import axios from 'axios';

const getBooksRequestAction = () => {
    return { type: GET_BOOKS_REQUEST }
}

const getBooksSuccessAction = (payload) => {
    return { type: GET_BOOKS_SUCCESS, payload }
}

const getBooksFailureAction = () => {
    return { type: GET_BOOKS_FAILURE }
}


export const getBooks = (param) => (dispatch) => {
    console.log(param)
    dispatch(getBooksRequestAction())
    axios.get('http://localhost:7356/books', param).then((res) => {
        dispatch(getBooksSuccessAction(res.data))
    }).catch((err) => {
        dispatch(getBooksFailureAction())
    })
}