import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import userDataReducer from './userDataReducer'
import tokenReducer from './tokenReducer'

const rootReducer = combineReducers({
    login: loginReducer,
    userData: userDataReducer,
    token: tokenReducer
})

export default rootReducer