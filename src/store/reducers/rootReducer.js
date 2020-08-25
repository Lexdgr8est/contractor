import authReducer from './authReducer'
import notificationsReducer from './notificationsReducer'
import activeJobReducer from './activeJobReducer'
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    auth: authReducer,
    notifications: notificationsReducer,
    activeJobs: activeJobReducer
})

export default rootReducer;