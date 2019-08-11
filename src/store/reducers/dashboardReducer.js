const initState = { 
    tasks: [],
    goals: []
}

const dashboardReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOAD_DASHBOARD':
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

export default dashboardReducer