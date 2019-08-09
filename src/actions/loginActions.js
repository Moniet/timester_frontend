import api from '../adapters/api'

const login = user => { 
    return { 
        type: 'LOGIN_USER',
        user: user
    }
};

export default login