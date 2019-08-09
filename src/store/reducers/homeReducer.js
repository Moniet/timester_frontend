const initState = { 
    token: null,
    tasks: [],
    goals: []
}

const homeReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOAD_HOME':
            return {
                ...state,
                token: action.token,
                tasks: action.tasks,
                goals: action.goals
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