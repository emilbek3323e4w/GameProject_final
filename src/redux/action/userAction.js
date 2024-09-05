// import axios from "axios";
// import {REGISTER_USER} from "../types";
//
//
//
//
// export const getUsers=()=>{
//     return dispatch=>{
//         axios('https://capr11.pythonanywhere.com/api/users/')
//     }
// }
//
//
// export const registerUser = (newUser) => {
//     return dispatch => {
//        axios.post('https://capr11.pythonanywhere.com/api/register', newUser)
//            .then(({data})=>dispatch({type:REGISTER_USER, payload: data}))
//     }
// }


import axios from "axios";
import { REGISTER_USER, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from "../types";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../types";


export const getUsers = () => {
    return dispatch => {

        dispatch({ type: 'FETCH_USERS_REQUEST' });

        axios.get('https://capr11.pythonanywhere.com/api/users/')
            .then(response => {

                dispatch({
                    type: FETCH_USERS_SUCCESS,
                    payload: response.data
                });
            })
            .catch(error => {
                // Обработка ошибки
                dispatch({
                    type: FETCH_USERS_ERROR,
                    payload: error.message
                });
            });
    };
};


export const registerUser = (newUser) => {
    return dispatch => {
        axios.post('https://capr11.pythonanywhere.com/api/register', newUser)
            .then(response => {

                dispatch({
                    type: REGISTER_USER,
                    payload: response.data
                });
            })
            .catch(error => {

                console.error('Error registering user:', error.message);
            });
    };
};





export const loginUser = (userData) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_REQUEST });
        try {
            const response = await axios.post('https://capr11.pythonanywhere.com/api/login', userData);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            });
            localStorage.setItem('token', response.data.token);

        } catch (error) {
            dispatch({
                type: LOGIN_FAILURE,
                payload: error.message || 'Ошибка при попытке входа'
            });

            console.error("Ошибка при логине:", error.message);
        }
    };
};
