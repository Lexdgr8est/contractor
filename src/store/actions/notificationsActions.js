
export  const getNotifications = () => {
    return (dispatch, getState, { axios }) => {
        axios.get("http://localhost:3001/notifications/")
        .then(res => {
            dispatch({type: 'NOTIFICATIONS_FOUND', notifications: res.data.notifications})
        }).catch(err => {
            dispatch({type: 'NOTIFICATIONS_ERROR', err: err.message})
        })
    }
}

