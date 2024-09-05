import {GET_USERS, REGISTER_USER} from '../types'

const initialState = {
    users:[],
    user:{},
    currentUser:null
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return{
                ...state,users:action.payload
            }
            case REGISTER_USER:
                return {
                    ...state,user:action.payload,
                }

        default:
            return state;
    }
}