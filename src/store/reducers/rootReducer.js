import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import dashboardReducer from './dashboardReducer'
import tokenReducer from './tokenReducer'

const rootReducer = combineReducers({
    login: loginReducer,
    dashboard: dashboardReducer,
    token: tokenReducer
})

export default rootReducer