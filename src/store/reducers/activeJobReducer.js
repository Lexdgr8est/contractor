const initState = {
}

const activeJobReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ACTIVE_JOBS_FOUND':
            return {
                ...state,
                activeJobs: action.activeJobs
            }
        default: 
            return state
    }
}

export default activeJobReducer;