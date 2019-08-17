import api from '../adapters/api'

const loadUserData= (tasks, goals) => {
    return { 
        type: 'LOAD_USER_DATA',
        goals,
        tasks
    }
}

export const userData = token => {
    return function (dispatch) {
        api.getTasks(token)
            .then(data => {
                const { tasks, goals  } = data
                dispatch(loadUserData(tasks.data, goals.data))
            })
    }
}