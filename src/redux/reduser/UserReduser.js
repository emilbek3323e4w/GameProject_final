
const initialState = {
    users: [],
    loading: false,
    error: null,
    currentUser: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
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


const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_USERS_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_USERS_SUCCESS':
            return { ...state, loading: false, users: action.payload };
        case 'FETCH_USERS_ERROR':
            return { ...state, loading: false, error: action.payload };
        case 'REGISTER_USER':
            return { ...state, users: [...state.users, action.payload] };
        default:
            return state;
    }
};

export default usersReducer;

