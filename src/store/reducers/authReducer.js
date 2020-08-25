const initState = {
    loggedIn: undefined,
    authError: null,
    loggedInId: null
}

const authReducer = ( state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_USER':
            console.log('login user error',action);
            return {
                ...state,
                loggedIn: true
            }
        case 'LOGIN_SUCCESS':
            console.log('login success error',action);
            return {
                ...state,
                authError: null,
                loggedIn: true,
                loggedInId: action.id
            }
        case 'LOGIN_ERROR':
            console.log('login error error',action);
            return {
                ...state,
                authError: action.err
            }
        case 'LOGIN_FAILED':
            console.log('login failed error',action);
            return {
                ...state,
                authError: action.err
            }
        default:
            return state
    }
}

export default authReducer;