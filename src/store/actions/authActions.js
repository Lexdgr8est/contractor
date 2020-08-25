export const signIn = (credentials) => {
    return (dispatch, getState, { axios }) => {
        axios.post('http://localhost:3001/users/login', credentials)
        .then(res => {
            if(res.status === 200){
                dispatch({type: "LOGIN_SUCCESS", id: res.data.user.id})
            }else {
                dispatch({type: "LOGIN_FAILED", err:res.data.message})
            }
        }).catch(err => {
            dispatch({type: "LOGIN_ERROR", err: err.message})
        });
    }
}


