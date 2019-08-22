const initState = {};

const tokenReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return  {
                ...state,
                token: action.token
            }
        case 'LOGOUT_USER':
            return {
                ...state,
                token: 'false'
            }
        default:
            return state
    }
}

export default tokenReducer