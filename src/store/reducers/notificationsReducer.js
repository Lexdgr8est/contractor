const initState = {
}

const notificationReducer = (state = initState, action) => {
    switch(action.type) {
        case 'NOTIFICATIONS_FOUND':
            return {
                ...state,
                notifications: action.notifications
            }
        default: 
            return state
    }
}

export default notificationReducer;