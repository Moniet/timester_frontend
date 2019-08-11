import api from '../adapters/api'
import { setToken } from './tokenActions'

const register = user => {
    return (dispatch) => { 
        api.registerUser(user)
            .then(data => {
                dispatch(setToken(data.jwt))
                localStorage.setItem('token', data.jwt)
            })
    }
}

export default register