import api from '../adapters/api'
import { setToken } from './tokenActions'

const login = user => {
    return (dispatch) => { 
        api.login(user)
            .then(data => {
                dispatch(setToken(data.jwt))
                localStorage.setItem('token', data.jwt)
            })
    }
}

export default login