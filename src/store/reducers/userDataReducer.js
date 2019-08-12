const initState = { 
    tasks: [],
    goals: []
}

const userDataReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOAD_USER_DATA':
            const { tasks, goals } = action
            return {
                ...state,
                tasks,
                goals
            }
        default:
            return state
    }
}

export default userDataReducer