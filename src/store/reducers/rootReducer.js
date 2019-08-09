import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import homeReducer from './homeReducer'

const rootReducer = combineReducers({
    login: loginReducer,
    home: homeReducer
})

export default rootReducer