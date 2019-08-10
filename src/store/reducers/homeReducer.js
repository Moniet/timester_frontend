const initState = { 
    token: localStorage.getItem('token'),
    tasks: [],
    goals: []
}

const homeReducer = (state = initState, action) => {
    const token = action.token;
    switch (action.type) {
        case 'LOAD_HOME':
            console.log(action)
            return {
                ...state,
                token
            }
        case 'LOAD_LOGIN':
            return {
                ...state,
                token: null,
                tasks: [],
                goals: []
            }
        default:
            return state
    }
}

export default homeReducer