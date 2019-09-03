import api from '../adapters/api'
import { setToken } from './tokenActions'

const login = user => {
    return (dispatch) => { 
        api.login(user)
            .then(data => {
                dispatch(setToken(data.jwt))
                if (data.jwt) localStorage.setItem('token', data.jwt);
                if (!data.jwt) localStorage.setItem('token', 'false');
            })
    }
}

export default login