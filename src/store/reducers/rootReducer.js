import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import homeReducer from './homeReducer'
import tokenReducer from './tokenReducer'

const rootReducer = combineReducers({
    login: loginReducer,
    home: homeReducer,
    token: tokenReducer
})

export default rootReducer