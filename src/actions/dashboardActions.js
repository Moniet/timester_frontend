import api from '../adapters/api'

const loadDashboard= (token, tasks, goals) => {
    return { 
        type: 'LOAD_DASHBOARD',
        token,
        goals,
        tasks
    }
}

export const dashboardAction = token => {
    let tasks;
    let goals;

    return function (dispatch) {
        api.getTasks(token)
            .then(data => {
                tasks = data['tasks']['data']['relationships']['tasks']['data']
                goals = data['tasks']['data']['relationships']['goals']['data']
                dispatch(loadDashboard(token, tasks, goals))
                
            })
            
    }
}