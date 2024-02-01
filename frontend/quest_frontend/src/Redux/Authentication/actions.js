import axios from "axios"
import { GET_LOGIN_ERROR, GET_LOGIN_SUCCESS } from "./actionTypes"

const getLoginRequest = () => {
    return { type: GET_LOGIN_REQUEST }
}

const getLoginSuccess = (payload) => {
    return { type: GET_LOGIN_SUCCESS, payload: payload }
}

const getLoginError = () => {
    return { type: GET_LOGIN_ERROR }
}

const login = (userData) => (dispatch) => {
    dispatch(getLoginRequest())
    axios.post("https://reqres.in/api/login", userData).then((res) => {
        console.log(res.data.token)
        dispatch(getLoginSuccess(res.data.token))
    }).catch((err) => {
        dispatch(getLoginError())
    })
}
