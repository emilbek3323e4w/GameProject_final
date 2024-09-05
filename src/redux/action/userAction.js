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
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from "../types";


export const registerUser = (userData) => {
    return async (dispatch) => {
        dispatch({ type: REGISTER_REQUEST });
        try {
            const response = await axios.post('https://capr11.pythonanywhere.com/api/register/', userData);

            dispatch({
                type: REGISTER_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: REGISTER_FAILURE,
                payload: error.message || 'Registration failed'
            });
        }
    };
};




export const loginUser = (userData) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_REQUEST });
        try {
            const response = await axios.post('https://capr11.pythonanywhere.com/api/login/', userData);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            });
            localStorage.setItem('token', response.data.token);
            console.log('token', response.data.token)
        } catch (error) {
            dispatch({
                type: LOGIN_FAILURE,
                payload: error.message || 'Ошибка при попытке входа'
            });

            console.error("Ошибка при логине:", error.message);
        }
    };
};
