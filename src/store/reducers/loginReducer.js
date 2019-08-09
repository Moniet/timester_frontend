const initState = {
    token: '',
    tasks: [],
    goals: []
};

const loginReducer = (state = initState, action) => {
    // return { 
    //     ...state,
    //     token: action.token,
    //     tasks: action.tasks,
    //     goals: action.goals
    // }
    if (action.user)
        console.log(action.user)

    return initState;
}

export default loginReducer