import api from '../adapters/api'

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
    let token = localStorage.getItem('token')

    return function (dispatch) {
        if (token) {
            api.getTasks(token)
                .then(data => {
                    tasks = data['data']['relationships']['tasks']['data']
                    goals = data['data']['relationships']['goals']['data']
                    dispatch(loadHome(token, tasks, goals))
                })
                console.log(`token in home action is ${token}`);
                
        } else {
            dispatch(loadLogin)
        }
    }
}