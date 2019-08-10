const initState = { 
    token: localStorage.getItem('token'),
    tasks: [],
    goals: []
}

const homeReducer = (state = initState, action) => {
    const token = action.token;
    switch (action.type) {
        case 'LOAD_DASHBOARD':
            console.log(action)
            return {
                ...state,
                token
            }
        default:
            return state
    }
}

export default homeReducer