import axios from "axios";
import {REGISTER_USER} from "../types";




export const getUsers=()=>{
    return dispatch=>{
        axios('https://capr11.pythonanywhere.com/api/users/')
    }
}


export const registerUser = (newUser) => {
    return dispatch => {
       axios.post('https://capr11.pythonanywhere.com/api/register', newUser)
           .then(({data})=>dispatch({type:REGISTER_USER, payload: data}))
    }
}