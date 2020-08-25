
export  const getActiveJobs = () => {
    return (dispatch, getState, { axios }) => {
        axios.get("http://localhost:3001/activeJobs/")
        .then(res => {
            dispatch({type: 'ACTIVE_JOBS_FOUND', activeJobs: res.data.activeJobs})
        }).catch(err => {
            dispatch({type: 'ACTIVE_JOBS_ERROR', err: err.message})
        })
    }
}

