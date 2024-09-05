
const initialState = {
    users: [],
    user:{},
    loading: false,
    error: null,
    currentUser: null,
};




const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'REGISTER_REQUEST':
            return { ...state, loading: true, error: null };
        case 'REGISTER_SUCCESS':
            return { ...state, loading: false, user: action.payload };
        case 'REGISTER_FAILURE':
            return { ...state, loading: false, error: action.payload };
        case 'LOGIN_REQUEST':
            return { ...state, loading: true, error: null };
        case 'LOGIN_SUCCESS':
            return { ...state, loading: false, currentUser: action.payload };
        case 'LOGIN_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default userReducer;

