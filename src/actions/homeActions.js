import api from '../adapters/api'

const token = localStorage.getItem('token')

const loadHome = (token, tasks, goals) => {
    return { 
        type: 'LOAD_HOME',
        token,
        goals,
        tasks
    }
}

const loadLogin = (token, tasks, goals) => {
    return {
        type: 'LOAD_LOGIN'
    }
}

export const home = () => {
    let tasks;
    let goals;

    return function (dispatch) {
        if (token && token !== '') {
            api.getTasks(data => {
                tasks = data['data']['relationships']['tasks']['data']
                goals = data['data']['relationships']['goals']['data']
                dispatch(loadHome(token, tasks, goals))
            });
        } else {
            dispatch(loadLogin)
        }
    }
}